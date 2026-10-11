# PROMPT FOR CODE AGENT — Add Day 4 to REWIRED (Open World Architecture)

---

## CONTEXT

Days 0-3 are built. Day 2 introduced the open-world hub loop system. Day 3 was a solo apartment day (body inventory, research, self-exploration). Day 4 is the **first real public day** where the player goes outside, encounters NPCs in the wild, and starts building social connections.

**Day 4 uses the same Hub Loop system as Day 2.** Refer to the Day 2 code agent prompt for the full architecture specification (LocationHub, transit events, objectives, timeslot advancement, apartment sub-hub). This prompt covers only Day 4's specific content, passages, and new systems.

---

## DAY 4 OVERVIEW

**Day of week:** Sunday
**Key events:** First public outing, corner store (Hector), street encounter (Jordan), clothing exploration, phone activity, optional orientation exploration
**New NPCs:** Hector (corner store clerk), Jordan (street flirt), Estelle (neighbor 4D), Dog Walker (park one-off)
**New locations accessible:** None new (Corner Store, Park, Apartment all available since Day 2)
**Unlocks for future:** Jordan NPC chain (if number given), Estelle NPC recognition

---

## DAY 4 OBJECTIVES

Set in the morning passage:

```javascript
<<set $objectives = [
  {
    id: "d04_groceries",
    text: "Get groceries — the kitchen is empty",
    hint: "Corner store, 4 blocks away",
    location: "cornerstore",
    done: false,
    day: 4,
    priority: "main"
  },
  {
    id: "d04_gooutside",
    text: "Go outside — you can't hide forever",
    hint: "Anywhere. Just leave the apartment.",
    location: "any",
    done: false,
    day: 4,
    priority: "main"
  },
  {
    id: "d04_eat_real",
    text: "Cook a real meal",
    hint: "You have pasta and sauce at home",
    location: "apartment",
    done: false,
    day: 4,
    priority: "side"
  }
]>>
```

The "go outside" objective completes when the player visits ANY non-apartment location. The groceries objective completes at the corner store. Cook a meal completes at the apartment kitchen action.

---

## DAY 4 PASSAGE STRUCTURE

### Morning Wake-Up (Linear)

```
:: D04_Morning [nobr]
<<set $day = 4>>
<<set $timeslot = "Morning">>
<<set $weekDay = "Sunday">>
<<set $player.energy = 100>>

/* Set objectives */
<<set $objectives = [
  { id:"d04_groceries", text:"Get groceries — the kitchen is empty", hint:"Corner store, 4 blocks away", location:"cornerstore", done:false, day:4, priority:"main" },
  { id:"d04_gooutside", text:"Go outside — you can't hide forever", hint:"Anywhere. Just leave the apartment.", location:"any", done:false, day:4, priority:"main" },
  { id:"d04_eat_real", text:"Cook a real meal", hint:"You have pasta and sauce at home", location:"apartment", done:false, day:4, priority:"side" }
]>>

<<HUD>>

/* === PROSE FROM MAIN CONTENT FILE: "MORNING WAKE-UP" SECTION === */
/* Paste the morning prose here — waking up, mirror scene, shower/shave, getting dressed */
/* This section covers everything up to stepping outside */

/* After prose: show objectives and start button */
<div class="objectives-panel">
  <h3>📋 Today</h3>
  <div class="obj-item"><span class="obj-icon">◻️</span> Get groceries — the kitchen is empty</div>
  <div class="obj-item"><span class="obj-icon">◻️</span> Go outside — you can't hide forever</div>
  <div class="obj-item obj-side"><span class="obj-icon">◻️</span> Cook a real meal</div>
</div>

<div class="choice-block">
  <<link '<span>🗺️ Step outside</span>' "LocationHub">>
    <<set $timeslot = "Morning">>
  <</link>>
</div>
```

### Apartment Sub-Hub Additions for Day 4

The apartment sub-hub (`Loc_Apartment`) is the same as Day 2 but with these Day 4 specific additions:

