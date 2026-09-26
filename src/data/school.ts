export const school = {
  name: "Capstone Quest Academy",
  shortName: "Capstone Quest",
  tagline: "Where curiosity grows and bright futures begin.",
  welcome:
    "Welcome to Capstone Quest Academy, where little steps make big dreams come true. Nestled in the heart of Tucson and Yuma since 2013, our nurturing Pre-K programs guide little ones on an adventure of learning and growth.",
  // The old 1-800 line is retired. Tucson's 520 number reaches the Retell
  // voice agent; Yuma's 928 number does not yet, so Tucson stays the sitewide
  // default. The header lets a family pick their campus (see lib/campus.ts).
  // Revisit this once the 928 is connected.
  phone: "(520) 462-7788",
  phoneHref: "tel:+15204627788",
  // The address the site shows parents and the one website forms deliver to
  // are the same on purpose: two addresses meant a parent wrote to one inbox
  // while their form landed in another.
  email: "admin@capstonequestacademy.com",
  hours: "Monday–Friday, 7:00 AM – 6:00 PM",
  ages: "3–5 years",
  year: "26–27",
  since: 2013,
} as const;

/**
 * The school's social profiles, one account for both campuses.
 *
 * Linked from the footer and the Contact page only, never the header: a social
 * link in the header sits beside Enroll and the phone number and sends a parent
 * to an app built to keep them. In the footer it does the job it is good at —
 * showing a family the classrooms and other parents — without competing with
 * the conversion path.
 */
export const social = [
  { id: "facebook", name: "Facebook", href: "https://www.facebook.com/capstonequestacademy" },
  { id: "instagram", name: "Instagram", href: "https://www.instagram.com/capstonequestacademy" },
] as const;

export const campuses = [
  {
    slug: "tucson",
    city: "Tucson",
    name: "Tucson Campus",
    address: "1150 North Country Club Road",
    cityState: "Tucson, AZ 85716",
    phone: "(520) 462-7788",
    phoneHref: "tel:+15204627788",
    image: "/images/tucson.jpg",
    // Cal.com event type for campus tours. The voice agent books against the
    // same event type, so the phone and the website cannot double-book a slot.
    calLink: "capstonequestacademy/tucson-tour-for-students-and-parents",
    // Wide (4:1) building shot used as the page banner. Only Tucson has one;
    // the campus page falls back to the overlaid `image` hero without it.
    banner: "/images/tucson-banner.jpg",
    bannerAlt:
      "The Tucson campus building, with a banner reading “Now Enrolling Pre-Kindergarten — Fully Licensed, DES Approved, Full Day, Low Rates” beside the AmeriSchool Academy sign.",
    blurb:
      "A bright, home-away-from-home campus near midtown Tucson — desert gardens, shade-sail playgrounds, and classrooms built for curious three-to-five-year-olds.",
    hours: "7:00 AM – 6:00 PM",
    // Sits in the campus facts list beside address, phone, and hours. Those are
    // all independently verifiable, so a headcount here read as a daily
    // commitment rather than a description of the room. `feel`, not `capacity`.
    feel: "A home away from home, all day",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=1150+North+Country+Club+Road+Tucson+AZ+85716",
  },
  {
    slug: "yuma",
    city: "Yuma",
    name: "Yuma Campus",
    address: "1220 South 4th Avenue",
    cityState: "Yuma, AZ 85364",
    phone: "(928) 977-9318",
    phoneHref: "tel:+19289779318",
    image: "/images/yuma.jpg",
    calLink: "capstonequestacademy/yuma-tour-for-students-and-parents",
    blurb:
      "A welcoming Yuma campus with a covered drop-off, sun-safe outdoor play, and the same DES-approved Pre-K program families trust across Arizona.",
    hours: "7:00 AM – 6:00 PM",
    feel: "A home away from home, all day",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=1220+South+4th+Avenue+Yuma+AZ+85364",
  },
] as const;

export type Campus = (typeof campuses)[number];

