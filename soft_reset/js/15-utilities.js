/* ==========================================================================
   SOFT_RESET   15 UTILITIES
   Generic helper functions used across every other system file.
   ========================================================================== */

window.SOFT_RESET = window.SOFT_RESET || {};

/* Safety net   SugarCube ships Math.clamp, but define a fallback in case
   a future story-format update drops it. */
if (typeof Math.clamp !== "function") {
	Math.clamp = function (num, min, max) {
		num = Number(num);
		min = Number(min);
		max = Number(max);
		return num < min ? min : (num > max ? max : num);
	};
}

/* Inclusive random integer. */
window.rbRandom = function (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* Pick a random element from an array. */
window.rbPick = function (arr) {
	if (!arr || !arr.length) { return undefined; }
	return arr[window.rbRandom(0, arr.length - 1)];
};

/* Weighted random pick   items: [{ weight, value }, ...] */
window.rbWeightedPick = function (items) {
	var total = items.reduce(function (sum, it) { return sum + (it.weight || 0); }, 0);
	var roll = Math.random() * total;
	for (var i = 0; i < items.length; i++) {
		roll -= (items[i].weight || 0);
		if (roll <= 0) { return items[i].value; }
	}
	return items.length ? items[items.length - 1].value : undefined;
};

/* Format a number as currency: 1234 -> "$1,234" */
window.rbMoney = function (amount) {
	var n = Math.round(Number(amount) || 0);
	var neg = n < 0;
	n = Math.abs(n);
	var str = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return (neg ? "-$" : "$") + str;
};

/* Capitalize the first letter of a string. */
window.rbCap = function (str) {
	str = String(str || "");
	return str.charAt(0).toUpperCase() + str.slice(1);
};

/* Zero-pad a number to a given width. */
window.rbPad = function (num, width) {
	var s = String(Math.trunc(num));
	while (s.length < width) { s = "0" + s; }
	return s;
};

/* Deep-ish clone for plain JSON-safe objects/arrays (state snapshots, etc). */
window.rbClone = function (obj) {
	return JSON.parse(JSON.stringify(obj));
};

/* Icon / label lookups shared by widgets. */
window.SOFT_RESET.timeIcons = { Morning: "🌅", Afternoon: "☀️", Evening: "🌆", Night: "🌙" };

window.SOFT_RESET.statColors = {
	fem: "var(--rose)", cor: "var(--red)", con: "var(--gold)",
	att: "var(--accent)", fit: "var(--green)", int: "var(--blue)",
	money: "var(--gold)", energy: "var(--green)", stress: "var(--red)",
	sub: "var(--accent)", dom: "var(--red)", exhib: "var(--rose)",
	maternal: "var(--gold)", addiction: "var(--red)", arousal: "var(--rose)"
};

window.SOFT_RESET.statNames = {
	fem: "FEM", cor: "COR", con: "CON", att: "ATT", fit: "FIT", int: "INT",
	money: "$", energy: "⚡", stress: "😰", sub: "SUB", dom: "DOM",
	exhib: "EXH", maternal: "MAT", addiction: "ADD", arousal: "🔥"
};
