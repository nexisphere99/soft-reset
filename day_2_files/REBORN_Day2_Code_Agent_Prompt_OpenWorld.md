# PROMPT FOR CODE AGENT — Add Day 2 to REBORN (Open World Architecture)

---

## CRITICAL ARCHITECTURE CHANGE

**This game is NOT a linear visual novel.** Days do NOT progress scene-to-scene directly. Instead, each day operates as an **open-world hub loop** where:

1. Player wakes up → sees **Objectives Panel** (what's available/needed today)
2. Player enters the **Location Hub** → sees available locations as a grid of cards
3. Player picks a location → triggers the **scene(s) at that location**
4. After the scene, player returns to the **Location Hub** (not the next scene)
5. Player picks another location or action → repeat until timeslots exhausted
6. End of day → **Sleep transition** → next day

**The core principle: destinations + unlock conditions, not scene chains.**

Players DISCOVER content by exploring locations. They are never railroaded from Scene A → Scene B. Instead, they see "You need underwear" as an objective, see "Thrift Store" as an available location, go there, and the Dolores scene plays. Afterward they're back at the hub, not auto-forwarded to the catcall. The catcall happens DURING the walk home (a transit event that fires based on flags, not because it's "next in sequence").

---

## CONTEXT

You have built Days 0–1 of REBORN. Day 0 was linear (tutorial day — acceptable). Day 1 was mostly linear (crisis day — acceptable). Starting Day 2, the game transitions into its open-world structure.

**From Day 2 onward, every day uses the Hub Loop system.**

---

## THE HUB LOOP SYSTEM

### Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    WAKE UP                           │
│  (Morning passage — prose, mirror, objectives)       │
│  Shows: Objectives Panel + "Start Your Day" button   │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│                  LOCATION HUB                        │
│  Grid of location cards (unlocked/locked/new)        │
│  Current timeslot shown (Morning/Afternoon/Evening)  │
│  Energy meter visible                                │
│  Objectives reminder (collapsible sidebar/top)       │
│                                                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ 🏠       │ │ 🏪       │ │ 📦       │            │
│  │ Apartment│ │ Thrift   │ │ DashDrop │            │
│  │          │ │ Store    │ │ (shift)  │            │
│  │ [Go]     │ │ [Go]  ★ │ │ [Locked] │            │
│  └──────────┘ └──────────┘ └──────────┘            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ 🏫       │ │ ☕       │ │ 🌳       │            │
│  │ Campus   │ │ Grounded │ │ Park     │            │
│  │ [Locked] │ │ [Locked] │ │ [Go]     │            │
│  └──────────┘ └──────────┘ └──────────┘            │
│                                                      │
│  ★ = has active objective / quest marker             │
│  [Locked] = greyed out with unlock hint text         │
└──────────────────────┬──────────────────────────────┘
                       │
              Player clicks a location
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│              LOCATION SCENE(S)                       │
│  Prose plays. NPCs encountered. Choices made.        │
│  Items purchased. Stats change.                      │
│  Scene ends with "Return to Map" button              │
│  (NOT "Go to next scene")                            │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
              Back to LOCATION HUB
              (timeslot may have advanced)
              (new locations may have unlocked)
              (objectives may have updated)
                       │
                       ▼
         Repeat until Night timeslot reached
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│                 APARTMENT (Night)                     │
│  Nighttime actions: eat, phone, self-exploration     │
│  "Go to Sleep" button available                      │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
                  SLEEP SCREEN
                  (Day advances)
```

### Key Rules

1. **Each timeslot allows 1-2 location visits** (tracked by energy cost, not hard count)
2. **Visiting a location costs energy** (5-20 depending on distance/activity)
3. **If energy drops below 20, only Apartment is available** ("You're too tired to go out")
4. **Timeslot advances automatically** when energy thresholds are crossed or key scenes complete
5. **The Apartment is ALWAYS available** (home base)
6. **Night timeslot only allows Apartment** (go home, eat, phone, bed)
7. **Objectives guide but don't force** — player CAN ignore objectives and just hang out at the park
8. **Locked locations show WHY they're locked** ("Unlocks Day 5" or "Requires FEM 20")

---

## IMPLEMENTATION: THE HUB PASSAGE

### Create: `:: LocationHub`

This is the CORE passage that players return to repeatedly. It reads the current game state and renders available locations dynamically.

```
:: LocationHub [nobr]
<<HUD>>

