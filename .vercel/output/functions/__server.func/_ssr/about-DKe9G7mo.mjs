import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as staff, o as SiteShell, t as Button } from "./site-shell-BloWSPhE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DKe9G7mo.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-paper-soft py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[800px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
						children: "About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl font-extrabold tracking-tight text-navy",
						children: "A quest for curious kids"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-muted",
						children: "Welcome to Capstone Quest Academy, where little steps make big dreams come true. Since 2013 our Tucson and Yuma campuses have been a home away from home — a DES-certified Pre-K that prepares children aged three to five for kindergarten without rushing childhood."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "The instructional day runs five days a week. Early arrival (7:00–8:00 AM) and late dismissal (3:30–6:00 PM) are offered as fee-for-service care so working families can use the full 7 AM–6 PM window."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/circle-time.jpg",
				alt: "Circle time in a Capstone Quest classroom",
				className: "h-80 w-full rounded-[28px] object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold text-navy",
					children: "What we believe"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Children learn by doing, talking, and belonging. Our teachers design studios — art, blocks, stories, outdoor science — where literacy and math show up as tools, not drills. Families are partners, not visitors."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Owl (our mortarboarded mascot) stands for wisdom earned gently: try, notice, try again."
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper-soft py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1100px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold text-navy",
						children: "People who know your child"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-2",
						children: staff.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex gap-5 rounded-[28px] bg-paper p-5 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.image,
								alt: s.name,
								className: "size-28 shrink-0 rounded-2xl object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-navy",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-semibold text-brand",
									children: [
										s.role,
										" · ",
										s.campus
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: s.bio
								})
							] })]
						}, s.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tour",
							children: "Meet us on a tour"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
