/* ==========================================================================
   SOFT_RESET   17 NAV TOGGLES
   Custom open/retract handles for both sidebars.

   Left (#ui-bar) is SugarCube's native bar   we drive its real hidden
   toggle button so SugarCube's own stow bookkeeping (the ".stowed"
   class it manages) stays authoritative; we just replace how it looks
   and add a class SugarCube doesn't provide ("rb-left-open") for our
   own layout CSS to key off.

   Right (#rb-rightbar) is fully custom   "eligible" (has-rightbar, set
   by 16-right-sidebar.js based on the current passage) and "open"
   (window.SOFT_RESET.rightOpen, set by the user here) are tracked
   separately and combined into "rb-right-visible".
   ========================================================================== */

window.SOFT_RESET = window.SOFT_RESET || {};
window.SOFT_RESET.rightOpen = true;

window.rbIsMobile = function () {
	return window.innerWidth <= 899;
};

window.rbNavBuildDOM = function () {
	if (document.getElementById("rb-left-toggle")) { return; }

	var left = document.createElement("button");
	left.id = "rb-left-toggle";
	left.className = "rb-edge-toggle rb-edge-toggle--left";
	left.type = "button";
	left.setAttribute("aria-label", "Toggle stats sidebar");
	left.innerHTML = '<span class="rb-edge-arrow">‹</span>';
	document.body.appendChild(left);

	var right = document.createElement("button");
	right.id = "rb-right-toggle";
	right.className = "rb-edge-toggle rb-edge-toggle--right";
	right.type = "button";
	right.setAttribute("aria-label", "Toggle character sidebar");
	right.innerHTML = '<span class="rb-edge-arrow">›</span>';
	document.body.appendChild(right);

	var backdrop = document.createElement("div");
	backdrop.id = "rb-nav-backdrop";
	document.body.appendChild(backdrop);

	left.addEventListener("click", window.rbToggleLeft);
	right.addEventListener("click", window.rbToggleRight);
	backdrop.addEventListener("click", function () {
		if (!window.rbIsMobile()) { return; }
		var bar = document.getElementById("ui-bar");
		if (bar && !bar.classList.contains("stowed")) { window.rbToggleLeft(); }
		if (window.SOFT_RESET.rightOpen) { window.rbToggleRight(); }
	});

	// Default closed on small viewports at first load; open on desktop.
	if (window.rbIsMobile()) {
		var realToggle = document.getElementById("ui-bar-toggle");
		if (realToggle) { realToggle.click(); }
		window.SOFT_RESET.rightOpen = false;
	}

	window.rbNavSync();
};

window.rbToggleLeft = function () {
	var realToggle = document.getElementById("ui-bar-toggle");
	if (realToggle) { realToggle.click(); }
	window.rbNavSync();
};

window.rbToggleRight = function () {
	window.SOFT_RESET.rightOpen = !window.SOFT_RESET.rightOpen;
	window.rbNavSync();
};

window.rbNavSync = function () {
	var bar = document.getElementById("ui-bar");
	var leftOpen = bar ? !bar.classList.contains("stowed") : false;
	var rightEligible = document.documentElement.classList.contains("has-rightbar");
	var rightVisible = rightEligible && window.SOFT_RESET.rightOpen;

	document.documentElement.classList.toggle("rb-left-open", leftOpen);
	document.documentElement.classList.toggle("rb-right-visible", rightVisible);

	var leftToggle = document.getElementById("rb-left-toggle");
	if (leftToggle) { leftToggle.classList.toggle("is-open", leftOpen); }

	var rightToggle = document.getElementById("rb-right-toggle");
	if (rightToggle) {
		rightToggle.classList.toggle("is-open", rightVisible);
		rightToggle.classList.toggle("is-ineligible", !rightEligible);
	}

	var backdrop = document.getElementById("rb-nav-backdrop");
	if (backdrop) {
		backdrop.classList.toggle("show", window.rbIsMobile() && (leftOpen || rightVisible));
	}
};

$(document).on(":storyready", function () {
	window.rbNavBuildDOM();
});
$(document).on(":passageend", function () {
	window.rbNavSync();
});
