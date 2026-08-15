/* ==========================================================================
   SOFT_RESET   09 PHONE SYSTEM
   iOS-style overlay: SMS threads, dating app, social feed. Unlike normal
   passage content, the phone is a persistent DOM overlay appended to
   <body> once at story start so it survives passage re-renders.
   ========================================================================== */

window.SOFT_RESET = window.SOFT_RESET || {};
window.SOFT_RESET.phone = { tab: "messages", thread: null };

window.rbEsc = function (str) {
	var div = document.createElement("div");
	div.textContent = String(str == null ? "" : str);
	return div.innerHTML;
};

/**
 * window.rbPhoneOpen() / window.rbPhoneClose()
 * Toggle the persistent #phone-overlay element, building it on first use.
 */
window.rbPhoneOpen = function () {
	window.rbPhoneBuildDOM();
	var el = document.getElementById("phone-overlay");
	if (el) { el.classList.add("open"); }
	window.rbPhoneRender();
};

window.rbPhoneClose = function () {
	var el = document.getElementById("phone-overlay");
	if (el) { el.classList.remove("open"); }
};

/**
 * window.rbSendSMS(npcId, fromPlayer, text)
 * Appends a message to $phone.smsThreads[npcId] and bumps its unread flag.
 */
window.rbSendSMS = function (npcId, fromPlayer, text) {
	var sv = State.variables;
	sv.phone.smsThreads[npcId] = sv.phone.smsThreads[npcId] || [];
	sv.phone.smsThreads[npcId].push({
		from: fromPlayer ? "you" : "them",
		text: text,
		day: sv.day,
		timeslot: sv.timeslot
	});
	if (!fromPlayer) {
		sv.phone.notifications.push({ npcId: npcId, text: text, read: false });
	}
	window.rbPhoneRender();
};

/**
 * window.rbUnreadCount()
 * Total unread phone notifications, for a sidebar/HUD badge.
 */
window.rbUnreadCount = function () {
	var sv = State.variables;
	if (!sv.phone || !sv.phone.notifications) { return 0; }
	return sv.phone.notifications.filter(function (n) { return !n.read; }).length;
};

/* ---------------------------------------------------------------------
   DOM construction (once) + rendering (every open / state change)
   --------------------------------------------------------------------- */

window.rbPhoneBuildDOM = function () {
	if (document.getElementById("phone-overlay")) { return; }

	var overlay = document.createElement("div");
	overlay.id = "phone-overlay";
	overlay.innerHTML =
		'<div class="phone-frame">' +
			'<div class="phone-close" id="phone-close-btn">✕</div>' +
			'<div class="phone-notch"></div>' +
			'<div class="phone-statusbar"><span>9:41</span><span>📶 🔋</span></div>' +
			'<div class="phone-screen" id="phone-screen"></div>' +
			'<div class="phone-tabs" id="phone-tabs">' +
				'<div class="phone-tab" data-tab="messages"><span class="phone-tab-icon">💬</span>Messages</div>' +
				'<div class="phone-tab" data-tab="dating"><span class="phone-tab-icon">❤️</span>Dating</div>' +
				'<div class="phone-tab" data-tab="social"><span class="phone-tab-icon">📸</span>Social</div>' +
				'<div class="phone-tab" data-tab="gallery"><span class="phone-tab-icon">🖼️</span>Gallery</div>' +
				'<div class="phone-tab" data-tab="settings"><span class="phone-tab-icon">⚙️</span>Settings</div>' +
			'</div>' +
		'</div>';
	document.body.appendChild(overlay);

	overlay.addEventListener("click", function (ev) {
		if (ev.target === overlay) { window.rbPhoneClose(); }
	});
	document.getElementById("phone-close-btn").addEventListener("click", window.rbPhoneClose);

	document.getElementById("phone-tabs").addEventListener("click", function (ev) {
		var tabEl = ev.target.closest(".phone-tab");
		if (!tabEl) { return; }
		window.SOFT_RESET.phone.tab = tabEl.dataset.tab;
		window.SOFT_RESET.phone.thread = null;
		window.rbPhoneRender();
	});
};

