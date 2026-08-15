/* ==========================================================================
   SOFT_RESET   16 RIGHT SIDEBAR
   A second, persistent panel (mirroring the phone overlay's DOM-injection
   pattern) showing the character portrait, current outfit, body stats,
   and met-NPC relationship meters. Hidden on the pre-game system screens.

   The portrait is driven entirely by $player.portraitImg   an empty
   string renders a generic dummy silhouette (inline SVG, no asset file
   needed); setting it to a real asset path/URL (via window.rbSetPortrait()
   or a direct <<set>>) swaps in real art with zero other code changes.
   ========================================================================== */

window.SOFT_RESET = window.SOFT_RESET || {};

/* Passages where the right sidebar has no useful state to show yet. */
window.SOFT_RESET.noSidebarPassages = ["Start", "AgeGate", "CharCreate", "CharCreate2"];

window.rbEscAttr = function (str) {
	return window.rbEsc(str).replace(/"/g, "&quot;");
};

/**
 * window.rbSetPortrait(path)
 * Convenience setter for $player.portraitImg, called from passages once
 * real character art exists, e.g. <<run window.rbSetPortrait("assets/characters/mc-male/standing.png")>>
 */
window.rbSetPortrait = function (path) {
	State.variables.player.portraitImg = path || "";
	window.rbSidebarRender();
};

window.rbSidebarBuildDOM = function () {
	if (document.getElementById("rb-rightbar")) { return; }
	var el = document.createElement("div");
	el.id = "rb-rightbar";
	document.body.appendChild(el);
};

/**
 * window.rbDummyPortrait()
 * A generic standing-figure silhouette, inline as an SVG data URI  
 * a real placeholder *image* rather than an icon-and-text box, so the
 * frame always renders as art even before real character portraits exist.
 */
window.rbDummyPortrait = function () {
	var svg =
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 440">' +
			'<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
				'<stop offset="0%" stop-color="#ff5fa8"/>' +
				'<stop offset="55%" stop-color="#e04fef"/>' +
				'<stop offset="100%" stop-color="#9d3df0"/>' +
			'</linearGradient></defs>' +
			'<rect width="300" height="440" fill="#1c0f30"/>' +
			'<circle cx="150" cy="118" r="54" fill="url(#g)" opacity="0.9"/>' +
			'<path d="M150 182c-70 0-108 48-108 116v142h216V298c0-68-38-116-108-116z" fill="url(#g)" opacity="0.9"/>' +
		'</svg>';
	return "data:image/svg+xml," + encodeURIComponent(svg);
};

window.rbRenderPortrait = function (sv) {
	var img = sv.player.portraitImg;
	var isDummy = !img;
	var label = (sv.body.phase === 0) ? (sv.player.maleName || "Aiden") : (sv.player.name || "Aida");
	var src = img || window.rbDummyPortrait();

	return '<div class="rb-portrait-frame">' +
		'<img src="' + window.rbEscAttr(src) + '" alt="' + window.rbEscAttr(label) + '">' +
		(isDummy ? '<span class="rb-portrait-tag">' + window.rbEsc(label) + '</span>' : '') +
		'</div>';
};

window.rbRenderOutfit = function (sv) {
	var slots = window.SOFT_RESET.wardrobeSlots || ["top", "bottom", "bra", "underwear", "shoes", "accessory", "outerwear"];
	return slots.map(function (slot) {
		var item = sv.equipped ? sv.equipped[slot] : null;
		var val = item ? window.rbEsc(item.name) : " ";
		return '<div class="rb-outfit-row"><span class="rb-outfit-slot">' + window.rbCap(slot) + '</span><span class="rb-outfit-val">' + val + '</span></div>';
	}).join("");
};

window.rbRenderBodyStats = function (sv) {
	var b = sv.body;
	if (!b || b.phase === 0) {
		return '<p class="rb-side-note">Still yourself, for now.</p>';
	}
	var chip = function (label, val) {
		return '<div class="rb-body-chip"><span class="rb-body-label">' + label + '</span><span class="rb-body-val">' + window.rbEsc(val) + '</span></div>';
	};
	return '<div class="rb-body-grid">' +
		chip("Bust", b.bust + '"') +
		chip("Waist", b.waist + '"') +
		chip("Hips", b.hips + '"') +
		chip("Bra", b.braSize) +
		chip("Weight", b.weight + " lbs") +
		'</div>';
};

window.rbRenderRelationships = function (sv) {
	var mains = window.SOFT_RESET.mainPartners || ["jake", "marcus", "sophie", "river", "vanessa"];
	var names = { jake: "Jake", marcus: "Marcus", sophie: "Sophie", river: "River", vanessa: "Vanessa" };
	var colors = { jake: "var(--blue)", marcus: "var(--red)", sophie: "var(--rose)", river: "var(--green)", vanessa: "var(--accent)" };

	var met = mains.filter(function (k) { return sv[k] && sv[k].met; });
	if (!met.length) { return '<p class="rb-side-note">Nobody yet.</p>'; }

	return met.map(function (k) {
		var npc = sv[k];
		var pct = Math.clamp(npc.affinity, 0, 100);
		return '<div class="rb-rel-row">' +
			'<div class="rb-rel-top"><span class="rb-rel-name">' + names[k] + '</span><span class="rb-rel-num">' + npc.affinity + '</span></div>' +
			'<div class="rb-rel-track"><div class="rb-rel-fill" style="width:' + pct + '%; background:' + colors[k] + ';"></div></div>' +
			'</div>';
	}).join("");
};

window.rbSidebarRender = function () {
	var sv = State.variables;
	if (!sv || !sv.player) { return; }

	window.rbSidebarBuildDOM(); // idempotent   guarantees the element exists
	var el = document.getElementById("rb-rightbar");
	if (!el) { return; }

	var hidden = window.SOFT_RESET.noSidebarPassages.indexOf(State.passage) !== -1;
	el.classList.toggle("hidden", hidden);
	document.documentElement.classList.toggle("has-rightbar", !hidden);
	if (hidden) { return; }

	el.innerHTML =
		'<div class="rb-right-inner">' +
			'<div class="rb-right-section rb-portrait-section">' + window.rbRenderPortrait(sv) + '</div>' +
			'<div class="rb-right-section"><div class="rb-right-title">Body</div>' + window.rbRenderBodyStats(sv) + '</div>' +
			'<div class="rb-right-section"><div class="rb-right-title">People</div>' + window.rbRenderRelationships(sv) + '</div>' +
		'</div>';
	// 			'<div class="rb-right-section"><div class="rb-right-title">Outfit</div>' + window.rbRenderOutfit(sv) + '</div>' +
};

/* Render on both events rather than build-only-on-storyready   on a
   reloaded (restored) session the two can fire in either order, and
   without this the panel used to exist in the DOM but stay empty
   until the player navigated somewhere new. Both calls are cheap and
   idempotent, so firing twice back-to-back is harmless. */
$(document).on(":storyready", function () {
	window.rbSidebarRender();
});
$(document).on(":passageend", function () {
	window.rbSidebarRender();
});
