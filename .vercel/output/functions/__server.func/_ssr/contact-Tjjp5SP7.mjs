import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as MapPin, m as Phone, v as Mail } from "../_libs/lucide-react.mjs";
import { c as campuses, m as school, o as SiteShell, t as Button } from "./site-shell-BloWSPhE.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Label, t as Input } from "./label-CN_14JAH.mjs";
import { t as Textarea } from "./textarea-BJw-bvxz.mjs";
import { t as saveContact } from "./inquiries-CQQXd2HW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Tjjp5SP7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [done, setDone] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		saveContact({
			name: String(fd.get("name") ?? ""),
			email: String(fd.get("email") ?? ""),
			topic: String(fd.get("topic") ?? ""),
			message: String(fd.get("message") ?? "")
		});
		setDone(true);
		toast.success("Message sent. We’ll reply shortly.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-[1100px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl font-extrabold tracking-tight text-navy",
				children: "Let’s talk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Call, write, or send a note. Front offices answer 7:00 AM – 6:00 PM on school days."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 space-y-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: school.phoneHref,
						className: "font-semibold text-navy",
						children: school.phone
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${school.email}`,
						className: "font-semibold text-navy",
						children: school.email
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4",
				children: campuses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex gap-3 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-navy",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						c.address,
						", ",
						c.cityState,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						c.phone
					] })]
				}, c.slug))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-[28px] bg-paper-soft p-6 sm:p-8",
			children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-semibold text-navy",
				children: "Thanks — a director will write back soon."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4",
				onSubmit,
				children: [
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
							htmlFor: "topic",
							children: "Topic"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "topic",
							name: "topic",
							className: "h-11 rounded-md border border-input bg-paper px-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "General question" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Tour" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Enrollment" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "DES / tuition" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Current family" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "message",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							name: "message",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						children: "Send message"
					})
				]
			})
		})]
	}) });
}
//#endregion
export { ContactPage as component };
