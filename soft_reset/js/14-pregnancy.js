/* ==========================================================================
   SOFT_RESET   14 PREGNANCY SYSTEM
   Conception chance, weekly progression, and effects. Scaffold   not
   reachable in Day 0, wired up for the post-transformation storyline.
   ========================================================================== */

/**
 * window.rbConceptionCheck(baseChance)
 * baseChance: 0-1 float. Call after unprotected penetrative sex once the
 * body is fertile (post-Day 1, cycling). Returns true if conception occurs.
 */
window.rbConceptionCheck = function (baseChance) {
	var sv = State.variables;
	var body = sv.body;
	if (!body || body.pregnant || body.menstrualDay < 0) { return false; }

	// Fertile window: cycle days 10-17.
	var fertile = body.menstrualDay >= 10 && body.menstrualDay <= 17;
	var chance = fertile ? (baseChance || 0.15) : (baseChance || 0.15) * 0.1;

	if (Math.random() < chance) {
		body.pregnant = true;
		body.pregnancyWeek = 0;
		if (typeof window.rbAddMilestone === "function") {
			window.rbAddMilestone("Conceived.");
		}
		return true;
	}
	return false;
};

/**
 * window.rbAdvancePregnancy()
 * Call once per week (e.g. every 7th advanceDay) while $body.pregnant.
 */
window.rbAdvancePregnancy = function () {
	var body = State.variables.body;
	if (!body || !body.pregnant) { return; }
	body.pregnancyWeek += 1;
	if (body.pregnancyWeek >= 40) {
		if (typeof window.rbAddMilestone === "function") {
			window.rbAddMilestone("Went into labor.");
		}
	}
};
