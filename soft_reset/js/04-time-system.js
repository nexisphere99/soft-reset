/* ==========================================================================
   SOFT_RESET   04 TIME SYSTEM
   Timeslot + day/week advancement.
   ========================================================================== */

/**
 * window.advanceTime()
 * Moves to the next timeslot in the day. If already in the last timeslot,
 * sends the player to the Sleep passage instead.
 */
window.advanceTime = function () {
	var sv = State.variables;
	var slots = sv.timeslots || ["Morning", "Afternoon", "Evening", "Night"];
	var idx = slots.indexOf(sv.timeslot);

	if (idx > -1 && idx < slots.length - 1) {
		sv.timeslot = slots[idx + 1];
	} else {
		Engine.play("Sleep");
		return;
	}
	sv.acted = false;
};

/**
 * window.advanceDay()
 * Increments the day counter, resets the timeslot/energy, rolls the
 * weekday, and applies passive daily effects (late-game FEM drift,
 * Phase 2 hormone progression).
 */
window.advanceDay = function () {
	var sv = State.variables;

	sv.day = (sv.day || 0) + 1;
	sv.timeslot = "Morning";
	sv.player.energy = 100;
	sv.acted = false;

	var days = sv.weekDays || ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	var idx = days.indexOf(sv.weekDay);
	sv.weekDay = days[(idx > -1 ? idx + 1 : 0) % days.length];

	if (sv.day > 30) {
		window.statChange("fem", 1, { silent: true });
	}

	if (sv.body && sv.body.phase2Active) {
		sv.body.phase2Day = (sv.body.phase2Day || 0) + 1;
		if (typeof window.checkPhase2Progress === "function") {
			window.checkPhase2Progress();
		}
	}

	if (sv.body && sv.body.menstrualDay >= 0) {
		sv.body.menstrualDay = (sv.body.menstrualDay + 1) % 28;
	}
};
