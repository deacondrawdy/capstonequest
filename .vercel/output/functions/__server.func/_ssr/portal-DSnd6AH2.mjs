import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Moon, o as Sun, r as Utensils, y as LogOut } from "../_libs/lucide-react.mjs";
import { l as cn, o as SiteShell, t as Button } from "./site-shell-BloWSPhE.mjs";
import { n as Label, t as Input } from "./label-CN_14JAH.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal-DSnd6AH2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
function TabsList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		className: cn("inline-flex h-11 items-center justify-center rounded-full bg-paper-soft p-1 text-muted", className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		className: cn("inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-navy data-[state=active]:text-paper", className),
		...props
	});
}
function TabsContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		className: cn("mt-6 focus-visible:outline-none", className),
		...props
	});
}
var portalChild = {
	firstName: "Maya",
	lastName: "Chen",
	preferred: "Maya",
	age: "4 years, 8 months",
	classroom: "Sunbirds · Pre-K 4s",
	campus: "Tucson",
	teacher: "Ms. Sofia Reyes",
	photo: "/images/maya.jpg",
	startDate: "August 2025"
};
var todayReport = {
	dateLabel: "Friday, August 21",
	mood: "Sunny and focused",
	meals: [
		{
			name: "Breakfast",
			detail: "Oatmeal, blueberries, milk — ate well"
		},
		{
			name: "Lunch",
			detail: "Rice, chicken, cucumber — two helpings of fruit"
		},
		{
			name: "Snack",
			detail: "Apple slices and cheese"
		}
	],
	rest: "Slept 62 minutes. Woke happy.",
	bathroom: "Independent · no reminders needed",
	highlights: [
		"Led the morning greeting song for the first time.",
		"Built a three-level block bridge and named it “the Tucson overpass.”",
		"Wrote an M and a Y during journal time — we framed it for her cubby."
	],
	teacherNote: "Maya was a calm helper during outdoor time and invited Leo to join the block city. She asked if we could “read the moon book again tomorrow.” See you Monday! — Ms. Sofia"
};
var milestones = [
	{
		area: "Literacy",
		status: "On track",
		note: "Recognizes 18 letters; writes M, A, Y."
	},
	{
		area: "Early math",
		status: "Ahead",
		note: "Counts to 20; sorts by two attributes."
	},
	{
		area: "Social",
		status: "On track",
		note: "Uses words to join play; comforts friends."
	},
	{
		area: "Motor",
		status: "On track",
		note: "Cuts on a line; pedals a trike with ease."
	}
];
var album = [
	{
		src: "/images/blocks.jpg",
		caption: "Block city with Leo"
	},
	{
		src: "/images/art.jpg",
		caption: "Studio painting — yellows today"
	},
	{
		src: "/images/circle-time.jpg",
		caption: "Morning meeting"
	},
	{
		src: "/images/playground.jpg",
		caption: "Shade-sail recess"
	}
];
var messages = [{
	from: "Ms. Sofia Reyes",
	when: "Thu 4:12 PM",
	body: "Maya asked to bring her seashell for sharing tomorrow. Totally fine if it stays in her backpack until circle."
}, {
	from: "Front office",
	when: "Wed 9:02 AM",
	body: "Picture day is next Tuesday. Order forms are in cubbies — DES families are included at no extra cost for the class composite."
}];
var SESSION_KEY = "cqa-portal";
function PortalPage() {
	const [authed, setAuthed] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setAuthed(sessionStorage.getItem(SESSION_KEY) === "maya");
	}, []);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const code = String(fd.get("code") ?? "").trim().toUpperCase();
		const last = String(fd.get("last") ?? "").trim().toUpperCase();
		if (code === "QUEST" && last === "CHEN") {
			sessionStorage.setItem(SESSION_KEY, "maya");
			setAuthed(true);
			setError("");
		} else setError("We couldn’t find that family. Try the demo: code QUEST, last name Chen.");
	}
	if (!authed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold tracking-[0.14em] text-brand uppercase",
				children: "Parent portal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-extrabold text-navy",
				children: "See how my child is doing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					"Sign in with your family code. For this preview, use code ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "QUEST" }),
					" and last name",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Chen" }),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-4",
				onSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "code",
							children: "Family code"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "code",
							name: "code",
							autoComplete: "off",
							placeholder: "QUEST"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "last",
							children: "Child’s last name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "last",
							name: "last",
							autoComplete: "off",
							placeholder: "Chen"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						children: "Open today’s report"
					})
				]
			})
		]
	}) });
	const child = portalChild;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-paper-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1100px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: child.photo,
					alt: "",
					className: "size-20 rounded-2xl object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-wide text-brand uppercase",
							children: child.classroom
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl font-extrabold text-navy",
							children: [
								child.firstName,
								" ",
								child.lastName
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								child.age,
								" · ",
								child.campus,
								" · ",
								child.teacher
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => {
						sessionStorage.removeItem(SESSION_KEY);
						setAuthed(false);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Sign out"]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1100px] px-5 py-10 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "today",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "flex w-full flex-wrap justify-start gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "today",
							children: "Today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "learning",
							children: "Learning"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "photos",
							children: "Photos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "messages",
							children: "Messages"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "today",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: todayReport.dateLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: Sun,
									label: "Mood",
									value: todayReport.mood
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: Moon,
									label: "Rest",
									value: todayReport.rest
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: Utensils,
									label: "Meals",
									value: "Ate well at every sitting"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[24px] border border-line p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-bold text-navy",
									children: "Highlights"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 list-disc space-y-2 pl-5 text-sm text-ink/80",
									children: todayReport.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: h }, h))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[24px] bg-paper-soft p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-bold text-navy",
									children: ["Note from ", child.teacher]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink/80",
									children: todayReport.teacherNote
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-[24px] border border-line p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-bold text-navy",
								children: "Meals"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 divide-y divide-line",
								children: todayReport.meals.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex flex-col py-3 text-sm sm:flex-row sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-navy",
										children: m.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: m.detail
									})]
								}, m.name))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "learning",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: milestones.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-[24px] border border-line p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-bold text-navy",
									children: m.area
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-icon-green/15 px-2.5 py-0.5 text-xs font-bold text-success",
									children: m.status
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: m.note
							})]
						}, m.area))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "photos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: album.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "overflow-hidden rounded-[24px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.src,
								alt: p.caption,
								className: "h-56 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "bg-paper-soft px-4 py-3 text-sm font-medium text-navy",
								children: p.caption
							})]
						}, p.src))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "messages",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-[24px] border border-line p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-navy",
									children: m.from
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: m.when
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink/80",
								children: m.body
							})]
						}, m.body))
					})
				})
			]
		})
	})] });
}
function Stat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[24px] bg-paper-soft p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 text-xs font-bold tracking-wide text-muted uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-brand" }), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm font-semibold text-navy",
			children: value
		})]
	});
}
//#endregion
export { PortalPage as component };
