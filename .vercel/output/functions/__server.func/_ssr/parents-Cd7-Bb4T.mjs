import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as FileText, O as CalendarDays, l as Smartphone, w as ExternalLink, x as HeartHandshake } from "../_libs/lucide-react.mjs";
import { d as faqs, f as parentDocuments, o as SiteShell, t as Button } from "./site-shell-BloWSPhE.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-CFv8wYsm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/parents-Cd7-Bb4T.js
var import_jsx_runtime = require_jsx_runtime();
var resources = [
	{
		icon: Smartphone,
		title: "Parent portal",
		text: "Daily notes, photos, meals, and messages from your child’s teacher.",
		to: "/portal",
		cta: "See how my child is doing"
	},
	{
		icon: CalendarDays,
		title: "Tours & calendar",
		text: "Walk the campus, meet teachers, and peek at a real morning meeting.",
		to: "/tour",
		cta: "Schedule a tour"
	},
	{
		icon: FileText,
		title: "Enrollment packet",
		text: "Health forms, emergency contacts, and DES paperwork in one sitting.",
		to: "/enroll",
		cta: "Start enrollment"
	},
	{
		icon: HeartHandshake,
		title: "Family partnership",
		text: "Conferences twice a year, open-door mornings, and teachers who call back.",
		to: "/contact",
		cta: "Talk with us"
	}
];
function ParentsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-paper-soft py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[800px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
						children: "Parents"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl font-extrabold tracking-tight text-navy",
						children: "You’re on the team"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Handbooks, menus, the portal, and the same family resources that live under Info on the current site."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-[1100px] gap-6 px-5 py-14 sm:px-8 md:grid-cols-2",
			children: resources.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-[28px] border border-line p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "size-8 text-brand" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-xl font-bold text-navy",
						children: r.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: r.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: r.to,
						className: "mt-4 inline-flex text-sm font-semibold text-brand hover:underline",
						children: [r.cta, " →"]
					})
				]
			}, r.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-paper py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1100px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold text-navy",
						children: "Handbooks, menus & forms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "The same documents families download from AmeriSchools Info — parent rights, wellness, menus, and supplies."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: parentDocuments.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: doc.href,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-start justify-between gap-3 rounded-2xl border border-line p-4 hover:bg-paper-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-navy",
								children: doc.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: doc.blurb
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mt-1 size-4 shrink-0 text-brand" })]
						}) }, doc.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "tuition",
			className: "scroll-mt-28 bg-navy py-14 text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[800px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold",
						children: "Tuition & DES"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-paper/80",
						children: "We are 100% approved by the Arizona Department of Economic Security. Families using a DES child care subsidy enroll in the same classrooms as private-pay families. Ask during your tour about current rates, sibling discounts, and how we handle vouchers — we will walk the paperwork with you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "gold",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Ask about tuition"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[800px] px-5 py-14 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold text-navy",
				children: "Parent FAQs"
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
export { ParentsPage as component };
