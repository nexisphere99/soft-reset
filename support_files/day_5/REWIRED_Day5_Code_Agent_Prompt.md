# PROMPT FOR CODE AGENT — Integrate REWIRED Day 5 Content

---

## YOUR TASK

Integrate **Day 5** ("Re-Entry: First Work Day as Female") into the existing REWIRED Twine game (SugarCube 2.37+). Day 5 is the player's first full public day as female, returning to work, making deliveries, discovering new downtown locations, and setting up Day 6's Nolan visit.

You have been provided:
1. **`REWIRED_File_Structure.md`** — Complete file architecture, directory structure, variable map
2. **`REWIRED_OpenWorld_Architecture_Guide.md`** — Hub navigation architecture (MUST follow)
3. **`REWIRED_Day5_MainStory_FirstPerson.md`** — Day 5 main storyline prose and passage mapping
4. **`REWIRED_Day5_NPC_SideQuest_FirstPerson.md`** — Day 5 NPC scenes, random encounters, shop interactions, phone content
5. **`REWIRED_Day5_ImagePrompts.md`** — Image prompt references for all Day 5 scenes

---

## CRITICAL ARCHITECTURE RULES

**Follow `REWIRED_OpenWorld_Architecture_Guide.md` exactly.** Day 5 must be implemented as logic- and objective-driven hub navigation, NOT a linear scene chain.

### Hub Navigation Principles
- The player is always standing somewhere. Story advances because they walked to the right place at the right time.
- Scene-to-scene connections are NEVER hardcoded links. They are the output of logic (flags, objectives, location-unlock conditions).
- Every scene's final link routes back to `Home` or `Outside` — never forward to another scene.
- The next scene becomes reachable because a location card unlocked, a room gained a new action, or the objective widget points somewhere new.

### What Stays Linear (Exception Cases)
Only these can chain directly without returning to a hub:
1. Forced involuntary beats with zero player agency
2. Internal pagination of one continuous scene (sub-passages within a single location visit)

Everything else goes through a hub.

---

## DAY 5 CONVERSION CHECKLIST

### Beat Classification: Forced-Linear vs. Destination

| Beat | Type | Hub | Location/Room |
|---|---|---|---|
| Morning routine / preparing for work | Destination | Home | Home_Bedroom, Home_Bathroom |
| Mirror scene (delivery jacket) | Forced-linear | — | Sub-passage of Home_Bathroom |
| DashDrop HQ — Owen scene | Destination | Outside | DashDrop_Zone |
| Delivery 1 (sushi/office) | Forced-linear | — | Sub-passage of DashDrop delivery shift |
| Delivery 2 (Trent callback) | Forced-linear | — | Sub-passage of DashDrop delivery shift |
| Delivery 3 (Sage/yoga) | Forced-linear | — | Sub-passage of DashDrop delivery shift |
| Delivery 4 (Kevin/dorm) | Forced-linear | — | Sub-passage of DashDrop delivery shift |
| Delivery 5 (Jess/sandwich) | Forced-linear | — | Sub-passage of DashDrop delivery shift |
| Shift wrap-up | Forced-linear | — | End of delivery shift, returns to Outside |
| Downtown exploration | Destination | Outside | Downtown district |
| Black Line Studio discovery | Forced-linear | — | Sub-passage of Downtown exploration |
| Nocturne discovery | Forced-linear | — | Sub-passage of Downtown exploration |
| Grounded Coffee (River) | Destination | Outside | Grounded_Coffee |
| Evening home / processing | Destination | Home | Home_Kitchen, Home_Bedroom |
| Nolan phone call | Destination | Home | Home_Bedroom (evening action) |
| Optional evening activities | Destination | Home | Home_Bedroom (phone overlay) |
| Tyler texts | Destination | — | Phone overlay |
| Dating app setup | Destination | — | Phone overlay |
| Self-pleasure scene | Destination | Home | Home_Bedroom |
| Sleep transition | Forced-linear | — | Shared Sleep passage |

### New Location Cards for Outside Hub

**Add to Downtown district (or create Downtown district if not yet existing):**

