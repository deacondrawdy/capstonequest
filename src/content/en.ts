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
    formNotice: "What happens to this: it is emailed to our school office so we can reply. We do not sell or share it. See our",
    formNoticeLink: "privacy policy",
    skipToContent: "Skip to main content",
    close: "Close",
    logoHome: "Capstone Quest Academy home",
    opensNewTab: "(opens in a new tab)",
    pdf: "PDF",
  },

  /** Page titles. {campus} is the campus name; the site name is appended. */
  pageTitles: {
    home: "Pre-K in Tucson and Yuma",
    about: "About us",
    campuses: "Campuses",
    campus: "{campus}",
    careers: "Careers",
    clever: "Clever & student portals",
    contact: "Contact",
    enroll: "Enroll",
    info: "Info",
    parents: "Parent resources",
    handbook: "Parent handbook",
    policies: "Policies",
    privacy: "Privacy policy",
    programs: "Programs",
    tour: "Schedule a tour",
    tuition: "Tuition & fees",
    whyUs: "Why us",
    accessibility: "Accessibility",
    notFound: "Page not found",
  },

  /** Shared by every form. Replaces the browser's own validation bubbles. */
  forms: {
    requiredNote: "Fields marked * are required.",
    required: "This field is required.",
    email: "Enter an email address, like name@example.com.",
    invalid: "Check this entry and try again.",
  },

  a11yMenu: {
    trigger: "Accessibility",
    title: "Accessibility",
    description: "Adjust how this site looks. Your choices are saved on this device.",
    textSize: "Text size",
    sizes: { base: "Default", lg: "Large", xl: "Largest" },
    toggles: {
      contrast: { label: "Higher contrast", hint: "Darkens body text and strengthens borders." },
      links: { label: "Underline links", hint: "Marks every link without relying on colour." },
      font: { label: "Plainer typeface", hint: "A wider face with more space between letters and lines." },
      motion: { label: "Reduce motion", hint: "Stops the page animating things as you scroll." },
    },
    reset: "Reset to default",
    done: "Done",
    atNote:
      "Using a screen reader, magnifier, or other assistive technology? It works with this site directly — you do not need these settings. If something is hard to use, please",
    atNoteLink: "tell us",
  },

  search: {
    trigger: "Search",
    title: "Search Capstone Quest",
    inputLabel: "Search the site",
    placeholder: "Campuses, programs, careers…",
    empty: "No matching pages.",
    /** Keyed by the entry `id` in src/data/search.ts. */
    pages: {
      home: { title: "Home", blurb: "Pre-K programs at Capstone Quest Academy in Tucson and Yuma." },
      tucson: { title: "Tucson Campus", blurb: "1150 North Country Club Road, Tucson · (520) 462-7788" },
      yuma: { title: "Yuma Campus", blurb: "1220 South 4th Avenue, Yuma · (928) 977-9318" },
      programs: { title: "Programs", blurb: "One mixed-age Pre-K classroom for ages 3–5, plus before & after care, 7 AM–6 PM." },
      info: { title: "Info", blurb: "About us, programs, parent resources, and calendars." },
      clever: { title: "Clever", blurb: "Clever, PowerSchool, ClassDojo, and RAZ Kids sign-ins." },
      tuition: { title: "Tuition & fees", blurb: "Weekly Pre-K rates, before & after care, sibling discounts, billing terms." },
      policies: { title: "Policies", blurb: "Enrollment, release, discipline, parent access, inspection reports." },
      careers: { title: "Careers", blurb: "Teach Pre-K in Tucson or Yuma. Small classes, benefits, family culture." },
      about: { title: "About", blurb: "DES-approved Pre-K since 2013. Little steps, big dreams." },
      parents: { title: "Parents", blurb: "Menus, handbooks, DES, tuition, and family partnership." },
      whyUs: { title: "Why Us", blurb: "Small classes, safety, school-ready curriculum, DES approved." },
      enroll: { title: "Enroll", blurb: "Start the 26–27 school year. Often complete in one day." },
      tour: { title: "Schedule a tour", blurb: "Walk a Tucson or Yuma classroom on a weekday morning." },
      handbook: { title: "Parent handbook", blurb: "Admissions, daily routines, discipline, and the suspension and expulsion prevention policy." },
      privacy: { title: "Privacy", blurb: "What this site collects, why, and who sees it." },
      contact: { title: "Contact", blurb: "(520) 462-7788 · info@capstonequestacademy.com" },
      accessibility: { title: "Accessibility", blurb: "How this site is built to be usable by everyone, and how to report a barrier." },
    },
  },

  banner: {
    /** Landmark name for screen readers navigating by region. */
    label: "Enrollment announcement",
    text: "Only a few spots left in Tucson & Yuma",
  },

  campusSwitch: {
    label: "Campus",
    call: "Call the {campus} campus",
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
    mainLabel: "Main",
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
      privacy: "Privacy",
      handbook: "Parent handbook",
      accessibility: "Accessibility",
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
    // Only rendered for a campus that has staff listed; {campus} is the city.
    staffTitle: "Meet the {campus} team",
    staffLede: "The teachers your child will see every morning, in their own words.",
  },

  /** Keyed by the programme slug in src/data/school.ts. */
  programs: {
    "pre-k": {
      name: "Pre-K",
      ages: "Ages 3–5",
      hours: "Full-day, 3 or 5 days",
      imageAlt: "Two boys peering through toy binoculars in their classroom",
      summary:
        "One mixed-age classroom where threes, fours and fives learn together — sharing, speaking up, and exploring through play, and leaving ready for kindergarten.",
      points: [
        "Play-based centers and outdoor time every day",
        "Pre-literacy, early math, and scientific wondering",
        "Language and social-emotional coaching, with routines that make little ones feel safe",
        "Portfolios that travel with your child into kindergarten",
      ],
    },
    "extended-day": {
      name: "Before & After Care",
      ages: "Ages 3–5",
      hours: "7:00–8:00 AM · 3:30–6:00 PM",
      imageAlt: "A girl blowing bubbles outside, with a classmate behind her",
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
    handbook: {
      title: "Parent Handbook",
      blurb:
        "The full Capstone Quest Pre-K handbook (PDF): admissions, tuition, daily schedule, discipline, and the suspension and expulsion prevention policy.",
    },
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
      handbook: { title: "Parent handbook", text: "Admissions, daily routines, discipline, and the suspension and expulsion prevention policy.", cta: "Read the handbook" },
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
      programs: { title: "Programs", text: "One mixed-age Pre-K classroom for ages 3–5, plus before & after care, 7 AM–6 PM.", cta: "See programs" },
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
      raz: "Leveled readers for children who are ready for books at home.",
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
    // Written by the teachers themselves as welcome letters to their classes,
    // and kept in their own words rather than rewritten into third person.
    staff: {
      zoe: {
        role: "Teacher",
        campus: "Tucson",
        bio: [
          "Hi! My name is Miss Zoe Cordova, and I’m so excited to be your teacher this year! I love creating a classroom where students feel welcomed, supported, and excited to learn.",
          "A few of my favorite things are sunset colors, Korean BBQ, mockingbirds, Too Many Carrots, and Pan’s Labyrinth. I love traveling, going to the movies, cooking, watching sunsets, and spending time with my friends and family. My favorite season is fall and winter, and I’m always happy with anything spicy!",
          "I’m looking forward to a year filled with learning, laughter, kindness, and lots of wonderful memories together!",
        ],
      },
      juridia: {
        role: "Teacher’s Assistant",
        campus: "Tucson",
        bio: [
          "Hi! My name is Juridia Hernandez, but you can call me Miss J! I’m so excited to be your Teacher’s Assistant and to help make our classroom a fun, welcoming, and encouraging place for every student.",
          "A few of my favorite things are orange and pink, Chinese food, sea otters, volleyball, K-pop and R&B, and wintertime. I also love doing nails, cooking and baking for others, dancing, doing my makeup, decorating for Christmas, and spending time with family and friends. Two places I especially love are Korea and Japan.",
          "I’m looking forward to helping our students learn, laugh, grow, and have an amazing year together! 💕🌈",
        ],
      },
      sidney: {
        role: "Preschool Teacher",
        campus: "Yuma",
        bio: [
          "I am a caring Preschool Teacher with a passion for helping young children learn, grow, and feel confident.",
          "When not in the classroom, I enjoy spending time with my animals, exploring nature, and getting lost in a good book.",
          "I bring curiosity, kindness, and a love of learning every day to my students. I have been with Capstone for 3 years.",
        ],
      },
      tianna: {
        role: "Preschool Teacher",
        campus: "Yuma",
        bio: [
          "Hi everyone! I’m Ms. Tianna, I am 28 years old and have loved teaching here at Capstone preschool for the past 5 years.",
          "When I’m not in the classroom, I love traveling and spending time with my family.",
        ],
      },
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
    ages: { q: "What ages do you serve?", a: "Children ages 3 through 5, together in one classroom. Most families start the year their child turns three and stay through the kindergarten-ready year." },
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
    handbookLink: "Read the full prevention policy in the parent handbook",
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
    failed: "We could not send your application. Please call {phone}.",
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
    /** Display labels for the fixed tour slots in tour.tsx, in the same order. */
    timeLabels: ["8:30 AM", "9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"],
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
  /**
   * Describes what is true today, including what is not yet done. "Partially
   * conforms" is the W3C's own term; do not upgrade it to "fully conforms" or
   * "ADA compliant" until the known limitations below are gone.
   */
  accessibilityPage: {
    eyebrow: "Accessibility",
    title: "Accessibility statement",
    updated: "Last reviewed September 2026",
    lede: "Capstone Quest Academy wants every family to be able to use this website — including parents, grandparents and caregivers who use a screen reader, a keyboard instead of a mouse, magnification, captions, or voice control.",
    standardTitle: "The standard we work to",
    standard: "We work to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA, published by the World Wide Web Consortium (W3C). It is the current version of the standard most widely used to judge whether a website is accessible.",
    statusTitle: "Where the site stands",
    status: "The site partially conforms to WCAG 2.2 Level AA. Most of it meets the standard; the exceptions we know about are listed below, and we are working through them.",
    doneTitle: "What we have done",
    done: [
      "Every page works with a keyboard alone, and a “Skip to main content” link comes first on every page.",
      "Each page has its own title, and headings, lists and page regions are marked up so screen readers can move around.",
      "Photos that carry meaning have text descriptions.",
      "Text and form field borders meet the WCAG 2.2 AA contrast levels.",
      "The header stays at the top of the screen, and the page is set up so it never covers the control you are using or the section a link takes you to.",
      "Pages work when zoomed to 400% and on narrow phone screens without scrolling sideways.",
      "Forms have visible labels, mark required fields, and explain any mistake next to the field.",
      "The whole site is available in English and Spanish, and each page is marked with its language.",
      "We check the site with automated tools and by hand, page by page, in both languages, and had it independently audited against WCAG 2.2 AA in September 2026.",
    ],
    menuNote: "The Accessibility menu at the top of every page lets you enlarge text, raise contrast, underline links, switch to a plainer typeface, or reduce motion. It is optional: the site is built to work without it.",
    limitsTitle: "Known limitations",
    limits: [
      "The classroom video on the home page does not have captions yet. We are adding them. If you would like to know what it shows, contact us.",
      "Some documents on the Parent resources page — the student handbook, wellness policy, meal menus and supply list — are published by AmeriSchools Academy, not by us, and may not be fully accessible. We will provide any of them in another format on request.",
      "The parent handbook is offered as a PDF. The same handbook is also on this site as a web page, which is the accessible version.",
    ],
    helpTitle: "Tell us about a barrier, or ask for another format",
    help: "If something on this site is hard to use, or you need information in a different format — large print, plain text, or read to you over the phone — please tell us. Let us know which page and what you were trying to do.",
    emailLabel: "Email",
    technicalTitle: "How the site is built",
    technical: "The site uses standard HTML, CSS and JavaScript, with WAI-ARIA where it helps assistive technology. It is designed to work with current versions of Chrome, Safari, Firefox and Edge, and with common screen readers.",
  },

  privacyPage: {
    eyebrow: "Privacy",
    title: "Privacy policy",
    updated: "Last updated: August 31, 2026",
    lede: "This explains what this website collects, why, and who sees it. It is written to be read by a parent, not a lawyer.",
    summaryTitle: "The short version",
    summary: [
      "The only information we collect is what you type into a form and send us.",
      "There is no advertising, no tracking, and no cookies on this site.",
      "Form submissions are emailed to our school offices. We do not sell or share them.",
    ],
    sections: {
      who: {
        title: "Who we are",
        body: "Capstone Quest Academy operates the Pre-K programs at our Tucson and Yuma campuses and is responsible for the information collected through this website. Our contact details are at the bottom of this page.",
      },
      collect: {
        title: "What we collect",
        intro: "We collect information only when you choose to send it to us using one of the forms on this site. Nothing is gathered in the background.",
        enroll: "Enrollment form: your child’s first and last name, your child’s date of birth, your preferred start date, campus and program, your name as parent or guardian, your email address, your phone number, and whether you plan to use a DES child care subsidy.",
        tour: "Tour request: your name, email address, phone number, the campus you want to visit, your child’s age, your preferred date and time, and anything you write in the notes box. People often use that box for things like allergies or a sibling’s name, so please share only what you are comfortable sending by email.",
        contact: "Contact form: your name, email address, the topic you pick, and your message.",
        careers: "Job application: your name, email address, phone number, the role and campus you are applying for, and your message.",
        note: "We do not ask for a Social Security number, payment details, or immigration status anywhere on this site.",
      },
      why: {
        title: "Why we collect it",
        body: "To answer your question, schedule your tour, start an enrollment, or consider your job application. We do not use it to advertise to you, and we do not add you to a mailing list.",
      },
      recipients: {
        title: "Who else sees it",
        body: "When you submit a form, the message is delivered to our school email inboxes using Resend, an email delivery service acting on our behalf. It handles the message in order to deliver it and does not use it for its own purposes. Nobody else receives your submission.",
      },
      dont: {
        title: "What this site does not do",
        items: [
          "No analytics. We do not measure or record your visit.",
          "No advertising or tracking pixels, and nothing is shared with advertisers or social networks.",
          "No cookies. This site does not set any.",
          "We never sell your information, and we do not share it for anyone else’s marketing.",
        ],
      },
      browser: {
        title: "What your own browser stores",
        body: "If you change the language or use the accessibility menu, your choice is saved on your own device so the site remembers it next time. Those two settings never leave your device and are never sent to us. Clearing your browser data removes them.",
      },
      children: {
        title: "Information about children",
        body: "The enrollment and tour forms are filled in by a parent or guardian, and they ask for information about a child, including a name and date of birth. We use it only to respond to your enquiry and to prepare for enrollment. We do not knowingly collect information directly from children, and this site is not directed at children.",
      },
      retention: {
        title: "How long we keep it",
        body: "[RETENTION PERIOD — TO CONFIRM] Enquiries from families who do not enroll, and applications from candidates we do not hire, are deleted from our inboxes after this period. If your child enrolls, their records are kept as part of their school file, described below.",
      },
      choices: {
        title: "Seeing, correcting, or deleting your information",
        body: "You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Contact us using the details below and we will respond. There is no penalty for asking, and it will not affect your child’s place or your application.",
      },
      scope: {
        title: "What this policy does not cover",
        body: "This policy covers this website only. Once a child is enrolled, their school records are handled separately under our enrollment paperwork and the systems the school uses for families. This site also links out to other organizations, including AmeriSchools, Clever, PowerSchool, ClassDojo, RAZ Kids, Khan Academy Kids, and Quality First Arizona. Those sites have their own privacy policies and we are not responsible for them.",
      },
      changes: {
        title: "Changes to this policy",
        body: "If we change how this website handles information, we will update this page and change the date at the top.",
      },
      contact: {
        title: "Contact us",
        body: "Call us, email us, or speak to the front office at either campus. We would rather answer a question about this than have you wonder.",
      },
    },
  },
  handbookPage: {
    eyebrow: "Parent handbook",
    title: "Capstone Quest Academy Parent Handbook",
    subtitle: "Childhood Learning Program · Pre-Kindergarten · AM (before) and PM (after) school program",
    lede: "Everything families need to know about the Pre-K program, from admissions through the daily schedule. The printable version is available as a PDF.",
    downloadPdf: "Download the PDF",
    contentsTitle: "Contents",
    officesTitle: "School offices",
    officesNote: "Call the campus directly — the front office answers during program hours.",
    foreword: {
      title: "Foreword",
      p1: "Welcome to another exciting year educating Pre-Kindergarten children, ages 3 to 5, creating a vision for early childhood learning. As a parent, you are entrusting us with your most valued possession, a loving child.",
      p2: "The teacher and each parent is an important contributor to the teaching and learning team for the child’s future. Each acts as a trustee, providing a safe environment and securing opportunities that define a lifetime. These mutual responsibilities become significant targets for fulfilling the emerging needs of children and families.",
      p3: "The Pre-Kindergarten instructional program runs five days a week, with an A.M. (early arrival) or P.M. (late dismissal) program provided as fee-for-service child care. Early arrival (7:00–8:00 AM) and late dismissal (3:30–6:00 PM) serve the supervisory and safety needs of children and families.",
      p4: "The Pre-Kindergarten program is a warm, caring and safe environment resulting in a strong foundation for future schooling. The young child learns to solve problems in challenging situations. The classroom is an excellent laboratory, helping define and create resources for youthful growth and maturity. The ultimate objective is to foster a lifelong love of learning.",
    },
    philosophy: {
      title: "Philosophy and program",
      valuesTitle: "What we value",
      values: [
        "Non-graded", "Personalized instruction", "Highly qualified staff",
        "Skill-based instruction", "Integrated curriculum", "Enrichment",
        "Community as laboratory", "High academic standards", "Choice",
      ],
      descriptionTitle: "Program description",
      description: "Capstone Quest Academy provides a private-school Pre-Kindergarten program serving families and children ages 3 to 5 who are not yet eligible for kindergarten. Each learning center sits inside an AmeriSchools Academy charter school location.",
      datesTitle: "Dates and hours of service",
      dates: "The Pre-K instructional program runs five days a week. Capstone Quest is offered during school breaks if participation allows, except for New Year’s Day, Martin Luther King Day, Presidents Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving Day and Christmas Day. An A.M. (early arrival) or P.M. (late dismissal) program is provided as fee-for-service child care where the facility is licensed for it.",
      curriculumTitle: "Curriculum",
      curriculum: "This program is a warm, caring and safe environment providing a developmentally appropriate experience. The young child experiences rules for self-control and solves problems in challenging situations, whether in the community, school or family. The classroom is a community of young children beginning to accept, or reasonably reject, rules for behavior. That experience provides clearly understood limits, helping create personal resources for growth and maturity.",
      centersTitle: "Thematic centers for early childhood learning",
      centers: [
        "Daily care routines", "Math and manipulatives", "Active play", "Science and nature",
        "Music and movement", "Water and sand play", "Block play", "Creative experiences",
        "Dramatic play", "We, you and me",
      ],
      quote: "Play is our brain’s favorite way of learning",
      quoteAuthor: "Diane Ackerman",
      partnership: "Lesson plans are posted daily, following licensing requirements. Parents are encouraged to read to their child, recite nursery rhymes, sing children’s songs, or play “I Spy” in the car. These shared moments strengthen family bonds. This learning laboratory values play and rest, physical exercise, pre-literacy language exploration, and developing cognitive and social skills.",
    },
    admissions: {
      title: "Program admissions",
      criteriaTitle: "Admissions criteria",
      criteriaIntro: "A limited number of spaces are available for Pre-K children ages 3 to 5 who are not eligible for kindergarten. Children participating in the program are expected to be able to:",
      criteria: [
        "Follow simple teacher directions",
        "Independently dress, feed and use the bathroom",
        "Interact appropriately with others",
        "Move from one activity to another without repeated instructions",
        "Express themselves orally in an age-appropriate way",
      ],
      registrationTitle: "Student registration",
      registrationIntro: "All parents must complete registration before their child’s first day. This includes:",
      registration: [
        "The registration packet",
        "A current student immunization card",
        "A current emergency card",
        "A copy of the child’s birth certificate",
        "Proof of residence",
      ],
      registrationNote: "To cancel a registration, notify the registrar two weeks before departure.",
      contractTitle: "Tuition contract",
      contract: "Parents sign a tuition contract requiring weekly payments, due by the first day of each week through the ProCare online portal. A deposit equal to one week’s tuition is due at registration and is credited to the child’s first week of attendance. Weekly tuition reserves the child’s place even when the child is absent. If payment is not received by the first day of the week, the child cannot attend and the space may be offered to another family.",
      contractLink: "See current rates on the tuition page",
      collectionsTitle: "Collections",
      collections: "Program participation requires payment of current fees. Participation is voluntary; payment is mandatory. Unpaid tuition is a contract obligation and may be assigned for collection.",
      refundTitle: "Refunds",
      refund: "No credit or refund is given for absences.",
    },
    participation: {
      title: "Program participation",
      arrival: {
        title: "Arrival",
        body: "Parents are responsible for bringing their children to school each day. On arrival, sign your child in using the ProCare app or the tablet provided, and walk your child to the classroom or meeting area. Never leave a child unattended unless a staff member is present to supervise. Leaving a child unattended on early arrival is unlawful under state statute, and failure to follow these protocols may result in a report to Child Protective Services.",
      },
      dismissal: {
        title: "Dismissal",
        body: "Parents sign out using the ProCare app or tablet and collect their children at dismissal. Staff accompany children to the pick-up area. Children are released only to parents or authorized adults named on the contact form; an authorized adult other than a parent must sign the dismissal form and show photo identification. Please be prompt. Late pick-up is charged at $1.00 per minute per child. If an emergency arises, call the registrar with your expected arrival time.",
      },
      attendance: {
        title: "Attendance",
        body: "Regular, prompt attendance is expected, and licensing requires attendance records for every child. A first-come, first-served waiting list supports program capacity.",
      },
      options: {
        title: "Schedule options",
        body: "The Pre-K schedule offers two options for each family.",
        items: [
          "Program #1: Capstone Pre-K, 8:00 AM to 3:30 PM.",
          "Program #2: Capstone Pre-K plus the 7:00 AM to 6:00 PM wraparound program, Monday to Friday. This mirrors the AmeriSchools Academy elementary calendar, except that Pre-K offers a summer session with a two-week recess and other breaks.",
        ],
      },
      immunizations: {
        title: "Immunizations",
        body: "As a condition of registration, every child’s immunization record must be current. The record must be stamped by the physician’s office, and the clinic name, address and phone number recorded on the Emergency Health Card before the child attends.",
      },
      medication: {
        title: "Medication",
        body: "Parents must tell the school about any medical, physical or disabling condition that limits their child’s participation, including allergies to weather, pollen, food or medicine. A Medication Consent Form authorizes staff to give prescribed medication during the day. The registrar stores and administers medication, which must be in its original labelled container. Children may not carry or take medication themselves.",
      },
      snack: {
        title: "Snack time",
        body: "The program follows the food service and nutrition standards in early childhood licensing. Afternoon snack is a learning center in its own right, exploring food and nutrition, and its cost is included in the program fee. The Food Allergies Form is completed at registration so allergens can be removed from snack choices.",
      },
      backpacks: {
        title: "Backpacks",
        body: "Please send a backpack large enough to hold a folder with your child’s name. It carries papers, artwork and keepsakes home. Keeping it in one place at home helps a child take responsibility for their own belongings. Please check the backpack and folder each day.",
      },
      fireDrills: {
        title: "Fire drills",
        body: "Unannounced evacuation drills are conducted at least every 30 days, as required by law. Evacuation plans are posted in every classroom.",
      },
      emergency: {
        title: "Emergency provisions",
        bodyIntro: "First aid is given by the classroom teacher. A child who becomes ill is accompanied to the school office, and a parent or responsible adult is contacted. Emergency care depends on the Emergency Health Card being current, which must record:",
        items: [
          "Current home address and telephone or cell number",
          "Place of employment and phone numbers for all responsible adults",
          "Names of four responsible adults other than the parent",
        ],
        bodyEnd: "Children with communicable conditions, including fever, diarrhea, vomiting or another disabling condition, must stay home. Parents are responsible for reporting the absence and the health condition. Fees are not reduced for absence.",
      },
      conferences: {
        title: "Parent conferences",
        body: "Formal parent conferences are held every six weeks to discuss each child’s academic and developmental progress. The first conference takes place in person. Informal conferences also happen by phone and message. Please arrange after-care supervision independently where dismissal schedules require it.",
      },
      discipline: {
        title: "Discipline",
        body: "Play is a powerful teaching activity. Teaching discipline through play focuses on the child experiencing effective behaviors, beginning with adults modelling purposeful acts. Behavioral strategies include demonstrating appropriate coping skills, preparing developmentally appropriate activities sequenced to the child’s maturity, scheduling activities in a controlled environment, and providing clear, consistent and fair rules for behavior.",
      },
      pesticide: {
        title: "Pesticide application",
        body: "Parents, students and staff are informed when pesticides are applied on school property, currently at least 48 hours before application as state statute requires. Notification includes oral notice to pupils and staff, written notice to parents or guardians, and posted signs identifying the application areas. Each site keeps written records of these notifications. This does not include non-restricted disinfectants, sanitizers or deodorizers.",
      },
    },
    suspension: {
      title: "Suspension and expulsion prevention policy",
      commitmentTitle: "Our commitment",
      commitment: "We believe every child deserves to feel safe, supported and welcome in their early learning environment. Young children are still developing social, emotional and behavioral skills, and behavior is a form of communication. We are committed to preventing suspension and expulsion wherever possible, through proactive teaching, strong relationships with families, and collaboration with community partners. Removal from care is considered only as a last resort, after supportive strategies and resources have been fully explored. This policy aligns with the Arizona Department of Economic Security Suspension and Expulsion Prevention Policy.",
      preventionTitle: "Prevention and early intervention",
      prevention: [
        "Maintaining predictable daily routines and nurturing classroom environments",
        "Teaching social-emotional skills through modelling and guided practice",
        "Using positive behavior guidance and redirection",
        "Adjusting classroom environments or expectations to meet individual needs",
        "Supporting staff through coaching, reflective supervision and professional development",
      ],
      familyTitle: "Family partnership and communication",
      familyIntro: "Families are valued partners. When a behavioral or developmental concern is identified, we will:",
      family: [
        "Share observations with families in a strengths-based way",
        "Invite families into problem-solving discussions",
        "Develop support strategies or individualized plans together",
        "Consider cultural, linguistic and family perspectives when planning support",
      ],
      inclusionTitle: "Inclusion and support for all children",
      inclusionIntro: "We do not deny enrollment or remove a child because of developmental delay, disability, behavioral challenge or suspected special need without first putting supportive interventions in place. Support may include:",
      inclusion: [
        "Individualized behavior or support plans",
        "Environmental or schedule modifications",
        "Additional classroom support",
        "Developmental screening with family consent",
        "Collaboration with early intervention or special education services",
      ],
      consultationTitle: "Consultation and community resources",
      consultationIntro: "Before suspension or expulsion is considered, we seek additional support where available:",
      consultation: [
        "Referral to AZ STEPS, the Arizona Statewide Training and Technical Assistance for Expulsion Prevention",
        "Early childhood mental health consultation",
        "Inclusion specialists or behavior consultants",
        "Community-based developmental or family support services",
      ],
      documentationTitle: "Documentation and review",
      documentationIntro: "We document observed concerns, strategies used, family communication, supports requested or received, and progress over time. Strategies are reviewed regularly and adjusted.",
      lastResortTitle: "Suspension or expulsion as a last resort",
      lastResortIntro: "Suspension or expulsion is considered only when all of the following are true:",
      lastResort: [
        "A serious and ongoing safety risk exists",
        "Reasonable accommodations and interventions have been attempted",
        "Consultation or external support has been requested where available",
      ],
      transitionIntro: "If a child must leave the program, we will:",
      transition: [
        "Notify the parent in writing at least five business days before disenrollment",
        "Work with the family to identify alternative care or services",
        "Provide referrals to community resources",
        "Support a respectful, planned transition to minimize disruption",
      ],
      reviewTitle: "Policy communication and review",
      reviewIntro: "This policy is shared with families on enrollment, included in the handbook, reviewed annually with staff, and updated as guidance and best practice evolve.",
    },
    scheduleTitle: "Model schedule of daily activities",
    scheduleNote: "Subject to change. Gates open at 7:00 AM for the before-school program and 8:00 AM for the full day.",
    napNote: "The program provides each child with a mat for nap time.",
    recessNote: "Outdoor recess is weather permitting, with inclement heat respected.",
  },
};

// Deliberately not `as const`: with literal types, `es.ts` could only ever
// repeat the English strings. Widened to `string`, the *shape* is still
// enforced, so a missing or misspelled key fails to compile.
export type Content = typeof en;
