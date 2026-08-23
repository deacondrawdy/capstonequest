const TOURS_KEY = "cqa-tours";
const ENROLL_KEY = "cqa-enroll";
const CONTACT_KEY = "cqa-contact";
const JOB_KEY = "cqa-jobs";

function read<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function write<T>(key: string, rows: T[]) {
  localStorage.setItem(key, JSON.stringify(rows));
}

export type TourRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  campus: string;
  childAge: string;
  date: string;
  time: string;
  notes: string;
  createdAt: string;
};

export type EnrollRequest = {
  id: string;
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
  createdAt: string;
};

export type ContactRequest = {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  createdAt: string;
};

export type JobApp = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  campus: string;
  message: string;
  createdAt: string;
};

export function saveTour(row: Omit<TourRequest, "id" | "createdAt">) {
  const next: TourRequest = {
    ...row,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  write(TOURS_KEY, [...read<TourRequest>(TOURS_KEY), next]);
  return next;
}

export function saveEnroll(row: Omit<EnrollRequest, "id" | "createdAt">) {
  const next: EnrollRequest = {
    ...row,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  write(ENROLL_KEY, [...read<EnrollRequest>(ENROLL_KEY), next]);
  return next;
}

export function saveContact(row: Omit<ContactRequest, "id" | "createdAt">) {
  const next: ContactRequest = {
    ...row,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  write(CONTACT_KEY, [...read<ContactRequest>(CONTACT_KEY), next]);
  return next;
}

export function saveJobApp(row: Omit<JobApp, "id" | "createdAt">) {
  const next: JobApp = {
    ...row,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  write(JOB_KEY, [...read<JobApp>(JOB_KEY), next]);
  return next;
}