```twee
/* Black Line Studio — visible but locked */
<<if $d05_blackline_seen>>
  <<if $day >= 6 && $blackline_enterable>>
    <<link '<div class="loc-card"><span class="loc-icon">🖋️</span><span class="loc-name">Black Line Studio</span><span class="loc-hint">Tattoos & piercings</span></div>' "BlackLine_Lobby">><</link>>
  <<else>>
    <div class="loc-card locked">
      <span class="loc-icon">🖋️</span>
      <span class="loc-name">Black Line Studio</span>
      <span class="loc-lock-req">Looks interesting. Maybe check it out another day.</span>
    </div>
  <</if>>
<<else>>
  /* Card not visible until Day 5 downtown exploration */
<</if>>

/* Nocturne Bar — visible but locked */
<<if $d05_nocturne_seen>>
  <<if $day >= 10 && $nocturne_apply>>
    <<link '<div class="loc-card"><span class="loc-icon">🌙</span><span class="loc-name">Nocturne</span><span class="loc-hint">Bar & lounge</span></div>' "Nocturne_Entrance">><</link>>
  <<else>>
    <div class="loc-card locked">
      <span class="loc-icon">🌙</span>
      <span class="loc-name">Nocturne</span>
      <span class="loc-lock-req">Closed during the day. Help Wanted sign in the window.</span>
    </div>
  <</if>>
<</if>>

/* Grounded Coffee House — open after Day 5 visit */
<<if $d05_grounded_visited>>
  <<link '<div class="loc-card"><span class="loc-icon">☕</span><span class="loc-name">Grounded Coffee</span><span class="loc-hint">Coffee, study, Wi-Fi</span></div>' "Grounded_Main">><</link>>
<<else>>
  /* Not visible until discovered */
<</if>>

/* Sunrise Yoga — visible after receiving flyer */
<<if $sage_flyer>>
  <<if $day >= 7>>
    <<link '<div class="loc-card"><span class="loc-icon">🧘</span><span class="loc-name">Sunrise Yoga</span><span class="loc-hint">Morning flow & sunset yin</span></div>' "SunriseYoga_Lobby">><</link>>
  <<else>>
    <div class="loc-card locked">
      <span class="loc-icon">🧘</span>
      <span class="loc-name">Sunrise Yoga</span>
      <span class="loc-lock-req">You have the flyer. Classes start next week.</span>
    </div>
  <</if>>
<</if>>
```

### Existing Locations Modified for Day 5

**DashDrop Zone:**
- Add `$day == 5` branch for the Owen confrontation scene
- After Owen scene, delivery shift becomes a paginated sub-passage chain (5 deliveries)
- Final delivery returns player to Outside hub with `$d05_work_complete = true`
- Post-shift, DashDrop shows as locked: "Shift's done for today."

**Home_Bedroom:**
- Add Day 5 morning action: "Get ready for work" (if `$day == 5 && !$d05_dressed`)
- Add Day 5 evening action: "Check phone" (opens phone overlay with Tyler/Nolan/dating app content)
- Add Day 5 evening action: "Relax in bed" (self-pleasure scene, gated by arousal >= 15)

**Home_Bathroom:**
- Add Day 5 morning branch: shower + ponytail + mirror scene

**Home_Kitchen:**
- Add Day 5 evening branch: cooking eggs on toast, processing the day's tip math

---

## NEW STORYINIT FLAGS

Add these to `:: StoryInit` (or the equivalent initialization passage):

```javascript
/* Day 5 progression flags */
State.variables.d05_dressed = false;
State.variables.d05_owen_seen = false;
State.variables.d05_work_complete = false;
State.variables.d05_delivery_count = 0;
State.variables.d05_trent_callback = false;
State.variables.d05_sage_met = false;
State.variables.d05_kevin_met = false;
State.variables.d05_jess_met = false;
State.variables.d05_downtown_explored = false;
State.variables.d05_blackline_seen = false;
State.variables.d05_nocturne_seen = false;
State.variables.d05_grounded_visited = false;
State.variables.d05_river_met = false;
State.variables.d05_nolan_called = false;
State.variables.d05_nolan_tomorrow = false;
State.variables.d05_evening_done = false;

/* NPC relationship flags */
State.variables.trent_nina_number = false;
State.variables.trent_declined_d05 = false;
State.variables.sage_flyer = false;
State.variables.sage_flyer_fridge = false;
State.variables.kevin_number = false;
State.variables.kevin_party_invite = false;
State.variables.kevin_declined_d05 = false;
State.variables.jess_coffee_invite = false;
State.variables.river_personal_moment = false;
State.variables.nolan_texts_read = false;

/* Dating app flags */
State.variables.dating_app_created = false;
State.variables.chris_matched = false;

/* Tyler Day 5 flags */
State.variables.tyler_date_friday = false;
State.variables.tyler_stall_d05 = false;
State.variables.tyler_ghosted_d05 = false;

/* Location unlock flags */
State.variables.blackline_enterable = false;  /* Set true on Day 6+ */
State.variables.nocturne_apply = false;        /* Set true on Day 10+ */
```

