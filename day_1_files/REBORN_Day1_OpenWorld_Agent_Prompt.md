# PROMPT FOR WRITING/CODE AGENT   Add Day 1 to SOFT_RESET (Open-World Navigation)

---

## CONTEXT   READ THIS FIRST

Day 0 of SOFT_RESET was originally built as a **linear, scene-to-scene** Twine game (click "Continue" → next passage). It has since been **rebuilt as an open-world hub**, and Day 1 must follow the same pattern. Do not build Day 1 as a chain of "continue" links.

The current (correct) architecture, already live in the codebase:

- **`Home` hub** (`passages/locations/apartment.twee`)   a room-grid of 🛏️ My Room / 🚿 Bathroom / 🍳 Kitchen / 🚪 Outside. Each room is its own passage with a repeatable `.action-list` of things to do there (some one-time, some flavor).
- **`Outside` hub** (`passages/locations/neighborhood.twee`)   a `.location-grid` map: DashDrop Zone, Campus, Corner Store, Thrift Store, Meridian Tower (NovaCure), Jake's Apartment. Cards are either clickable or **locked with a visible reason** (`.loc-card.locked` + `.loc-lock-req` text), driven by story flags.
- **`<<ObjectiveBanner>>` widget**   a glowing banner shown at the top of both hubs reading `$objective`, e.g. *"Head outside   Meridian Tower is downtown."* It always names a **place**, never a passage. It is the only place the player is told what to do next.
- **`<<Day0Objective>>` widget** (`passages/system/widgets.twee`)   recomputes `$objective` from story flags every time a hub renders (nested `<<if>>`/`<<elseif>>` chain). Day 1 needs its own equivalent, described below.
- Story beats (the delivery shift, the NovaCure clinic visit) are still told as **contained linear scenes**   that's correct, a work shift or a clinic visit isn't something you free-roam inside. The open-world part is how you **arrive at** and **leave** those scenes, via the hubs.

Read `passages/locations/apartment.twee`, `apartment-bed.twee`, `apartment-bath.twee`, `apartment-kitchen.twee`, `neighborhood.twee`, `campus.twee`, and `passages/system/widgets.twee` before writing anything   match their exact patterns (CSS classes, widget calls, flag-naming style, self-link reload pattern for repeatable room actions).

---

## SOURCE MATERIAL

- **`SOFT_RESET_Day1_Content_FirstPerson.md`**   the complete, already-written Day 1 prose (~8,200 words, 8 scenes + 2 branch scenes). The words are good and mostly reusable as-is. **What needs to change is delivery, not prose**   you are re-plumbing how the player reaches each scene, not rewriting the scenes themselves.
- **`SOFT_RESET_Day1_Code_Agent_Prompt.md`**   the OLD linear implementation brief. Its stat/flag tables (section 4) and StoryInit additions (section 5) are still valid and should be reused. **Ignore its passage-flow diagram and "NEW PASSAGES TO CREATE" table   that's the linear structure you're replacing.**

---

## ARCHITECTURAL PREREQUISITE   RENAME THE HUB PASSAGES

The existing hub/location passages are currently prefixed `D00_` (`D00_Home`, `D00_Home_Bedroom`, `D00_Home_Bathroom`, `D00_Home_Kitchen`, `D00_Outside`, `D00_CornerStore`, `D00_ThriftStore`, `D00_Campus`). That prefix was a naming mistake   the apartment and neighborhood are **the same place on every day of the game**, not a Day-0-only set. Before writing Day 1 content:

1. Rename these passages to drop the day prefix: `Home`, `Home_Bedroom`, `Home_Bathroom`, `Home_Kitchen`, `Outside`, `CornerStore`, `ThriftStore`, `Campus`.
2. Update every `<<link>>` / `<<goto>>` target across all existing Day 0 `.twee` files that points to the old names.
3. Do the same for the sleep transition: collapse `D00_Sleep` into a single generic `Sleep` passage that branches its text and `advanceDay()`-style logic on `$day`, rather than creating a new `Dxx_Sleep` passage every day for 90 days. (`D01_Wakeup` stays a unique passage   the transformation cold-open only happens once   but the passage it eventually hands off to for future sleeps should be the shared one.)
4. Everything inside a room/hub that needs to behave differently on different days should branch on `$day` (or on the flags below) **inside the shared passage**, the same way `apartment-bath.twee` already conditionally shows "Wash up" vs. "You already washed up this morning."

