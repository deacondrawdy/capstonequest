import { v as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { T as Clock, _ as MapPin, i as Users, m as Phone } from "../_libs/lucide-react.mjs";
import { c as campuses, o as SiteShell, t as Button } from "./site-shell-BloWSPhE.mjs";
import { n as Route } from "./router-BH9KEPXW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/campuses._slug-DWrvF5BE.js
var import_jsx_runtime = require_jsx_runtime();
function CampusDetail() {
	const { slug } = Route.useParams();
	const campus = campuses.find((c) => c.slug === slug);
	if (!campus) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-64 overflow-hidden sm:h-80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: campus.image,
				alt: "",
				className: "h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-navy-deep/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-8 left-0 w-full px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1100px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-gold uppercase",
						children: "Campus"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-extrabold text-paper",
						children: campus.name
					})]
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-[1100px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg leading-relaxed text-ink/80",
				children: campus.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 space-y-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							campus.address,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							campus.cityState
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: campus.phoneHref,
							className: "font-semibold text-navy hover:underline",
							children: campus.phone
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5 text-brand" }),
							campus.hours,
							", Monday–Friday"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5 text-brand" }), campus.capacity]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tour",
						search: { campus: campus.slug },
						children: "Schedule a tour"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: campus.mapUrl,
						target: "_blank",
						rel: "noreferrer",
						children: "Open in Maps"
					})
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-[28px] bg-paper-soft p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bold text-navy",
					children: "What you’ll see on a tour"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Classrooms sized for ten children or fewer" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Shade-sail playground and outdoor studios" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Secure entry and signed-in pickup" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The same DES-approved curriculum on both campuses" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-sm text-muted",
					children: [
						"Prefer the other campus?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/campuses",
							className: "font-semibold text-brand hover:underline",
							children: "Compare locations"
						}),
						"."
					]
				})
			]
		})]
	})] });
}
//#endregion
export { CampusDetail as component };
