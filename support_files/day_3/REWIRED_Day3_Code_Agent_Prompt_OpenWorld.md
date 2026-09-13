# PROMPT FOR CODE AGENT — Add Day 3 to REWIRED (Open World Architecture)

---

## CRITICAL ARCHITECTURE REMINDER

**This game is NOT a linear visual novel.** Refer to `REWIRED_OpenWorld_Architecture_Guide.md` for the full architecture. Day 3 uses the same hub-loop system established in Day 2.

**Core loop:**
1. Player wakes up → Morning passage (linear, sets objectives)
2. Player enters `LocationHub` → picks from available location cards
3. Location scene plays → player returns to hub via "Return to map"
4. Repeat until Night timeslot → Apartment-only actions → Sleep → Day 4

**Day 3 is a solo/indoor day.** MC does not leave the apartment for main-story beats. All core content happens inside the apartment sub-hub. However, optional side content allows visiting the Corner Store, Park, and Laundromat.

---

## CONTEXT

You have built Days 0-2 of REWIRED. The `LocationHub`, `Loc_Apartment`, transit event system, objective system, HUD, and all CSS/JS infrastructure are in place. Day 3 adds new apartment actions, new content to existing locations, and new StoryInit flags.

**Source Content Files:**
1. `REWIRED_Day3_MainStory.md` — Main storyline prose (wake-up, body inventory, research, physical exploration, masturbation, evening, bedtime)
2. `REWIRED_Day3_NPC_SideQuest.md` — NPC encounters, phone interactions, corner store, park, laundromat, delivery, porn exploration, online shopping

---

## DAY 3 OBJECTIVES

### Objectives Set in Morning Passage

```javascript
<<set $objectives = [
  { id:"d03_body_inventory", text:"Figure out this body — measure, research, understand", hint:"Stay home. You need the laptop and some privacy", location:"apartment", done:false, day:3, priority:"main" },
  { id:"d03_eat", text:"Get food — the cereal is gone", hint:"Corner store or cook something", location:"any", done:false, day:3, priority:"side" },
  { id:"d03_call_work", text:"Call DashDrop — Owen's expecting you", hint:"Use your phone", location:"apartment", done:false, day:3, priority:"main" }
]>>
```

### Hidden Objectives (pushed dynamically)

```javascript
/* After completing body inventory */
<<set $objectives.push({
  id: "d03_research",
  text: "Research — anatomy, bra sizing, skincare, everything",
  hint: "Laptop on the bed",
  location: "apartment",
  done: false,
  day: 3,
  priority: "side"
})>>

/* After completing research — optional */
<<set $objectives.push({
  id: "d03_explore_body",
  text: "Examine yourself more closely",
  hint: "Hand mirror. Privacy. Courage.",
  location: "apartment",
  done: false,
  day: 3,
  priority: "hidden"
})>>
```

---

## DAY 3 PASSAGE STRUCTURE

### Wake-Up Passage (Linear — morning is scripted)

```
:: D03_Morning [nobr]
<<set $day = 3>>
<<set $timeslot = "Morning">>
<<set $weekDay = "Sunday">>
<<set $player.energy = 100>>

/* Set today's objectives */
<<set $objectives = [
  { id:"d03_body_inventory", text:"Figure out this body — measure, research, understand", hint:"Stay home. Use the laptop", location:"apartment", done:false, day:3, priority:"main" },
  { id:"d03_eat", text:"Get food — cereal is gone", hint:"Corner store or cook at home", location:"any", done:false, day:3, priority:"side" },
  { id:"d03_call_work", text:"Call DashDrop — you need to check in", hint:"Phone", location:"apartment", done:false, day:3, priority:"main" }
]>>

<<HUD>>

<div class="prose-block">
  /* INSERT: D03_Morning prose from MainStory.md */
  /* "I open my eyes and the first thing I feel is the weight..." */
  /* Through bathroom scene, kitchen/cereal scene */
</div>

<div class="scene-divider"><span>Morning</span></div>

/* Objectives panel */
<div class="objectives-panel">
  <h3>📋 Today</h3>
  <div class="obj-item"><span class="obj-icon">◻️</span> Figure out this body</div>
  <div class="obj-item"><span class="obj-icon">◻️</span> Call DashDrop</div>
  <div class="obj-item obj-side"><span class="obj-icon">◻️</span> Get food</div>
</div>

<div class="choice-block">
  <<link '<span>🏠 Start your day</span>' "Loc_Apartment">>
    <<set $timeslot = "Morning">>
  <</link>>
</div>
```

