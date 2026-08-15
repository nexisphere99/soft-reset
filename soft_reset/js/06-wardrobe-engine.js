/* ==========================================================================
   SOFT_RESET   06 WARDROBE ENGINE
   Clothing ownership, equipping, and outfit-bonus calculation.
   Day 0 doesn't use wardrobe content directly, but the system is wired
   up so future days can drop in shop/wardrobe passages immediately.
   ========================================================================== */

window.SOFT_RESET = window.SOFT_RESET || {};
window.SOFT_RESET.wardrobeSlots = ["top", "bottom", "bra", "underwear", "shoes", "accessory", "outerwear"];

/**
 * window.rbEquip(item)
 * item: { id, name, type, img, fem, att, cor, owned, equipped }
 * `type` must match one of SOFT_RESET.wardrobeSlots.
 */
window.rbEquip = function (item) {
	var sv = State.variables;
	if (!item || !item.type) { return; }
	sv.equipped[item.type] = item;
	window.rbRecalcOutfitBonus();
};

window.rbUnequip = function (slot) {
	var sv = State.variables;
	if (sv.equipped && slot in sv.equipped) {
		sv.equipped[slot] = null;
		window.rbRecalcOutfitBonus();
	}
};

/**
 * window.rbAddToWardrobe(item)
 * Adds a purchased/owned item to $wardrobe (dedupes by id).
 */
window.rbAddToWardrobe = function (item) {
	var sv = State.variables;
	sv.wardrobe = sv.wardrobe || [];
	var exists = sv.wardrobe.some(function (w) { return w.id === item.id; });
	if (!exists) {
		item.owned = true;
		sv.wardrobe.push(item);
	}
};

/**
 * window.rbRecalcOutfitBonus()
 * Sums ATT/FEM/COR bonuses from every currently equipped item and applies
 * a small matching-set bonus if 3+ pieces share the same `set` tag.
 * This does not permanently mutate $player stats   it stores the current
 * total on $outfitBonus for widgets/macros to read and display.
 */
window.rbRecalcOutfitBonus = function () {
	var sv = State.variables;
	var equipped = sv.equipped || {};
	var bonus = { att: 0, fem: 0, cor: 0 };
	var setCounts = {};

	Object.keys(equipped).forEach(function (slot) {
		var item = equipped[slot];
		if (!item) { return; }
		bonus.att += item.att || 0;
		bonus.fem += item.fem || 0;
		bonus.cor += item.cor || 0;
		if (item.set) {
			setCounts[item.set] = (setCounts[item.set] || 0) + 1;
		}
	});

	Object.keys(setCounts).forEach(function (setName) {
		if (setCounts[setName] >= 3) {
			bonus.att += 5;
			bonus.fem += 3;
		}
	});

	sv.outfitBonus = bonus;
	return bonus;
};