```
:: Loc_Apartment [nobr]
<<HUD>>

<div class="eyebrow">🏠 Home</div>
<h2>What do you want to do?</h2>

<div class="action-list">

  /* MIRROR */
  <<link '<div class="action-card">
    <span class="action-icon">🪞</span>
    <span class="action-text">Check the mirror</span>
  </div>' "Apt_Mirror">><</link>>

  /* SHOWER/SHAVE */
  <<link '<div class="action-card">
    <span class="action-icon">🚿</span>
    <span class="action-text">Shower</span>
    <span class="action-cost">⚡ +10 (refreshing)</span>
  </div>' "Apt_Shower_D04">>
    <<set $player.energy = Math.min($player.energy + 10, 100)>>
  <</link>>

  /* CHANGE CLOTHES */
  <<if $wardrobe.length gt 0>>
    <<link '<div class="action-card">
      <span class="action-icon">👚</span>
      <span class="action-text">Change clothes</span>
    </div>' "Apt_Wardrobe">><</link>>
  <</if>>

  /* COOK — available if has groceries */
  <<if $d04HasGroceries>>
    <<link '<div class="action-card <<if not $d04CookedMeal>>action-quest<</if>>">
      <span class="action-icon">🍳</span>
      <span class="action-text">Cook something</span>
    </div>' "Apt_Cook_D04">><</link>>
  <<else>>
    <<link '<div class="action-card">
      <span class="action-icon">🍽️</span>
      <span class="action-text">Eat something</span>
      <span class="action-hint">Not much here...</span>
    </div>' "Apt_Eat">><</link>>
  <</if>>

  /* LAPTOP — research, shopping, browsing */
  <<link '<div class="action-card">
    <span class="action-icon">💻</span>
    <span class="action-text">Use laptop</span>
  </div>' "Apt_Laptop_D04">><</link>>

  /* PHONE */
  <<link '<div class="action-card">
    <span class="action-icon">📱</span>
    <span class="action-text">Check phone</span>
  </div>' "Apt_Phone_D04">><</link>>

  /* WALK IN CLOTHES — practice walking */
  <<if $wardrobe.length gt 0 and not $d04PracticedWalking>>
    <<link '<div class="action-card action-fem">
      <span class="action-icon">👠</span>
      <span class="action-text">Practice walking</span>
    </div>' "Apt_Walk_Practice">><</link>>
  <</if>>

  /* NIGHT-ONLY ACTIONS */
  <<if $timeslot is "Night">>

    /* ORIENTATION EXPLORATION — optional */
    <<link '<div class="action-card action-fem">
      <span class="action-icon">🔥</span>
      <span class="action-text">Lie in bed... explore</span>
    </div>' "D04_OrientationExplore">><</link>>

    /* SLEEP */
    <<link '<div class="action-card action-sleep">
      <span class="action-icon">🛏️</span>
      <span class="action-text">Go to bed</span>
    </div>' "D04_Sleep">><</link>>

  <</if>>

</div>

<<if $timeslot isnot "Night">>
  <div class="choice-block">
    <<link '<span>🗺️ Leave apartment</span>' "LocationHub">><</link>>
  </div>
<</if>>
```

---

### Location Passages

**Corner Store (Loc_CornerStore):**

```
:: Loc_CornerStore [nobr]
<<HUD>>

/* Complete the "go outside" objective on any non-apartment visit */
<<run completeObjective("d04_gooutside")>>

<<if not $d04VisitedCornerStore>>
  /* FIRST VISIT: Full Hector scene from NPC content file */
  /* Paste Hector first-visit prose here */

  <<set $d04VisitedCornerStore = true>>
  <<set $d04HasGroceries = true>>
  <<set $player.money -= 23.50>>
  <<run completeObjective("d04_groceries")>>
  <<run statChange("fem", 1)>>

  /* Show stat toast for money */
  <<run showStatNotification("money", "-$23.50")>>

<<else>>
  /* REPEAT VISIT: Short Hector scene from NPC content file */
  /* Paste repeat-visit prose here */
<</if>>

/* Check for transit event on leaving */
<div class="choice-block">
  <<link '<span>🗺️ Head home</span>' "D04_TransitCheck_Store">><</link>>
</div>
```

**Transit Check After Corner Store:**

```
:: D04_TransitCheck_Store [nobr]
/* Jordan encounter fires when leaving corner store area for the first time */
<<if $d04VisitedCornerStore and not $d04JordanEncounter>>
  <<set $d04JordanEncounter = true>>
  <<goto "D04_Transit_Jordan">>
<<else>>
  <<goto "LocationHub">>
<</if>>
```

**Jordan Transit Event:**

```
:: D04_Transit_Jordan [nobr]
<<HUD>>

/* === PROSE FROM NPC CONTENT FILE: "JORDAN — STREET ENCOUNTER" APPROACH SECTION === */
/* Paste the approach prose here — footsteps, turning around, Jordan introduction */

/* PLAYER CHOICE */
<div class="choice-block">

  <<link '<span>😊 "Thanks. That\'s sweet."</span>' "D04_Jordan_Polite">>
    <<run statChange("con", 1)>>
  <</link>>

  <<link '<span>😤 "Don\'t chase people on the street."</span>' "D04_Jordan_Boundary">>
    <<run statChange("con", 2)>>
  <</link>>

  <<link '<span>😏 "I\'m Sage."</span>' "D04_Jordan_Number">>
    <<run statChange("cor", 3)>>
    <<set $jordanActive = true>>
  <</link>>

</div>
```

