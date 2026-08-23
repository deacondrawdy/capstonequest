import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as BookOpen, D as Check, O as CalendarDays, S as GraduationCap, _ as MapPin, b as Heart, d as ShieldCheck, i as Users, j as ArrowRight, p as Play, s as Star, u as Shield } from "../_libs/lucide-react.mjs";
import { a as DialogTitle, c as campuses, g as testimonials, i as DialogHeader, l as cn, m as school, n as Dialog, o as SiteShell, p as programs, r as DialogContent, s as academyColors, t as Button, u as dayInTheLife } from "./site-shell-BloWSPhE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BxDpCplw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Three gold stars in a tight cluster — same visual weight as the other stats icons. */
function QualityFirstStars({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex w-9 shrink-0 flex-col items-center sm:w-10", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
			className: "size-4 fill-gold text-gold sm:size-[1.15rem]",
			strokeWidth: 1.6
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "-mt-1 flex items-center justify-center gap-px",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				className: "size-4 fill-gold text-gold sm:size-[1.15rem]",
				strokeWidth: 1.6
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				className: "size-4 fill-gold text-gold sm:size-[1.15rem]",
				strokeWidth: 1.6
			})]
		})]
	});
}
function VideoModal({ open, onOpenChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-3xl overflow-hidden p-0 sm:rounded-[28px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				className: "px-6 pt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "A morning at Capstone Quest" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "aspect-video w-full rounded-2xl bg-navy-deep object-cover",
					src: "/videos/classroom.mp4",
					controls: true,
					playsInline: true,
					autoPlay: open
				})
			})]
		})
	});
}
var features = [
	{
		icon: Heart,
		color: "text-icon-green",
		ring: "border-icon-green/40",
		label: "Play-Based Learning"
	},
	{
		icon: Users,
		color: "text-icon-orange",
		ring: "border-icon-orange/40",
		label: "Caring & Experienced Teachers"
	},
	{
		icon: Shield,
		color: "text-icon-purple",
		ring: "border-icon-purple/40",
		label: "Safe & Secure Environment"
	},
	{
		icon: BookOpen,
		color: "text-icon-blue",
		ring: "border-icon-blue/40",
		label: "School Ready Pre-K Curriculum"
	}
];
var reasons = [
	{
		icon: Heart,
		bg: "bg-icon-green",
		title: "Small Class Sizes",
		text: "Individualized attention for every child."
	},
	{
		icon: Shield,
		bg: "bg-icon-orange",
		title: "Safe & Secure",
		text: "Top-notch safety with trusted care."
	},
	{
		icon: GraduationCap,
		bg: "bg-icon-purple",
		title: "School Ready",
		text: "Engaging Pre-K curriculum that builds skills & confidence."
	},
	{
		icon: Users,
		bg: "bg-icon-blue",
		title: "Family Partnership",
		text: "We work together with you every step of the way."
	}
];
var remainingStats = [{
	icon: MapPin,
	color: "text-icon-pink",
	title: "Tucson & Yuma convenient locations"
}, {
	icon: ShieldCheck,
	color: "text-icon-blue",
	title: "100% Approved by DES"
}];
function Hero() {
	const [videoOpen, setVideoOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-y-0 left-[38%] right-0 hidden overflow-hidden lg:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "A preschooler coloring at a classroom table",
					className: "h-full w-full object-cover object-[15%_22%] outline-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-[1400px] px-5 pt-8 pb-8 sm:px-8 lg:min-h-[640px] lg:px-10 lg:pt-10 lg:pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-stagger relative z-10 max-w-xl lg:max-w-[32rem]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] text-brand uppercase",
							children: [
								"Pre-K Programs at",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-icon-blue text-icon-blue" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-gold text-gold" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-2 font-display text-[2.15rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-navy sm:text-5xl lg:text-[3.35rem]",
							children: ["CAPSTONE QUEST", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 flex flex-wrap text-[2.45rem] tracking-[-0.04em] sm:text-6xl lg:text-[3.9rem]",
								children: academyColors.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn(ch.className),
									children: ch.letter
								}, `${ch.letter}-${i}`))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script mt-3 text-[1.65rem] leading-none text-brand italic sm:text-[1.85rem]",
							children: "Where curiosity grows and bright futures begin."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 block h-1 w-48 rounded-full bg-gold/90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 overflow-hidden rounded-[24px] lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/hero.jpg",
								alt: "A preschooler coloring at a classroom table",
								className: "h-56 w-full object-cover object-[18%_18%] outline-none sm:h-72"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-[15px] leading-relaxed text-muted",
							children: "A nurturing, play-based learning environment that helps your child build confidence, friendships, and foundational skills for lifelong success."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid max-w-lg grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 sm:gap-x-0",
							children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: cn("flex flex-col items-center px-1 text-center sm:items-center sm:text-center", i > 0 && "sm:border-l sm:border-line"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mb-2 inline-flex size-11 items-center justify-center rounded-full border-2 bg-paper", f.ring, f.color),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
										className: "size-5",
										strokeWidth: 1.8
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-semibold leading-snug text-navy",
									children: f.label
								})]
							}, f.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/tour",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }),
										"Schedule a Tour",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											children: "→"
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "xl",
								onClick: () => setVideoOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 fill-navy" }), "Watch Our Video"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "mt-6 rounded-[24px] bg-paper p-5 shadow-card lg:absolute lg:top-[5.75rem] lg:right-6 lg:mt-0 lg:w-[18.1rem] lg:rounded-[26px] lg:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3.5 text-[13px] font-extrabold tracking-[0.08em] text-navy uppercase",
						children: "Why Families Choose Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3.5",
						children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full text-paper", r.bg),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, {
									className: "size-4",
									strokeWidth: 2.2
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-bold text-navy",
								children: r.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] leading-snug text-muted",
								children: r.text
							})] })]
						}, r.title))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-[1400px] px-4 pb-8 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-6 lg:px-10 lg:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-px overflow-hidden rounded-[22px] bg-navy-deep sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2.5 bg-navy px-3 py-4 sm:px-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
								className: "size-8 shrink-0 text-icon-green sm:size-9",
								strokeWidth: 1.7
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-left text-[12px] font-extrabold tracking-wide text-paper uppercase sm:text-[13px]",
								children: "Ages 3–5 Years"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.qualityfirstaz.com/",
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center justify-center gap-2.5 bg-navy px-3 py-4 transition-colors hover:bg-navy-mid sm:px-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityFirstStars, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-left text-[12px] font-extrabold tracking-wide text-paper uppercase sm:text-[13px]",
								children: "Quality First 3-Star Rating"
							})]
						}),
						remainingStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2.5 bg-navy px-3 py-4 sm:px-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
								className: cn("size-8 shrink-0 sm:size-9", s.color),
								strokeWidth: 1.7
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-left text-[12px] font-extrabold tracking-wide text-paper uppercase sm:text-[13px]",
								children: s.title
							})]
						}, s.title))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoModal, {
				open: videoOpen,
				onOpenChange: setVideoOpen
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-paper py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
						children: "Pre-K in Tucson & Yuma"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl",
						children: "Little steps make big dreams come true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-[15px] leading-relaxed text-muted",
						children: school.welcome
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xl text-[15px] leading-relaxed text-muted",
						children: [
							"Campuses are a home away from home — play, discovery, and a kindergarten-ready year without rushing childhood. Instruction runs five days a week. Doors open ",
							school.hours.replace("Monday–Friday, ", ""),
							", Monday–Friday, with before- and after-care for working families."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tour",
								children: "Schedule a tour"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								children: "Our story"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-1",
					children: [
						"Ages 3–5, Tucson and Yuma since 2013",
						"Open 7:00 AM – 6:00 PM, Monday–Friday",
						"Before- and after-school care on both campuses",
						"DES-approved · same classroom for every family"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 rounded-2xl border border-line bg-paper-soft px-4 py-3 text-sm font-semibold text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-icon-green" }), item]
					}, item))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper-soft py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1200px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
						children: "Our programs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl",
						children: "A Pre-K year that still feels like childhood"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "overflow-hidden rounded-[28px] bg-paper shadow-card transition-[box-shadow,transform] duration-200 hover:shadow-card-hover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: "",
								className: "h-44 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-bold tracking-wide text-brand uppercase",
										children: [
											p.ages,
											" · ",
											p.hours
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-xl font-bold text-navy",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: p.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/programs",
										hash: p.slug,
										className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline",
										children: ["See the program ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								]
							})]
						}, p.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
						children: "Two Arizona campuses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl",
						children: "Close to home in Tucson and Yuma"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-muted",
						children: "The same play-based curriculum, DES approval, and small class sizes — pick the campus that fits your morning drive."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-4",
						children: campuses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/campuses/$slug",
							params: { slug: c.slug },
							className: "block rounded-[24px] border border-line bg-paper p-5 shadow-[var(--shadow-card)] transition-transform duration-150 hover:-translate-y-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-navy",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted",
									children: [
										c.address,
										", ",
										c.cityState
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-semibold text-brand",
									children: "Visit campus →"
								})
							]
						}, c.slug))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/tucson.jpg",
						alt: "Tucson campus exterior",
						className: "h-56 w-full rounded-[24px] object-cover sm:h-72"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/yuma.jpg",
						alt: "Yuma campus exterior",
						className: "mt-8 h-56 w-full rounded-[24px] object-cover sm:h-72"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy py-16 text-paper sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1100px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-gold uppercase",
						children: "A day in Pre-K"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl",
						children: "Rhythm, play, and just enough school"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 grid gap-5 sm:grid-cols-2",
						children: dayInTheLife.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 rounded-2xl bg-white/10 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-14 shrink-0 font-extrabold text-gold tabular-nums",
								children: item.time
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-paper/75",
								children: item.detail
							})] })]
						}, item.time))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1100px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
						children: "From our families"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl",
						children: "Kindergarten-ready, still themselves"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-[28px] bg-paper-soft p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[15px] leading-relaxed text-ink",
								children: [
									"“",
									t.quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-4 text-sm font-bold text-navy",
								children: [t.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium text-muted",
									children: t.role
								})]
							})]
						}, t.name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-gold py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-extrabold text-ink sm:text-3xl",
					children: [
						"Now enrolling the ",
						school.year,
						" school year"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 flex items-center gap-2 text-sm text-ink/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " Limited seats · DES welcome · Tours most weekdays"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/enroll",
							children: "Enroll Now"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tour",
							children: "Schedule a Tour"
						})
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
