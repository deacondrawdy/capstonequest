import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as Check } from "../_libs/lucide-react.mjs";
import { o as SiteShell, p as programs, t as Button } from "./site-shell-BloWSPhE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-BTMFjV3F.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-paper-soft py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1100px] px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
					children: "Programs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl font-extrabold tracking-tight text-navy",
					children: "Pre-K built for ages 3–5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "Play first. Skills close behind. Every program is DES-approved and taught by teachers who stay with your child through the year."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1100px] space-y-16 px-5 py-14 sm:px-8",
		children: programs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: p.slug,
			className: "grid scroll-mt-28 items-center gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.image,
				alt: "",
				className: `h-72 w-full rounded-[28px] object-cover ${i % 2 ? "lg:order-2" : ""}`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-bold tracking-wide text-brand uppercase",
					children: [
						p.ages,
						" · ",
						p.hours
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-3xl font-extrabold text-navy",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: p.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2",
					children: p.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2 text-sm text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-icon-green" }), pt]
					}, pt))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/enroll",
						children: "Start enrollment"
					})
				})
			] })]
		}, p.slug))
	})] });
}
//#endregion
export { ProgramsPage as component };
