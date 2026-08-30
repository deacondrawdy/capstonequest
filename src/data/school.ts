export const school = {
  name: "Capstone Quest Academy",
  shortName: "Capstone Quest",
  tagline: "Where curiosity grows and bright futures begin.",
  welcome:
    "Welcome to Capstone Quest Academy, where little steps make big dreams come true. Nestled in the heart of Tucson and Yuma since 2013, our nurturing Pre-K programs guide little ones on an adventure of learning and growth.",
  // The old 1-800 line is retired. Both campus numbers route to the same
  // AI assistant, so the sitewide number is Tucson's.
  phone: "(520) 462-7788",
  phoneHref: "tel:+15204627788",
  email: "hello@capstonequestacademy.org",
  hours: "Monday–Friday, 7:00 AM – 6:00 PM",
  ages: "3–5 years",
  year: "26–27",
  since: 2013,
} as const;

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
    blurb:
      "A bright, home-away-from-home campus near midtown Tucson — desert gardens, shade-sail playgrounds, and classrooms built for curious three-to-five-year-olds.",
    hours: "7:00 AM – 6:00 PM",
    capacity: "Small classes of 10 or fewer",
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
    blurb:
      "A welcoming Yuma campus with a covered drop-off, sun-safe outdoor play, and the same DES-approved Pre-K program families trust across Arizona.",
    hours: "7:00 AM – 6:00 PM",
    capacity: "Small classes of 10 or fewer",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=1220+South+4th+Avenue+Yuma+AZ+85364",
  },
] as const;

export type Campus = (typeof campuses)[number];

export const programs = [
  {
    slug: "pre-k-3s",
    name: "Pre-K 3s",
    ages: "Age 3",
    hours: "Full-day, 3 or 5 days",
    image: "/images/circle-time.jpg",
    summary:
      "A gentle first classroom year. Children learn to share, speak up, and explore through play, music, and outdoor discovery.",
    points: [
      "Play-based centers and outdoor time every day",
      "Language, early literacy, and social-emotional coaching",
      "Predictable routines that make little ones feel safe",
    ],
  },
  {
    slug: "pre-k-4s",
    name: "Pre-K 4s",
    ages: "Ages 4–5",
    hours: "Full-day kindergarten-ready",
    image: "/images/blocks.jpg",
    summary:
      "A school-ready year that still feels like play. Children leave with confidence, friendships, and the skills kindergarten teachers look for.",
    points: [
      "Pre-literacy, early math, and scientific wondering",
      "Self-help skills and classroom independence",
      "Portfolios that travel with your child into kindergarten",
    ],
  },
  {
    slug: "extended-day",
    name: "Before & After Care",
    ages: "Ages 3–5",
    hours: "7:00–8:00 AM · 3:30–6:00 PM",
    image: "/images/playground.jpg",
    summary:
      "Fee-for-service wraparound care used by working families since 2013 — early arrival and late dismissal with the same trusted teachers.",
    points: [
      "Early arrival 7:00–8:00 AM",
      "Late dismissal 3:30–6:00 PM, Monday–Friday",
      "Snack, rest, and outdoor play after the academic day",
    ],
  },
] as const;

export const parentDocuments = [
  {
    title: "Parent Rights Handbook",
    href: "https://www.azed.gov/sites/default/files/2023/08/Parental%20Rights%20Handbook_Public%20Charter%20Schools__2023_Final.pdf",
    blurb: "Arizona public charter school parent rights (ADE).",
  },
  {
    title: "Student Handbook",
    href: "https://amerischools.org/wp-content/uploads/2025/07/Amerischools-Student-Handbook-last-edited-6-16-25.pdf",
    blurb: "Campus handbook shared with AmeriSchools Academy families.",
  },
  {
    title: "Wellness Policy",
    href: "https://amerischools.org/wp-content/uploads/2025/08/AmeriSchools-Wellness-Policy-1.pdf",
    blurb: "Nutrition, movement, and wellness standards.",
  },
  {
    title: "Tucson breakfast menu",
    href: "https://amerischools.org/wp-content/uploads/2026/07/August-Breakfastmenu.pdf",
    blurb: "Current breakfast offerings at the Tucson campus.",
  },
  {
    title: "Tucson lunch menu",
    href: "https://amerischools.org/wp-content/uploads/2026/07/August-lunch-menu-copy-4.pdf",
    blurb: "Current lunch offerings at the Tucson campus.",
  },
  {
    title: "School supplies",
    href: "https://amerischools.org/wp-content/uploads/2026/07/School-Supplies.pdf",
    blurb: "What to pack for the first day.",
  },
] as const;