**Jordan Choice Branches:**

```
:: D04_Jordan_Polite [nobr]
<<HUD>>
/* === PROSE FROM NPC CONTENT FILE: "JORDAN — Branch A: Polite Brush-Off" === */
/* Paste polite brush-off prose here */

<<run statChange("fem", 1)>>

<div class="choice-block">
  <<link '<span>🗺️ Keep walking</span>' "LocationHub">><</link>>
</div>
```

```
:: D04_Jordan_Boundary [nobr]
<<HUD>>
/* === PROSE FROM NPC CONTENT FILE: "JORDAN — Branch B: Firm Boundary" === */
/* Paste boundary prose here */

<<run statChange("fem", 1)>>

<div class="choice-block">
  <<link '<span>🗺️ Get home. Lock the door.</span>' "LocationHub">><</link>>
</div>
```

```
:: D04_Jordan_Number [nobr]
<<HUD>>
/* === PROSE FROM NPC CONTENT FILE: "JORDAN — Branch C: Give Number" === */
/* Paste number-exchange prose here */

<<set $jordanActive = true>>
<<set $jordanMet = true>>
<<run statChange("fem", 2)>>

<div class="choice-block">
  <<link '<span>🗺️ Walk home with a phone number</span>' "LocationHub">><</link>>
</div>
```

---

**Park (Loc_Park):**

```
:: Loc_Park [nobr]
<<HUD>>

<<run completeObjective("d04_gooutside")>>

<<if not $d04VisitedPark>>
  /* FIRST VISIT: Dog walker encounter from NPC content file */
  /* Paste park bench + dog walker prose here */

  <<set $d04VisitedPark = true>>
  <<run statChange("stress", -5)>>
  <<run showStatNotification("stress", "Stress -5 (fresh air)")>>

<<else>>
  <div class="prose-block">
    The park again. The bench under the same tree. Leaves still falling in slow spirals. The drum circle has packed up but someone left a tambourine on the fountain ledge.

    I sit. Breathe. Watch the sky do nothing in particular.
  </div>
  <<run statChange("stress", -3)>>
<</if>>

<div class="choice-block">
  <<link '<span>🗺️ Head back</span>' "LocationHub">><</link>>
</div>
```

---

### Apartment Action Scenes (Day 4 Specific)

**Cooking Scene:**

```
:: Apt_Cook_D04 [nobr]
<<HUD>>

<<if not $d04CookedMeal>>
  /* === PROSE FROM MAIN CONTENT FILE: "COOKING AND SETTLING" SECTION === */
  /* Paste the cooking scene here — pasta, sitting at the table, washing dishes */

  <<set $d04CookedMeal = true>>
  <<run completeObjective("d04_eat_real")>>
  <<run statChange("fem", 1)>>
  <<run showStatNotification("quest", "🍝 First home-cooked meal")>>

<<else>>
  <div class="prose-block">
    I eat leftovers from the pasta earlier. Cold, out of the pot, standing at the counter. Not every meal needs to be a revelation.
  </div>
<</if>>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

**Phone Scene (Day 4):**

```
:: Apt_Phone_D04 [nobr]
<<HUD>>

<div class="prose-block">
  I check my phone.
</div>

/* DashDrop call — morning only, if not done */
<<if $timeslot is "Morning" and not $d04CalledOwen>>
  <div class="prose-block">
    Missed call from the DashDrop depot. Owen. I need to call back.
  </div>
  <<link '<div class="action-card">
    <span class="action-icon">📞</span>
    <span class="action-text">Call Owen back</span>
  </div>' "D04_Phone_Owen">><</link>>
<</if>>

/* Nolan text */
<<if not $d04NolanTexted>>
  <<Dialogue "Nolan" "💪" "U alive?" "">>
  <<link '<div class="action-card">
    <span class="action-icon">💬</span>
    <span class="action-text">Text Nolan back</span>
  </div>' "D04_Phone_Nolan">><</link>>
<</if>>

/* Jordan texts — evening/night only, if number was given */
<<if $jordanActive and ($timeslot is "Evening" or $timeslot is "Night") and not $d04JordanTexted>>
  <<Dialogue "Jordan" "😎" "Hey it's Jordan from outside the store 😊 still think you're pretty btw" "">>
  <<link '<div class="action-card action-fem">
    <span class="action-icon">💬</span>
    <span class="action-text">Text Jordan back</span>
  </div>' "D04_Phone_Jordan">><</link>>
