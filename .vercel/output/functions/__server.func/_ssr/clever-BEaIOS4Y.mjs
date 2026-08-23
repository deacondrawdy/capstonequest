import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { w as ExternalLink } from "../_libs/lucide-react.mjs";
import { o as SiteShell, t as Button } from "./site-shell-BloWSPhE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clever-BEaIOS4Y.js
var import_jsx_runtime = require_jsx_runtime();
var portals = [
	{
		name: "Clever",
		href: "https://clever.com/oauth/login",
		blurb: "The single sign-on the current AmeriSchools site uses for students and staff."
	},
	{
		name: "PowerSchool",
		href: "https://amerischools.powerschool.com/public/home.html",
		blurb: "Attendance, grades for K–8 siblings, and the historic “See how my child is doing” link."
	},
	{
		name: "ClassDojo",
		href: "https://www.classdojo.com/",
		blurb: "Classroom stories and messages from the lead teacher."
	},
	{
		name: "RAZ Kids",
		href: "https://www.raz-kids.com/",
		blurb: "Leveled readers for Pre-K 4s who are ready for books at home."
	},
	{
		name: "Khan Academy Kids",
		href: "https://www.khanacademy.org/kids",
		blurb: "Optional practice — never homework for three-year-olds."
	}
];
function CleverPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-navy py-14 text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[800px] px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold tracking-[0.14em] text-gold uppercase",
					children: "Clever"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl font-extrabold tracking-tight",
					children: "Portals families already know"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-paper/80",
					children: "The live AmeriSchools site sends “See how my child is doing” to PowerSchool and puts Clever in the top bar. Those links still work. For Pre-K daily life — meals, rest, photos — use our parent portal."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "gold",
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portal",
						children: "Open the Pre-K parent portal"
					})
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[800px] space-y-4 px-5 py-14 sm:px-8",
		children: [portals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: p.href,
			target: "_blank",
			rel: "noreferrer",
			className: "flex items-start justify-between gap-4 rounded-[24px] border border-line p-5 hover:bg-paper-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold text-navy",
				children: p.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm text-muted",
				children: p.blurb
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mt-1 size-4 shrink-0 text-brand" })]
		}, p.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "pt-4 text-xs text-muted",
			children: [
				"Demo the redesigned portal with family code ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "QUEST" }),
				" and last name ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Chen" }),
				"."
			]
		})]
	})] });
}
//#endregion
export { CleverPage as component };