/* Objectives reminder — collapsible */
<div class="objectives-panel">
  <div class="objectives-header" data-collapsed="false">
    <span>📋 Today's Objectives</span>
    <span class="objectives-toggle">▼</span>
  </div>
  <div class="objectives-list">
    <<for _obj range $objectives>>
      <<if not _obj.done>>
        <div class="obj-item">
          <span class="obj-icon"><<if _obj.done>>✅<<else>>◻️<</if>></span>
          <span class="obj-text">_obj.text</span>
          <<if _obj.hint>><span class="obj-hint">_obj.hint</span><</if>>
        </div>
      <</if>>
    <</for>>
  </div>
</div>

/* Location Grid */
<div class="eyebrow">$timeIcons[$timeslot] $timeslot — $weekDay</div>
<h2>Where do you want to go?</h2>

<<if $player.energy lt 20>>
  <p class="energy-warning">⚡ You're exhausted. Head home and rest.</p>
<</if>>

<div class="location-grid">
  /* APARTMENT — always available */
  <div class="loc-card">
    <div class="loc-icon">🏠</div>
    <div class="loc-name">Apartment</div>
    <div class="loc-hint">Home. Shower. Mirror. Rest.</div>
    <<link '<span class="loc-btn">Go</span>' "Loc_Apartment">><</link>>
  </div>

  /* THRIFT STORE — unlocks Day 2 */
  <<if $day gte 2>>
    <div class="loc-card <<if hasObjectiveAt('thriftstore')>>loc-quest<</if>>">
      <div class="loc-icon">🏪</div>
      <div class="loc-name">Second Chances</div>
      <div class="loc-hint">Thrift store. Cheap clothes.</div>
      <<if $player.energy gte 15>>
        <<link '<span class="loc-btn">Go</span>' "Loc_ThriftStore">>
          <<set $player.energy -= 15>>
        <</link>>
      <<else>>
        <span class="loc-btn loc-btn-disabled">Too tired</span>
      <</if>>
    </div>
  <<else>>
    <div class="loc-card loc-locked">
      <div class="loc-icon">🔒</div>
      <div class="loc-name">???</div>
      <div class="loc-hint">Unlocks Day 2</div>
    </div>
  <</if>>

  /* CORNER STORE — always available */
  <div class="loc-card">
    <div class="loc-icon">🏪</div>
    <div class="loc-name">Corner Store</div>
    <div class="loc-hint">Groceries. Basics.</div>
    <<if $player.energy gte 10>>
      <<link '<span class="loc-btn">Go</span>' "Loc_CornerStore">>
        <<set $player.energy -= 10>>
      <</link>>
    <<else>>
      <span class="loc-btn loc-btn-disabled">Too tired</span>
    <</if>>
  </div>

  /* PARK — always available */
  <div class="loc-card">
    <div class="loc-icon">🌳</div>
    <div class="loc-name">Park</div>
    <div class="loc-hint">Walk. Bench. Think.</div>
    <<if $player.energy gte 10>>
      <<link '<span class="loc-btn">Go</span>' "Loc_Park">>
        <<set $player.energy -= 10>>
      <</link>>
    <<else>>
      <span class="loc-btn loc-btn-disabled">Too tired</span>
    <</if>>
  </div>

  /* DASHDROP — available but story-gated */
  <<if $day gte 5>>
    <div class="loc-card">
      <div class="loc-icon">🛵</div>
      <div class="loc-name">DashDrop</div>
      <div class="loc-hint">Delivery shift. Earn money.</div>
      <<link '<span class="loc-btn">Go</span>' "Loc_DashDrop">>
        <<set $player.energy -= 25>>
      <</link>>
    </div>
  <<else>>
    <div class="loc-card loc-locked">
      <div class="loc-icon">🛵</div>
      <div class="loc-name">DashDrop</div>
      <div class="loc-hint">Called in sick. Return Day 5.</div>
    </div>
  <</if>>

  /* CAMPUS — available but scene-gated for Day 2 */
  <<if $day gte 8>>
    <div class="loc-card">
      <div class="loc-icon">🏫</div>
      <div class="loc-name">Campus</div>
      <div class="loc-hint">Classes. Library. People.</div>
      <<link '<span class="loc-btn">Go</span>' "Loc_Campus">><</link>>
    </div>
  <<else>>
    <div class="loc-card loc-locked">
      <div class="loc-icon">🏫</div>
      <div class="loc-name">Campus</div>
      <div class="loc-hint">Not ready to face campus yet.</div>
    </div>
  <</if>>

  /* GROUNDED COFFEE — unlocks Day 5 */
  <<if $day gte 5>>
    <div class="loc-card">
      <div class="loc-icon">☕</div>
      <div class="loc-name">Grounded</div>
      <div class="loc-hint">Coffee. Warmth. River.</div>
      <<link '<span class="loc-btn">Go</span>' "Loc_Grounded">><</link>>
    </div>
  <<else>>
    <div class="loc-card loc-locked">
      <div class="loc-icon">🔒</div>
      <div class="loc-name">???</div>
      <div class="loc-hint">Unlocks Day 5</div>
    </div>
  <</if>>

  /* NOVACURE — available on check-in days */
  <<if $novaCureAvailable>>
    <div class="loc-card loc-quest">
      <div class="loc-icon">🧪</div>
      <div class="loc-name">NovaCure Labs</div>
      <div class="loc-hint">Check-in appointment.</div>
      <<link '<span class="loc-btn">Go</span>' "Loc_NovaCure">><</link>>
    </div>
  <</if>>

