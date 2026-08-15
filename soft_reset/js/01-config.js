/* ==========================================================================
   SOFT_RESET   01 CONFIG
   Core SugarCube engine configuration.
   ========================================================================== */

Config.saves.maxSlotSaves = 8;
Config.saves.maxAutoSaves = 1;
Config.saves.isAllowed = function () {
	// Block autosave/manual save on transient system screens.
	var blocked = ["Start", "AgeGate", "CharCreate", "CharCreate2"];
	return blocked.indexOf(State.passage) === -1;
};

Config.history.maxStates = 40;

Config.passages.nobr = true;
Config.passages.displayTitles = false;
Config.passages.transitionOut = 1; // let our CSS handle passage fade-ins

Config.ui.stowBarInitially = false; // our own nav-toggles.js owns initial stow state
Config.ui.updateStoryElements = true;

Config.macros.maxLoopIterations = 5000;

document.documentElement.lang = "en"; // required by some browsers for CSS hyphens:auto to fire
