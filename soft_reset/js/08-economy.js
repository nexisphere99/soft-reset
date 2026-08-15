/* ==========================================================================
   SOFT_RESET   08 ECONOMY
   Money, income streams, rent, and loans.
   ========================================================================== */

/**
 * window.rbEarn(amount, source)
 * Adds money and tracks it against a named income stream in $income.
 */
window.rbEarn = function (amount, source) {
	var sv = State.variables;
	window.statChange("money", amount);
	if (source && sv.income && (source in sv.income)) {
		sv.income[source] += amount;
	}
};

/**
 * window.rbSpend(amount, reason)
 * Returns true if the purchase succeeded (sufficient funds), false if not.
 */
window.rbSpend = function (amount, reason) {
	var sv = State.variables;
	if (sv.player.money < amount) { return false; }
	window.statChange("money", -amount);
	return true;
};

/**
 * window.rbPayRent(amount)
 * Applies a rent payment, updating $rentPaid / $rentMonthsAhead bookkeeping.
 */
window.rbPayRent = function (amount) {
	var sv = State.variables;
	if (!window.rbSpend(amount, "rent")) { return false; }
	sv.rentPaid = true;
	sv.rentMonthsAhead = (sv.rentMonthsAhead || 0) + Math.floor(amount / sv.rent);
	return true;
};

/**
 * window.rbLoanPayment(amount)
 * Applies a payment toward the student loan balance.
 */
window.rbLoanPayment = function (amount) {
	var sv = State.variables;
	if (!window.rbSpend(amount, "loan")) { return false; }
	sv.loans.total = Math.max(0, sv.loans.total - amount);
	sv.loans.daysOverdue = 0;
	if (sv.loans.total === 0) { sv.loans.paidOff = true; }
	return true;
};