</div> /* end location-grid */

/* Time/Energy info */
<div class="hub-footer">
  <span>⚡ Energy: $player.energy / 100</span>
  <span>💰 $<<print $player.money>></span>
</div>
```

---

## DAY 2 OBJECTIVES SYSTEM

### How Objectives Work

Objectives are stored in `$objectives` array. Each objective is an object:
```javascript
{
  id: "d02_buy_clothes",
  text: "Buy women's basics (underwear, bra, clothes)",
  hint: "Try the thrift store — 3 blocks from home",
  location: "thriftstore",    // which location satisfies this
  done: false,
  day: 2,                     // when this objective appears
  priority: "main"            // "main" = story, "side" = optional, "hidden" = discovered
}
```

### Day 2 Objectives (Set in Morning Passage)

```javascript
<<set $objectives = []>>

/* MAIN: Buy clothes */
<<set $objectives.push({
  id: "d02_buy_clothes",
  text: "Get women's basics — bra, underwear, clothes that fit",
  hint: "The thrift store is 3 blocks away",
  location: "thriftstore",
  done: false,
  day: 2,
  priority: "main"
})>>

/* MAIN: Eat something real */
<<set $objectives.push({
  id: "d02_eat",
  text: "Get food — the cereal is gone",
  hint: "Corner store or order delivery",
  location: "any",
  done: false,
  day: 2,
  priority: "side"
})>>

/* HIDDEN: Try on new clothes (appears after buying) */
/* This gets pushed when $metDolores becomes true */

/* HIDDEN: Check phone (appears in evening) */
```

### Objective Helper Function

```javascript
/* Check if a location has an active objective */
window.hasObjectiveAt = function(locId) {
  var objs = State.variables.objectives;
  for (var i = 0; i < objs.length; i++) {
    if (objs[i].location === locId && !objs[i].done) return true;
  }
  return false;
};

/* Mark an objective as done */
window.completeObjective = function(objId) {
  var objs = State.variables.objectives;
  for (var i = 0; i < objs.length; i++) {
    if (objs[i].id === objId) {
      objs[i].done = true;
      showStatNotification("quest", "✅ " + objs[i].text);
      break;
    }
  }
};
```

---

## DAY 2 PASSAGE STRUCTURE (Open World)

### Wake-Up Passage (Linear — only morning is scripted)

```
:: D02_Morning [nobr]
<<set $day = 2>>
<<set $timeslot = "Morning">>
<<set $weekDay = "Saturday">>

/* Set today's objectives */
<<set $objectives = [
  { id:"d02_buy_clothes", text:"Get women's basics — underwear, bra, clothes", hint:"The thrift store is 3 blocks away", location:"thriftstore", done:false, day:2, priority:"main" },
  { id:"d02_eat", text:"Get food", hint:"Corner store or order delivery at home", location:"any", done:false, day:2, priority:"side" }
]>>

<<HUD>>

