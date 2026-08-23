import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as campuses, o as SiteShell, t as Button } from "./site-shell-BloWSPhE.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as Route$2 } from "./router-BH9KEPXW.mjs";
import { n as Label, t as Input } from "./label-CN_14JAH.mjs";
import { t as Textarea } from "./textarea-BJw-bvxz.mjs";
import { i as saveTour } from "./inquiries-CQQXd2HW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tour-DNoePNWr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TourPage() {
	const { campus: preset } = Route$2.useSearch();
	const [done, setDone] = (0, import_react.useState)(null);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const row = saveTour({
			name: String(fd.get("name") ?? ""),
			email: String(fd.get("email") ?? ""),
			phone: String(fd.get("phone") ?? ""),
			campus: String(fd.get("campus") ?? ""),
			childAge: String(fd.get("childAge") ?? ""),
			date: String(fd.get("date") ?? ""),
			time: String(fd.get("time") ?? ""),
			notes: String(fd.get("notes") ?? "")
		});
		setDone(row.id);
		toast.success("Tour requested — we will confirm by email.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-[1100px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
				children: "Visit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl font-extrabold tracking-tight text-navy",
				children: "Schedule a tour"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Walk the classrooms, meet a lead teacher, and see a real morning. Most tours last about 40 minutes. We can often confirm the same day."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/circle-time.jpg",
				alt: "",
				className: "mt-8 hidden h-64 w-full rounded-[28px] object-cover lg:block"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-[28px] bg-paper-soft p-6 sm:p-8",
			children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-navy",
					children: "You’re on the calendar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "We saved your request and will email a confirmation. Want to enroll while you wait?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/enroll",
						children: "Start enrollment"
					})
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Your name",
						name: "name",
						required: true,
						className: "sm:col-span-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						name: "email",
						type: "email",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						name: "phone",
						type: "tel",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "campus",
							children: "Campus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "campus",
							name: "campus",
							defaultValue: preset ?? "tucson",
							className: "h-11 rounded-md border border-input bg-paper px-3 text-sm",
							children: campuses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.slug,
								children: c.name
							}, c.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Child’s age",
						name: "childAge",
						placeholder: "e.g. 3 years, 10 months"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred date",
						name: "date",
						type: "date",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "time",
							children: "Preferred time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "time",
							name: "time",
							className: "h-11 rounded-md border border-input bg-paper px-3 text-sm",
							defaultValue: "9:00 AM",
							children: [
								"8:30 AM",
								"9:00 AM",
								"10:30 AM",
								"1:00 PM",
								"3:30 PM"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "notes",
							children: "Anything we should know?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "notes",
							name: "notes",
							placeholder: "Sibling, DES voucher, allergies…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							children: "Request this tour"
						})
					})
				]
			})
		})]
	}) });
}
function Field({ label, name, type = "text", required, placeholder, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grid gap-1.5 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: name,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id: name,
			name,
			type,
			required,
			placeholder
		})]
	});
}
//#endregion
export { TourPage as component };
