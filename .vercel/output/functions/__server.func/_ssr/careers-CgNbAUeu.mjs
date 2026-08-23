import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Heart, c as Sparkles, i as Users, n as Wallet } from "../_libs/lucide-react.mjs";
import { c as campuses, o as SiteShell, t as Button } from "./site-shell-BloWSPhE.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Label, t as Input } from "./label-CN_14JAH.mjs";
import { t as Textarea } from "./textarea-BJw-bvxz.mjs";
import { r as saveJobApp } from "./inquiries-CQQXd2HW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-CgNbAUeu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var perks = [
	{
		icon: Users,
		title: "Small classes",
		text: "Teach ten children, not thirty. You will actually know every family."
	},
	{
		icon: Wallet,
		title: "Real benefits",
		text: "Insurance, retirement contributions, tuition reimbursement, extra-income incentives."
	},
	{
		icon: Sparkles,
		title: "Room to invent",
		text: "Studios, outdoor play, and a curriculum that still lets teachers be creative."
	},
	{
		icon: Heart,
		title: "A family shop",
		text: "Pre-K campuses in Tucson and Yuma with the same calm, DES-approved culture."
	}
];
var openings = [
	{
		role: "Lead Pre-K Teacher",
		campus: "Tucson or Yuma",
		req: "Fingerprint clearance, bachelor’s degree, AEPA or NES preferred."
	},
	{
		role: "Assistant Teacher",
		campus: "Tucson or Yuma",
		req: "Love of three-to-five-year-olds, classroom experience a plus."
	},
	{
		role: "Before & After Care Lead",
		campus: "Either campus",
		req: "7:00 AM start or 3:30–6:00 PM close. Reliable, warm, certified."
	}
];
function CareersPage() {
	const [done, setDone] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		saveJobApp({
			name: String(fd.get("name") ?? ""),
			email: String(fd.get("email") ?? ""),
			phone: String(fd.get("phone") ?? ""),
			role: String(fd.get("role") ?? ""),
			campus: String(fd.get("campus") ?? ""),
			message: String(fd.get("message") ?? "")
		});
		setDone(true);
		toast.success("Application received.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-navy py-14 text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[800px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold tracking-[0.14em] text-gold uppercase",
						children: "Careers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl font-extrabold tracking-tight",
						children: "Come teach the year that matters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-paper/80",
						children: "Capstone Quest hires people who like small rooms, real play, and parents who want to be partners. Fingerprint clearance is required. A bachelor’s degree and AEPA or NES are expected for lead roles."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-[1100px] gap-6 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4",
			children: perks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-[24px] bg-paper-soft p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-7 text-brand" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-bold text-navy",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: p.text
					})
				]
			}, p.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1100px] gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-extrabold text-navy",
				children: "Open roles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-4",
				children: openings.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[24px] border border-line p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-navy",
							children: o.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-brand",
							children: o.campus
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: o.req
						})
					]
				}, o.role))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[28px] bg-paper-soft p-6 sm:p-8",
				children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold text-navy",
					children: "Thank you — a director will write back if there’s a match."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-navy",
							children: "Apply"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "phone",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								name: "phone",
								type: "tel",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "role",
								children: "Role"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "role",
								name: "role",
								className: "h-11 rounded-md border border-input bg-paper px-3 text-sm",
								children: openings.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o.role }, o.role))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "campus",
								children: "Campus"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "campus",
								name: "campus",
								className: "h-11 rounded-md border border-input bg-paper px-3 text-sm",
								children: [campuses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c.name }, c.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Either campus" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "Why this work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							children: "Submit application"
						})
					]
				})
			})]
		})
	] });
}
//#endregion
export { CareersPage as component };