/* PROSE: Waking up still female, male clothes failing, dry cereal */
/* (Copy morning prose from Day 2 Content file here) */

/* After prose, show objectives panel and "Start Your Day" button */
<div class="objectives-panel">
  <h3>📋 Today</h3>
  <div class="obj-item"><span class="obj-icon">◻️</span> Get women's basics — underwear, bra, clothes that fit</div>
  <div class="obj-item obj-side"><span class="obj-icon">◻️</span> Get food</div>
</div>

<div class="choice-block">
  <<link '<span>🗺️ Head out into the world</span>' "LocationHub">>
    <<set $timeslot = "Afternoon">>
  <</link>>
</div>
```

### Location Passages (Each Returns to Hub)

**Thrift Store Location:**
```
:: Loc_ThriftStore [nobr]
<<HUD>>

/* Check if first visit */
<<if not $metDolores>>
  /* FIRST VISIT: Full Dolores scene from content file */
  /* (Dolores intro, shopping, buying, $32 deduction, wardrobe items added) */

  /* After scene: */
  <<set $metDolores = true>>
  <<run completeObjective("d02_buy_clothes")>>
  <<set $player.money -= 32>>
  <<run statChange("fem", 7)>>
  /* Push wardrobe items... */

  /* NEW OBJECTIVE APPEARS: Try on your new clothes at home */
  <<set $objectives.push({
    id: "d02_try_clothes",
    text: "Try on your new clothes",
    hint: "Go home to change",
    location: "apartment",
    done: false,
    day: 2,
    priority: "main"
  })>>

<<else>>
  /* REPEAT VISIT: Browse, chat with Dolores */
  <div class="prose-block">
    I push open the door. The bell chimes. Dolores looks up from behind the counter. "Back already, honey?"
    The racks are the same. The Christmas music is still playing. Some things are reliable.
  </div>

  /* Show available items for purchase */
  /* (Shop grid with remaining affordable items) */
<</if>>

/* TRANSIT EVENT: Catcall (fires on LEAVING thrift store if first visit and not yet triggered) */
/* This is handled by a transit event system — see below */

<div class="choice-block">
  <<link '<span>🗺️ Return to map</span>' "LocationHub">>
    /* Check for transit events */
    <<if $metDolores and not $firstCatcall>>
      <<set $transitEvent = "catcall">>
      <<goto "TransitEvent">>
    <</if>>
  <</link>>
</div>
```

**Apartment Location:**
```
:: Loc_Apartment [nobr]
<<HUD>>

/* Apartment is a sub-hub — show room options */
<div class="eyebrow">🏠 Home</div>
<h2>What do you want to do?</h2>

<div class="action-list">

  /* MIRROR — always available */
  <<link '<div class="action-card">
    <span class="action-icon">🪞</span>
    <span class="action-text">Check the mirror</span>
  </div>' "Apt_Mirror">><</link>>

  /* SHOWER — always available */
  <<link '<div class="action-card">
    <span class="action-icon">🚿</span>
    <span class="action-text">Take a shower</span>
    <span class="action-cost">⚡ -5</span>
  </div>' "Apt_Shower">>
    <<set $player.energy -= 5>>
  <</link>>

  /* CHANGE CLOTHES — only if owns women's clothes */
  <<if $wardrobe.length gt 0>>
    <<link '<div class="action-card <<if hasObjectiveAt("apartment")>>action-quest<</if>>">
      <span class="action-icon">👚</span>
      <span class="action-text">Change clothes / Try on outfits</span>
    </div>' "Apt_Wardrobe">>
    <</link>>
  <</if>>

  /* EAT — check what's available */
  <<link '<div class="action-card">
    <span class="action-icon">🍽️</span>
    <span class="action-text">Eat something</span>
  </div>' "Apt_Eat">><</link>>

  /* PHONE — always available */
  <<link '<div class="action-card">
    <span class="action-icon">📱</span>
    <span class="action-text">Check phone</span>
  </div>' "Apt_Phone">><</link>>

  /* ORDER DELIVERY — costs money */
  <<link '<div class="action-card">
    <span class="action-icon">🍕</span>
    <span class="action-text">Order delivery food</span>
    <span class="action-cost">💰 ~$25</span>
  </div>' "Apt_OrderFood">><</link>>

  /* SLEEP — only available at Night timeslot */
  <<if $timeslot is "Night">>
    <<link '<div class="action-card action-sleep">
      <span class="action-icon">🛏️</span>
      <span class="action-text">Go to bed</span>
    </div>' "D02_Bedtime">><</link>>
  <</if>>