This is the single most important structural change   get it in place first, verify Day 0 still plays end-to-end unchanged, *then* layer in Day 1.

---

## DAY 1 FLOW   WHAT STAYS LINEAR, WHAT BECOMES HUB NAVIGATION

### Stays a forced linear cold-open (no map, no choice, no HUD)
```
D01_Wakeup → D01_Mirror → D01_Panic
```
This is involuntary   the player doesn't get to "explore" waking up transformed. Keep `<<HUD>>` off `D01_Wakeup` and `D01_Mirror` exactly as the old prompt specified; bring it back starting at `D01_Panic`. `D01_Panic` ends by dropping the player into the **`Home`** hub (not a new passage), badly shaken, with the objective banner already reflecting the crisis (see widget spec below).

### Becomes hub-navigated (everything after the cold-open)
Redistribute the remaining old linear scenes into the existing rooms/locations instead of chaining them:

| Old linear passage | New home |
|---|---|
| `D01_GetDressed` (old male clothes don't fit) | `Home_Bedroom`   a new conditional branch on its existing "Get dressed" action, keyed off `$day == 1` and a new `$dressedDay1` flag, replacing the Day-0 dressing text for this specific day |
| `D01_Shower` + `D01_ShowerExplore` / `D01_ShowerAvoid` | `Home_Bathroom`   a new conditional branch on its existing "Wash up" action for `$day == 1`. Present Explore/Avoid as two `.action-btn` choices *within* that scene (can still be two sub-passages, `Home_Bathroom_ShowerExplore` / `Home_Bathroom_ShowerAvoid`, both returning to `Home_Bathroom`) |
| `D01_NovaCure` (bus, exam, confrontation, new ID) | Reached via the **`Outside`** hub's existing Meridian Tower card, same unlock pattern as Day 0 (`$calledNovaCure`-style gate → here it should unlock as soon as the cold-open finishes, e.g. `$mustReturnToNovaCure = true` set at the end of `D01_Panic`). Keep this scene as one long linear passage internally (per the old prompt's guidance on using scene dividers, not separate passages, to preserve emotional continuity) |
| `D01_Evening` (walking home, whistle) | Fold into the **`Outside`** hub's existing "first time this session" flavor-text pattern (see how `neighborhood.twee` shows a one-time paragraph before the map on first visit)   trigger it on the *return* trip from Meridian Tower on Day 1 specifically |
| `D01_EveningHome` (ramen, Jake's call) | `Home_Kitchen`   extend its existing "Eat breakfast"-style one-time action pattern with a Day-1 dinner variant |
| `D01_Sleep` | `Home_Bedroom`'s existing "Go to sleep" action, gated the same way Day 0 gates it (only appears once the day's objective chain is complete), routing into the shared `Sleep` passage from the prerequisite section above |

DashDrop Zone should show as **locked** on Day 1 ("Not today.")   MC doesn't work a shift on the day she wakes up transformed. Corner Store, Thrift Store, and Campus can stay open for flavor/optional color (a shaken, disoriented visit to any of them is good material if you want to add a line or two), but none of them are required.

---

## NEW WIDGET   `<<Day1Objective>>`

Add alongside `<<Day0Objective>>` in `passages/system/widgets.twee`, following its exact style (nested `<<if>>`/`<<elseif>>` setting `$objective`). Suggested chain   adjust wording to taste, keep it in the MC's voice:

```
<<widget "Day1Objective">>
<<if not $seenMirrorDay1>>
	<<set $objective to "Something is wrong. Get up.">>
<<elseif $mustReturnToNovaCure and not $novaCureDay1Done>>
	<<set $objective to "You need answers. Head outside   Meridian Tower.">>
<<elseif not $ateDinnerDay1>>
	<<set $objective to "You're home. You should eat something.">>
<<else>>
	<<set $objective to "You can't hold your eyes open anymore. Go to sleep.">>
<</if>>
<</widget>>
```