export const staff = [
  {
    name: "Elena Brooks",
    role: "Head of School",
    campus: "Tucson & Yuma",
    image: "/images/elena.jpg",
    bio: "Elena has led early childhood programs in Arizona for 16 years. She believes every family deserves a school that feels both rigorous and kind.",
  },
  {
    name: "Sofia Reyes",
    role: "Lead Pre-K Teacher",
    campus: "Tucson",
    image: "/images/sofia.jpg",
    bio: "Sofia designs play-based units that sneak in literacy and math. Parents know her for the handwritten notes that come home each Friday.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Maya skipped into kindergarten already knowing how to wait her turn, write her name, and ask a great question. Capstone Quest made that look easy.",
    name: "Priya Chen",
    role: "Tucson parent",
  },
  {
    quote:
      "The teachers actually know my son. Not just his allergies — his favorite dump truck, the way he warms up slowly, the songs that calm him.",
    name: "Marcus Alvarez",
    role: "Yuma parent",
  },
  {
    quote:
      "We used a DES voucher and never felt like a second-class family. The program is the same beautiful experience for every child in the room.",
    name: "Danielle Ortiz",
    role: "Tucson parent",
  },
] as const;

export const faqs = [
  {
    q: "What ages do you serve?",
    a: "Children ages 3 through 5. Most families start the year they turn three and stay through the kindergarten-ready Pre-K 4s year.",
  },
  {
    q: "Are you DES approved?",
    a: "Yes. Both campuses are 100% approved by the Arizona Department of Economic Security and state-licensed. We gladly accept DES child care subsidies.",
  },
  {
    q: "How quickly can we enroll?",
    a: "Once we have a tour and a completed packet, many families finish enrollment in as little as one day — especially when a seat is open for the current session.",
  },
  {
    q: "What does a typical day look like?",
    a: "Morning meeting, outdoor play, literacy and math workshops, lunch, rest, studios (art, blocks, science), and a closing circle. Full-day children stay for snack and afternoon centers.",
  },
  {
    q: "What is the teacher-to-child ratio?",
    a: "We keep classes small — typically 10 or fewer children with a lead teacher and an assistant — so every child is known.",
  },
  {
    q: "Can I see how my child is doing during the day?",
    a: "Yes. Call the campus any time and we will check on your child. Families also sign in through Clever and PowerSchool the way the current AmeriSchools campuses do.",
  },
  {
    q: "What are your hours?",
    a: "The instructional Pre-K program runs five days a week. Campuses are open Monday–Friday, 7:00 AM to 6:00 PM, with fee-for-service early arrival (7:00–8:00 AM) and late dismissal (3:30–6:00 PM).",
  },
] as const;

/**
 * The classroom day exactly as posted in the rooms (8:00 AM–3:15 PM dismissal).
 * Replaces an earlier idealised 7:00–5:00 timeline that did not match the
 * schedule families actually see on the wall. Before- and after-care wraps
 * around this block — see `tuition.beforeAfter`.
 */
export const dailySchedule = [
  { time: "8:00 – 8:25", title: "Greeting, morning centers, and attendance" },
  { time: "8:30 – 9:00", title: "Circle time, read out loud, and dance" },
  { time: "9:00 – 9:30", title: "Outside play time" },
  { time: "9:30 – 10:30", title: "Art, centers, and special projects" },
  { time: "10:30 – 10:45", title: "Clean up, bathroom, wash hands" },
  { time: "10:45 – 11:15", title: "Lunch" },
  { time: "11:15 – 11:30", title: "Buddy reading" },
  { time: "11:30 – 11:45", title: "Bathroom and wash hands" },
  { time: "11:45 – 2:00", title: "Nap time" },
  { time: "2:00 – 2:20", title: "Wake up and clean up" },
  { time: "2:20 – 2:30", title: "Snack" },
  { time: "2:30 – 2:40", title: "Dance and exercise" },
  { time: "2:40 – 3:15", title: "Outside playtime and dismissal" },
] as const;

/**
 * Rates and terms transcribed from the signed fee schedules dated 8/1/24.
 * `effective` is rendered on the page: these are the rates on the current
 * forms, and families should confirm them before signing.
 */
