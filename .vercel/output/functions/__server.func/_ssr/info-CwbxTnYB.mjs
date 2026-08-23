import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as BookOpen, C as FileText, O as CalendarDays, S as GraduationCap, i as Users, k as Building2 } from "../_libs/lucide-react.mjs";
import { o as SiteShell } from "./site-shell-BloWSPhE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/info-CwbxTnYB.js
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		icon: Building2,
		title: "About Capstone Quest",
		text: "DES-approved Pre-K in Tucson and Yuma since 2013. Little steps, big dreams.",
		to: "/about",
		cta: "Our story"
	},
	{
		icon: GraduationCap,
		title: "Programs",
		text: "Pre-K 3s, Pre-K 4s, and before & after care, 7 AM–6 PM, five days a week.",
		to: "/programs",
		cta: "See programs"
	},
	{
		icon: Users,
		title: "Parent resources",
		text: "Handbooks, menus, parent rights, wellness policy, and supplies.",
		to: "/parents",
		cta: "For parents"
	},
	{
		icon: BookOpen,
		title: "Clever & portals",
		text: "Clever, PowerSchool, ClassDojo, RAZ Kids — plus the Pre-K parent portal.",
		to: "/clever",
		cta: "Open portals"
	},
	{
		icon: CalendarDays,
		title: "Schedule a tour",
		text: "Walk a real morning meeting. Most tours last about 40 minutes.",
		to: "/tour",
		cta: "Book a tour"
	},
	{
		icon: FileText,
		title: "Why families stay",
		text: "Small classes, school-ready play, and a day that still feels like childhood.",
		to: "/why-us",
		cta: "Why us"
	}
];
function InfoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-paper-soft py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[800px] px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
					children: "Info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl font-extrabold tracking-tight text-navy",
					children: "The school, in one place"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Everything that used to live under Info on the current site — about us, programs, parent resources, and portals — rewritten for Pre-K families."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-[1100px] gap-5 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-3",
		children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-[28px] border border-line p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-7 text-brand" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-lg font-bold text-navy",
					children: c.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: c.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: c.to,
					className: "mt-4 inline-flex text-sm font-semibold text-brand hover:underline",
					children: [c.cta, " →"]
				})
			]
		}, c.title))
	})] });
}
//#endregion
export { InfoPage as component };