</div>

/* Back to map — unless Night, then apartment IS the only option */
<<if $timeslot isnot "Night">>
  <div class="choice-block">
    <<link '<span>🗺️ Leave apartment</span>' "LocationHub">><</link>>
  </div>
<</if>>
```

**Apartment Sub-Passages (the action scenes):**

```
:: Apt_Wardrobe [nobr]
/* This is where the "trying on clothes" scene lives */
<<if not $d02TriedOnClothes and $metDolores>>
  /* FIRST TIME trying on new clothes: Full prose from content file */
  /* Sports bra scene, panties scene, jeans scene, tee scene, mirror scene */
  <<set $d02TriedOnClothes = true>>
  <<run completeObjective("d02_try_clothes")>>

  /* Auto-equip new outfit */
  <<set $equipped.top = "tshirt_black">>
  <<set $equipped.bottom = "jeans_blue_skinny">>
  <<set $equipped.bra = "sports_bra_black">>
  <<set $equipped.underwear = "panties_cotton_3pk">>

  /* Player choice: explore mirror more or move on */
  <div class="choice-block">
    <<link '<span>🔍 Take the clothes off. Look closer.</span>' "Apt_MirrorExplore">>
      <<run statChange("fem", 2)>>
      <<run statChange("cor", 1)>>
    <</link>>
    <<link '<span>👍 These fit. Good enough.</span>' "Loc_Apartment">><</link>>
  </div>

<<else>>
  /* WARDROBE SYSTEM: Show owned clothes, let player mix and match */
  /* (Full wardrobe UI — grid of owned items, slot selection, stat preview) */
  /* Returns to Loc_Apartment */
<</if>>
```

```
:: Apt_OrderFood [nobr]
/* Ordering delivery — Pizza scene */
<<if $timeslot is "Evening" or $timeslot is "Night">>
  <<if not $metMike>>
    /* First time ordering — Mike NPC encounter */
    /* (Full Mike scene from content file) */
    <<set $metMike = true>>
    <<set $player.money -= 26>>
    <<run completeObjective("d02_eat")>>
  <<else>>
    /* Repeat order — Mike may or may not deliver */
    <<set $player.money -= 20>>
    <<run completeObjective("d02_eat")>>
  <</if>>
<<else>>
  <div class="prose-block">
    It's a bit early for delivery. Maybe later tonight.
  </div>
<</if>>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: Apt_Phone [nobr]
/* Phone — shows messages, notifications based on flags */
<div class="prose-block">
  I check my phone.
</div>

/* Jake's message — always on Day 2 */
<<if $day is 2 and not $d02JakeTexted>>
  <<Dialogue "Jake" "💪" "seriously u good?? Can I do anything?" "">>

  <div class="choice-block">
    <<link '<span>💬 "yeah just a bug. Give me a couple days."</span>' "Apt_Phone_After">>
      <<set $d02JakeTexted = true>>
    <</link>>
  </div>
<<else>>
  <p style="color:var(--text3);">No new messages right now.</p>
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
<</if>>
```

```
:: Apt_Phone_After [nobr]
<<Dialogue $player.name "👤" "yeah just a bug. Give me a couple days." "you">>
<<Dialogue "Jake" "💪" "aight feel better dude 💪" "">>

<div class="prose-block">
  Dude. He called me dude. I put the phone face-down on the couch.
</div>

/* University email — appears after Jake text */
<<if not $d02UniEmail>>
  <div class="prose-block">
    One more notification. Email from the university: "Please confirm your preferred name for academic correspondence."
    
    I type "<<print $player.name>>." Stare at it. Delete it. Type "Aiden." Stare at that. Delete it. Type "<<print $player.name>>" again.
    
    Send.
    
    The confirmation arrives eight seconds later. "Thank you, <<print $player.name>>. Your records have been updated."
    
    I close the email. Don't think about it. Don't think about it. Don't think about it.
  </div>
  <<set $d02UniEmail = true>>
<</if>>

