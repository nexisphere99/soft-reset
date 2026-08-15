/* ==========================================================================
   SOFT_RESET   05 STAT ENGINE
   Central function for every stat mutation in the game: caps values,
   fires toast notifications, and checks narrative thresholds.
   ========================================================================== */

/* Stats that are NOT clamped to 0-100 (money is open-ended; a few hidden
   stats use their own ranges but still clamp 0-100 by default). */
window.SOFT_RESET = window.SOFT_RESET || {};
window.SOFT_RESET.uncappedStats = ["money"];

/**
 * window.statChange(stat, amount [, opts])
 * Modifies State.variables.player[stat] by `amount`, clamps it, shows a
 * toast, and checks for threshold-triggered content flags.
 *   opts.silent  : true to suppress the toast notification
 *   opts.min/max : override the default 0-100 clamp
 */
window.statChange = function (stat, amount, opts) {
	opts = opts || {};
	var pv = State.variables.player;
	if (!pv || !(stat in pv)) { return; }

	var oldVal = pv[stat];
	var newVal;

	if (window.SOFT_RESET.uncappedStats.indexOf(stat) !== -1) {
		newVal = oldVal + amount;
	} else {
		var min = (typeof opts.min === "number") ? opts.min : 0;
		var max = (typeof opts.max === "number") ? opts.max : 100;
		newVal = Math.clamp(oldVal + amount, min, max);
	}

	pv[stat] = newVal;

	var delta = newVal - oldVal;
	if (delta !== 0) {
		if (!opts.silent) { window.showStatNotification(stat, delta); }
		window.checkThresholds(stat, newVal, oldVal);
	}

	return newVal;
};

/**
 * window.showStatNotification(stat, amount)
 * Spawns a fading toast in the corner of the screen: "FEM +3 ▲"
 */
window.showStatNotification = function (stat, amount) {
	try {
		var colors = window.SOFT_RESET.statColors || {};
		var names = window.SOFT_RESET.statNames || {};
		var sign = amount > 0 ? "+" : "";
		var arrow = amount > 0 ? "▲" : "▼";

		var el = document.createElement("div");
		el.className = "stat-toast";
		el.style.color = colors[stat] || "var(--text)";

		var label = names[stat] || stat.toUpperCase();
		var text = (stat === "money")
			? (label + " " + sign + window.rbMoney(amount))
			: (label + " " + sign + amount + " " + arrow);
		el.textContent = text;

		// Stack multiple simultaneous toasts.
		var active = document.querySelectorAll(".stat-toast").length;
		el.style.setProperty("--toast-index", active);

		document.body.appendChild(el);
		setTimeout(function () { el.classList.add("show"); }, 10);
		setTimeout(function () { el.classList.remove("show"); }, 2500);
		setTimeout(function () { el.remove(); }, 3000);
	} catch (e) {
		/* Never let a UI-only failure break gameplay. */
		console.warn("SOFT_RESET: notification failed", e);
	}
};

/**
 * window.checkThresholds(stat, newVal, oldVal)
 * Fires one-time narrative flags when a stat crosses a milestone value.
 * Fired thresholds are recorded in $thresholdsFired so they never repeat.
 */
window.checkThresholds = function (stat, newVal, oldVal) {
	var sv = State.variables;
	sv.thresholdsFired = sv.thresholdsFired || {};

	var thresholds = {
		fem:   [10, 25, 50, 75, 90],
		cor:   [10, 25, 50, 75, 90],
		con:   [10, 25, 50, 75, 90],
		att:   [25, 50, 75, 90],
		fit:   [25, 50, 75, 90],
		int:   [25, 50, 75, 90]
	};

	var marks = thresholds[stat];
	if (!marks) { return; }

	marks.forEach(function (mark) {
		var key = stat + ":" + mark;
		var crossedUp = oldVal < mark && newVal >= mark;
		if (crossedUp && !sv.thresholdsFired[key]) {
			sv.thresholdsFired[key] = true;
			if (typeof window.rbAddMilestone === "function") {
				window.rbAddMilestone(stat.toUpperCase() + " reached " + mark);
			}
		}
	});
};
