/**
 * Website lead capture.
 *
 * These used to write to `localStorage` and stop there, so every tour request,
 * enrollment application, contact message and job application was stranded in
 * the visitor's own browser and never reached the school. They now POST to a
 * server function that forwards the lead (see `@/lib/leads/deliver.server`).
 *
 * Delivery is intentionally allowed to fail loudly: the caller must surface the
 * failure and offer the phone number instead of claiming a confirmation email
 * that was never sent.
 */
import { createServerFn } from "@tanstack/react-start";
import { campuses, programs } from "@/data/school";
import type { LeadEnvelope, LeadKind } from "@/lib/leads/deliver.server";

export type TourRequest = {
  name: string;
  email: string;
  phone: string;
  campus: string;
  childAge: string;
  date: string;
  time: string;
  notes: string;
};

export type EnrollRequest = {
  childFirst: string;
  childLast: string;
  dob: string;
  campus: string;
  program: string;
  parentName: string;
  email: string;
  phone: string;
  des: string;
  start: string;
};

export type ContactRequest = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export type JobApp = {
  name: string;
  email: string;
  phone: string;
  role: string;
  campus: string;
  message: string;
};

type LeadInput =
  | { kind: "tour"; data: TourRequest }
  | { kind: "enroll"; data: EnrollRequest }
  | { kind: "contact"; data: ContactRequest }
  | { kind: "job"; data: JobApp };

const LABELS: Record<LeadKind, Record<string, string>> = {
  tour: {
    name: "Parent name",
    email: "Email",
    phone: "Phone",
    campus: "Campus",
    childAge: "Child's age",
    date: "Preferred date",
    time: "Preferred time",
    notes: "Notes",
  },
  enroll: {
    childFirst: "Child first name",
    childLast: "Child last name",
    dob: "Date of birth",
    campus: "Campus",
    program: "Program",
    parentName: "Parent name",
    email: "Email",
    phone: "Phone",
    des: "DES subsidy",
    start: "Requested start",
  },
  contact: { name: "Name", email: "Email", topic: "Topic", message: "Message" },
  job: {
    name: "Applicant",
    email: "Email",
    phone: "Phone",
    role: "Role",
    campus: "Campus",
    message: "Message",
  },
};

const SUBJECTS: Record<LeadKind, string> = {
  tour: "Tour request",
  enroll: "Enrollment application",
  contact: "Contact form message",
  job: "Job application",
};

/** Trim every value and drop anything absurdly long before it leaves the browser. */
function clean(data: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(data)) {
    out[key] = String(value ?? "")
      .trim()
      .slice(0, 2000);
  }
  return out;
}

/** Forms post slugs; whoever reads the lead wants the human name. */
function label(list: ReadonlyArray<{ slug: string; name: string }>, slug: string): string {
  return list.find((item) => item.slug === slug)?.name ?? slug;
}

function toEnvelope(input: LeadInput): LeadEnvelope {
  const data = clean(input.data as Record<string, unknown>);
  if (data.campus) data.campus = label(campuses, data.campus);
  if (data.program) data.program = label(programs, data.program);
  const labels = LABELS[input.kind];
  const who =
    data.name || data.parentName || `${data.childFirst ?? ""} ${data.childLast ?? ""}`.trim();
  const where = data.campus ? ` · ${data.campus}` : "";
  return {
    kind: input.kind,
    subject: `${SUBJECTS[input.kind]}${where}${who ? ` · ${who}` : ""}`,
    fields: Object.keys(labels).map((key) => [labels[key], data[key] ?? ""] as [string, string]),
    submittedAt: new Date().toISOString(),
  };
}

const submitLead = createServerFn({ method: "POST" })
  .validator((input: LeadInput) => {
    if (!input || !LABELS[input.kind]) throw new Error("Unknown lead type.");
    return input;
  })
  .handler(async ({ data }) => {
    const { deliverLead } = await import("@/lib/leads/deliver.server");
    await deliverLead(toEnvelope(data));
    return { ok: true as const };
  });

export function saveTour(data: TourRequest) {
  return submitLead({ data: { kind: "tour", data } });
}

export function saveEnroll(data: EnrollRequest) {
  return submitLead({ data: { kind: "enroll", data } });
}

export function saveContact(data: ContactRequest) {
  return submitLead({ data: { kind: "contact", data } });
}

export function saveJobApp(data: JobApp) {
  return submitLead({ data: { kind: "job", data } });
}