<<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
```

---

## TRANSIT EVENT SYSTEM

Transit events fire BETWEEN locations — they represent things that happen while walking/riding between places. They're triggered by flags, not by direct links.

### Implementation

```
:: TransitEvent [nobr]
/* Route based on $transitEvent variable */
<<switch $transitEvent>>

<<case "catcall">>
  /* CATCALL SCENE — fires when leaving thrift store for the first time */
  <<HUD>>

  /* (Full catcall prose from content file) */

  <<set $firstCatcall = true>>
  <<run statChange("stress", 5)>>
  <<run statChange("fem", 1)>>
  <<set $transitEvent = "">>

  <div class="choice-block">
    <<link '<span>🗺️ Keep walking. Get home.</span>' "LocationHub">><</link>>
  </div>

<<case "bus_gaze">>
  /* MALE GAZE ON BUS — fires on first bus trip */
  /* (Bus scene from Day 1 can be refactored here for reuse) */
  <<set $transitEvent = "">>
  <<link '<span>🗺️ Arrive at destination</span>' "LocationHub">><</link>>

<<default>>
  /* No transit event — go straight to hub */
  <<goto "LocationHub">>

<</switch>>
```

### How Transit Events Are Triggered

In location passages, instead of linking directly to the transit scene, set the `$transitEvent` variable and redirect:

```javascript
/* In Loc_ThriftStore, when player clicks "Return to map": */
<<if $metDolores and not $firstCatcall>>
  <<set $transitEvent = "catcall">>
  <<goto "TransitEvent">>
<<else>>
  <<goto "LocationHub">>
<</if>>
```

This makes transit events feel natural — they happen "on the way" rather than being a forced scene.

---

## TIMESLOT ADVANCEMENT

Timeslots advance based on **actions taken**, not automatically:

```javascript
window.checkTimeAdvance = function() {
  var energy = State.variables.player.energy;
  var current = State.variables.timeslot;

  // Energy-based transitions
  if (current === "Morning" && energy <= 75) {
    State.variables.timeslot = "Afternoon";
  } else if (current === "Afternoon" && energy <= 50) {
    State.variables.timeslot = "Evening";
  } else if (current === "Evening" && energy <= 25) {
    State.variables.timeslot = "Night";
  }

  // Or: key scene completion can force advance
};

// Call this in the LocationHub passage:
// <<run checkTimeAdvance()>>
```

Alternatively, some scenes can FORCE timeslot advance:
```javascript
/* Thrift store shopping takes time — advance to Afternoon */
<<if $timeslot is "Morning">>
  <<set $timeslot = "Afternoon">>
<</if>>
```

---

## NIGHT ROUTINE (Apartment-Only)

When `$timeslot` is "Night", the LocationHub only shows "Apartment." At the apartment, the action list changes to night-specific actions:

```
/* Night-specific actions */
<<if $timeslot is "Night">>

  /* Eat — if hasn't eaten */
  <<if not $d02Ate>>
    <<link "🍽️ Eat something" "Apt_Eat">><</link>>
  <</if>>

  /* Phone — check messages */
  <<link "📱 Check phone" "Apt_Phone">><</link>>

  /* Self-exploration — if Day 2+ */
  <<if $day gte 2>>
    <<link '<div class="action-card action-fem">
      <span class="action-icon">🔥</span>
      <span class="action-text">Lie in bed... (self-exploration)</span>
    </div>' "D02_SelfExplore">><</link>>
  <</if>>

  /* Sleep */
  <<link '<div class="action-card action-sleep">
    <span class="action-icon">🛏️</span>
    <span class="action-text">Go to sleep</span>
  </div>' "D02_Sleep">><</link>>