---

## DAY 5 OBJECTIVE WIDGET

```twee
:: Day5Widgets [widget nobr]

<<widget "Day5Objective">>
<<if $day == 5>>
  <<if not $d05_dressed>>
    <<set $objective to "Time to get ready. DashDrop shift starts soon.">>
  <<elseif not $d05_owen_seen>>
    <<set $objective to "Head to DashDrop. Owen needs to see your new ID.">>
  <<elseif not $d05_work_complete>>
    <<set $objective to "Deliveries to make. Keep moving.">>
  <<elseif not $d05_grounded_visited>>
    <<set $objective to "Shift's done. You could explore downtown on the way home.">>
  <<elseif $timeslot == "Evening" and not $d05_nolan_called>>
    <<set $objective to "You're home. Nolan keeps calling. Maybe pick up.">>
  <<elseif $timeslot == "Evening" and not $d05_evening_done>>
    <<set $objective to "Evening. Phone's buzzing. Or just rest.">>
  <<else>>
    <<set $objective to "Long day. Bed sounds good.">>
  <</if>>
<</if>>
<</widget>>
```

**Wire into `<<CurrentObjective>>` dispatcher:**
```twee
<<widget "CurrentObjective">>
<<switch $day>>
<<case 0>><<Day0Objective>>
<<case 1>><<Day1Objective>>
<<case 2>><<Day2Objective>>
<<case 3>><<Day3Objective>>
<<case 4>><<Day4Objective>>
<<case 5>><<Day5Objective>>
<</switch>>
<</widget>>
```

---

## PASSAGE STRUCTURE — Day 5 Files

### Directory: `passages/day05/`

```
passages/day05/
├── d05-morning.twee          ← Morning routine, dressing, mirror
├── d05-dashdrop.twee         ← Owen scene + delivery shift (5 sub-passages)
├── d05-downtown.twee         ← Downtown exploration (Black Line, Nocturne, Grounded)
├── d05-evening.twee          ← Evening processing, Nolan call
├── d05-optional.twee         ← Tyler texts, dating app, self-pleasure
└── d05-widgets.twee          ← Day5Objective widget
```

### Directory: `passages/npcs/`

```
passages/npcs/
├── owen-d05.twee             ← Owen post-shift check-in
├── trent-d05.twee            ← Trent hallway encounter (optional)
├── sage-d05.twee             ← Sage flyer examination
├── kevin-d05.twee            ← Kevin campus encounter (optional)
├── jess-d05.twee             ← Jess second encounter (seeds Day 7+)
└── river-d05.twee            ← River return visit (evening)
```

### Directory: `passages/locations/`

Update existing files:
```
passages/locations/
├── apartment.twee            ← Add Day 5 branches to Home hub
├── apartment-bed.twee        ← Day 5 morning/evening bedroom actions
├── apartment-bath.twee       ← Day 5 shower/ponytail/mirror
├── apartment-kitchen.twee    ← Day 5 evening cooking
├── neighborhood.twee         ← Add new location cards to Outside hub
├── dashdrop.twee             ← Day 5 Owen scene branch
└── downtown.twee             ← New district hub (if not existing)
```

New location files:
```
passages/locations/
├── grounded.twee             ← Grounded Coffee House main passage
├── blackline.twee            ← Black Line Studio (locked placeholder)
├── nocturne.twee             ← Nocturne Bar (locked placeholder)
└── sunrise-yoga.twee         ← Sunrise Yoga (locked placeholder)
```

---

## DELIVERY SHIFT IMPLEMENTATION

The 5 deliveries are a paginated chain within one "location visit" at DashDrop. This is the exception noted in the architecture guide: internal pagination of one continuous scene.