**NOTE:** Day 3 morning routes directly to `Loc_Apartment`, not `LocationHub`, because the narrative establishes MC is staying inside. However, the player CAN leave the apartment to `LocationHub` from there.

---

### Apartment Sub-Hub Extensions (Day 3 Actions)

Extend `Loc_Apartment` with Day 3-specific actions. These appear conditionally based on `$day` and flags.

```
/* In Loc_Apartment action list — add these for Day 3: */

/* CALL WORK — only if not done yet */
<<if $day is 3 and not $d03CalledOwen>>
  <<link '<div class="action-card action-quest">
    <span class="action-icon">📞</span>
    <span class="action-text">Call DashDrop</span>
  </div>' "Apt_CallOwen">><</link>>
<</if>>

/* BODY INVENTORY — Day 3, bedroom, not done */
<<if $day gte 3 and not $d03BodyInventory>>
  <<link '<div class="action-card action-quest">
    <span class="action-icon">📏</span>
    <span class="action-text">Measure and study this body</span>
    <span class="action-cost">⚡ -10</span>
  </div>' "Apt_BodyInventory">>
    <<set $player.energy -= 10>>
  <</link>>
<</if>>

/* RESEARCH — unlocks after body inventory */
<<if $d03BodyInventory and not $d03Research>>
  <<link '<div class="action-card action-fem">
    <span class="action-icon">💻</span>
    <span class="action-text">Research on laptop</span>
    <span class="action-cost">⚡ -10</span>
  </div>' "Apt_Research">>
    <<set $player.energy -= 10>>
  <</link>>
<</if>>

/* PHYSICAL EXPLORATION — unlocks after research, optional */
<<if $d03Research and not $d03PhysicalExam>>
  <<link '<div class="action-card action-fem">
    <span class="action-icon">🪞</span>
    <span class="action-text">Examine yourself with the hand mirror</span>
    <span class="action-cost">⚡ -5</span>
  </div>' "Apt_PhysicalExplore">>
    <<set $player.energy -= 5>>
  <</link>>
<</if>>

/* MASTURBATION EXPLORATION — unlocks after physical exam, optional NSFW */
<<if $d03PhysicalExam and not $d03MasturbationExplore>>
  <<link '<div class="action-card action-fem">
    <span class="action-icon">🔥</span>
    <span class="action-text">Test your body'\''s responses... (research)</span>
    <span class="action-cost">⚡ -15</span>
  </div>' "Apt_MasturbationExplore">>
    <<set $player.energy -= 15>>
  <</link>>
<</if>>

/* COOK — Day 3+, kitchen, if has groceries */
<<if $day gte 3>>
  <<link '<div class="action-card">
    <span class="action-icon">🍝</span>
    <span class="action-text">Cook something</span>
    <span class="action-cost">⚡ -5</span>
  </div>' "Apt_Cook_D03">>
    <<set $player.energy -= 5>>
  <</link>>
<</if>>

/* ONLINE SHOPPING — Day 3+, laptop */
<<if $day gte 3>>
  <<link '<div class="action-card">
    <span class="action-icon">🛒</span>
    <span class="action-text">Browse online shopping</span>
  </div>' "Apt_OnlineShopping">><</link>>
<</if>>

/* PORN EXPLORATION — Night only, Day 3+, optional */
<<if $timeslot is "Night" and $day gte 3 and not $d03PornExplored>>
  <<link '<div class="action-card action-fem">
    <span class="action-icon">💻</span>
    <span class="action-text">Browse... other things on the laptop</span>
  </div>' "Apt_PornExplore">>
    <<set $d03PornExplored = true>>
  <</link>>
<</if>>
```

---

### Day 3 Apartment Action Passages

