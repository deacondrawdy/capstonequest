//#region node_modules/.nitro/vite/services/ssr/assets/inquiries-CQQXd2HW.js
var TOURS_KEY = "cqa-tours";
var ENROLL_KEY = "cqa-enroll";
var CONTACT_KEY = "cqa-contact";
var JOB_KEY = "cqa-jobs";
function read(key) {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function write(key, rows) {
	localStorage.setItem(key, JSON.stringify(rows));
}
function saveTour(row) {
	const next = {
		...row,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	write(TOURS_KEY, [...read(TOURS_KEY), next]);
	return next;
}
function saveEnroll(row) {
	const next = {
		...row,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	write(ENROLL_KEY, [...read(ENROLL_KEY), next]);
	return next;
}
function saveContact(row) {
	const next = {
		...row,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	write(CONTACT_KEY, [...read(CONTACT_KEY), next]);
	return next;
}
function saveJobApp(row) {
	const next = {
		...row,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	write(JOB_KEY, [...read(JOB_KEY), next]);
	return next;
}
//#endregion
export { saveTour as i, saveEnroll as n, saveJobApp as r, saveContact as t };
