/**
 * English copy. This is the source of truth for the site's wording.
 *
 * `es.ts` is type-locked to this object's shape, so adding a key here without
 * translating it is a compile error rather than an English string leaking onto
 * a Spanish page. Keep keys grouped by the page or component that renders them.
 *
 * Only prose lives here. Addresses, phone numbers, prices, image paths and
 * other locale-neutral facts stay in `src/data/school.ts`.
 */
export const en = {
  meta: {
    title: "Capstone Quest Academy",
    description:
      "Capstone Quest Academy — DES-approved Pre-K in Tucson and Yuma. Play-based learning for ages 3–5. Now enrolling the 26–27 school year.",
  },

  common: {
    scheduleTour: "Schedule a tour",
    startEnrollment: "Start enrollment",
    seeRates: "See rates",
    enroll: "Enroll",
    talkWithUs: "Talk with us",
    ourStory: "Our story",
    backHome: "Back home",
    hoursLine: "Monday–Friday, 7:00 AM – 6:00 PM",
    hoursShort: "7:00 AM – 6:00 PM",
  },

  banner: {
    text: "Only a few spots left in Tucson & Yuma",
  },

  localeSwitch: {
    /** Always shown in the language it switches *to*. */
    toEs: "Español",
    toEn: "English",
    label: "Change language",
    offer: "¿Prefiere ver este sitio en español?",
    offerAccept: "Ver en español",
    offerDismiss: "No, thanks",
  },

  nav: {
    home: "Home",
    campuses: "Campuses",
    allCampuses: "All campuses",
    info: "Info",
    infoHome: "Info home",
    about: "About us",
    programs: "Programs",
    parents: "Parent resources",
    whyUs: "Why us",
    policies: "Policies",
    tuition: "Tuition",
    tuitionFees: "Tuition & fees",
    careers: "Careers",
    contact: "Contact",
    menu: "Menu",
    openMenu: "Open menu",
  },

  footer: {
    blurb: "DES-approved Pre-K in Tucson and Yuma since 2013.",
    visit: "Visit",
    explore: "Explore",
    talk: "Talk with us",
    rights: "All rights reserved.",
    badges: "Arizona DES approved · State licensed · Ages 3–5",
    links: {
      programs: "Programs",
      whyUs: "Why Us",
      parents: "Parents",
      about: "About",
      clever: "Clever & portals",
      tuition: "Tuition & fees",
      policies: "Policies",
      careers: "Careers",
      info: "Info",
      tour: "Schedule a tour",
    },
  },

  notFound: {
    title: "Page not found",
    text: "That page isn’t on the Capstone Quest map.",
  },

  /** Keyed by the campus slug in src/data/school.ts. */
  campuses: {
    tucson: {
      name: "Tucson Campus",
      blurb:
        "A bright, home-away-from-home campus near midtown Tucson — desert gardens, shade-sail playgrounds, and classrooms built for curious three-to-five-year-olds.",
      feel: "A home away from home, all day",
      bannerAlt:
        "The Tucson campus building, with a banner reading “Now Enrolling Pre-Kindergarten — Fully Licensed, DES Approved, Full Day, Low Rates” beside the AmeriSchool Academy sign.",
      imageAlt: "Tucson campus exterior",
    },
    yuma: {
      name: "Yuma Campus",
      blurb:
        "A welcoming Yuma campus with a covered drop-off, sun-safe outdoor play, and the same DES-approved Pre-K program families trust across Arizona.",
      feel: "A home away from home, all day",
      bannerAlt: "",
      imageAlt: "Yuma campus exterior",
    },
  },

  campusPage: {
    eyebrow: "Campus",
    tourTitle: "What you’ll see on a tour",
    tourList: [
      "Cozy classrooms where every child is greeted by name",
      "Shade-sail playground and outdoor studios",
      "Secure entry and signed-in pickup",
      "The same DES-approved curriculum on both campuses",
    ],
    openInMaps: "Open in Maps",
    preferOther: "Prefer the other campus?",
    compare: "Compare locations",
  },

  /** Keyed by the programme slug in src/data/school.ts. */
  programs: {
    "pre-k-3s": {
      name: "Pre-K 3s",
      ages: "Age 3",
      hours: "Full-day, 3 or 5 days",
      summary:
        "A gentle first classroom year. Children learn to share, speak up, and explore through play, music, and outdoor discovery.",
      points: [
        "Play-based centers and outdoor time every day",
        "Language, early literacy, and social-emotional coaching",
        "Predictable routines that make little ones feel safe",
      ],
    },
    "pre-k-4s": {
      name: "Pre-K 4s",
      ages: "Ages 4–5",
      hours: "Full-day kindergarten-ready",
      summary:
        "A school-ready year that still feels like play. Children leave with confidence, friendships, and the skills kindergarten teachers look for.",
      points: [
        "Pre-literacy, early math, and scientific wondering",
        "Self-help skills and classroom independence",
        "Portfolios that travel with your child into kindergarten",
      ],
    },
    "extended-day": {
      name: "Before & After Care",
      ages: "Ages 3–5",
      hours: "7:00–8:00 AM · 3:30–6:00 PM",
      summary:
        "Fee-for-service wraparound care used by working families since 2013 — early arrival and late dismissal with the same trusted teachers.",
      points: [
        "Early arrival 7:00–8:00 AM",
        "Late dismissal 3:30–6:00 PM, Monday–Friday",
        "Snack, rest, and outdoor play after the academic day",
      ],
    },
  },

  /** Keyed by the document `id` in src/data/school.ts. */
  documents: {
    "parent-rights": {
      title: "Parent Rights Handbook",
      blurb: "Arizona public charter school parent rights (ADE).",
    },
    "student-handbook": {
      title: "Student Handbook",
      blurb: "Campus handbook shared with AmeriSchools Academy families.",
    },
    wellness: {
      title: "Wellness Policy",
      blurb: "Nutrition, movement, and wellness standards.",
    },
    breakfast: {
      title: "Tucson breakfast menu",
      blurb: "Current breakfast offerings at the Tucson campus.",
    },
    lunch: {
      title: "Tucson lunch menu",
      blurb: "Current lunch offerings at the Tucson campus.",
    },
    supplies: {
      title: "School supplies",
      blurb: "What to pack for the first day.",
    },
  },
  hero: {
    eyebrow: "Pre-K Programs at",
    tagline: "Where curiosity grows and bright futures begin.",
    lede: "A nurturing, play-based learning environment that helps your child build confidence, friendships, and foundational skills for lifelong success.",
    imageAlt: "A preschooler coloring at a classroom table",
    watchVideo: "Watch Our Video",
    videoTitle: "A morning at Capstone Quest",
    whyTitle: "Why Families Choose Us",
    reasons: {
      smallClasses: { title: "Small Class Sizes", text: "Individualized attention for every child." },
      safe: { title: "Safe & Secure", text: "Top-notch safety with trusted care." },
      schoolReady: { title: "School Ready", text: "Engaging Pre-K curriculum that builds skills & confidence." },
      family: { title: "Family Partnership", text: "We work together with you every step of the way." },
    },
    qualityFirst: {
      title: "Quality First Program",
      text: "A participating Arizona Quality First program.",
    },
    badges: {
      ages: "Ages 3–5 Years",
      teachers: "Caring & Experienced Teachers",
      play: "Play-Based Learning",
      locations: "Tucson & Yuma convenient locations",
      des: "100% Approved by DES",
    },
  },
  parents: {
    eyebrow: "Parents",
    title: "You’re on the team",
    lede: "Handbooks, menus, and the same family resources that live under Info on the current site.",
    resources: {
      tours: { title: "Tours & calendar", text: "Walk the campus, meet teachers, and peek at a real morning meeting.", cta: "Schedule a tour" },
      packet: { title: "Enrollment packet", text: "Health forms, emergency contacts, and DES paperwork in one sitting.", cta: "Start enrollment" },
      policies: { title: "Policies", text: "Enrollment, release, discipline, and parent access — as posted at both campuses.", cta: "Read the policies" },
      partnership: { title: "Family partnership", text: "Conferences twice a year, open-door mornings, and teachers who call back.", cta: "Talk with us" },
    },
    docsTitle: "Handbooks, menus & forms",
    docsLede: "The same documents families download from AmeriSchools Info — parent rights, wellness, menus, and supplies.",
    tuitionTitle: "Tuition & DES",
    tuitionText: "Full-day Pre-K runs $130.00 a week for five days and $120.00 for three, with before- and after-care from $15.00. There is a 10% discount for one additional sibling. We are 100% approved by the Arizona Department of Economic Security, and families using a DES child care subsidy enroll the same way — copays apply, and we will walk the paperwork with you.",
    tuitionCta: "See the full fee schedule",
    tuitionAsk: "Ask about tuition",
    faqTitle: "Parent FAQs",
  },
  programsPage: {
    eyebrow: "Programs",
    title: "Pre-K built for ages 3–5",
    lede: "Play first. Skills close behind. Every program is DES-approved and taught by teachers who stay with your child through the year.",
  },

  campusesPage: {
    eyebrow: "Campuses",
    title: "Tucson & Yuma",
    lede: "Two warm, licensed campuses. One play-based Pre-K. Tour the one closest to home — or both.",
    details: "Campus details",
    exteriorAlt: "exterior",
    bookTour: "Book a tour",
  },
  infoPage: {
    eyebrow: "Info",
    title: "The school, in one place",
    lede: "Everything that used to live under Info on the current site — about us, programs, parent resources, and portals — rewritten for Pre-K families.",
    cards: {
      about: { title: "About Capstone Quest", text: "DES-approved Pre-K in Tucson and Yuma since 2013. Little steps, big dreams.", cta: "Our story" },
      programs: { title: "Programs", text: "Pre-K 3s, Pre-K 4s, and before & after care, 7 AM–6 PM, five days a week.", cta: "See programs" },
      parents: { title: "Parent resources", text: "Handbooks, menus, parent rights, wellness policy, and supplies.", cta: "For parents" },
      clever: { title: "Clever & portals", text: "Clever, PowerSchool, ClassDojo, and RAZ Kids — the sign-ins families already use.", cta: "Open portals" },
      tour: { title: "Schedule a tour", text: "Walk a real morning meeting. Most tours last about 40 minutes.", cta: "Book a tour" },
      tuition: { title: "Tuition & fees", text: "Weekly Pre-K rates, before & after care, sibling discounts, and billing terms.", cta: "See tuition" },
      policies: { title: "Policies", text: "Enrollment, admission and release, discipline, parent access, and inspection reports.", cta: "Read the policies" },
      whyUs: { title: "Why families stay", text: "Small classes, school-ready play, and a day that still feels like childhood.", cta: "Why us" },
    },
  },
  cleverPage: {
    eyebrow: "Clever",
    title: "Portals families already know",
    lede: "The live AmeriSchools site sends “See how my child is doing” to PowerSchool and puts Clever in the top bar. Those links still work.",
    portals: {
      clever: "The single sign-on the current AmeriSchools site uses for students and staff.",
      powerschool: "Attendance, grades for K–8 siblings, and the historic “See how my child is doing” link.",
      classdojo: "Classroom stories and messages from the lead teacher.",
      raz: "Leveled readers for Pre-K 4s who are ready for books at home.",
      khan: "Optional practice — never homework for three-year-olds.",
    },
  },
  aboutPage: {
    eyebrow: "About",
    title: "A quest for curious kids",
    lede: "Welcome to Capstone Quest Academy, where little steps make big dreams come true. Since 2013 our Tucson and Yuma campuses have been a home away from home — a DES-certified Pre-K that prepares children aged three to five for kindergarten without rushing childhood.",
    hours: "The instructional day runs five days a week. Early arrival (7:00–8:00 AM) and late dismissal (3:30–6:00 PM) are offered as fee-for-service care so working families can use the full 7 AM–6 PM window.",
    imageAlt: "Circle time in a Capstone Quest classroom",
    believeTitle: "What we believe",
    believe1: "Children learn by doing, talking, and belonging. Our teachers design studios — art, blocks, stories, outdoor science — where literacy and math show up as tools, not drills. Families are partners, not visitors.",
    believe2: "Owl (our mortarboarded mascot) stands for wisdom earned gently: try, notice, try again.",
    peopleTitle: "People who know your child",
    meetUs: "Meet us on a tour",
    staff: {
      elena: { role: "Head of School", campus: "Tucson & Yuma", bio: "Elena has led early childhood programs in Arizona for 16 years. She believes every family deserves a school that feels both rigorous and kind." },
      sofia: { role: "Lead Pre-K Teacher", campus: "Tucson", bio: "Sofia designs play-based units that sneak in literacy and math. Parents know her for the handwritten notes that come home each Friday." },
    },
  },
  schedule: {
    s1: "Greeting, morning centers, and attendance",
    s2: "Circle time, read out loud, and dance",
    s3: "Outside play time",
    s4: "Art, centers, and special projects",
    s5: "Clean up, bathroom, wash hands",
    s6: "Lunch",
    s7: "Buddy reading",
    s8: "Bathroom and wash hands",
    s9: "Nap time",
    s10: "Wake up and clean up",
    s11: "Snack",
    s12: "Dance and exercise",
    s13: "Outside playtime and dismissal",
  },

  faqs: {
    ages: { q: "What ages do you serve?", a: "Children ages 3 through 5. Most families start the year they turn three and stay through the kindergarten-ready Pre-K 4s year." },
    des: { q: "Are you DES approved?", a: "Yes. Both campuses are 100% approved by the Arizona Department of Economic Security and state-licensed. We gladly accept DES child care subsidies." },
    enroll: { q: "How quickly can we enroll?", a: "Once we have a tour and a completed packet, many families finish enrollment in as little as one day — especially when a seat is open for the current session." },
    day: { q: "What does a typical day look like?", a: "Morning meeting, outdoor play, literacy and math workshops, lunch, rest, studios (art, blocks, science), and a closing circle. Full-day children stay for snack and afternoon centers." },
    ratio: { q: "What is the teacher-to-child ratio?", a: "Every Pre-K room has a lead teacher and an assistant, and we staff to Arizona licensing requirements so groups stay small enough that each child is known by name. Class sizes shift a little by campus and age group — ask for current numbers on your tour." },
    checkin: { q: "Can I see how my child is doing during the day?", a: "Yes. Call the campus any time and we will check on your child. Families also sign in through Clever and PowerSchool the way the current AmeriSchools campuses do." },
    hours: { q: "What are your hours?", a: "The instructional Pre-K program runs five days a week. Campuses are open Monday–Friday, 7:00 AM to 6:00 PM, with fee-for-service early arrival (7:00–8:00 AM) and late dismissal (3:30–6:00 PM)." },
  },

  testimonials: {
    priya: { quote: "Maya skipped into kindergarten already knowing how to wait her turn, write her name, and ask a great question. Capstone Quest made that look easy.", role: "Tucson parent" },
    marcus: { quote: "The teachers actually know my son. Not just his allergies — his favorite dump truck, the way he warms up slowly, the songs that calm him.", role: "Yuma parent" },
    danielle: { quote: "We used a DES voucher and never felt like a second-class family. The program is the same beautiful experience for every child in the room.", role: "Tucson parent" },
  },

  whyUsPage: {
    eyebrow: "Why us",
    title: "The Pre-K Arizona families stay with",
    lede: "Since 2013 we have been the DES-certified home away from home in Tucson and Yuma — affordable on purpose, excellent on purpose.",
    pillars: {
      small: { title: "Small by design", text: "Rooms small enough that your child is known — not managed. Teachers write real notes, not templates." },
      safety: { title: "Safety you can feel", text: "Secure entries, signed pickup, trained staff, and a culture of calm. We are 100% DES-approved and state-licensed." },
      ready: { title: "School-ready, still playful", text: "Literacy, math, and self-help skills live inside studios and stories — never worksheets for three-year-olds." },
      family: { title: "Family partnership", text: "Tours, conferences, and teachers who call back — so you never have to wonder how the day actually went." },
    },
    playgroundAlt: "Shaded preschool playground",
    desTitle: "Approved by DES. Built for families.",
    desText: "Both campuses are fully approved by the Arizona Department of Economic Security. We accept child care subsidies, and every family — voucher or private pay — gets the same classroom, the same teachers, the same day.",
    dayTitle: "A day in Pre-K",
    wordsTitle: "Families in their own words",
    faqTitle: "Questions we hear on every tour",
  },
  homePage: {
    eyebrow: "Pre-K in Tucson & Yuma",
    title: "Little steps make big dreams come true",
    welcome: "Welcome to Capstone Quest Academy, where little steps make big dreams come true. Nestled in the heart of Tucson and Yuma since 2013, our nurturing Pre-K programs guide little ones on an adventure of learning and growth.",
    body: "Campuses are a home away from home — play, discovery, and a kindergarten-ready year without rushing childhood. Instruction runs five days a week. Doors open 7:00 AM – 6:00 PM, Monday–Friday, with before- and after-care for working families.",
    pills: [
      "Ages 3–5, Tucson and Yuma since 2013",
      "Open 7:00 AM – 6:00 PM, Monday–Friday",
      "Before- and after-school care on both campuses",
      "DES-approved · State of Arizona licensed",
    ],
    programsEyebrow: "Our programs",
    programsTitle: "A Pre-K year that still feels like childhood",
    seeProgram: "See the program",
    campusesEyebrow: "Two Arizona campuses",
    campusesTitle: "Close to home in Tucson and Yuma",
    campusesLede: "The same play-based curriculum, DES approval, and small class sizes — pick the campus that fits your morning drive.",
    visitCampus: "Visit campus",
    dayEyebrow: "A day in Pre-K",
    dayTitle: "Rhythm, play, and just enough school",
    dayNote: "Before- and after-care wraps around this day, 7:00–8:00 AM and 3:30–6:00 PM.",
    familiesEyebrow: "From our families",
    familiesTitle: "Kindergarten-ready, still themselves",
    ctaTitle: "Now enrolling the {year} school year",
    ctaNote: "Limited seats · DES welcome · Tours most weekdays",
    enrollNow: "Enroll Now",
  },
  tuitionPage: {
    eyebrow: "Tuition",
    title: "Full-day Pre-K, priced by the week",
    lede: "One weekly rate covers the instructional day, 8:00 AM – 3:30 PM. Add before- and after-care if your workday starts earlier or ends later. Families using a DES child care subsidy enroll the same way — copays apply.",
    programsTitle: "Pre-K programs",
    programsNote: "Choose one program per child. Rates are per child, per week.",
    perWeek: "per week",
    programs: {
      p1: { name: "Program #1", schedule: "5 days a week", hours: "8:00 AM – 3:30 PM" },
      p2: { name: "Program #2", schedule: "3 days a week", hours: "8:00 AM – 3:30 PM" },
      bundle: { name: "Pre-K + before & after care", schedule: "5 days a week", hours: "7:00 AM – 6:00 PM", highlight: "Saves 20% against booking the two separately" },
    },
    baTitle: "Before & after care",
    baNote: "7:00–8:00 AM & 3:30–6:00 PM. Priced separately, or bundled into the 5-day rate above.",
    baGroups: { d5: "5 days a week", d3: "3 days a week" },
    baOptions: { both: "Before and after care", before: "Before care only", after: "After care only" },
    discountsTitle: "Discounts",
    discounts: [
      "10% discount for one additional sibling, on both Pre-K and before & after care.",
      "DES recipients select a program the same way; copays apply.",
    ],
    includedTitle: "What the fee covers",
    included: [
      "A nutritious afternoon snack is part of the fee schedule.",
      "Parents provide their child with a lunch each day of attendance.",
      "Afternoon care includes homework time and structured activities like recreation and games, with a snack provided.",
    ],
    termsTitle: "Billing & contract terms",
    terms: [
      "Fees are based on your contract schedule, not on attendance.",
      "School calendar breaks (if we are not open) and major public holidays are not billed.",
      "Fees are billed every Monday and due that evening, for the week ahead. A $10.00 late charge applies Wednesday morning.",
      "Late pick-up is $1.00 per minute, billed the next cycle.",
      "Emergency drop-off for before & after care is $15.00, due at pick-up, and must be cleared by the front office so we know we have space.",
      "Extra days beyond your contract are billed as drop-ins. Filing a new contract avoids the drop-in rate.",
      "A signed contract and current registration documents must be on file before your child attends.",
    ],
    ctaTitle: "Ready to enroll?",
    ctaText: "Complete one registration form per child and return it to the campus registrar. We will walk the DES paperwork with you if you are using a subsidy.",
    effectiveNote: "Rates shown are from the fee schedule effective August 1, 2024. Confirm current rates with your campus before signing — call {phone} or email",
  },
  policiesPage: {
    eyebrow: "Policies",
    title: "Enrollment, release, and care policies",
    lede: "The licensing policies posted at both campuses, in the same words. Ask the front office for anything here in print.",
    questionsTitle: "Questions about any of this?",
    questionsText: "Call {phone} or stop by the front office. Suspension and expulsion policies are available to parents on request, and licensing inspection reports can be reviewed on the premises.",
    items: {
      enrollment: {
        title: "Child Enrollment Procedures",
        body: "Children are enrolled upon completion of all required enrollment documentation, including but not limited to:",
        list: ["Enrollment application", "Emergency contact information", "Immunization records", "Health records as required by licensing rules"],
        footer: "Enrollment is based on availability and the child’s age appropriateness for the Pre-Kindergarten program.",
      },
      release: { title: "Child Admission and Release Procedures", body: "Children are released only to parents or individuals authorized in writing by the parent or guardian. Identification is required when releasing a child to an individual unfamiliar to staff. Children may not leave the facility without authorized supervision.", list: [], footer: "" },
      discipline: { title: "Discipline Guidelines", body: "The facility uses positive, age-appropriate guidance techniques that are consistent and developmentally appropriate for Pre-Kindergarten-age children. Discipline focuses on redirection, modeling appropriate behavior, and setting clear expectations. Corporal punishment, humiliation, or abusive language is never used.", list: [], footer: "" },
      disenrollment: { title: "Child Disenrollment Procedures", body: "Children may be disenrolled by the parent or guardian with written notice provided to the facility. The facility reserves the right to disenroll a child for reasons including, but not limited to, non-payment of fees, failure to follow facility policies, or safety concerns, in accordance with licensing rules and facility policies.", list: [], footer: "" },
      suspension: { title: "Suspension and Expulsion Policy", body: "The facility has written policies regarding suspension and expulsion that include prevention strategies, clear expectations, and age-appropriate guidance methods. These policies are available to parents upon request.", list: [], footer: "" },
      access: { title: "Parent Access", body: "Parents have access to areas of the facility where their enrolled child is receiving child care during normal operating hours.", list: [], footer: "" },
      pesticide: { title: "Pesticide Application Notification", body: "Parents are notified at least 48 hours in advance of pesticide application on the facility premises, in accordance with state requirements.", list: [], footer: "" },
      inspection: { title: "Inspection Reports", body: "Parents are informed that licensing inspection reports are available for review on the facility premises.", list: [], footer: "" },
    },
  },
  careersPage: {
    eyebrow: "Careers",
    title: "Come teach the year that matters",
    lede: "Capstone Quest hires people who like small rooms, real play, and parents who want to be partners. Fingerprint clearance is required. A bachelor’s degree and AEPA or NES are expected for lead roles.",
    perks: {
      classes: { title: "Small classes", text: "Teach a class, not a crowd. You will actually know every child and every family." },
      benefits: { title: "Real benefits", text: "Insurance, retirement contributions, tuition reimbursement, extra-income incentives." },
      invent: { title: "Room to invent", text: "Studios, outdoor play, and a curriculum that still lets teachers be creative." },
      family: { title: "A family shop", text: "Pre-K campuses in Tucson and Yuma with the same calm, DES-approved culture." },
    },
    openTitle: "Open roles",
    openings: {
      lead: { role: "Lead Pre-K Teacher", campus: "Tucson or Yuma", req: "Fingerprint clearance, bachelor’s degree, AEPA or NES preferred." },
      assistant: { role: "Assistant Teacher", campus: "Tucson or Yuma", req: "Love of three-to-five-year-olds, classroom experience a plus." },
      care: { role: "Before & After Care Lead", campus: "Either campus", req: "7:00 AM start or 3:30–6:00 PM close. Reliable, warm, certified." },
    },
    applyTitle: "Apply",
    thanks: "Thank you — a director will write back if there’s a match.",
    received: "Application received.",
    fields: { name: "Name", email: "Email", phone: "Phone", role: "Role", campus: "Campus", message: "Why this work" },
    eitherCampus: "Either campus",
    sending: "Sending…",
    submit: "Submit application",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Let’s talk",
    lede: "Call, write, or send a note. Front offices answer 7:00 AM – 6:00 PM on school days.",
    thanks: "Thanks — a director will write back soon.",
    sent: "Message sent. We’ll reply shortly.",
    failed: "We could not send this. Please call {phone}.",
    fields: { name: "Name", email: "Email", topic: "Topic", message: "Message" },
    topics: {
      general: "General question",
      tour: "Tour",
      enrollment: "Enrollment",
      des: "DES / tuition",
      current: "Current family",
    },
    sending: "Sending…",
    submit: "Send message",
  },
  tourPage: {
    eyebrow: "Visit",
    title: "Schedule a tour",
    lede: "Walk the classrooms, meet a lead teacher, and see a real morning. Most tours last about 40 minutes. We can often confirm the same day.",
    doneTitle: "You’re on the calendar",
    doneText: "We saved your request and will email a confirmation. Want to enroll while you wait?",
    sent: "Tour requested — we will confirm by email.",
    failed: "We could not send your request. Please call {phone}.",
    fields: {
      name: "Your name", email: "Email", phone: "Phone", campus: "Campus",
      childAge: "Child’s age", childAgeHint: "e.g. 3 years, 10 months",
      date: "Preferred date", time: "Preferred time",
      notes: "Anything we should know?", notesHint: "Sibling, DES voucher, allergies…",
    },
    sending: "Sending…",
    submit: "Request this tour",
  },

  enrollPage: {
    eyebrow: "Enroll",
    title: "Start in as little as one day",
    lede: "Tell us about your child and we will confirm a seat, walk the paperwork, and set a start date.",
    doneTitle: "Application received",
    doneText: "A director will call to confirm campus, start date, and any DES paperwork. Keep an eye on your email.",
    lede2: "Tell us about your child. If a seat is open, many families finish the packet the same day they tour.",
    yes: "Yes",
    sent: "Enrollment started — we will follow up within one business day.",
    failed: "We could not send this. Please call {phone}.",
    fields: {
      childFirst: "Child’s first name", childLast: "Child’s last name",
      dob: "Date of birth", start: "Preferred start", campus: "Campus", program: "Program",
      parentName: "Parent / guardian", email: "Email", phone: "Phone",
      des: "Will you use a DES child care subsidy?",
    },
    des: { notSure: "Not sure yet", yes: "Yes — DES subsidy", no: "No — private pay" },
    sending: "Sending…",
    submit: "Submit enrollment",
  },
};

// Deliberately not `as const`: with literal types, `es.ts` could only ever
// repeat the English strings. Widened to `string`, the *shape* is still
// enforced, so a missing or misspelled key fails to compile.
export type Content = typeof en;