<</if>>

/* University email */
<<if not $d04UniEmail and $d04NolanTexted>>
  <div class="prose-block">
    One more notification. Email from the university.
  </div>
  <<link '<div class="action-card">
    <span class="action-icon">📧</span>
    <span class="action-text">Check email</span>
  </div>' "D04_Phone_UniEmail">><</link>>
<</if>>

/* DashDrop app notification */
<<if $timeslot is "Evening" or $timeslot is "Night">>
  <div class="prose-block" style="color:var(--text3); font-size:.85rem;">
    DashDrop notification: shift confirmed for tomorrow.
  </div>
<</if>>

/* Nothing else */
<<if $d04NolanTexted and $d04UniEmail and (not $jordanActive or $d04JordanTexted)>>
  <div class="prose-block" style="color:var(--text3);">
    No new messages.
  </div>
<</if>>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

**Phone Sub-Passages:**

```
:: D04_Phone_Owen [nobr]
<<HUD>>
/* === PROSE FROM NPC CONTENT FILE: "CALLING IN SICK TO DASHDROP" === */
/* Paste Owen phone call prose here */

<<set $d04CalledOwen = true>>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: D04_Phone_Nolan [nobr]
<<HUD>>

<<Dialogue $player.name "👤" "barely. How's the gym?" "you">>
<<Dialogue "Nolan" "💪" "Leg day bro 🦵 almost died on squats. Seriously tho u ok? U sound weird over text" "">>

<div class="choice-block">
  <<link '<span>💬 "I\'m fine. Just tired. Bug\'s almost gone."</span>' "D04_Phone_Nolan_Reply">><</link>>
</div>
```

```
:: D04_Phone_Nolan_Reply [nobr]
<<Dialogue $player.name "👤" "I'm fine. Just tired. Bug's almost gone." "you">>
<<Dialogue "Nolan" "💪" "aight bet. But I'm pulling up soon whether u like it or not 😤 bros don't let bros die alone" "">>

<div class="prose-block">
  Bros. Die alone. The casual masculine shorthand of a friendship that was built on a foundation I just demolished with a pharmaceutical accident.

  I put the phone face-down on the couch.
</div>

<<set $d04NolanTexted = true>>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Apt_Phone_D04">><</link>>
</div>
```

```
:: D04_Phone_UniEmail [nobr]
<<HUD>>
/* === PROSE FROM MAIN CONTENT FILE: "PHONE CHECK" — University email section === */
/* Paste university email scene here */

<<set $d04UniEmail = true>>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Apt_Phone_D04">><</link>>
</div>
```

**Jordan Text Chain (with branching):**

```
:: D04_Phone_Jordan [nobr]
<<HUD>>

<div class="prose-block">
  I stare at the screen. A boy is texting me. A boy who met me for ninety seconds on a sidewalk and went home and waited three hours and then typed out a message with an emoji and hit send.
</div>

/* PLAYER CHOICE: Response tone */
<div class="choice-block">
  <<link '<span>😊 Reply politely</span>' "D04_Jordan_Text_Polite">><</link>>

  <<link '<span>😏 Flirt back</span>' "D04_Jordan_Text_Flirty">>
    <<run statChange("cor", 2)>>
  <</link>>

  <<if $player.cor gte 5>>
    <<link '<span>🔥 Escalate...</span>' "D04_Jordan_Text_Sext">>
      <<run statChange("cor", 4)>>
    <</link>>
  <</if>>
</div>
```

```
:: D04_Jordan_Text_Polite [nobr]
<<HUD>>
/* === PROSE FROM NPC CONTENT FILE: "JORDAN TEXT — Branch C-1: Polite" === */
/* Paste polite text chain here */

<<set $d04JordanTexted = true>>
<<set $jordanRelation = "casual">>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: D04_Jordan_Text_Flirty [nobr]
<<HUD>>
/* === PROSE FROM NPC CONTENT FILE: "JORDAN TEXT — Branch C-2: Flirty" === */
/* Paste flirty text chain here */

<<set $d04JordanTexted = true>>
<<set $jordanRelation = "flirty">>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: D04_Jordan_Text_Sext [nobr]
<<HUD>>
/* === PROSE FROM NPC CONTENT FILE: "JORDAN TEXT — Branch C-3: Sexting" === */
/* Paste sexting escalation prose here */

<<set $d04JordanTexted = true>>
<<set $jordanRelation = "sexual">>
<<set $d04SentSelfie = true>>

/* Player choice within sexting chain */
<div class="choice-block">
  <<link '<span>📸 Send a mirror selfie</span>' "D04_Jordan_Selfie">>
    <<run statChange("cor", 3)>>
  <</link>>
  <<link '<span>✋ Pull back. "Goodnight Jordan."</span>' "D04_Jordan_Text_End">>
    <<set $jordanRelation = "flirty">>
  <</link>>
</div>
```

