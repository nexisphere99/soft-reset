/* ==========================================================================
   SOFT_RESET   10 JOURNAL / QUEST TRACKER
   ========================================================================== */

/**
 * window.rbAddJournalEntry(title, text)
 * Logs a narrative entry stamped with the current day.
 */
window.rbAddJournalEntry = function (title, text) {
	var sv = State.variables;
	sv.journal.entries.push({ day: sv.day, title: title, text: text });
};

/**
 * window.rbAddMilestone(description)
 * Logs a short flag-style milestone (stat thresholds, firsts, etc).
 */
window.rbAddMilestone = function (description) {
	var sv = State.variables;
	sv.journal.milestones.push({ day: sv.day, name: description, description: description });
};

/**
 * window.rbAddQuest(kind, quest)
 * kind: "main" | "side". quest: { id, title, text }
 */
window.rbAddQuest = function (kind, quest) {
	var sv = State.variables;
	var list = sv.journal.quests[kind];
	if (!list.some(function (q) { return q.id === quest.id; })) {
		list.push(quest);
	}
};

/**
 * window.rbCompleteQuest(kind, questId)
 * Moves a quest from its active list into $journal.quests.completed.
 */
window.rbCompleteQuest = function (kind, questId) {
	var sv = State.variables;
	var list = sv.journal.quests[kind];
	var idx = list.findIndex(function (q) { return q.id === questId; });
	if (idx !== -1) {
		var quest = list.splice(idx, 1)[0];
		sv.journal.quests.completed.push(quest);
	}
};
