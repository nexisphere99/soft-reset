/* ==========================================================================
   SOFT_RESET   07 RELATIONSHIP / AFFINITY SYSTEM
   Generic affinity tracking for the five main partners plus supporting
   NPCs. Scaffold for Day 1+ content   not exercised during Day 0.
   ========================================================================== */

window.SOFT_RESET = window.SOFT_RESET || {};
window.SOFT_RESET.mainPartners = ["jake", "marcus", "sophie", "river", "vanessa"];

/**
 * window.rbAffinityChange(npcKey, amount)
 * npcKey: one of SOFT_RESET.mainPartners, or a supporting-NPC variable name
 * stored directly on State.variables (e.g. "luna" -> $lunaAffinity).
 */
window.rbAffinityChange = function (npcKey, amount) {
	var sv = State.variables;

	if (window.SOFT_RESET.mainPartners.indexOf(npcKey) !== -1) {
		var npc = sv[npcKey];
		if (!npc) { return; }
		npc.affinity = Math.clamp((npc.affinity || 0) + amount, -100, 100);
		window.rbCheckAffinityMilestones(npcKey, npc.affinity);
		return npc.affinity;
	}

	var flagKey = npcKey + "Affinity";
	sv[flagKey] = Math.clamp((sv[flagKey] || 0) + amount, -100, 100);
	return sv[flagKey];
};

window.rbCheckAffinityMilestones = function (npcKey, value) {
	var sv = State.variables;
	sv.thresholdsFired = sv.thresholdsFired || {};
	[25, 50, 75, 100].forEach(function (mark) {
		var key = npcKey + "-affinity:" + mark;
		if (value >= mark && !sv.thresholdsFired[key]) {
			sv.thresholdsFired[key] = true;
			if (typeof window.rbAddMilestone === "function") {
				window.rbAddMilestone(window.rbCap(npcKey) + "'s affinity reached " + mark + ".");
			}
		}
	});
};

/**
 * window.rbMeet(npcKey)
 * Marks a main partner as met (idempotent).
 */
window.rbMeet = function (npcKey) {
	var sv = State.variables;
	if (window.SOFT_RESET.mainPartners.indexOf(npcKey) !== -1 && sv[npcKey]) {
		sv[npcKey].met = true;
	}
};