```
:: D04_Jordan_Selfie [nobr]
<<HUD>>
/* === PROSE FROM NPC CONTENT FILE: Selfie/body shot exchange === */

<<set $d04SentBodyShot = true>>

<div class="choice-block">
  <<link '<span>🏠 Put the phone down</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: D04_Jordan_Text_End [nobr]
<<Dialogue $player.name "👤" "Goodnight Jordan." "you">>
<<Dialogue "Jordan" "😎" "Sweet dreams Sage ✨" "">>

<<set $d04JordanTexted = true>>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

---

**Laptop Scene (Day 4):**

```
:: Apt_Laptop_D04 [nobr]
<<HUD>>

<div class="eyebrow">💻 Laptop</div>
<h2>What do you want to look up?</h2>

<div class="action-list">

  /* Clothing research */
  <<link '<div class="action-card">
    <span class="action-icon">👗</span>
    <span class="action-text">Research women\'s clothing sizes</span>
  </div>' "D04_Laptop_Clothing">><</link>>

  /* Walking / posture */
  <<if not $d04PracticedWalking>>
    <<link '<div class="action-card">
      <span class="action-icon">🚶‍♀️</span>
      <span class="action-text">How to walk in women\'s shoes</span>
    </div>' "D04_Laptop_Walking">><</link>>
  <</if>>

  /* Essentials list */
  <<link '<div class="action-card">
    <span class="action-icon">📋</span>
    <span class="action-text">Women\'s essentials checklist</span>
  </div>' "D04_Laptop_Essentials">><</link>>

  /* Online shopping — night only */
  <<if $timeslot is "Evening" or $timeslot is "Night">>
    <<link '<div class="action-card action-fem">
      <span class="action-icon">🛒</span>
      <span class="action-text">Online shopping</span>
    </div>' "D04_Laptop_Shopping">><</link>>
  <</if>>

  /* Porn/orientation — night only */
  <<if $timeslot is "Night">>
    <<link '<div class="action-card action-fem">
      <span class="action-icon">🔞</span>
      <span class="action-text">Browse... privately</span>
    </div>' "D04_OrientationExplore">><</link>>
  <</if>>

</div>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

```
:: D04_Laptop_Clothing [nobr]
<<HUD>>
/* === PROSE FROM MAIN CONTENT FILE: "RESEARCH AND PLANNING" — jeans/sizing section === */

<<run statChange("int", 2)>>
<<set $player.energy -= 5>>

<div class="choice-block">
  <<link '<span>💻 Back to laptop</span>' "Apt_Laptop_D04">><</link>>
</div>
```

```
:: D04_Laptop_Walking [nobr]
<<HUD>>
/* === PROSE FROM MAIN CONTENT FILE: "RESEARCH AND PLANNING" — walking section === */

<<set $d04PracticedWalking = true>>
<<run statChange("fem", 2)>>
<<run statChange("int", 1)>>

<div class="choice-block">
  <<link '<span>💻 Back to laptop</span>' "Apt_Laptop_D04">><</link>>
</div>
```

```
:: D04_Laptop_Essentials [nobr]
<<HUD>>
/* === PROSE FROM MAIN CONTENT FILE: "RESEARCH AND PLANNING" — essentials list section === */

<<run statChange("int", 2)>>

<div class="choice-block">
  <<link '<span>💻 Back to laptop</span>' "Apt_Laptop_D04">><</link>>
</div>
```

```
:: D04_Laptop_Shopping [nobr]
<<HUD>>
/* === PROSE FROM NPC CONTENT FILE: "ONLINE SHOPPING" SCENE === */

<<if not $d04OrderedVibrator>>
  /* Show shopping options */
  <div class="choice-block">
    <<link '<span>🛒 Order bullet vibrator ($15.99)</span>' "D04_Shop_Vibrator">><</link>>
    <<link '<span>👟 Browse shoes (just looking)</span>' "D04_Shop_Shoes">><</link>>
    <<link '<span>💻 Close laptop</span>' "Apt_Laptop_D04">><</link>>
  </div>
<<else>>
  <div class="prose-block">
    Order confirmation still in my inbox. Delivery in two days. The little notification sits there glowing.
  </div>
  <<link '<span>💻 Back</span>' "Apt_Laptop_D04">><</link>>
<</if>>
```