export const programs = [
  // One Pre-K classroom, not a 3s room and a 4s room. The school groups three-,
  // four- and five-year-olds together, so the site lists a single programme.
  {
    slug: "pre-k",
    name: "Pre-K",
    ages: "Ages 3–5",
    hours: "Full-day, 3 or 5 days",
    image: "/images/binoculars.jpg",
    summary:
      "One mixed-age classroom where threes, fours and fives learn together — sharing, speaking up, and exploring through play, and leaving ready for kindergarten.",
    points: [
      "Play-based centers and outdoor time every day",
      "Pre-literacy, early math, and scientific wondering",
      "Language and social-emotional coaching, with routines that make little ones feel safe",
      "Portfolios that travel with your child into kindergarten",
    ],
  },
  {
    slug: "extended-day",
    name: "Before & After Care",
    ages: "Ages 3–5",
    hours: "7:00–8:00 AM · 3:30–6:00 PM",
    image: "/images/bubbles.jpg",
    summary:
      "Fee-for-service wraparound care used by working families since 2013 — early arrival and late dismissal with the same trusted teachers.",
    points: [
      "Early arrival 7:00–8:00 AM",
      "Late dismissal 3:30–6:00 PM, Monday–Friday",
      "Snack, rest, and outdoor play after the academic day",
    ],
  },
] as const;

/**
 * The enrollment packets families print, complete and return to the registrar.
 * Enrollment is on paper; the site no longer has an online enrollment form.
 *
 * One per site: the forms carry the site's own name, so a Yuma family
 * returning the Tucson packet has filled in the wrong header. Both are scans
 * from the office copier — image-only, untagged, not fillable. A screen reader
 * cannot read them, so /enroll offers help by phone or in person and the
 * accessibility statement lists that as a known limitation. Replace either with
 * a tagged or fillable PDF when the school has one, and update `pages` and
 * `size` to match the file.
 */
export const enrollmentPackets = [
  {
    campus: "tucson",
    href: "/documents/capstone-quest-prek-enrollment-packet.pdf",
    fileName: "capstone-quest-prek-enrollment-packet-tucson.pdf",
    pages: 13,
    size: "3.6 MB",
  },
  {
    campus: "yuma",
    href: "/documents/capstone-quest-prek-enrollment-packet-yuma.pdf",
    fileName: "capstone-quest-prek-enrollment-packet-yuma.pdf",
    pages: 13,
    size: "766 KB",
  },
] as const;

/** The rate sheet families sign, served from public/documents. */
export const feeSchedule = {
  href: "/documents/capstone-quest-prek-fee-schedule.pdf",
} as const;

/**
 * The Barr Family Early Learners Scholarship application.
 *
 * Linked from /tuition beside the rates, which is where a family works out
 * whether they can afford the program at all.
 */
export const scholarship = {
  href: "/documents/barr-family-early-learners-scholarship-application.pdf",
  fileName: "barr-family-early-learners-scholarship-application.pdf",
} as const;

export const parentDocuments = [
  {
    // Served from public/documents rather than an outside host, so it cannot
    // rot when AmeriSchools reorganises their uploads directory.
    id: "handbook",
    href: "/documents/capstone-quest-parent-handbook.pdf",
  },
  {
    id: "fees",
    href: feeSchedule.href,
  },
  {
    id: "parent-rights",
    href: "https://www.azed.gov/sites/default/files/2023/08/Parental%20Rights%20Handbook_Public%20Charter%20Schools__2023_Final.pdf",
  },
  {
    id: "student-handbook",
    href: "https://amerischools.org/wp-content/uploads/2025/07/Amerischools-Student-Handbook-last-edited-6-16-25.pdf",
  },
  {
    id: "wellness",
    href: "https://amerischools.org/wp-content/uploads/2025/08/AmeriSchools-Wellness-Policy-1.pdf",
  },
  // The page shows these in pairs after the handbook; keep the menus adjacent.
  {
    id: "breakfast",
    href: "https://amerischools.org/wp-content/uploads/2026/07/August-Breakfastmenu.pdf",
  },
  {
    id: "lunch",
    href: "https://amerischools.org/wp-content/uploads/2026/07/August-lunch-menu-copy-4.pdf",
  },
  {
    id: "supplies",
    href: "https://amerischools.org/wp-content/uploads/2026/07/School-Supplies.pdf",
  },
] as const;

// Real staff, photographed at their campuses. The two placeholder profiles that
// shipped with the original export were not people who work here; they and their
// stock portraits are gone. `campuses` drives which campus page lists whom.
export const staff = [
  {
    id: "zoe",
    name: "Zoe Cordova",
    image: "/images/zoe.jpg",
    campuses: ["tucson"],
  },
  {
    id: "juridia",
    name: "Juridia Hernandez",
    image: "/images/juridia.jpg",
    campuses: ["tucson"],
  },
  {
    id: "sidney",
    name: "Sidney Quinn",
    image: "/images/sidney.jpg",
    campuses: ["yuma"],
  },
  {
    id: "tianna",
    name: "Tianna Garcia",
    image: "/images/tianna.jpg",
    campuses: ["yuma"],
  },
] as const;