<</if>>
```

---

## DAY 2 COMPLETE PASSAGE LIST

| Passage | Type | Description |
|---|---|---|
| `D02_Morning` | **Wake-up** (linear) | Morning prose, objectives set, "Start your day" button → Hub |
| `LocationHub` | **Hub** (reusable) | Location grid, dynamic, returns here after every scene |
| `TransitEvent` | **System** (reusable) | Transit events between locations (catcall, bus scenes) |
| `Loc_ThriftStore` | **Location** | Dolores scene (first visit) / Shop browse (repeat) |
| `Loc_Apartment` | **Location sub-hub** | Room/action list (mirror, shower, wardrobe, eat, phone, sleep) |
| `Loc_CornerStore` | **Location** | Buy groceries, basics (minimal Day 2 content) |
| `Loc_Park` | **Location** | Walk, bench, think (minimal Day 2 content, optional stress relief) |
| `Apt_Wardrobe` | **Apartment action** | Try on new clothes / wardrobe system |
| `Apt_MirrorExplore` | **Apartment action** | Optional extended mirror body study |
| `Apt_Shower` | **Apartment action** | Shower (basic or exploratory) |
| `Apt_Mirror` | **Apartment action** | Quick mirror check (stat display, body commentary) |
| `Apt_Eat` | **Apartment action** | Eat from kitchen (cereal, cook, etc.) |
| `Apt_Phone` | **Apartment action** | Jake text, university email |
| `Apt_Phone_After` | **Apartment action** | Jake reply + uni email confirmation |
| `Apt_OrderFood` | **Apartment action** | Order delivery — Mike NPC (evening/night only) |
| `D02_SelfExplore` | **Night action** | Optional bedtime masturbation scene |
| `D02_Sleep` | **Sleep screen** | Day 2 → Day 3 transition |

---

## CSS ADDITIONS NEEDED

### Objectives Panel
```css
.objectives-panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
.objectives-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
}
.obj-item {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .4rem 0;
  color: var(--text2);
  font-size: .88rem;
}
.obj-item.obj-done { color: var(--text3); text-decoration: line-through; }
.obj-hint {
  font-size: .75rem;
  color: var(--text3);
  margin-left: 1.5rem;
  display: block;
}
```

### Location Grid
```css
.location-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .8rem;
  margin: 1.5rem 0;
}
@media (max-width: 600px) {
  .location-grid { grid-template-columns: repeat(2, 1fr); }
}
.loc-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1rem;
  text-align: center;
  transition: all .2s ease;
  cursor: pointer;
}
.loc-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px #00000030;
}
.loc-card.loc-locked {
  opacity: .4;
  pointer-events: none;
  cursor: not-allowed;
}
.loc-card.loc-quest {
  border-color: var(--accent);
  box-shadow: 0 0 12px var(--accent-glow);
}
.loc-card.loc-quest::after {
  content: "★";
  position: absolute;
  top: .5rem;
  right: .5rem;
  color: var(--accent);
  font-size: 1rem;
}
.loc-icon { font-size: 2rem; margin-bottom: .3rem; }
.loc-name { font-weight: 600; color: var(--text); font-size: .9rem; }
.loc-hint { font-size: .75rem; color: var(--text3); margin-top: .2rem; }
.loc-btn {
  display: inline-block;
  margin-top: .6rem;
  padding: .3rem 1rem;
  border-radius: 99px;
  background: var(--accent);
  color: white;
  font-size: .78rem;
  font-weight: 600;
}
.loc-btn-disabled {
  background: var(--surface2);
  color: var(--text3);
  cursor: not-allowed;
}
```

### Action Cards (Apartment sub-hub)
```css
.action-list {
  display: flex;
  flex-direction: column;
  gap: .6rem;
  max-width: 480px;
}
.action-card {
  display: flex;
  align-items: center;
  gap: .8rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: .8rem 1rem;
  transition: all .2s ease;
  cursor: pointer;
}
.action-card:hover {
  border-color: var(--accent);
  transform: translateX(4px);
  box-shadow: 0 4px 16px #00000020;
}
.action-icon { font-size: 1.3rem; }
.action-text { flex: 1; font-weight: 500; color: var(--text); font-size: .9rem; }
.action-cost {
  font-size: .75rem;
  color: var(--text3);
  background: var(--surface2);
  padding: .2rem .5rem;
  border-radius: 99px;
}
.action-card.action-quest {
  border-color: var(--accent);
  box-shadow: 0 0 8px var(--accent-glow);
}
.action-card.action-fem {
  border-left: 3px solid var(--rose);
}
.action-card.action-sleep {
  border-left: 3px solid var(--blue);
}
```

### Energy Warning
```css
.energy-warning {
  background: var(--red)15;
  border: 1px solid var(--red)30;
  border-radius: 8px;
  padding: .6rem 1rem;
  color: var(--red);
  font-size: .85rem;
  text-align: center;
  margin-bottom: 1rem;
}
```

---

## JS ADDITIONS NEEDED

### Objectives System
```javascript
/* Add to Story JavaScript */