```
:: Apt_CallOwen [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_CallingIn prose from MainStory.md */
  /* "My phone buzzes on the counter..." through "Friday is Friday. Today is today." */
</div>

<<set $d03CalledOwen = true>>
<<run completeObjective("d03_call_work")>>
<<run statChange("stress", 5)>>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: Apt_BodyInventory [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_BodyInventory_Start prose from MainStory.md */
  /* "I make a decision somewhere between..." through the measurements */
</div>

<<set $d03BodyInventory = true>>
<<run completeObjective("d03_body_inventory")>>

/* Update body measurements in state */
<<set $body.bust = 34>>
<<set $body.waist = 24.5>>
<<set $body.hips = 35.5>>
<<set $body.height = 66>>
<<set $body.braCup = "B">>
<<set $body.braSize = "32B">>

/* Push research objective */
<<set $objectives.push({
  id: "d03_research",
  text: "Research — anatomy, sizing, skincare",
  hint: "Laptop. Go deep.",
  location: "apartment",
  done: false,
  day: 3,
  priority: "side"
})>>

<div class="choice-block">
  <<link '<span>💻 Start researching</span>' "Apt_Research">><</link>>
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: Apt_Research [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_ResearchRabbitHole prose from MainStory.md */
  /* "The laptop is on the bed..." through "I need to understand it." */
</div>

<<set $d03Research = true>>
<<run completeObjective("d03_research")>>
<<run statChange("int", 2)>>

/* Push optional exploration objective */
<<set $objectives.push({
  id: "d03_explore_body",
  text: "Examine yourself more closely",
  hint: "Hand mirror. Bed. Privacy.",
  location: "apartment",
  done: false,
  day: 3,
  priority: "hidden"
})>>

/* Advance timeslot if still morning */
<<if $timeslot is "Morning">>
  <<set $timeslot = "Afternoon">>
<</if>>

<div class="choice-block">
  <<link '<span>🪞 Get the hand mirror</span>' "Apt_PhysicalExplore">>
    <<run statChange("fem", 1)>>
  <</link>>
  <<link '<span>🏠 Enough for now</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: Apt_PhysicalExplore [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_PhysicalExploration prose from MainStory.md */
  /* "The hand mirror lives in the bathroom cabinet..." through "Every fold, every opening, every nerve ending. Mine." */
</div>

<<set $d03PhysicalExam = true>>
<<run completeObjective("d03_explore_body")>>
<<run statChange("fem", 1)>>

<div class="choice-block">
  <<link '<span>🔥 Keep going... test how this body responds</span>' "Apt_MasturbationExplore">>
    <<run statChange("cor", 1)>>
  <</link>>
  <<link '<span>🏠 That'\''s enough for now</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: Apt_MasturbationExplore [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_MasturbationExploration prose from MainStory.md */
  /* "I tell myself this is research..." through "She smiles." (before dream) */
  /* This is a LONG passage — use scene dividers between technique sections */
</div>

<<set $d03MasturbationExplore = true>>
<<run statChange("fem", 3)>>
<<run statChange("cor", 3)>>

/* Sexual tracker updates */
<<set $sexLog.firsts.squirting = $day>>
<<set $sexLog.firsts.multipleOrgasms = $day>>

/* Advance timeslot */
<<if $timeslot is "Afternoon">>
  <<set $timeslot = "Evening">>
<</if>>

<div class="choice-block">
  <<link '<span>🏠 Done. Lie here for a while.</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: Apt_Cook_D03 [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_Evening_Cook prose from MainStory.md */
  /* "The afternoon disappears..." through the spaghetti scene */
</div>

<<set $d03Ate = true>>
<<run completeObjective("d03_eat")>>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: Apt_OnlineShopping [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_OnlineShopping_Extended prose from NPC_SideQuest.md */
  /* Vibrator, hairbrush, razor browsing and ordering */
</div>

/* Shopping choices */
<div class="choice-block">
  <<link '<span>🛒 Order vibrator ($15.99)</span>' "Apt_OnlineShopping_Confirm">>
    <<set $player.money -= 15.99>>
    <<set $d03OrderedVibrator = true>>
    <<run statChange("cor", 1)>>
  <</link>>
  <<link '<span>🛒 Order hairbrush + razor ($15.98)</span>' "Apt_OnlineShopping_Confirm">>
    <<set $player.money -= 15.98>>
    <<set $d03OrderedBasics = true>>
  <</link>>
  <<link '<span>🛒 Order everything ($31.97)</span>' "Apt_OnlineShopping_Confirm">>
    <<set $player.money -= 31.97>>
    <<set $d03OrderedVibrator = true>>
    <<set $d03OrderedBasics = true>>
    <<run statChange("cor", 1)>>
  <</link>>
  <<link '<span>🏠 Close the laptop</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: Apt_OnlineShopping_Confirm [nobr]
<<HUD>>

<div class="prose-block">
  Order confirmed. Estimated delivery: 2 days.
  <<if $d03OrderedVibrator>>
  The vibrator is in my order history now. A matte purple bullet vibrator with ten vibration patterns. This is who I am now. A woman who owns a vibrator. Or will, in two days.
  <</if>>
  <<if $d03OrderedBasics>>
  The hairbrush and razor will arrive Friday. The same day I have to face Owen and DashDrop. At least my hair won't be tangled when I show up to explain why Marcus isn't coming back.
  <</if>>
</div>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: Apt_PornExplore [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_PornExploration prose from NPC_SideQuest.md */
  /* Full scene — straight, lesbian, solo, category exploration */
</div>

<<set $d03PornExplored = true>>

/* Orientation tracking */
<<set $sexLog.orientation.heteroExp += 1>>
<<set $sexLog.orientation.sapphicExp += 2>>
<<run statChange("cor", 1)>>

<div class="choice-block">
  <<link '<span>🏠 Close the laptop</span>' "Loc_Apartment">><</link>>
</div>
```