/** Staff shown on a campus page. Empty for a campus with nobody listed yet. */
export function staffForCampus(slug: string) {
  return staff.filter((member) => (member.campuses as readonly string[]).includes(slug));
}

export const testimonials = [
  { id: "priya", name: "Priya Chen" },
  { id: "marcus", name: "Marcus Alvarez" },
  { id: "danielle", name: "Danielle Ortiz" },
] as const;

/**
 * The /faq page's questions, in publication order. The copy lives in the
 * content files; this is the order and the join key, like `faqs` below.
 */
export const faqPageItems = [
  "cost", "ages", "hours", "where", "toilet", "des", "desStart", "noDes",
  "fees", "meals", "ratio", "licensed", "spanish", "tour", "summer",
  "discounts", "amerischools",
] as const;

export const faqs = [
  { id: "ages" },
  { id: "des" },
  { id: "enroll" },
  { id: "day" },
  { id: "ratio" },
  { id: "checkin" },
  { id: "hours" },
] as const;

/**
 * The classroom day exactly as posted in the rooms (8:00 AM–3:15 PM dismissal).
 * Replaces an earlier idealised 7:00–5:00 timeline that did not match the
 * schedule families actually see on the wall. Before- and after-care wraps
 * around this block — see `tuition.beforeAfter`.
 */
export const dailySchedule = [
  { id: "s1", time: "8:00 – 8:25" },
  { id: "s2", time: "8:30 – 9:00" },
  { id: "s3", time: "9:00 – 9:30" },
  { id: "s4", time: "9:30 – 10:30" },
  { id: "s5", time: "10:30 – 10:45" },
  { id: "s6", time: "10:45 – 11:15" },
  { id: "s7", time: "11:15 – 11:30" },
  { id: "s8", time: "11:30 – 11:45" },
  { id: "s9", time: "11:45 – 2:00" },
  { id: "s10", time: "2:00 – 2:20" },
  { id: "s11", time: "2:20 – 2:30" },
  { id: "s12", time: "2:30 – 2:40" },
  { id: "s13", time: "2:40 – 3:15" },
] as const;

/**
 * Rates and terms transcribed from the signed fee schedules dated 8/1/24.
 * `effective` is rendered on the page: these are the rates on the current
 * forms, and families should confirm them before signing.
 */
export const tuition = {
  // Prices and the effective date are locale-neutral and live here; every
  // label, term and description is in the content layer so it can be translated.
  effective: "2024-08-01",
  programs: [
    { id: "p1", price: "$130.00" },
    { id: "p2", price: "$120.00" },
    { id: "bundle", price: "$160.00" },
  ],
  beforeAfter: [
    {
      id: "d5",
      options: [
        { id: "both", price: "$70.00" },
        { id: "before", price: "$25.00" },
        { id: "after", price: "$60.00" },
      ],
    },
    {
      id: "d3",
      options: [
        { id: "both", price: "$55.00" },
        { id: "before", price: "$15.00" },
        { id: "after", price: "$50.00" },
      ],
    },
  ],
} as const;

/**
 * Licensing policies as posted at the campuses. Wording follows the posted
 * notices; these are regulatory disclosures, so they are quoted rather than
 * rewritten in marketing voice.
 */
export const policies = [
  // Text lives in the content layer: these are licensing disclosures and the
  // Spanish wording needs to sit beside the English for staff review.
  { id: "enrollment" },
  { id: "release" },
  { id: "discipline" },
  { id: "disenrollment" },
  { id: "suspension" },
  { id: "access" },
  { id: "pesticide" },
  { id: "inspection" },
] as const;

export const academyColors = [
  { letter: "A", className: "text-rainbow-a" },
  { letter: "C", className: "text-rainbow-c" },
  { letter: "A", className: "text-rainbow-a2" },
  { letter: "D", className: "text-rainbow-d" },
  { letter: "E", className: "text-rainbow-e" },
  { letter: "M", className: "text-rainbow-m" },
  { letter: "Y", className: "text-rainbow-y" },
] as const;