```twee
:: DashDrop_Shift_D05 [nobr]
<<if $d05_delivery_count == 0>>
  /* Delivery 1 prose */
  <<include "D05_Delivery1">>
  <<link "Next delivery" "DashDrop_Shift_D05">><<set $d05_delivery_count to 1>><</link>>
<<elseif $d05_delivery_count == 1>>
  /* Delivery 2 prose (Trent) */
  <<include "D05_Delivery2">>
  <<set $d05_trent_callback to true>>
  <<link "Next delivery" "DashDrop_Shift_D05">><<set $d05_delivery_count to 2>><</link>>
<<elseif $d05_delivery_count == 2>>
  /* Delivery 3 prose (Sage) */
  <<include "D05_Delivery3">>
  <<set $d05_sage_met to true>>
  <<set $sage_flyer to true>>
  <<link "Next delivery" "DashDrop_Shift_D05">><<set $d05_delivery_count to 3>><</link>>
<<elseif $d05_delivery_count == 3>>
  /* Delivery 4 prose (Kevin) */
  <<include "D05_Delivery4">>
  <<set $d05_kevin_met to true>>
  <<link "Next delivery" "DashDrop_Shift_D05">><<set $d05_delivery_count to 4>><</link>>
<<elseif $d05_delivery_count == 4>>
  /* Delivery 5 prose (Jess) */
  <<include "D05_Delivery5">>
  <<set $d05_jess_met to true>>
  <<link "Finish shift" "D05_Delivery_End">><</link>>
<<else>>
  <<include "D05_Delivery_End">>
  <<set $d05_work_complete to true>>
  <<run statChange("money", 87)>>
  <<run advanceTime()>>
  <<link "Head out" "Outside">><</link>>
<</if>>
```

---

## DOWNTOWN EXPLORATION IMPLEMENTATION

Downtown exploration is a destination from Outside. Once the player finishes their shift and visits downtown, they pass through Black Line, Nocturne, and Grounded as a paginated scene (one exploration walk, internal pagination).

```twee
:: Downtown_Explore_D05
<<if not $d05_blackline_seen>>
  <<include "D05_BlackLine_Discover">>
  <<set $d05_blackline_seen to true>>
  <<link "Keep riding" "Downtown_Explore_D05">><</link>>
<<elseif not $d05_nocturne_seen>>
  <<include "D05_Nocturne_Discover">>
  <<set $d05_nocturne_seen to true>>
  <<link "Keep riding" "Downtown_Explore_D05">><</link>>
<<elseif not $d05_grounded_visited>>
  <<include "D05_Grounded_Discover">>
  <<set $d05_grounded_visited to true>>
  <<set $d05_river_met to true>>
  <<run statChange("money", -5)>>
  <<link "Head home" "Home">><</link>>
<<else>>
  /* Already explored - redirect */
  <<goto "Outside">>
<</if>>
```

---

## RANDOM ENCOUNTER SYSTEM

Random encounters trigger during transit or location visits. Use the existing random encounter pool system:

```javascript
/* Day 5 random encounter pool */
window.d05RandomEncounters = [
  { id: "D05_Random_BusStop", weight: 30, condition: function() { return State.variables.timeslot === "Afternoon"; } },
  { id: "D05_Random_Grocery", weight: 40, condition: function() { return true; } },
  { id: "D05_Random_Scooter", weight: 20, condition: function() { return State.variables.d05_delivery_count >= 1 && State.variables.d05_delivery_count <= 4; } },
  { id: "D05_Random_Musician", weight: 50, condition: function() { return State.variables.timeslot === "Evening"; } }
];

window.rollD05Encounter = function() {
  var eligible = d05RandomEncounters.filter(function(e) { return e.condition(); });
  if (eligible.length === 0) return null;
  var roll = Math.random() * 100;
  for (var i = 0; i < eligible.length; i++) {
    if (roll < eligible[i].weight) return eligible[i].id;
  }
  return null;
};
```

---

## PHONE OVERLAY — Day 5 Content

### SMS Tab Updates

**Tyler thread (if `$tyler_active`):**
- Display Tyler's Day 5 texts
- Player choice cards: Accept date / Stall / Ghost
- Each sets corresponding flag

**Nolan thread (after `$d05_nolan_called`):**
- Display Nolan's 16-text anxiety spiral
- No reply options (read-only, sets `$nolan_texts_read`)

### Dating App Tab (new, if `$player.cor >= 5`)

- Profile creation flow (one-time)
- Match notification display (47 likes, 12 matches, 6 messages)
- Message reading interface
- Optional reply to Chris

---

## STAT CHANGES SUMMARY — Day 5