window.rbPhoneRender = function () {
	var sv = State.variables;
	if (!sv || !sv.phone) { return; }

	var tabs = document.querySelectorAll("#phone-tabs .phone-tab");
	tabs.forEach(function (t) {
		t.classList.toggle("active", t.dataset.tab === window.SOFT_RESET.phone.tab);
	});

	var screen = document.getElementById("phone-screen");
	if (!screen) { return; }

	if (window.SOFT_RESET.phone.tab === "messages") {
		screen.innerHTML = window.rbPhoneMessagesView(sv);
	} else if (window.SOFT_RESET.phone.tab === "dating") {
		screen.innerHTML = '<div class="phone-app-title">Dating</div><p class="text3 small" style="padding:0 .3rem;">No matches yet. Check back after you start settling into your new life.</p>';
	} else if (window.SOFT_RESET.phone.tab === "social") {
		screen.innerHTML = '<div class="phone-app-title">Social</div><p class="text3 small" style="padding:0 .3rem;">' + (sv.phone.socialMedia.followers || 0) + ' followers. No posts yet.</p>';
	} else if (window.SOFT_RESET.phone.tab === "gallery") {
		screen.innerHTML = '<div class="phone-app-title">Gallery</div><p class="text3 small" style="padding:0 .3rem;">Your gallery is empty.</p>';
	} else if (window.SOFT_RESET.phone.tab === "settings") {
		screen.innerHTML = '<div class="phone-app-title">Settings</div><p class="text3 small" style="padding:0 .3rem;">Signed in as ' + window.rbEsc(sv.player.name || sv.player.maleName) + '.</p>';
	}

	var backBtn = document.getElementById("phone-thread-back");
	if (backBtn) {
		backBtn.addEventListener("click", function () {
			window.SOFT_RESET.phone.thread = null;
			window.rbPhoneRender();
		});
	}
	var threadRows = document.querySelectorAll(".sms-thread-row");
	threadRows.forEach(function (row) {
		row.addEventListener("click", function () {
			window.SOFT_RESET.phone.thread = row.dataset.npc;
			window.rbPhoneRender();
		});
	});
};

window.rbPhoneMessagesView = function (sv) {
	var contacts = sv.phone.contacts || [];
	var threadId = window.SOFT_RESET.phone.thread;

	if (!threadId) {
		if (!contacts.length) {
			return '<div class="phone-app-title">Messages</div><p class="text3 small" style="padding:0 .3rem;">No conversations yet.</p>';
		}
		var rows = contacts.map(function (c) {
			var thread = sv.phone.smsThreads[c.id] || [];
			var last = thread[thread.length - 1];
			var preview = last ? window.rbEsc(last.text) : "";
			return '<div class="sms-thread-row" data-npc="' + c.id + '">' +
				'<div class="sms-thread-avatar">🙂</div>' +
				'<div><div class="sms-thread-name">' + window.rbEsc(c.name) + '</div>' +
				'<div class="sms-thread-preview">' + preview + '</div></div>' +
				'</div>';
		}).join("");
		return '<div class="phone-app-title">Messages</div>' + rows;
	}

	var contact = contacts.filter(function (c) { return c.id === threadId; })[0];
	var thread = sv.phone.smsThreads[threadId] || [];
	var bubbles = thread.map(function (m) {
		return '<div class="sms-bubble-row ' + (m.from === "you" ? "you" : "them") + '"><div class="sms-bubble">' + window.rbEsc(m.text) + '</div></div>';
	}).join("");

	return '<div class="phone-app-title" id="phone-thread-back" style="cursor:pointer;">← ' + window.rbEsc(contact ? contact.name : "Thread") + '</div>' +
		'<div class="sms-bubbles">' + bubbles + '</div>';
};

/* Build the overlay shell as soon as the story is ready so it always
   exists in the DOM (hidden) for the sidebar's Phone quick-link. */
$(document).on(":storyready", function () {
	window.rbPhoneBuildDOM();
});