// Check if any location has an active objective
window.hasObjectiveAt = function(locId) {
  var objs = State.variables.objectives || [];
  for (var i = 0; i < objs.length; i++) {
    if (objs[i].location === locId && !objs[i].done) return true;
  }
  return false;
};

// Complete an objective by ID
window.completeObjective = function(objId) {
  var objs = State.variables.objectives || [];
  for (var i = 0; i < objs.length; i++) {
    if (objs[i].id === objId && !objs[i].done) {
      objs[i].done = true;
      // Show completion notification
      var el = document.createElement("div");
      el.className = "stat-toast";
      el.style.color = "var(--accent)";
      el.textContent = "✅ " + objs[i].text;
      document.body.appendChild(el);
      setTimeout(function(){ el.classList.add("show"); }, 10);
      setTimeout(function(){ el.classList.remove("show"); }, 3000);
      setTimeout(function(){ el.remove(); }, 3500);
      break;
    }
  }
};

// Time advancement check
window.checkTimeAdvance = function() {
  var e = State.variables.player.energy;
  var t = State.variables.timeslot;
  if (t === "Morning" && e <= 75) State.variables.timeslot = "Afternoon";
  else if (t === "Afternoon" && e <= 50) State.variables.timeslot = "Evening";
  else if (t === "Evening" && e <= 25) State.variables.timeslot = "Night";
};
```

### StoryInit Additions
```javascript
/* Add these to StoryInit */
<<set $objectives = []>>
<<set $transitEvent = "">>
<<set $d02TriedOnClothes = false>>
<<set $d02JakeTexted = false>>
<<set $d02UniEmail = false>>
<<set $d02Ate = false>>
<<set $d02ExploreDeep = false>>
<<set $novaCureAvailable = false>>
```

---

## RETROACTIVE CHANGES TO DAYS 0–1

Days 0 and 1 remain linear (tutorial/crisis days). However, Day 1's sleep screen should link to `D02_Morning` which now uses the hub system. No other changes needed.

**Optional improvement:** You could retroactively add the LocationHub to Day 1's evening (after NovaCure, MC goes home — but could theoretically visit the corner store on the way). This is optional for v1.

---

## QUALITY CHECKLIST

- [ ] `LocationHub` renders correctly with 6+ location cards
- [ ] Locked locations show lock icon + unlock reason
- [ ] Quest-marked locations have purple glow border + star
- [ ] Clicking a location reduces energy and triggers the scene
- [ ] After every location scene, player returns to `LocationHub` (NOT next scene)
- [ ] Timeslot advances based on energy consumption
- [ ] At Night timeslot, only Apartment is available in the hub
- [ ] Objectives panel shows on morning passage and in hub (collapsible)
- [ ] Objectives complete with ✅ notification when conditions are met
- [ ] Transit events (catcall) fire BETWEEN locations, not at them
- [ ] Apartment sub-hub shows action cards (mirror, shower, wardrobe, eat, phone, sleep)
- [ ] Wardrobe action shows "trying on clothes" scene on first use after purchase
- [ ] Mike delivery NPC only appears during Evening/Night timeslot
- [ ] Phone shows Jake text and university email with proper conditionals
- [ ] Self-exploration is a Night action at the apartment, not auto-triggered
- [ ] Sleep screen is accessible only from Apartment at Night
- [ ] Energy displays correctly in hub footer
- [ ] Money displays correctly and updates on purchases
- [ ] Location grid is responsive (3 columns → 2 on mobile)
- [ ] All prose in `.prose-block`, all choices in `.choice-block`
- [ ] Save/load works at any point (hub, location, apartment)

---

## WHAT THIS CHANGES GOING FORWARD

Starting Day 2, **every future day** uses this architecture:
1. Morning wake-up passage (linear, sets objectives)
2. LocationHub (player-driven exploration)
3. Location scenes triggered by player choice
4. Transit events between locations
5. Apartment sub-hub for home actions
6. Night routine at apartment
7. Sleep transition

Days 3-90 will ADD locations to the hub grid, ADD objectives to the morning passage, and ADD scenes to existing locations. The system is designed to scale — dropping a new `.twee` file with a location scene is all that's needed to expand the world.

**The hub is the spine. Everything hangs off it.**
