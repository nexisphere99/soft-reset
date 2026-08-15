# SOFT_RESET   Open-World Navigation Architecture Guide

*Reference this document whenever writing a code-agent prompt for any day of SOFT_RESET (Day 1 through Day 90). It doesn't change per day   only the content being slotted into it does.*

---

## THE CORE PRINCIPLE

**SOFT_RESET is an open-world life-sim, not a visual novel.** The player is always standing somewhere. The story does not advance because the player clicked "Continue"   it advances because the player walked to the right place at the right time.

This means: **scene-to-scene connections are never hardcoded links. They are the output of logic**   flags, objectives, and location-unlock conditions. A day's content is not a chain (`SceneA → SceneB → SceneC`); it is a **set of destinations**, each with a condition for when it's reachable, wired into a persistent map the player already knows how to navigate.

If a prompt for new content describes scenes as "Scene 1 → Scene 2 → Scene 3," the first job when implementing it is to **translate that chain into destinations and unlock conditions** using the pattern below   not to wire it up as written.

---

## THE TWO STANDING HUBS

Every day plays out across the same two hub passages. They already exist and must never be duplicated per-day or per-arc:

- **`Home`** (`passages/locations/apartment.twee`)   a `.room-grid` of room cards: 🛏️ Bedroom, 🚿 Bathroom, 🍳 Kitchen, 🚪 Outside. Each room is its own passage (`Home_Bedroom`, `Home_Bathroom`, `Home_Kitchen`) holding a repeatable `.action-list` of things to do there.
- **`Outside`** (`passages/locations/neighborhood.twee`)   a `.location-grid` map of every place in the world the player can currently reach: DashDrop Zone, Campus, Corner Store, Thrift Store, Meridian Tower, Jake's Apartment, and whatever new locations get added over the game's 90 days.

New locations are added as new cards to `Outside` (or to a new district hub if the grid grows too large for one screen   see *Scaling the Map* below), never as a standalone passage the player reaches by a direct link from somewhere else.

---

## THE OBJECTIVE, NOT THE LINK

At the top of both hubs sits `<<ObjectiveBanner>>`, displaying `$objective`   one sentence, always naming a **place or a felt need**, never a passage:

> *"Head outside   Meridian Tower is downtown."*
> *"You're home. You should eat something."*

`$objective` is recomputed on every hub render by a day-specific objective widget (`<<Day0Objective>>`, `<<Day1Objective>>`, …)   a plain `<<if>>`/`<<elseif>>` chain reading story flags, oldest incomplete condition first. This is the **only** place the player is told what to do next. It never contains a clickable link   it describes the world, and the world (the hub grids) is where the player acts.

As days accumulate, route through a single dispatcher rather than scattering `<<if $day is N>>` checks across the codebase:

```
:: Widgets
<<widget "CurrentObjective">>
<<switch $day>>
<<case 0>><<Day0Objective>>
<<case 1>><<Day1Objective>>
<<case 2>><<Day2Objective>>
<</switch>>
<</widget>>
```

Call `<<CurrentObjective>>` once at the top of `Home` and `Outside`   never call a specific day's widget directly from a hub.

---

## LOCATION GATING   LOGIC, NOT LINKS

A location card is always visible; whether it's *clickable* is a pure function of flags:

```
<<if $someUnlockFlag>>
	<<link '<div class="loc-card"><span class="loc-icon">🏙️</span><span class="loc-name">Meridian Tower</span><span class="loc-hint">NovaCure Labs, Suite 604</span></div>' "NovaCure_Arrival">><</link>>
<<else>>
	<div class="loc-card locked">
		<span class="loc-icon">🏙️</span>
		<span class="loc-name">Meridian Tower</span>
		<span class="loc-lock-req">You don't have a reason to go downtown yet</span>
	</div>
<</if>>
```

Rules for gating:
- **Every locked card shows a reason**, in-world, never "content not available." A lock with no explanation reads as a bug.
- Gates key off **flags set by prior beats**, not off `$day` alone where avoidable   this keeps the world coherent if a day's content runs long or short in practice.
- A destination that's no longer relevant (a completed errand, a shift already worked today) should show as **locked with a past-tense reason** ("Shift's done for today"), not disappear   disappearing cards make the map feel unstable.
- Some destinations should be **evergreen and optional** (Corner Store, Thrift Store)   always open, never required, there purely to make the world feel inhabited. Not every card needs to matter to the critical path.

---

## ROOMS AND REPEATABLE ACTIONS

Inside a room, actions follow the same self-link-reload pattern already used in `apartment-bath.twee` / `apartment-kitchen.twee`:

```
<<if not $someOneTimeFlag>>
	<<link '<span class="action-icon">🚿</span><span class="action-text">Wash up<span class="action-sub">...</span></span>' "Home_Bathroom_Wash">><</link>>
<<else>>
	<p class="text3 small">You already washed up this morning.</p>
<</if>>
```

