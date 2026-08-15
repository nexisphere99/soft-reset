/* ==========================================================================
   SOFT_RESET   13 SEXUAL EXPERIENCE TRACKER
   Logs encounters, tracks firsts, unlocks kinks. Scaffold for Day 1+.
   ========================================================================== */

/**
 * window.rbLogEncounter(npcId, activities)
 * activities: array of activity strings, e.g. ["oral_give", "vaginal"]
 */
window.rbLogEncounter = function (npcId, activities) {
	var sv = State.variables;
	var log = sv.sexLog;
	log.totalEncounters += 1;

	if (!log.partners[npcId]) {
		log.partners[npcId] = { encounters: 0, activities: [] };
		log.partnerCount += 1;
	}
	log.partners[npcId].encounters += 1;

	(activities || []).forEach(function (act) {
		if (log.partners[npcId].activities.indexOf(act) === -1) {
			log.partners[npcId].activities.push(act);
		}
		if (!(act in log.firsts)) {
			log.firsts[act] = sv.day;
			if (typeof window.rbAddMilestone === "function") {
				window.rbAddMilestone("First time: " + act.replace(/_/g, " ") + ".");
			}
		}
	});
};

window.rbUnlockKink = function (kinkId) {
	var sv = State.variables;
	if (!sv.sexLog.kinks[kinkId]) {
		sv.sexLog.kinks[kinkId] = true;
		if (typeof window.rbAddMilestone === "function") {
			window.rbAddMilestone("New kink discovered: " + kinkId.replace(/_/g, " ") + ".");
		}
	}
};

/**
 * window.rbLogOrientation(kind, amount)
 * kind: "hetero" | "sapphic" | "other"
 */
window.rbLogOrientation = function (kind, amount) {
	var key = kind + "Exp";
	var sv = State.variables;
	if (key in sv.sexLog.orientation) {
		sv.sexLog.orientation[key] += amount;
	}
};