Call `<<Day1Objective>>` at the top of `Home` and `Outside` on Day 1 the same way `<<Day0Objective>>` is called   you'll need an `<<if $day is 0>><<Day0Objective>><<else>><<Day1Objective>><</if>>` switch (or a single combined widget) since both hubs are now shared across days. Plan for this switch to keep growing by day as the game extends past Day 1   don't hardcode `$day is 0` checks in more than one place if you can help it; consider a single `<<CurrentObjective>>` dispatcher widget that routes to per-day logic.

---

## STAT / FLAG CHANGES

Reuse section 4 and 5 of `SOFT_RESET_Day1_Code_Agent_Prompt.md` verbatim (the stress/energy/money numbers and the `$firstOrgasmSolo`, `$firstShower`, `$seenMirrorDay1`, `$novaCureVisitCount` variables are all still correct)   just trigger them from the new hub-action entry points instead of from passage-to-passage `<<link>>` choice blocks. Add whatever new flags the table above implies (`$dressedDay1`, `$mustReturnToNovaCure`, `$novaCureDay1Done`, `$ateDinnerDay1`) to StoryInit, following the existing naming style in `soft-reset.twee`.

Keep the conditional 3:30 AM beat (section 2 of the old prompt) exactly as written, and keep the dynamic `$player.name` on the ID card (section 3).

---

## WHAT NOT TO CHANGE

- Don't touch the CSS theme, tokens, or any widget/JS system already working (`ObjectiveBanner`, `HUD`, `Dialogue`, stat engine, nav toggles, right sidebar).
- Don't create a parallel `D01_Home` / `D01_Outside` hub   extend the shared ones.
- Don't lose any prose from `SOFT_RESET_Day1_Content_FirstPerson.md`   every scene should still be reachable and complete, just entered from a location card or room action instead of a "Continue" link.
- Don't break the Day 0 → Day 1 handoff: `Sleep` (post-rename) still needs its "Wake Up → Day 1" button to land on `D01_Wakeup`.

---

## QA CHECKLIST

- [ ] Hub passages renamed (no `D00_` prefix left on anything reusable), all Day 0 links updated, Day 0 still plays start-to-finish
- [ ] `D01_Wakeup` → `D01_Mirror` → `D01_Panic` plays with no HUD on the first two, HUD back from Panic on
- [ ] `D01_Panic` ends inside `Home`, not a dead end
- [ ] `Home_Bedroom`'s dressing action shows Day-1-specific "doesn't fit" prose, one-time, then reverts to a short blurb on repeat visits
- [ ] `Home_Bathroom`'s wash action on Day 1 leads to the shower scene and offers the Explore/Avoid choice; both branches return to `Home_Bathroom`
- [ ] `Outside`'s Meridian Tower card is locked before the cold-open finishes and unlocked immediately after, with a lock-reason string when locked
- [ ] DashDrop Zone shows locked on Day 1 with an appropriate reason
- [ ] Objective banner text updates correctly at every stage of Day 1 on both hubs
- [ ] Returning from NovaCure surfaces the walking-home/whistle beat once, on the correct trip
- [ ] `Home_Kitchen` dinner beat (ramen, Jake's call) fires once, correctly gated
- [ ] `Home_Bedroom`'s sleep action only appears once the full Day 1 objective chain is done, and routes into the shared `Sleep` passage with Day-1-correct branch text (`$firstOrgasmSolo` conditional from the old prompt, section 9)
- [ ] All stat/flag changes from the reused table fire with toast notifications
- [ ] Right sidebar (portrait/outfit/body/relationships) still renders correctly throughout Day 1
- [ ] Mobile layout and both sidebar toggles still work on every new passage
- [ ] Save/reload mid-Day-1 restores correctly (this broke once before on the right sidebar   retest reload specifically after these changes)

---

## DELIVERABLE

Updated `.twee` source (not just a compiled HTML) that:
- Renames and generalizes the Day 0 hub passages as described
- Adds all Day 1 prose from `SOFT_RESET_Day1_Content_FirstPerson.md`, entered entirely through hub/location navigation rather than direct scene links (except the unavoidable linear cold-open)
- Adds the `<<Day1Objective>>` widget (or combined dispatcher) and all new StoryInit flags
- Compiles cleanly via the existing `build/compile.sh` / tweego command
- Passes the QA checklist above