```
:: D04_Shop_Vibrator [nobr]
<<HUD>>
/* Vibrator purchase scene from NPC content file */

<<set $d04OrderedVibrator = true>>
<<set $player.money -= 15.99>>
<<set $vibratorArrivalDay = $day + 2>>
<<run showStatNotification("money", "-$15.99")>>
<<run showStatNotification("item", "📦 Arrives Day " + $vibratorArrivalDay)>>

<div class="choice-block">
  <<link '<span>💻 Back</span>' "Apt_Laptop_D04">><</link>>
</div>
```

```
:: D04_Shop_Shoes [nobr]
<<HUD>>

<div class="prose-block">
  I browse women's sneakers. The cheap ones look like they'd fall apart on the first DashDrop shift. The good ones start at forty dollars. I close the tab.

  Better shoes are a priority. But not today's priority.
</div>

<div class="choice-block">
  <<link '<span>💻 Back</span>' "Apt_Laptop_D04">><</link>>
</div>
```

---

**Orientation Exploration Scene (Night):**

```
:: D04_OrientationExplore [nobr]
<<HUD>>

/* === PROSE FROM MAIN CONTENT FILE: "ORIENTATION EXPLORATION" SECTION === */
/* This scene tracks which categories the player explores and for how long */
/* The orientation system logs choices invisibly */

<div class="prose-block">
  /* Opening prose — laptop, incognito, dark room */
</div>

/* PLAYER CHOICES: What to watch */
<div class="choice-block">
  <<link '<span>📺 Straight porn (male POV)</span>' "D04_Porn_Straight">>
    <<set $orientation.straightViews = ($orientation.straightViews || 0) + 1>>
  <</link>>

  <<link '<span>📺 Lesbian porn</span>' "D04_Porn_Lesbian">>
    <<set $orientation.lesbianViews = ($orientation.lesbianViews || 0) + 1>>
  <</link>>

  <<link '<span>📺 Solo female</span>' "D04_Porn_Solo">>
    <<set $orientation.soloViews = ($orientation.soloViews || 0) + 1>>
  <</link>>

  <<link '<span>💤 Close the laptop. Just lie with it.</span>' "D04_Orientation_End">><</link>>
</div>
```

```
:: D04_Porn_Straight [nobr]
<<HUD>>
/* Straight porn viewing — prose from main content file */
/* Resonance with female performer, curiosity about male performer */

<<run statChange("cor", 1)>>
<<set $player.energy -= 5>>

<div class="choice-block">
  <<link '<span>📺 Watch something else</span>' "D04_OrientationExplore">><</link>>
  <<link '<span>💤 Close laptop</span>' "D04_Orientation_End">><</link>>
</div>
```

```
:: D04_Porn_Lesbian [nobr]
<<HUD>>
/* Lesbian porn viewing — intense arousal, resonance */

<<run statChange("cor", 2)>>
<<set $orientation.lesbianArousal = ($orientation.lesbianArousal || 0) + 3>>
<<set $player.energy -= 5>>

<div class="choice-block">
  <<link '<span>📺 Watch something else</span>' "D04_OrientationExplore">><</link>>
  <<link '<span>🔥 Touch yourself</span>' "D04_SelfPleasure_Orientation">>
    <<run statChange("cor", 2)>>
  <</link>>
  <<link '<span>💤 Close laptop</span>' "D04_Orientation_End">><</link>>
</div>
```

```
:: D04_Porn_Solo [nobr]
<<HUD>>
/* Solo female — educational + arousing */

<<run statChange("cor", 1)>>
<<run statChange("int", 1)>>

<div class="choice-block">
  <<link '<span>📺 Watch something else</span>' "D04_OrientationExplore">><</link>>
  <<link '<span>💤 Close laptop</span>' "D04_Orientation_End">><</link>>
</div>
```

```
:: D04_Orientation_End [nobr]
/* End of orientation exploration — closing prose from main content file */

<div class="prose-block">
  I close the laptop. Lie in the dark. The arousal sits in my body like a low hum. I could act on it. I know how.

  But tonight I just let it exist. Let the wanting be its own thing.
</div>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

**Self-Pleasure Scene (If triggered from orientation or Jordan texts):**

```
:: D04_SelfPleasure_Orientation [nobr]
<<HUD>>

/* === PROSE FROM NPC CONTENT FILE: "SELF-PLEASURE WITH JORDAN'S TEXTS" or standalone === */
/* Adapts based on whether Jordan chain is active */

<<if $jordanActive and $d04JordanTexted>>
  /* Version with Jordan's texts as stimulus */
<<else>>
  /* Version with just the videos as stimulus */
<</if>>

<<run statChange("cor", 3)>>
<<run statChange("fem", 1)>>

