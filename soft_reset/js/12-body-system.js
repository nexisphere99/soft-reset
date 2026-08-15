/* ==========================================================================
   SOFT_RESET   12 BODY / TRANSFORMATION SYSTEM
   Tracks measurements, phases, and Phase-2 hormone progression.
   Phase 0 = still male (Day 0). Phase 1 = B-cup (Day 1 onward, baseline).
   Phase 2/3/4 unlock via the Phase-2 medication storyline (post-Day 0).
   ========================================================================== */

window.SOFT_RESET = window.SOFT_RESET || {};

window.SOFT_RESET.cupOrder = ["A", "B", "C", "D", "DD", "DDD"];

/**
 * window.checkPhase2Progress()
 * Called once per day while $body.phase2Active is true. Advances bust
 * measurement gradually and fires a milestone when a new cup size hits.
 */
window.checkPhase2Progress = function () {
	var body = State.variables.body;
	if (!body || !body.phase2Active) { return; }

	// Roughly +0.15" of bust growth per day on Phase 2 meds.
	body.bust = Math.round((body.bust + 0.15) * 10) / 10;

	var newCup = window.rbCupForBust(body.bust, body.waist);
	if (newCup && newCup !== body.braCup) {
		var oldIdx = window.SOFT_RESET.cupOrder.indexOf(body.braCup);
		var newIdx = window.SOFT_RESET.cupOrder.indexOf(newCup);
		if (newIdx > oldIdx) {
			body.braCup = newCup;
			body.phase = Math.min(4, (body.phase || 1) + 1);
			if (typeof window.rbAddMilestone === "function") {
				window.rbAddMilestone("Grew into a " + newCup + "-cup.");
			}
		}
	}
};

/* Rough cup-size estimation from bust/underbust delta   good enough for
   narrative gating, not meant to be clinically precise. */
window.rbCupForBust = function (bust, waist) {
	var band = (waist || 26) + 4; // crude underbust approximation
	var diff = bust - band;
	if (diff < 1) { return "A"; }
	if (diff < 2) { return "B"; }
	if (diff < 3) { return "C"; }
	if (diff < 4) { return "D"; }
	if (diff < 5) { return "DD"; }
	return "DDD";
};

/**
 * window.rbSetBraSize(body)
 * Derives a display bra size string (e.g. "32B") from waist + cup.
 */
window.rbSetBraSize = function (body) {
	var band = Math.round(((body.waist || 26) + 4) / 2) * 2; // even band size
	body.braSize = band + body.braCup;
	return body.braSize;
};