| Trigger | Stat | Amount |
|---|---|---|
| Complete delivery shift | Money | +87 |
| Food/coffee spending | Money | -25 |
| Owen check-in scene | Stress | -3 |
| Bus stop encounter (random) | FEM | +1 |
| Grocery store encounter (random) | FEM | +1 |
| Scooter breakdown (random) | Stress | +2 |
| Street musician (random) | Stress | -3 |
| Hector "mija" scene | FEM | +1 |
| River return visit | Stress | -5 |
| Trent hallway (engage) | COR | +2, Arousal +5 |
| Social media browse | FEM | +1 |
| Self-pleasure scene | Arousal reset, Stress | -5 |
| First ponytail | FEM | +1 |
| First public workday as female | FEM | +3 |

**Total possible FEM gain: +5 to +8 (depending on encounters)**
**End of day FEM range: 20-26**

---

## CSS CLASSES USED (existing)

All Day 5 content uses existing CSS classes from the game's stylesheet:

- `.prose-block` — Main narrative text container (max-width 58ch)
- `.scene-divider` — Horizontal divider with centered label
- `.dl-line`, `.dl-avatar`, `.dl-name`, `.dl-bubble` — Dialogue system
- `.choice-block` — Player decision cards
- `.loc-card`, `.loc-card.locked` — Location grid cards
- `.action-list` — Room action buttons
- `.action-fem` — Pink-tinted femininity actions
- `.action-quest` — Purple-tinted quest actions
- `.stat-toast` — Stat change notifications
- `.img-placeholder` — Image placeholder divs
- `.phone-overlay` — Phone system overlay
- `.sms-bubble`, `.sms-bubble--them`, `.sms-bubble--you` — SMS styling

---

## IMAGE PLACEHOLDER INTEGRATION

Use the `<<ImagePlaceholder>>` widget wherever `REWIRED_Day5_ImagePrompts.md` specifies an image:

```twee
<<ImagePlaceholder "Morning mirror - delivery jacket ponytail" "portrait">>
<<ImagePlaceholder "DashDrop dispatch office interior" "banner">>
<<ImagePlaceholder "Owen handing over women's jacket" "portrait">>
<<ImagePlaceholder "Trent leaning in doorframe" "portrait">>
<<ImagePlaceholder "Sage at yoga studio with smoothie" "portrait">>
<<ImagePlaceholder "Kevin at dorm door, shirtless, grinning" "portrait">>
<<ImagePlaceholder "Jess with toddler at front door" "portrait">>
<<ImagePlaceholder "Black Line Studio storefront, golden hour" "banner">>
<<ImagePlaceholder "Nocturne Bar exterior, Help Wanted sign" "banner">>
<<ImagePlaceholder "Grounded Coffee House interior, warm light" "banner">>
<<ImagePlaceholder "River behind counter making latte" "portrait">>
```

---

## QA CHECKLIST — Day 5

- [ ] Player wakes in Home_Bedroom. Morning actions available (shower, dress, mirror).
- [ ] Objective widget shows "Time to get ready. DashDrop shift starts soon."
- [ ] After dressing, objective updates to "Head to DashDrop."
- [ ] DashDrop zone is clickable on Outside hub. Owen scene plays.
- [ ] 5 deliveries paginate within one DashDrop visit. No returns to hub mid-shift.
- [ ] After final delivery, player returns to Outside hub. `$d05_work_complete = true`.
- [ ] DashDrop now shows locked: "Shift's done for today."
- [ ] Objective updates to suggest downtown exploration.
- [ ] Downtown exploration is clickable. Black Line, Nocturne, Grounded discovered in sequence.
- [ ] Grounded Coffee is now an enterable location on Outside hub.
- [ ] Black Line and Nocturne appear as locked cards with appropriate reason text.
- [ ] Sunrise Yoga appears as locked card if flyer obtained.
- [ ] Player returns Home. Evening actions available (cook, phone, relax).
- [ ] Nolan call triggers in bedroom (evening, if not yet called).
- [ ] Phone overlay shows Tyler texts (if active), Nolan texts (after call), dating app (if COR >= 5).
- [ ] Self-pleasure scene available in bedroom (if arousal >= 15).
- [ ] Sleep transition advances to Day 6. `$d05_nolan_tomorrow = true` flags Nolan's visit.
- [ ] All stat changes fire correctly with toast notifications.
- [ ] No passage chains directly from Scene A to Scene B across different locations/times.
- [ ] Every exit returns to Home or Outside hub.
- [ ] Random encounters fire at correct probabilities during transit.
- [ ] All new flags initialize in StoryInit.
- [ ] Phone overlay tabs update with Day 5 content.
- [ ] All location cards use in-world lock reasons, never "content not available."
- [ ] Corner Store and other evergreen locations remain accessible throughout Day 5.