---

### Phone Passage Extensions (Day 3)

```
:: Apt_Phone [nobr]
/* Extend existing phone passage with Day 3 content */

<<if $day is 3 and not $d03NolanTexted>>
  /* INSERT: D03_Phone_Nolan_Thread prose from NPC_SideQuest.md */
  <<Dialogue "Nolan" "💪" "U alive? 💀" "">>

  <div class="choice-block">
    <<link '<span>💬 "barely. How'\''s the gym?"</span>' "Apt_Phone_Nolan_D03">>
      <<set $d03NolanTexted = true>>
    <</link>>
  </div>

<<elseif $day is 3 and $d03NolanTexted and not $d03NolanExtended>>
  /* INSERT: D03_Phone_Nolan_Extended prose from NPC_SideQuest.md */
  <<Dialogue "Nolan" "💪" "yo I tried that Korean BBQ place on 5th" "">>
  <<Dialogue "Nolan" "💪" "fire. Like actually fire. The bulgogi was insane" "">>
  <<Dialogue "Nolan" "💪" "we gotta go when ur better" "">>

  <div class="choice-block">
    <<link '<span>💬 "sounds good man"</span>' "Apt_Phone_Nolan_D03_After">>
      <<set $d03NolanExtended = true>>
    <</link>>
  </div>

<<else>>
  <p style="color:var(--text3);">No new messages right now.</p>
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
<</if>>

/* University email — appears after Nolan thread resolved */
<<if $day is 3 and $d03NolanTexted and not $d03UniEmailRead>>
  <div class="scene-divider"><span>Email</span></div>
  <div class="prose-block">
    /* INSERT: D03_Phone_UniEmail_Full prose from NPC_SideQuest.md */
    /* Full email text and MC's reaction */
  </div>
  <<set $d03UniEmailRead = true>>
  <<run statChange("fem", 1)>>
<</if>>
```

---

### Location Passages (Day 3 Additions)

**Corner Store — Day 3 content:**

```
:: Loc_CornerStore [nobr]
<<HUD>>

<<if $day gte 3>>
  <div class="prose-block">
    /* INSERT: D03_CornerStore_Hector prose from NPC_SideQuest.md */
    /* "Lucky Mart is six doors down..." through mango scene */
  </div>

  /* Shop grid — show purchasable items */
  <div class="shop-grid">
    <h3>🏪 Lucky Mart</h3>

    <<link '<div class="shop-item">
      <span>🥫 Groceries (pasta, sauce, rice, eggs, fruit)</span>
      <span class="shop-price">$18.40</span>
    </div>' "CornerStore_BuyGroceries">>
      <<set $player.money -= 18.40>>
      <<set $hasGroceries = true>>
      <<run completeObjective("d03_eat")>>
    <</link>>

    <<link '<div class="shop-item">
      <span>🧴 Hair & body care (shampoo, conditioner, lotion)</span>
      <span class="shop-price">$14.20</span>
    </div>' "CornerStore_BuyToiletries">>
      <<set $player.money -= 14.20>>
      <<set $hasHairCare = true>>
    <</link>>

    <<link '<div class="shop-item">
      <span>🩹 Panty liners (small pack)</span>
      <span class="shop-price">$4.00</span>
    </div>' "CornerStore_BuyLiners">>
      <<set $player.money -= 4.00>>
      <<set $hasPantyLiners = true>>
    <</link>>
  </div>

  <div class="choice-block">
    <<link '<span>🗺️ Return to map</span>' "LocationHub">><</link>>
  </div>
<</if>>
```

**Park — Day 3 content:**

