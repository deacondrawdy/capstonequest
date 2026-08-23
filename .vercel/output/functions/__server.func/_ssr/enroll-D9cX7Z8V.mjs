import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as campuses, o as SiteShell, p as programs, t as Button } from "./site-shell-BloWSPhE.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Label, t as Input } from "./label-CN_14JAH.mjs";
import { n as saveEnroll } from "./inquiries-CQQXd2HW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enroll-D9cX7Z8V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EnrollPage() {
	const [done, setDone] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		saveEnroll({
			childFirst: String(fd.get("childFirst") ?? ""),
			childLast: String(fd.get("childLast") ?? ""),
			dob: String(fd.get("dob") ?? ""),
			campus: String(fd.get("campus") ?? ""),
			program: String(fd.get("program") ?? ""),
			parentName: String(fd.get("parentName") ?? ""),
			email: String(fd.get("email") ?? ""),
			phone: String(fd.get("phone") ?? ""),
			des: String(fd.get("des") ?? ""),
			start: String(fd.get("start") ?? "")
		});
		setDone(true);
		toast.success("Enrollment started — we will follow up within one business day.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[760px] px-5 py-14 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
				children: "Enroll"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl font-extrabold tracking-tight text-navy",
				children: "Start in as little as one day"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Tell us about your child. If a seat is open, many families finish the packet the same day they tour."
			}),
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-[28px] bg-paper-soft p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-navy",
					children: "Application received"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "A director will call to confirm campus, start date, and any DES paperwork. Keep an eye on your email."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				onSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Child’s first name",
						name: "childFirst",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Child’s last name",
						name: "childLast",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Date of birth",
						name: "dob",
						type: "date",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred start",
						name: "start",
						type: "date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "campus",
							children: "Campus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "campus",
							name: "campus",
							className: "h-11 rounded-md border border-input bg-paper px-3 text-sm",
							defaultValue: "tucson",
							children: campuses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.slug,
								children: c.name
							}, c.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "program",
							children: "Program"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "program",
							name: "program",
							className: "h-11 rounded-md border border-input bg-paper px-3 text-sm",
							children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: p.slug,
								children: p.name
							}, p.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Parent / guardian",
						name: "parentName",
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
						className: "grid gap-1.5 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "des",
							children: "Will you use a DES child care subsidy?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "des",
							name: "des",
							className: "h-11 rounded-md border border-input bg-paper px-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "not-sure",
									children: "Not sure yet"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "yes",
									children: "Yes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "no",
									children: "No — private pay"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							children: "Submit enrollment"
						})
					})
				]
			})
		]
	}) });
}
function Field({ label, name, type = "text", required, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grid gap-1.5 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: name,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id: name,
			name,
			type,
			required
		})]
	});
}
//#endregion
export { EnrollPage as component };
