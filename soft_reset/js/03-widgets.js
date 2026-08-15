/* ==========================================================================
   SOFT_RESET   03 WIDGET HELPERS
   Small pure functions used by the SugarCube widgets defined in
   passages/system/widgets.twee (widgets themselves must live in a
   [widget]-tagged passage, not in a .js file).
   ========================================================================== */

window.SOFT_RESET = window.SOFT_RESET || {};

/* Turns an NPC display name into a CSS-safe class suffix:
   "Dr. Amelia" -> "dr-amelia", "Mrs. Calloway" -> "mrs-calloway" */
window.rbSlug = function (name) {
	return String(name || "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
};

/* Clamp + round a percentage for stat-bar widths. */
window.rbPct = function (val, max) {
	max = max || 100;
	return Math.clamp(Math.round((val / max) * 100), 0, 100);
};