export const tuition = {
  effective: "August 1, 2024",
  preschoolHours: "8:00 AM – 3:30 PM",
  programs: [
    {
      name: "Program #1",
      schedule: "5 days a week",
      hours: "8:00 AM – 3:30 PM",
      price: "$130.00",
      unit: "per week",
    },
    {
      name: "Program #2",
      schedule: "3 days a week",
      hours: "8:00 AM – 3:30 PM",
      price: "$120.00",
      unit: "per week",
    },
    {
      name: "Pre-K + before & after care",
      schedule: "5 days a week",
      hours: "7:00 AM – 6:00 PM",
      price: "$160.00",
      unit: "per week",
      highlight: "Saves 20% against booking the two separately",
    },
  ],
  beforeAfterHours: "7:00–8:00 AM & 3:30–6:00 PM",
  beforeAfter: [
    {
      schedule: "5 days a week",
      options: [
        { care: "Before and after care", price: "$70.00" },
        { care: "Before care only", price: "$25.00" },
        { care: "After care only", price: "$60.00" },
      ],
    },
    {
      schedule: "3 days a week",
      options: [
        { care: "Before and after care", price: "$55.00" },
        { care: "Before care only", price: "$15.00" },
        { care: "After care only", price: "$50.00" },
      ],
    },
  ],
  included: [
    "A nutritious afternoon snack is part of the fee schedule.",
    "Parents provide their child with a lunch each day of attendance.",
    "Afternoon care includes homework time and structured activities like recreation and games, with a snack provided.",
  ],
  discounts: [
    "10% discount for one additional sibling, on both Pre-K and before & after care.",
    "DES recipients select a program the same way; copays apply.",
  ],
  terms: [
    "Fees are based on your contract schedule, not on attendance.",
    "School calendar breaks (if we are not open) and major public holidays are not billed.",
    "Fees are billed every Monday and due that evening, for the week ahead. A $10.00 late charge applies Wednesday morning.",
    "Late pick-up is $1.00 per minute, billed the next cycle.",
    "Emergency drop-off for before & after care is $15.00, due at pick-up, and must be cleared by the front office so we know we have space.",
    "Extra days beyond your contract are billed as drop-ins. Filing a new contract avoids the drop-in rate.",
    "A signed contract and current registration documents must be on file before your child attends.",
  ],
} as const;

/**
 * Licensing policies as posted at the campuses. Wording follows the posted
 * notices; these are regulatory disclosures, so they are quoted rather than
 * rewritten in marketing voice.
 */
export const policies = [
  {
    title: "Child Enrollment Procedures",
    body: "Children are enrolled upon completion of all required enrollment documentation, including but not limited to:",
    list: [
      "Enrollment application",
      "Emergency contact information",
      "Immunization records",
      "Health records as required by licensing rules",
    ],
    footer:
      "Enrollment is based on availability and the child’s age appropriateness for the Pre-Kindergarten program.",
  },
  {
    title: "Child Admission and Release Procedures",
    body: "Children are released only to parents or individuals authorized in writing by the parent or guardian. Identification is required when releasing a child to an individual unfamiliar to staff. Children may not leave the facility without authorized supervision.",
  },
  {
    title: "Discipline Guidelines",
    body: "The facility uses positive, age-appropriate guidance techniques that are consistent and developmentally appropriate for Pre-Kindergarten-age children. Discipline focuses on redirection, modeling appropriate behavior, and setting clear expectations. Corporal punishment, humiliation, or abusive language is never used.",
  },
  {
    title: "Child Disenrollment Procedures",
    body: "Children may be disenrolled by the parent or guardian with written notice provided to the facility. The facility reserves the right to disenroll a child for reasons including, but not limited to, non-payment of fees, failure to follow facility policies, or safety concerns, in accordance with licensing rules and facility policies.",
  },
  {
    title: "Suspension and Expulsion Policy",
    body: "The facility has written policies regarding suspension and expulsion that include prevention strategies, clear expectations, and age-appropriate guidance methods. These policies are available to parents upon request.",
  },
  {
    title: "Parent Access",
    body: "Parents have access to areas of the facility where their enrolled child is receiving child care during normal operating hours.",
  },
  {
    title: "Pesticide Application Notification",
    body: "Parents are notified at least 48 hours in advance of pesticide application on the facility premises, in accordance with state requirements.",
  },
  {
    title: "Inspection Reports",
    body: "Parents are informed that licensing inspection reports are available for review on the facility premises.",
  },
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