<div class="choice-block">
  <<link '<span>🏠 Clean up. Back to bed.</span>' "Loc_Apartment">><</link>>
</div>
```

---

**Neighbor Encounter (Laundry Room — Transit Event):**

```
:: D04_Transit_Estelle [nobr]
<<HUD>>

/* Fires randomly when returning to apartment — 40% chance on first return after going out */
/* === PROSE FROM NPC CONTENT FILE: "WOMAN AT THE LAUNDRY ROOM" === */

<<set $metEstelle = true>>

<div class="choice-block">
  <<link '<span>🏠 Go inside</span>' "Loc_Apartment">><</link>>
</div>
```

Add this check to the LocationHub or apartment entry:
```javascript
/* Estelle encounter — fires once, randomly, when returning home after going outside */
<<if not $metEstelle and $d04VisitedCornerStore and random(1,10) lte 4>>
  <<goto "D04_Transit_Estelle">>
<</if>>
```

---

**Walk Practice (Apartment):**

```
:: Apt_Walk_Practice [nobr]
<<HUD>>

/* Walking practice prose from main content file */

<<set $d04PracticedWalking = true>>
<<run statChange("fem", 2)>>

<div class="prose-block">
  I walk back and forth a dozen times. By the end, the walk is smoother. Not a performance. Just motion. Just a girl walking through her apartment.
</div>

<div class="choice-block">
  <<link '<span>🏠 Back</span>' "Loc_Apartment">><</link>>
</div>
```

---

### Sleep Passage

```
:: D04_Sleep [nobr]
<<HUD>>

/* === PROSE FROM MAIN CONTENT FILE: "BEDTIME" SECTION === */
/* Paste bedtime prose — brushing teeth, changing, fetal position, day reflection, dreams */

/* Day-end stat summary */
<div class="day-end-panel">
  <h3>Day 4 Complete</h3>
  <div class="stat-row">FEM: <<print $player.fem>></div>
  <div class="stat-row">COR: <<print $player.cor>></div>
  <div class="stat-row">INT: <<print $player.int>></div>
  <div class="stat-row">Money: $<<print $player.money.toFixed(2)>></div>
  <<if $jordanActive>><div class="stat-row">📱 Jordan: <<print $jordanRelation || "contact saved">></div><</if>>
  <<if $metEstelle>><div class="stat-row">🏠 Met neighbor: Estelle (4D)</div><</if>>
</div>

<div class="choice-block">
  <<link '<span>💤 Sleep...</span>' "D05_Morning">>
    <<set $day = 5>>
  <</link>>
</div>
```

---

## StoryInit Additions for Day 4

```javascript
/* Add to StoryInit */
<<set $d04VisitedCornerStore = false>>
<<set $d04VisitedPark = false>>
<<set $d04JordanEncounter = false>>
<<set $d04NolanTexted = false>>
<<set $d04UniEmail = false>>
<<set $d04CalledOwen = false>>
<<set $d04HasGroceries = false>>
<<set $d04CookedMeal = false>>
<<set $d04JordanTexted = false>>
<<set $d04SentSelfie = false>>
<<set $d04SentBodyShot = false>>
<<set $d04OrderedVibrator = false>>
<<set $d04PracticedWalking = false>>
<<set $jordanActive = false>>
<<set $jordanMet = false>>
<<set $jordanRelation = "">>
<<set $metEstelle = false>>
<<set $vibratorArrivalDay = 0>>

/* Orientation tracking system */
<<if not $orientation>>
  <<set $orientation = {
    straightViews: 0,
    lesbianViews: 0,
    soloViews: 0,
    gayMaleViews: 0,
    lesbianArousal: 0,
    straightArousal: 0,
    totalSessions: 0
  }>>
