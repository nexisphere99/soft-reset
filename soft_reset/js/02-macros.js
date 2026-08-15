/* ==========================================================================
   SOFT_RESET   02 CUSTOM MACROS
   Thin macro wrappers around the JS systems, for use directly in passages.
   ========================================================================== */

/* <<stat "fem" 3>>   shorthand for window.statChange */
Macro.add("stat", {
	handler: function () {
		if (this.args.length < 2) {
			return this.error("stat macro requires a stat name and an amount");
		}
		window.statChange(this.args[0], this.args[1]);
	}
});

/* <<earn 52 "dashdrop">>   add money, optionally tracked to an income stream */
Macro.add("earn", {
	handler: function () {
		var amount = this.args[0];
		var source = this.args[1];
		window.rbEarn(amount, source);
	}
});

/* <<phoneopen>> / <<phoneclose>> */
Macro.add("phoneopen", {
	handler: function () { window.rbPhoneOpen(); }
});
Macro.add("phoneclose", {
	handler: function () { window.rbPhoneClose(); }
});

/* <<journalentry "Title" "Body text">> */
Macro.add("journalentry", {
	handler: function () {
		if (this.args.length < 2) {
			return this.error("journalentry macro requires a title and text");
		}
		window.rbAddJournalEntry(this.args[0], this.args[1]);
	}
});

/* <<milestone "Description">> */
Macro.add("milestone", {
	handler: function () {
		if (this.args.length < 1) {
			return this.error("milestone macro requires a description");
		}
		window.rbAddMilestone(this.args[0]);
	}
});
