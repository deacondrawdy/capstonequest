export const school = {
  name: "Capstone Quest Academy",
  shortName: "Capstone Quest",
  tagline: "Where curiosity grows and bright futures begin.",
  welcome:
    "Welcome to Capstone Quest Academy, where little steps make big dreams come true. Nestled in the heart of Tucson and Yuma since 2013, our nurturing Pre-K programs guide little ones on an adventure of learning and growth.",
  phone: "1-800-379-9083",
  phoneHref: "tel:+18003799083",
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
    phone: "(520) 620-1100",
    phoneHref: "tel:+15206201100",
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
    phone: "(928) 919-7203",
    phoneHref: "tel:+19289197203",
    image: "/images/yuma.jpg",
    blurb:
      "A welcoming Yuma campus with a covered drop-off, sun-safe outdoor play, and the same DES-approved Pre-K program families trust across Arizona.",
    hours: "7:00 AM – 6:00 PM",
    capacity: "Small classes of 10 or fewer",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=1220+South+4th+Avenue+Yuma+AZ+85364",
  },
] as const;

export type Campus = (typeof campuses)[number];

export const programs = [
  {
    slug: "pre-k-3s",
    name: "Pre-K 3s",
    ages: "Age 3",
    hours: "Half-day or full-day",
    image: "/images/art.jpg",
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
    a: "Yes. Use “See how my child is doing” in the top bar for the parent portal. Families also sign in through Clever and PowerSchool the way the current AmeriSchools campuses do.",
  },
  {
    q: "What are your hours?",
    a: "The instructional Pre-K program runs five days a week. Campuses are open Monday–Friday, 7:00 AM to 6:00 PM, with fee-for-service early arrival (7:00–8:00 AM) and late dismissal (3:30–6:00 PM).",
  },
] as const;

export const dayInTheLife = [
  { time: "7:00", title: "Warm welcome", detail: "Teachers greet each child by name. Breakfast and quiet table work for early birds." },
  { time: "8:30", title: "Morning meeting", detail: "Songs, the day’s story, and a chance for every voice to be heard." },
  { time: "9:15", title: "Studios & workshops", detail: "Literacy, early math, art, and block-building in small groups." },
  { time: "11:00", title: "Outdoor adventure", detail: "Shade-sail playgrounds, tricycles, gardens, and big-body play." },
  { time: "12:00", title: "Lunch & rest", detail: "Family-style lunch, then a rest that actually restores little nervous systems." },
  { time: "2:30", title: "Choice time", detail: "Science trays, dramatic play, and teacher-guided investigations." },
  { time: "5:00", title: "Closing circle", detail: "Stories home, a hug, and a teacher who can tell you how the day really went." },
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
