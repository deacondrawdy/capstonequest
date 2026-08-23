import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as useRouterState, v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as ChevronDown, T as Clock, _ as MapPin, f as Search, g as Menu, m as Phone, s as Star, t as X, v as Mail } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogPortal$1, i as DialogOverlay$1, n as DialogClose, o as DialogTitle$1, r as DialogContent$1, s as DialogTrigger, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Trigger, i as Root2, n as Item2, r as Portal2, t as Content2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-BloWSPhE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className, size = "md" }) {
	const dim = size === "lg" ? "size-[6.25rem]" : size === "sm" ? "size-16" : "size-[5.35rem]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		"aria-label": "Capstone Quest Academy home",
		className: cn("relative inline-flex shrink-0", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 180 180",
			className: dim,
			role: "img",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "Capstone Quest Academy" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						id: "cq-top",
						d: "M 26,92 A 64,64 0 0 1 154,92"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						id: "cq-bot",
						d: "M 36,98 A 54,54 0 0 0 144,98"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
						id: "cq-owl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "90",
							cy: "96",
							r: "40"
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "90",
					r: "87",
					fill: "#ffffff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "90",
					r: "84",
					fill: "none",
					stroke: "#0d2c6b",
					strokeWidth: "4.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "90",
					r: "76",
					fill: "none",
					stroke: "#0d2c6b",
					strokeWidth: "1.15"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					fill: "#0d2c6b",
					fontSize: "12.5",
					fontWeight: "800",
					letterSpacing: "2.6",
					fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
						href: "#cq-top",
						startOffset: "50%",
						textAnchor: "middle",
						children: "CAPSTONE QUEST"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					fill: "#0d2c6b",
					fontSize: "12.5",
					fontWeight: "800",
					letterSpacing: "3.8",
					fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
						href: "#cq-bot",
						startOffset: "50%",
						textAnchor: "middle",
						children: "ACADEMY"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
					href: "/images/owl.png",
					x: "48",
					y: "54",
					width: "84",
					height: "84",
					clipPath: "url(#cq-owl)",
					preserveAspectRatio: "xMidYMid slice"
				})
			]
		})
	});
}
var school = {
	name: "Capstone Quest Academy",
	shortName: "Capstone Quest",
	tagline: "Where curiosity grows and bright futures begin.",
	welcome: "Welcome to Capstone Quest Academy, where little steps make big dreams come true. Nestled in the heart of Tucson and Yuma since 2013, our nurturing Pre-K programs guide little ones on an adventure of learning and growth.",
	phone: "1-800-379-9083",
	phoneHref: "tel:+18003799083",
	email: "hello@capstonequestacademy.org",
	hours: "Monday–Friday, 7:00 AM – 6:00 PM",
	ages: "3–5 years",
	year: "26–27",
	since: 2013
};
var campuses = [{
	slug: "tucson",
	city: "Tucson",
	name: "Tucson Campus",
	address: "1150 North Country Club Road",
	cityState: "Tucson, AZ 85716",
	phone: "(520) 620-1100",
	phoneHref: "tel:+15206201100",
	image: "/images/tucson.jpg",
	blurb: "A bright, home-away-from-home campus near midtown Tucson — desert gardens, shade-sail playgrounds, and classrooms built for curious three-to-five-year-olds.",
	hours: "7:00 AM – 6:00 PM",
	capacity: "Small classes of 10 or fewer",
	mapUrl: "https://www.google.com/maps/search/?api=1&query=1150+North+Country+Club+Road+Tucson+AZ+85716"
}, {
	slug: "yuma",
	city: "Yuma",
	name: "Yuma Campus",
	address: "1220 South 4th Avenue",
	cityState: "Yuma, AZ 85364",
	phone: "(928) 919-7203",
	phoneHref: "tel:+19289197203",
	image: "/images/yuma.jpg",
	blurb: "A welcoming Yuma campus with a covered drop-off, sun-safe outdoor play, and the same DES-approved Pre-K program families trust across Arizona.",
	hours: "7:00 AM – 6:00 PM",
	capacity: "Small classes of 10 or fewer",
	mapUrl: "https://www.google.com/maps/search/?api=1&query=1220+South+4th+Avenue+Yuma+AZ+85364"
}];
var programs = [
	{
		slug: "pre-k-3s",
		name: "Pre-K 3s",
		ages: "Age 3",
		hours: "Half-day or full-day",
		image: "/images/art.jpg",
		summary: "A gentle first classroom year. Children learn to share, speak up, and explore through play, music, and outdoor discovery.",
		points: [
			"Play-based centers and outdoor time every day",
			"Language, early literacy, and social-emotional coaching",
			"Predictable routines that make little ones feel safe"
		]
	},
	{
		slug: "pre-k-4s",
		name: "Pre-K 4s",
		ages: "Ages 4–5",
		hours: "Full-day kindergarten-ready",
		image: "/images/blocks.jpg",
		summary: "A school-ready year that still feels like play. Children leave with confidence, friendships, and the skills kindergarten teachers look for.",
		points: [
			"Pre-literacy, early math, and scientific wondering",
			"Self-help skills and classroom independence",
			"Portfolios that travel with your child into kindergarten"
		]
	},
	{
		slug: "extended-day",
		name: "Before & After Care",
		ages: "Ages 3–5",
		hours: "7:00–8:00 AM · 3:30–6:00 PM",
		image: "/images/playground.jpg",
		summary: "Fee-for-service wraparound care used by working families since 2013 — early arrival and late dismissal with the same trusted teachers.",
		points: [
			"Early arrival 7:00–8:00 AM",
			"Late dismissal 3:30–6:00 PM, Monday–Friday",
			"Snack, rest, and outdoor play after the academic day"
		]
	}
];
var parentDocuments = [
	{
		title: "Parent Rights Handbook",
		href: "https://www.azed.gov/sites/default/files/2023/08/Parental%20Rights%20Handbook_Public%20Charter%20Schools__2023_Final.pdf",
		blurb: "Arizona public charter school parent rights (ADE)."
	},
	{
		title: "Student Handbook",
		href: "https://amerischools.org/wp-content/uploads/2025/07/Amerischools-Student-Handbook-last-edited-6-16-25.pdf",
		blurb: "Campus handbook shared with AmeriSchools Academy families."
	},
	{
		title: "Wellness Policy",
		href: "https://amerischools.org/wp-content/uploads/2025/08/AmeriSchools-Wellness-Policy-1.pdf",
		blurb: "Nutrition, movement, and wellness standards."
	},
	{
		title: "Tucson breakfast menu",
		href: "https://amerischools.org/wp-content/uploads/2026/07/August-Breakfastmenu.pdf",
		blurb: "Current breakfast offerings at the Tucson campus."
	},
	{
		title: "Tucson lunch menu",
		href: "https://amerischools.org/wp-content/uploads/2026/07/August-lunch-menu-copy-4.pdf",
		blurb: "Current lunch offerings at the Tucson campus."
	},
	{
		title: "School supplies",
		href: "https://amerischools.org/wp-content/uploads/2026/07/School-Supplies.pdf",
		blurb: "What to pack for the first day."
	}
];
var staff = [{
	name: "Elena Brooks",
	role: "Head of School",
	campus: "Tucson & Yuma",
	image: "/images/elena.jpg",
	bio: "Elena has led early childhood programs in Arizona for 16 years. She believes every family deserves a school that feels both rigorous and kind."
}, {
	name: "Sofia Reyes",
	role: "Lead Pre-K Teacher",
	campus: "Tucson",
	image: "/images/sofia.jpg",
	bio: "Sofia designs play-based units that sneak in literacy and math. Parents know her for the handwritten notes that come home each Friday."
}];
var testimonials = [
	{
		quote: "Maya skipped into kindergarten already knowing how to wait her turn, write her name, and ask a great question. Capstone Quest made that look easy.",
		name: "Priya Chen",
		role: "Tucson parent"
	},
	{
		quote: "The teachers actually know my son. Not just his allergies — his favorite dump truck, the way he warms up slowly, the songs that calm him.",
		name: "Marcus Alvarez",
		role: "Yuma parent"
	},
	{
		quote: "We used a DES voucher and never felt like a second-class family. The program is the same beautiful experience for every child in the room.",
		name: "Danielle Ortiz",
		role: "Tucson parent"
	}
];
var faqs = [
	{
		q: "What ages do you serve?",
		a: "Children ages 3 through 5. Most families start the year they turn three and stay through the kindergarten-ready Pre-K 4s year."
	},
	{
		q: "Are you DES approved?",
		a: "Yes. Both campuses are 100% approved by the Arizona Department of Economic Security and state-licensed. We gladly accept DES child care subsidies."
	},
	{
		q: "How quickly can we enroll?",
		a: "Once we have a tour and a completed packet, many families finish enrollment in as little as one day — especially when a seat is open for the current session."
	},
	{
		q: "What does a typical day look like?",
		a: "Morning meeting, outdoor play, literacy and math workshops, lunch, rest, studios (art, blocks, science), and a closing circle. Full-day children stay for snack and afternoon centers."
	},
	{
		q: "What is the teacher-to-child ratio?",
		a: "We keep classes small — typically 10 or fewer children with a lead teacher and an assistant — so every child is known."
	},
	{
		q: "Can I see how my child is doing during the day?",
		a: "Yes. Use “See how my child is doing” in the top bar for the parent portal. Families also sign in through Clever and PowerSchool the way the current AmeriSchools campuses do."
	},
	{
		q: "What are your hours?",
		a: "The instructional Pre-K program runs five days a week. Campuses are open Monday–Friday, 7:00 AM to 6:00 PM, with fee-for-service early arrival (7:00–8:00 AM) and late dismissal (3:30–6:00 PM)."
	}
];
var dayInTheLife = [
	{
		time: "7:00",
		title: "Warm welcome",
		detail: "Teachers greet each child by name. Breakfast and quiet table work for early birds."
	},
	{
		time: "8:30",
		title: "Morning meeting",
		detail: "Songs, the day’s story, and a chance for every voice to be heard."
	},
	{
		time: "9:15",
		title: "Studios & workshops",
		detail: "Literacy, early math, art, and block-building in small groups."
	},
	{
		time: "11:00",
		title: "Outdoor adventure",
		detail: "Shade-sail playgrounds, tricycles, gardens, and big-body play."
	},
	{
		time: "12:00",
		title: "Lunch & rest",
		detail: "Family-style lunch, then a rest that actually restores little nervous systems."
	},
	{
		time: "2:30",
		title: "Choice time",
		detail: "Science trays, dramatic play, and teacher-guided investigations."
	},
	{
		time: "5:00",
		title: "Closing circle",
		detail: "Stories home, a hug, and a teacher who can tell you how the day really went."
	}
];
var academyColors = [
	{
		letter: "A",
		className: "text-rainbow-a"
	},
	{
		letter: "C",
		className: "text-rainbow-c"
	},
	{
		letter: "A",
		className: "text-rainbow-a2"
	},
	{
		letter: "D",
		className: "text-rainbow-d"
	},
	{
		letter: "E",
		className: "text-rainbow-e"
	},
	{
		letter: "M",
		className: "text-rainbow-m"
	},
	{
		letter: "Y",
		className: "text-rainbow-y"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy-deep text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-10 px-6 py-14 sm:px-8 lg:grid-cols-4 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 inline-block rounded-full bg-paper p-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "sm" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-xs text-sm leading-relaxed text-paper/75",
					children: [school.tagline, " DES-approved Pre-K in Tucson and Yuma since 2013."]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-sm font-bold tracking-wide uppercase",
					children: "Visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4 text-sm text-paper/80",
					children: campuses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/campuses/$slug",
						params: { slug: c.slug },
						className: "font-semibold text-paper hover:underline",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							c.address,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							c.cityState
						] })]
					})] }, c.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-sm font-bold tracking-wide uppercase",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-paper/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programs",
							className: "hover:text-gold",
							children: "Programs"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/why-us",
							className: "hover:text-gold",
							children: "Why Us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/parents",
							className: "hover:text-gold",
							children: "Parents"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-gold",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/clever",
							className: "hover:text-gold",
							children: "Clever & portals"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/careers",
							className: "hover:text-gold",
							children: "Careers"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/info",
							className: "hover:text-gold",
							children: "Info"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tour",
							className: "hover:text-gold",
							children: "Schedule a tour"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/portal",
							className: "hover:text-gold",
							children: "Parent portal"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-sm font-bold tracking-wide uppercase",
					children: "Talk with us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-paper/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: school.phoneHref,
								className: "hover:text-gold",
								children: school.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${school.email}`,
								className: "hover:text-gold",
								children: school.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }), school.hours]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-4 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Capstone Quest Academy. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Arizona DES approved · State licensed · Ages 3–5" })]
			})
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-navy-deep/55 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-[28px] bg-paper p-6 shadow-card duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 rounded-full p-1 text-muted hover:bg-paper-soft hover:text-ink focus-visible:ring-2 focus-visible:ring-ring",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 text-left", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("text-xl font-bold text-navy", className),
		...props
	});
}
var searchIndex = [
	{
		title: "Home",
		path: "/",
		blurb: "Pre-K programs at Capstone Quest Academy in Tucson and Yuma."
	},
	{
		title: "Tucson Campus",
		path: "/campuses/tucson",
		blurb: "1150 North Country Club Road, Tucson · (520) 620-1100"
	},
	{
		title: "Yuma Campus",
		path: "/campuses/yuma",
		blurb: "1220 South 4th Avenue, Yuma · (928) 919-7203"
	},
	{
		title: "Programs",
		path: "/programs",
		blurb: "Pre-K 3s, Pre-K 4s, and before & after care, 7 AM–6 PM."
	},
	{
		title: "Info",
		path: "/info",
		blurb: "About us, programs, parent resources, and calendars."
	},
	{
		title: "Clever",
		path: "/clever",
		blurb: "Clever, PowerSchool, ClassDojo, RAZ Kids, and the parent portal."
	},
	{
		title: "Careers",
		path: "/careers",
		blurb: "Teach Pre-K in Tucson or Yuma. Small classes, benefits, family culture."
	},
	{
		title: "About",
		path: "/about",
		blurb: "DES-approved Pre-K since 2013. Little steps, big dreams."
	},
	{
		title: "Parents",
		path: "/parents",
		blurb: "Menus, handbooks, DES, tuition, and family partnership."
	},
	{
		title: "Why Us",
		path: "/why-us",
		blurb: "Small classes, safety, school-ready curriculum, DES approved."
	},
	{
		title: "Enroll",
		path: "/enroll",
		blurb: "Start the 26–27 school year. Often complete in one day."
	},
	{
		title: "Schedule a tour",
		path: "/tour",
		blurb: "Walk a Tucson or Yuma classroom on a weekday morning."
	},
	{
		title: "See how my child is doing",
		path: "/portal",
		blurb: "Parent portal — daily notes, meals, photos. Demo code QUEST / Chen."
	},
	{
		title: "Contact",
		path: "/contact",
		blurb: "1-800-379-9083 · hello@capstonequestacademy.org"
	}
];
function SiteSearch({ variant = "text" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setOpen(true);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const hits = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		if (!needle) return searchIndex;
		return searchIndex.filter((p) => p.title.toLowerCase().includes(needle) || p.blurb.toLowerCase().includes(needle));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: cn("inline-flex items-center font-semibold text-ink/70 hover:text-navy", variant === "icon" ? "size-9 justify-center rounded-full hover:bg-paper-soft" : "gap-1.5 text-[13px]"),
		"aria-label": "Search the site",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" }), variant === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Search" }) : null]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			setOpen(next);
			if (!next) setQ("");
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-lg p-0 sm:rounded-[24px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				className: "px-5 pt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Search Capstone Quest" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Campuses, programs, careers…",
					className: "h-11 w-full rounded-md border border-input bg-paper px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 max-h-72 overflow-y-auto",
					children: hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-2 py-6 text-center text-sm text-muted",
						children: "No matching pages."
					}) : hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "w-full rounded-xl px-3 py-2.5 text-left hover:bg-paper-soft",
						onClick: () => {
							setOpen(false);
							setQ("");
							navigate({ to: hit.path });
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-navy",
							children: hit.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: hit.blurb
						})]
					}) }, hit.path))
				})]
			})]
		})
	})] });
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-navy text-paper shadow-[0_8px_18px_-10px_rgb(13_44_107_/_0.7)] hover:bg-navy-mid",
			brand: "bg-brand text-paper shadow-[0_8px_18px_-10px_rgb(26_77_184_/_0.6)] hover:bg-navy",
			gold: "bg-gold text-ink hover:bg-gold-deep",
			outline: "border-2 border-navy bg-paper text-navy hover:bg-paper-soft",
			ghost: "text-navy hover:bg-paper-soft",
			link: "text-brand underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 rounded-full px-5 text-sm",
			sm: "h-9 rounded-full px-4 text-sm",
			lg: "h-12 rounded-full px-6 text-[15px]",
			xl: "h-14 rounded-full px-7 text-base",
			icon: "size-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
function DropdownMenuContent({ className, sideOffset = 8, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset,
		className: cn("z-50 min-w-48 overflow-hidden rounded-2xl bg-paper p-1.5 shadow-card data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props
	}) });
}
function DropdownMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("flex cursor-pointer items-center rounded-xl px-3 py-2.5 text-sm font-medium text-ink outline-none select-none hover:bg-paper-soft focus:bg-paper-soft", className),
		...props
	});
}
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger;
function SheetContent({ className, children, side = "right", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, { className: "fixed inset-0 z-50 bg-navy-deep/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed z-50 flex h-full w-[min(100%,22rem)] flex-col bg-paper p-6 shadow-card transition ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-150 data-[state=open]:duration-400", side === "right" && "top-0 right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", side === "left" && "top-0 left-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 rounded-full p-1 text-muted hover:bg-paper-soft hover:text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 pr-8", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("text-lg font-bold text-navy", className),
		...props
	});
}
function DropTrigger({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
		className: "inline-flex items-center gap-0.5 px-1 pb-1 text-[13px] font-semibold tracking-[0.04em] text-ink/80 uppercase outline-none hover:text-navy data-[state=open]:text-navy",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })]
	});
}
function TextLink({ to, active, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("relative px-1 pb-1 text-[13px] font-semibold tracking-[0.04em] text-ink/80 uppercase transition-colors hover:text-navy", active && "text-navy"),
		children: [children, active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-gold" }) : null]
	});
}
function TopBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-gold text-navy",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-center px-4 py-2 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-center text-sm font-bold sm:text-base",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					className: "size-3.5 shrink-0 fill-navy text-navy",
					"aria-hidden": true
				}), "Only a few spots left in Tucson & Yuma"]
			})
		})
	});
}
var mobileLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/campuses",
		label: "Campuses"
	},
	{
		to: "/info",
		label: "Info"
	},
	{
		to: "/programs",
		label: "Programs"
	},
	{
		to: "/clever",
		label: "Clever"
	},
	{
		to: "/careers",
		label: "Careers"
	},
	{
		to: "/contact",
		label: "Contact"
	},
	{
		to: "/parents",
		label: "Parent resources"
	},
	{
		to: "/portal",
		label: "See how my child is doing"
	},
	{
		to: "/tour",
		label: "Schedule a tour"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-paper/95 shadow-[var(--shadow-nav)] backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden border-b border-line sm:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1400px] items-center justify-end gap-3 px-4 py-1.5 sm:px-6 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portal",
						className: "text-[13px] font-semibold text-ink/70 underline-offset-2 hover:text-navy hover:underline",
						children: "See how my child is doing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink/25",
						"aria-hidden": true,
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteSearch, { variant: "text" })
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center gap-3 px-3 py-2 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "-my-2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "ml-2 hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
							to: "/",
							active: pathname === "/",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropTrigger, { children: "Campuses" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "start",
							children: [campuses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/campuses/$slug",
									params: { slug: c.slug },
									children: c.name
								})
							}, c.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/campuses",
									children: "All campuses"
								})
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropTrigger, { children: "Info" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/info",
										children: "Info home"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										children: "About us"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/programs",
										children: "Programs"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/parents",
										children: "Parent resources"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/why-us",
										children: "Why us"
									})
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
							to: "/clever",
							active: pathname === "/clever",
							children: "Clever"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
							to: "/careers",
							active: pathname === "/careers",
							children: "Careers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
							to: "/contact",
							active: pathname === "/contact",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2 lg:ml-0 lg:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteSearch, { variant: "icon" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: school.phoneHref,
							className: "hidden items-center gap-2 text-sm font-bold text-brand xl:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), school.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "brand",
							size: "sm",
							className: "sm:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/enroll",
								children: "Enroll"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "brand",
							size: "lg",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/enroll",
								children: "Enroll"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "lg:hidden",
									"aria-label": "Open menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Menu" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 overflow-y-auto text-base font-semibold text-navy",
								children: [
									mobileLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										onClick: () => setOpen(false),
										className: "rounded-xl px-3 py-3 hover:bg-paper-soft",
										children: item.label
									}, item.to)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "mt-4",
										variant: "brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/enroll",
											onClick: () => setOpen(false),
											children: "Enroll"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: school.phoneHref,
										className: "mt-2 px-3 text-sm text-brand",
										children: school.phone
									})
								]
							})] })]
						})
					]
				})
			]
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { DialogTitle as a, campuses as c, faqs as d, parentDocuments as f, testimonials as g, staff as h, DialogHeader as i, cn as l, school as m, Dialog as n, SiteShell as o, programs as p, DialogContent as r, academyColors as s, Button as t, dayInTheLife as u };
