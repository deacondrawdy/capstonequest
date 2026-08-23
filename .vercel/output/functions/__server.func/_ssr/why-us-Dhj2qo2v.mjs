import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { S as GraduationCap, b as Heart, i as Users, u as Shield } from "../_libs/lucide-react.mjs";
import { d as faqs, g as testimonials, o as SiteShell, u as dayInTheLife } from "./site-shell-BloWSPhE.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-CFv8wYsm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-us-Dhj2qo2v.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		icon: Heart,
		title: "Small by design",
		text: "Classes of ten or fewer mean your child is known — not managed. Teachers write real notes, not templates."
	},
	{
		icon: Shield,
		title: "Safety you can feel",
		text: "Secure entries, signed pickup, trained staff, and a culture of calm. We are 100% DES-approved and state-licensed."
	},
	{
		icon: GraduationCap,
		title: "School-ready, still playful",
		text: "Literacy, math, and self-help skills live inside studios and stories — never worksheets for three-year-olds."
	},
	{
		icon: Users,
		title: "Family partnership",
		text: "Tours, conferences, and a parent portal so you never have to wonder how the day actually went."
	}
];
function WhyUsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-navy py-16 text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1100px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-gold uppercase",
						children: "Why us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl",
						children: "The Pre-K Arizona families stay with"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-paper/75",
						children: "Since 2013 we have been the DES-certified home away from home in Tucson and Yuma — affordable on purpose, excellent on purpose."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-[1100px] gap-6 px-5 py-14 sm:px-8 md:grid-cols-2",
			children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-[28px] bg-paper-soft p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-8 text-brand" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-xl font-bold text-navy",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: p.text
					})
				]
			}, p.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "safety",
			className: "scroll-mt-28 bg-paper-soft py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1100px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/playground.jpg",
					alt: "Shaded preschool playground",
					className: "h-72 w-full rounded-[28px] object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold text-navy",
					children: "Approved by DES. Built for families."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Both campuses are fully approved by the Arizona Department of Economic Security. We accept child care subsidies, and every family — voucher or private pay — gets the same classroom, the same teachers, the same day."
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "day",
			className: "scroll-mt-28 py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[900px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold text-navy",
					children: "A day in Pre-K"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 space-y-4",
					children: dayInTheLife.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[4.5rem_1fr] gap-4 border-b border-line pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-extrabold text-brand tabular-nums",
							children: item.time
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-navy",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.detail
						})] })]
					}, item.time))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper-soft py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1100px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold text-navy",
					children: "Families in their own words"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-3",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "rounded-[28px] bg-paper p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed",
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
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[800px] px-5 py-14 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold text-navy",
				children: "Questions we hear on every tour"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-6",
				children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: f.q,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
				}, f.q))
			})]
		})
	] });
}
//#endregion
export { WhyUsPage as component };