```
:: Loc_Park [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_Park_Bench prose from NPC_SideQuest.md */
  /* "I need air. The apartment walls are closing in..." */
</div>

/* Random encounter — weighted pool */
<<if random(1,100) lte 40>>
  <div class="scene-divider"><span>Encounter</span></div>
  <div class="prose-block">
    /* INSERT: D03_Park_RandomEncounter (Duck Lady) from NPC_SideQuest.md */
  </div>
  <<run statChange("stress", -5)>>
<</if>>

<<run statChange("stress", -3)>>

<div class="choice-block">
  <<link '<span>🗺️ Return to map</span>' "LocationHub">><</link>>
</div>
```

**Laundromat — Day 3 content:**

```
:: Loc_Laundromat [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_Laundromat_Random prose from NPC_SideQuest.md */
  /* "The sheets need washing..." through laundry and Marcus selfie reflection */
</div>

<<set $d03DidLaundry = true>>
<<set $player.money -= 5.50>>

<div class="choice-block">
  <<link '<span>🗺️ Return to map</span>' "LocationHub">><</link>>
</div>
```

---

### Transit Events (Day 3)

```
:: TransitEvent [nobr]
/* Extend existing TransitEvent switch with Day 3 events */

<<case "mrs_park">>
  /* MRS PARK HALLWAY ENCOUNTER */
  <<HUD>>
  <div class="prose-block">
    /* INSERT: D03_Hallway_MrsPark prose from NPC_SideQuest.md */
  </div>
  <<set $metMrsParkAsMia = true>>
  <<run statChange("stress", 5)>>
  <<set $transitEvent = "">>

  <div class="choice-block">
    <<link '<span>🗺️ Keep going</span>' "LocationHub">><</link>>
  </div>
```

**Transit trigger logic (add to `Loc_Apartment` when player clicks "Leave apartment"):**

```javascript
/* In Loc_Apartment "Leave apartment" link: */
<<if $day gte 3 and not $metMrsParkAsMia and random(1,100) lte 50>>
  <<set $transitEvent = "mrs_park">>
  <<goto "TransitEvent">>
<<else>>
  <<goto "LocationHub">>
<</if>>
```

---

### Night / Bedtime (Day 3)

```
:: D03_SelfExplore_Night [nobr]
<<HUD>>

<div class="prose-block">
  /* INSERT: D03_Bedtime_Optional prose from MainStory.md */
  /* "Bed. New panties, old t-shirt..." through fantasy and orgasm */
</div>

<<run statChange("cor", 1)>>
<<run statChange("fem", 1)>>

/* Log orientation data from fantasies */
<<set $sexLog.orientation.heteroExp += 1>>

<div class="choice-block">
  <<link '<span>🛏️ Sleep</span>' "D03_Sleep">><</link>>
</div>
```

```
:: D03_Sleep [nobr]
/* Sleep transition screen */
<div class="sleep-screen">
  <div class="sleep-icon">🌙</div>
  <div class="sleep-day">Day 3</div>
  <h2>Body Inventory</h2>
  <p>You know the measurements now. You know the anatomy. You know what makes you gasp and what makes you arch your back. This body is becoming less foreign by the hour.</p>
  <p>The name on the university records says Mia Cole. You're not sure what that means yet. But you didn't change it back.</p>
</div>

<<set $day = 4>>
<<set $timeslot = "Morning">>
<<set $weekDay = "Monday">>
<<set $player.energy = 100>>

<div class="choice-block">
  <<link '<span>☀️ Day 4</span>' "D04_Morning">><</link>>
</div>
```

---

## NEW StoryInit FLAGS

```javascript
/* Add to StoryInit */
<<set $d03CalledOwen = false>>
<<set $d03BodyInventory = false>>
<<set $d03Research = false>>
<<set $d03PhysicalExam = false>>
<<set $d03MasturbationExplore = false>>
<<set $d03Ate = false>>
<<set $d03NolanTexted = false>>
<<set $d03NolanExtended = false>>
<<set $d03UniEmailRead = false>>
<<set $d03PornExplored = false>>
<<set $d03OrderedVibrator = false>>
<<set $d03OrderedBasics = false>>
<<set $d03DidLaundry = false>>
<<set $metMrsParkAsMia = false>>
<<set $hasGroceries = false>>
<<set $hasHairCare = false>>
<<set $hasPantyLiners = false>>
```

---

## LOCATION HUB UPDATES (Day 3)

### New/Modified Location Cards

