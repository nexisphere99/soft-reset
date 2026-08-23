/* ==========================================================================
   SECOND_SKIN   11 RANDOM NPC ENCOUNTERS
   Weighted encounter-pool selection by location. Scaffold   pools are
   populated by future passage files pushing into window.SECOND_SKIN.encounterPools.
   ========================================================================== */

window.SECOND_SKIN = window.SECOND_SKIN || {};
window.SECOND_SKIN.encounterPools = window.SECOND_SKIN.encounterPools || {
	campus: [], gym: [], nightlife: [], transit: [], delivery: []
};

/**
 * window.rbRollEncounter(poolName)
 * Pool entries: { weight, passage, minDay, requires: fn(sv) -> bool }
 * Returns a passage name to <<goto>>, or null if nothing qualifies.
 */
window.rbRollEncounter = function (poolName) {
	var sv = State.variables;
	var pool = window.SECOND_SKIN.encounterPools[poolName] || [];
	var eligible = pool.filter(function (entry) {
		if (entry.minDay && sv.day < entry.minDay) { return false; }
		if (typeof entry.requires === "function" && !entry.requires(sv)) { return false; }
		return true;
	});
	if (!eligible.length) { return null; }
	return window.rbWeightedPick(eligible.map(function (e) {
		return { weight: e.weight || 1, value: e.passage };
	}));
};

/**
 * window.rbRegisterEncounter(poolName, entry)
 * Called by NPC/location passage files to add themselves to a pool.
 */
window.rbRegisterEncounter = function (poolName, entry) {
	window.SECOND_SKIN.encounterPools[poolName] = window.SECOND_SKIN.encounterPools[poolName] || [];
	window.SECOND_SKIN.encounterPools[poolName].push(entry);
};