<</if>>
```

---

## DAY 4 COMPLETE PASSAGE LIST

| Passage | Type | Description |
|---|---|---|
| `D04_Morning` | Wake-up (linear) | Morning prose, shower/shave, getting dressed, objectives, hub entry |
| `LocationHub` | Hub (reusable) | Same as Day 2, reads day state dynamically |
| `Loc_CornerStore` | Location | Hector scene (first/repeat), grocery purchase |
| `Loc_Park` | Location | Bench, dog walker encounter, stress relief |
| `Loc_Apartment` | Location sub-hub | Updated action list for Day 4 |
| `D04_TransitCheck_Store` | System | Checks if Jordan encounter should fire |
| `D04_Transit_Jordan` | Transit event | Jordan approach, player choice |
| `D04_Jordan_Polite` | Transit branch | Polite brush-off |
| `D04_Jordan_Boundary` | Transit branch | Firm boundary |
| `D04_Jordan_Number` | Transit branch | Exchange numbers |
| `D04_Transit_Estelle` | Transit event | Laundry room neighbor encounter |
| `Apt_Cook_D04` | Apartment action | Cook pasta, sit at table |
| `Apt_Phone_D04` | Apartment action | Phone hub with conditional messages |
| `D04_Phone_Owen` | Phone sub | DashDrop call |
| `D04_Phone_Nolan` | Phone sub | Nolan text exchange |
| `D04_Phone_Nolan_Reply` | Phone sub | Nolan reply + reaction |
| `D04_Phone_UniEmail` | Phone sub | University name confirmation |
| `D04_Phone_Jordan` | Phone sub | Jordan text chain entry |
| `D04_Jordan_Text_Polite` | Phone branch | Casual texting |
| `D04_Jordan_Text_Flirty` | Phone branch | Flirty texting |
| `D04_Jordan_Text_Sext` | Phone branch | Sexting escalation |
| `D04_Jordan_Selfie` | Phone branch | Photo exchange |
| `D04_Jordan_Text_End` | Phone branch | Goodnight exit |
| `Apt_Laptop_D04` | Apartment action | Laptop hub (research, shopping, browsing) |
| `D04_Laptop_Clothing` | Laptop sub | Clothing size research |
| `D04_Laptop_Walking` | Laptop sub | Walking/posture video |
| `D04_Laptop_Essentials` | Laptop sub | Women's essentials list |
| `D04_Laptop_Shopping` | Laptop sub | Online shopping hub |
| `D04_Shop_Vibrator` | Shopping sub | Vibrator purchase |
| `D04_Shop_Shoes` | Shopping sub | Shoe browsing (no purchase) |
| `D04_OrientationExplore` | Night action | Porn/orientation exploration hub |
| `D04_Porn_Straight` | Orientation sub | Straight porn viewing |
| `D04_Porn_Lesbian` | Orientation sub | Lesbian porn viewing |
| `D04_Porn_Solo` | Orientation sub | Solo female viewing |
| `D04_Orientation_End` | Orientation sub | Close laptop, lie with feelings |
| `D04_SelfPleasure_Orientation` | Night action | Masturbation scene (context-adaptive) |
| `Apt_Walk_Practice` | Apartment action | Walking practice |
| `D04_Sleep` | Sleep screen | Day summary, transition to Day 5 |

---

## NO NEW CSS NEEDED

Day 4 uses all existing CSS classes from Day 2 (location grid, action cards, objectives panel, stat toasts). No new UI components introduced.

---

## NEW JS: ORIENTATION TRACKING

```javascript
/* Add to Story JavaScript */

/* Log orientation data point — called silently during porn scenes */
window.logOrientation = function(category, duration, arousal) {
  var o = State.variables.orientation;
  o.totalSessions = (o.totalSessions || 0) + 1;
  if (category === "lesbian") {
    o.lesbianArousal = (o.lesbianArousal || 0) + arousal;
  } else if (category === "straight") {
    o.straightArousal = (o.straightArousal || 0) + arousal;
  }
  // Over 90 days, this data shapes NPC attraction and fantasy content
};
```

---

## QUALITY CHECKLIST

- [ ] Morning passage sets Day 4 objectives correctly
- [ ] Corner store scene plays Hector first-visit on initial entry, repeat on return
- [ ] Jordan transit event fires AFTER leaving corner store area (not at store)
- [ ] Jordan encounter has 3 distinct branches (polite, boundary, number)
- [ ] If number given, $jordanActive flag enables evening text chain
- [ ] Jordan text chain has 3 tiers (polite, flirty, sext) with COR gate on sext
- [ ] Selfie/body shot scene only accessible through sext branch
- [ ] Park scene has dog walker encounter on first visit
- [ ] Estelle neighbor encounter fires probabilistically when returning home
- [ ] Cooking scene completes the "cook a meal" objective
- [ ] Phone passage shows messages conditionally (Owen morning, Nolan anytime, Jordan evening)
- [ ] University email appears after Nolan conversation
- [ ] Laptop sub-hub has research, shopping, and night-only browsing options
- [ ] Vibrator purchase deducts money and sets arrival day flag
- [ ] Orientation exploration tracks viewing categories invisibly
- [ ] Self-pleasure scene adapts based on whether Jordan chain is active
- [ ] Walking practice sets flag to prevent repeat
- [ ] Sleep passage shows Day 4 summary with conditional NPC status
- [ ] All stat changes fire correctly (FEM, COR, INT, stress, money)
- [ ] All prose in `.prose-block`, all choices in `.choice-block`
- [ ] Save/load works at any point

---