```
/* LAUNDROMAT — add to LocationHub, unlocks Day 3 */
<<if $day gte 3>>
  <div class="loc-card">
    <div class="loc-icon">🧺</div>
    <div class="loc-name">Suds</div>
    <div class="loc-hint">Laundromat. Clean sheets.</div>
    <<if $player.energy gte 10>>
      <<link '<span class="loc-btn">Go</span>' "Loc_Laundromat">>
        <<set $player.energy -= 10>>
      <</link>>
    <<else>>
      <span class="loc-btn loc-btn-disabled">Too tired</span>
    <</if>>
  </div>
<<else>>
  <div class="loc-card loc-locked">
    <div class="loc-icon">🔒</div>
    <div class="loc-name">???</div>
    <div class="loc-hint">Haven't needed it yet</div>
  </div>
<</if>>
```

All existing location cards remain unchanged. Thrift Store, Corner Store, Park, DashDrop (locked), Campus (locked), Grounded (locked) are already in the hub from Day 2.

---

## DAY 3 COMPLETE PASSAGE LIST

| Passage | Type | Description |
|---|---|---|
| `D03_Morning` | Wake-up (linear) | Morning prose, objectives set, routes to Apartment |
| `Apt_CallOwen` | Apartment action | Phone call to DashDrop, calling in sick |
| `Apt_BodyInventory` | Apartment action | Measuring body, writing down numbers |
| `Apt_Research` | Apartment action | Laptop research rabbit hole (anatomy, bras, skincare) |
| `Apt_PhysicalExplore` | Apartment action (optional) | Hand mirror vulva examination |
| `Apt_MasturbationExplore` | Apartment action (optional, NSFW) | Full masturbation exploration with techniques |
| `Apt_Cook_D03` | Apartment action | Cook spaghetti, eat at table |
| `Apt_OnlineShopping` | Apartment action | Browse/order vibrator, hairbrush, razor |
| `Apt_OnlineShopping_Confirm` | Sub-passage | Order confirmation |
| `Apt_PornExplore` | Apartment action (Night, NSFW) | Orientation exploration via porn categories |
| `Apt_Phone` (extended) | Apartment action | Nolan texts, university email |
| `Apt_Phone_Nolan_D03` | Sub-passage | Nolan reply thread |
| `Apt_Phone_Nolan_D03_After` | Sub-passage | Extended Nolan BBQ thread |
| `Loc_CornerStore` (extended) | Location | Hector, groceries, toiletries, mangoes |
| `Loc_Park` (extended) | Location | Bench scene, random duck lady encounter |
| `Loc_Laundromat` | Location (NEW) | Laundry, Marcus selfie reflection |
| `D03_SelfExplore_Night` | Night action (NSFW) | Bedtime masturbation with fantasy |
| `D03_Sleep` | Sleep screen | Day 3 summary, transition to Day 4 |

---

## CSS ADDITIONS

No new CSS classes needed. Day 3 uses existing:
- `.prose-block` for all narrative text
- `.choice-block` for all player choices
- `.action-card`, `.action-fem`, `.action-quest` for apartment actions
- `.shop-grid`, `.shop-item`, `.shop-price` for corner store
- `.scene-divider` between major beats
- `.objectives-panel`, `.obj-item` for objectives
- `.sleep-screen` for day transition

---

## QUALITY CHECKLIST

- [ ] D03_Morning plays the linear wake-up and routes to Loc_Apartment
- [ ] Calling Owen is available as apartment action and completes objective
- [ ] Body Inventory action unlocks Research after completion
- [ ] Research action unlocks Physical Exploration after completion
- [ ] Physical Exploration unlocks Masturbation Exploration (optional)
- [ ] Masturbation scene advances timeslot to Evening
- [ ] Corner Store shows Hector non-recognition and expanded shop grid
- [ ] Mango scene plays if player buys groceries
- [ ] Park shows bench scene with random duck lady encounter (40% chance)
- [ ] Laundromat is a new location card in the hub from Day 3+
- [ ] Mrs. Park transit encounter fires randomly when leaving apartment (50% chance, once)
- [ ] Phone shows Nolan thread and university email with proper conditionals
- [ ] Online shopping allows ordering vibrator, basics, or both
- [ ] Porn exploration is Night-only, logs orientation data
- [ ] Bedtime self-exploration is Night action at apartment
- [ ] Sleep screen transitions to Day 4
- [ ] All NSFW content is behind player choice (never auto-triggered)
- [ ] Energy costs are reasonable (total day allows 5-8 actions)
- [ ] Money deductions are tracked correctly
- [ ] All new flags are in StoryInit
- [ ] Save/load works at any point
- [ ] All prose in `.prose-block`, all choices in `.choice-block`

---