- One-time narrative payoffs (a mirror monologue, a big scene) route to a dedicated sub-passage that ends by setting its flag and linking back to the room.
- Short flavor actions (use the toilet, drink water) can stay inline, self-linking back to the same room, with feedback delivered via the stat-toast system rather than extra prose.
- A room's action list should always have **something** available, even after every one-time beat is spent   a short blurb is enough. A room with nothing to do reads as broken.

---

## WHAT'S ALLOWED TO STAY LINEAR

Not everything should be a hub destination. Keep a direct passage chain (`<<link>>` straight to the next passage, no map) only for:

1. **Forced, involuntary beats with zero player agency**   waking up, a panic attack, being physically walked somewhere against your will. Showing a map mid-panic-attack breaks the scene.
2. **Internal pagination of one continuous scene**   a long clinic visit or conversation can span one logical "location visit" while still being split across a couple of passages or scene dividers for pacing. The player never leaves and returns to a hub in the middle of it; it's still one destination from the map's point of view.

Everything else   any beat that happens at a different time or place than the one before it, and that the player has any agency in reaching   goes through a hub.

---

## WIRING A BEAT INTO THE MAP

When a linear scene script says "Scene ends → go to Scene N+1," translate it as:

1. The scene sets whatever flags mark it complete / unlock whatever comes next.
2. The scene's final link routes back to whichever hub it was entered from (`Home` or `Outside`)   **not** forward to the next scene.
3. The next scene becomes reachable because a location card unlocked, a room gained a new action, or the objective widget now points somewhere new.

Nothing should route directly from Scene A to Scene B. If you're about to write `<<link "Continue" "NextScene">>` for two beats that happen in different places or times, stop and wire it through a hub instead.

---

## NAMING CONVENTIONS

- Hub and location passages are **evergreen**   `Home`, `Outside`, `Campus`, `Home_Bedroom`, `NovaCure_Arrival`   never day-prefixed (`D01_Home` is wrong).
- Day-specific *content* lives either as `<<if $day is N>>` branches inside a shared passage, or as a dedicated sub-passage a shared passage conditionally routes into (`Home_Bathroom_ShowerExplore`).
- The one exception is genuinely one-off, non-repeating cold-opens unique to a specific day (`D01_Wakeup` for the transformation reveal)   those can keep a day-prefixed name since there's no future day that will ever reuse them.
- Sleep transitions route through one shared `Sleep` passage that branches its text and day-advancement logic on `$day`, not a new `Dxx_Sleep` passage every day.

---

## SCALING THE MAP

`Outside`'s `.location-grid` will not comfortably hold 90 days' worth of locations on one screen. When it starts feeling crowded:
- Group into **districts** (Campus, Downtown, Neighborhood) as secondary hubs one level deeper than `Outside`, each with its own smaller grid.
- Keep the total *always-visible* card count on any one grid low (6–9); anything beyond that should be nested a level deeper or gated behind a flag so it only appears once relevant.
- Never remove a card once introduced   lock it with a reason instead, per the gating rules above.

---

## CONVERSION CHECKLIST

When handed a new day's linear prose script, work through it in this order:

- [ ] Mark every beat as **forced-linear** or **destination**.
- [ ] For each destination beat, decide: existing room/location, or a new card/room to add?
- [ ] For each new or changed destination, write its **unlock condition** and **lock-reason text**.
- [ ] Write/extend that day's `<<DayNObjective>>` widget   oldest incomplete condition first, always in-world language naming a place or a felt need.
- [ ] Confirm every beat's exit routes back to a hub with updated flags, never forward to another scene directly.
- [ ] Confirm every forced-linear chain is as short as possible and ends by dropping the player into a hub.
- [ ] Add any new StoryInit flags following existing naming style.
- [ ] Verify locked cards for *today* clearly explain why (past-tense for "already done," forward-looking for "not yet"), and that nothing vanishes.

---

## REUSABLE PROMPT TEMPLATE

Copy this, fill in the brackets, and hand it to a writing/code agent for any day's content:

> Write a code-agent implementation prompt for **Day [N]** of SOFT_RESET.
>
> Follow the architecture in `SOFT_RESET_OpenWorld_Architecture_Guide.md` exactly   Day [N] must be implemented as logic- and objective-driven hub navigation, not a linear scene chain, per that guide's rules.
>
> Day [N]'s source prose/beats are in **[source file/description]**. Work through the guide's Conversion Checklist against that source: mark each beat forced-linear or destination, map destinations onto the existing `Home`/`Outside` hubs (adding new location cards or rooms only where genuinely new places are introduced), write the unlock conditions and lock-reason text for anything new, and write a `<<Day[N]Objective>>` widget wired into the `<<CurrentObjective>>` dispatcher.
>
> Reuse existing widgets, CSS classes, and flag-naming conventions   don't introduce a parallel system. List every new StoryInit flag you're adding and every existing passage you're extending with a new `$day`-conditional branch. End with a QA checklist specific to Day [N]'s new destinations and objective chain.
