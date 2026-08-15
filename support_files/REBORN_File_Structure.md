# SOFT_RESET   Twine File Structure
## SugarCube 2.37+ Modular Architecture

---

## Directory Structure

**On disk, `assets/` and the compiled HTML live *outside* `soft-reset/`, as
its siblings**   not nested inside it. That keeps every in-game relative
image path a plain `assets/...` with no `../`, and keeps the compiled
game (which never embeds images, only references them externally) sitting
right next to the folder it references:

```
SOFT_RESET/                      ← project root
├── assets/                  ← sibling of soft-reset/, see the tree below
├── soft-reset-compiled.html     ← build output, sibling of assets/
└── soft-reset/                  ← everything below is inside THIS folder
```

The rest of this document (and the tree below) describes what's inside
`soft-reset/`   read every path from here on as relative to that folder,
with `assets/` and the compiled HTML understood to live one level up.

```
soft-reset/
├── soft-reset.twee              ← Main entry: StoryTitle, StoryData, StoryInit, StoryCaption
├── compile.sh                ← Build script (tweego compilation; run from inside soft-reset/, writes ../soft-reset-compiled.html)
├── css/
│   ├── 01-tokens.css        ← CSS variables (colors, fonts, spacing)
│   ├── 02-reset.css         ← Reset + body base styles
│   ├── 03-sidebar.css       ← Left sidebar (ui-bar) styling
│   ├── 04-layout.css        ← Main content area, .passage, responsive
│   ├── 05-typography.css    ← Headings, prose, eyebrow, text styles
│   ├── 06-hud.css           ← Top HUD bar (stats display)
│   ├── 07-stat-bars.css     ← Stat bar widget (fill bars)
│   ├── 08-location-grid.css ← Location selection grids
│   ├── 09-actions.css       ← Action buttons (normal, fem, locked, quest, cost)
│   ├── 10-room-grid.css     ← Room/apartment interior grids
│   ├── 11-dialogue.css      ← Dialogue bubbles (NPC + MC)
│   ├── 12-choices.css       ← Choice blocks (branching options)
│   ├── 13-prose.css         ← Narrative text blocks + scene dividers
│   ├── 14-images.css        ← Scene images, portraits, floats, placeholders
│   ├── 15-cards.css         ← NPC cards, item cards, mirror cards
│   ├── 16-shops.css         ← Shop grids (clothing, sex toys, grocery)
│   ├── 17-wardrobe.css      ← Wardrobe page (slot picker, equipped items)
│   ├── 18-phone.css         ← Phone overlay (iOS-style, SMS, apps, contacts)
│   ├── 19-journal.css       ← Journal modal + sidebar widget
│   ├── 20-sleep.css         ← Sleep/day-transition screens
│   ├── 21-buttons.css       ← Primary, secondary, outline buttons
│   ├── 22-modals.css        ← Generic modal/overlay styles
│   ├── 23-notifications.css ← Stat change popups, toast notifications
│   ├── 24-special.css       ← Age gate, mirror reveal, archetype select, name input
│   ├── 25-responsive.css    ← Mobile breakpoints
│   └── 26-sugarcube.css     ← SugarCube element overrides
│
├── js/
│   ├── 01-config.js         ← SugarCube Config (saves, history, passages)
│   ├── 02-macros.js         ← Custom macros (<<statbar>>, <<hud>>, <<notify>>, etc)
│   ├── 03-widgets.js        ← SugarCube widgets (<<LocationGrid>>, <<DialogueLine>>, etc)
│   ├── 04-time-system.js    ← Day/timeslot advancement, week tracking
│   ├── 05-stat-engine.js    ← Stat modification functions, threshold checks, caps
│   ├── 06-wardrobe-engine.js ← Clothing/outfit system, equipped tracking, stat bonuses
│   ├── 07-relationship.js   ← Affinity tracking, NPC state, romance flags
│   ├── 08-economy.js        ← Money, income, expenses, shopping transactions
│   ├── 09-phone-system.js   ← Phone app logic, SMS threads, dating app
│   ├── 10-journal.js        ← Journal/quest tracker, milestone logging
│   ├── 11-npc-encounters.js ← Random NPC encounter pool, weighted selection
│   ├── 12-body-system.js    ← Transformation phases, measurements, Phase 2 tracking
│   ├── 13-sexual-tracker.js ← Sexual experience logging, kink unlocks, orientation
│   ├── 14-pregnancy.js      ← Pregnancy system (conception chance, tracking, effects)
│   └── 15-utilities.js      ← Helper functions (random, clamp, format, etc)
│
├── passages/
│   ├── system/
│   │   ├── age-gate.twee        ← 18+ verification screen
│   │   ├── start.twee           ← Title screen + age gate entry
│   │   ├── char-create.twee     ← Character naming + archetype selection
│   │   ├── caption.twee         ← StoryCaption (sidebar content)
│   │   └── sleep.twee           ← Sleep transition + day advancement
│   │
│   ├── day00/
│   │   ├── d00-morning.twee     ← Wake up, breakfast, phone check, get dressed
│   │   ├── d00-delivery.twee    ← DashDrop shift (5 delivery encounters)
│   │   ├── d00-evening.twee     ← The flyer, the decision, eating alone
│   │   ├── d00-novacure.twee    ← NovaCure visit: intake, consent, the pill
│   │   └── d00-night.twee       ← Last male night, bathroom mirror, sleep
│   │
│   ├── day01/
│   │   ├── d01-wakeup.twee      ← Transformation discovery scene
│   │   ├── d01-mirror.twee      ← Full mirror reveal (face, body, genitals)
│   │   ├── d01-panic.twee       ← Panic attack, calling NovaCure
│   │   ├── d01-novacure.twee    ← Examination, Dr. Amelia, new ID
│   │   ├── d01-evening.twee     ← Return home, first shower (optional arousal)
│   │   └── d01-night.twee       ← Alone at home, Jake's call, bed
│   │
│   ├── locations/
│   │   ├── apartment.twee       ← MC's apartment hub (rooms, actions)
│   │   ├── apartment-bath.twee  ← Bathroom (shower, mirror, grooming)
│   │   ├── apartment-bed.twee   ← Bedroom (sleep, dress, self-pleasure)
│   │   ├── apartment-kitchen.twee ← Kitchen (cook, eat)
│   │   ├── campus.twee          ← University hub (buildings, quad)
│   │   ├── campus-class.twee    ← Classroom scenes
│   │   ├── campus-library.twee  ← Library (study, Sophie)
│   │   ├── campus-gym.twee      ← Gym hub (workout, locker room, sauna)
│   │   ├── dashdrop.twee        ← DashDrop delivery shift system
│   │   ├── novacure.twee        ← NovaCure labs (visits, exams)
│   │   ├── cornerstore.twee     ← Corner store (groceries, basics)
│   │   ├── thriftstore.twee     ← Thrift store (cheap clothes, Dolores)
│   │   ├── grounded.twee        ← Coffee house (River, study)
│   │   ├── mall.twee            ← Mall hub (stores)
│   │   ├── mall-clothes.twee    ← Clothing stores
│   │   ├── mall-lingerie.twee   ← Lace & Whisper (lingerie, bras)
│   │   ├── mall-salon.twee      ← Studio 7 (hair)
│   │   ├── mall-makeup.twee     ← Makeup counter
│   │   ├── nocturne.twee        ← Nocturne bar (work, Vanessa)
│   │   ├── tattoo-shop.twee     ← Black Line Studio (Marcus)
│   │   ├── park.twee            ← Park (jogging, bench, encounters)
│   │   ├── pulse.twee           ← Nightclub Pulse (dancing, encounters)
│   │   ├── velvet.twee          ← Sex shop (toys, gear)
│   │   ├── silk.twee            ← Strip club (patron/dancer)
│   │   ├── foundry.twee         ← BDSM club (Marcus route)
│   │   ├── clinic.twee          ← Women's health clinic (Dr. Lin)
│   │   ├── yoga.twee            ← Sunrise Yoga (Sage)
│   │   └── bus.twee             ← Transit system (NPC encounters)
│   │
│   ├── npcs/
│   │   ├── jake/
│   │   │   ├── jake-intro.twee      ← Day 7 reveal scene
│   │   │   ├── jake-gym.twee        ← Gym scenes
│   │   │   ├── jake-hangout.twee    ← Casual hangouts
│   │   │   ├── jake-romance.twee    ← Romance progression
│   │   │   ├── jake-sex.twee        ← Sexual scenes
│   │   │   └── jake-crisis.twee     ← Benny outing (Day 68)
│   │   │
│   │   ├── marcus/
│   │   │   ├── marcus-intro.twee    ← Shop encounters
│   │   │   ├── marcus-tattoo.twee   ← Tattoo sessions
│   │   │   ├── marcus-romance.twee  ← Romance + D/s development
│   │   │   ├── marcus-bdsm.twee     ← BDSM scenes (sessions 1-5+)
│   │   │   └── marcus-foundry.twee  ← BDSM club scenes
│   │   │
│   │   ├── sophie/
│   │   │   ├── sophie-intro.twee    ← Library meeting
│   │   │   ├── sophie-study.twee    ← Study sessions
│   │   │   ├── sophie-mall.twee     ← Shopping together
│   │   │   ├── sophie-art.twee      ← Art/modeling scenes
│   │   │   ├── sophie-romance.twee  ← Romance progression
│   │   │   ├── sophie-sex.twee      ← Sexual scenes
│   │   │   └── sophie-crisis.twee   ← Heather outing (Day 68)
│   │   │
│   │   ├── river/
│   │   │   ├── river-intro.twee     ← Grounded meetings
│   │   │   ├── river-gig.twee       ← Band gig scene
│   │   │   ├── river-dates.twee     ← Date scenes
│   │   │   ├── river-romance.twee   ← Romance progression
│   │   │   ├── river-sex.twee       ← Sexual scenes (with trans-specific care)
│   │   │   └── river-family.twee    ← Family dinner (Day 68)
│   │   │
│   │   ├── vanessa/
│   │   │   ├── vanessa-intro.twee   ← Interview + hiring
│   │   │   ├── vanessa-work.twee    ← Nocturne work dynamics
│   │   │   ├── vanessa-romance.twee ← Romance + power dynamic
│   │   │   ├── vanessa-sex.twee     ← Sexual scenes
│   │   │   ├── vanessa-penthouse.twee ← Penthouse scenes
│   │   │   └── vanessa-contract.twee  ← TPE contract (Day 68)
│   │   │
│   │   ├── supporting/
│   │   │   ├── luna.twee            ← Luna (work friend, mentor)
│   │   │   ├── derek.twee           ← Derek (DashDrop manager)
│   │   │   ├── dolores.twee         ← Dolores (thrift store)
│   │   │   ├── dr-amelia.twee         ← Dr. Amelia (NovaCure)
│   │   │   ├── nurse-patel.twee     ← Nurse Patel
│   │   │   ├── prof-klein.twee      ← Professor Klein
│   │   │   ├── mrs-park.twee        ← Landlord
│   │   │   ├── taylor.twee          ← Friendship NPC
│   │   │   └── benny.twee           ← Benny (Jake's friend)
│   │   │
│   │   └── random/
│   │       ├── delivery-npcs.twee   ← Random delivery encounter pool
│   │       ├── campus-npcs.twee     ← Random campus encounter pool
│   │       ├── gym-npcs.twee        ← Random gym/fitness encounters
│   │       ├── nightlife-npcs.twee  ← Random club/bar encounters
│   │       ├── transit-npcs.twee    ← Random bus/rideshare encounters
│   │       ├── dating-app.twee      ← Dating app match pool + sexting
│   │       └── hookup-npcs.twee     ← Hookup NPC chains (Tyler, Jade, Chris, etc)
│   │
│   ├── systems/
│   │   ├── wardrobe.twee        ← Wardrobe management page
│   │   ├── phone.twee           ← Phone overlay (SMS, apps, social)
│   │   ├── journal.twee         ← Journal/quest tracker page
│   │   ├── stats-page.twee      ← Detailed stats view page
│   │   ├── map.twee             ← Location selection hub (day routing)
│   │   ├── shopping.twee        ← Generic shop template
│   │   └── mirror.twee          ← Mirror examination system (body check)
│   │
│   └── endings/
│       ├── ending-chose.twee    ← "The Woman She Chose to Be"
│       ├── ending-fought.twee   ← "The Woman Who Fought Back"
│       ├── ending-made.twee     ← "The Woman They Made Her"
│       ├── ending-surrendered.twee ← "The Woman Who Surrendered"
│       ├── ending-created.twee  ← "The Woman Who Created Life"
│       └── ending-progress.twee ← "The Woman in Progress"
│
```

`assets/` is **not** inside `soft-reset/`   see the project-root tree at the
top of this section. Its own internal layout (kept here for reference
since it doesn't change):

```
assets/
├── ui/
│   ├── soft-reset-logo.png
│   └── icons/              ← UI icons (stat icons, nav icons)
├── characters/
│   ├── mc-male/            ← Aiden images (Day 0)
│   ├── mc-female-phase1/   ← Aida B-cup images
│   ├── mc-female-phase2/   ← Aida C-cup images
│   ├── mc-female-phase3/   ← Aida D-cup images
│   ├── mc-female-phase4/   ← Aida DD-cup images
│   ├── jake/
│   ├── marcus/
│   ├── sophie/
│   ├── river/
│   ├── vanessa/
│   └── supporting/         ← Luna, Derek, Dolores, etc
├── locations/
│   ├── apartment/
│   ├── campus/
│   ├── novacure/
│   ├── nocturne/
│   ├── downtown/
│   └── misc/
├── clothes/
│   ├── male/               ← Aiden's wardrobe images
│   ├── female-tops/
│   ├── female-bottoms/
│   ├── female-dresses/
│   ├── female-underwear/
│   ├── female-lingerie/
│   ├── female-shoes/
│   ├── female-outerwear/
│   └── uniforms/           ← DashDrop, Nocturne
└── items/
    ├── toys/               ← Sex toy images
    ├── grooming/           ← Beauty/grooming items
    └── misc/               ← Phone, food, etc
```

---

## File Relationships & Load Order

### CSS Load Order (in Story Stylesheet or @import chain)
```
01-tokens → 02-reset → 03-sidebar → 04-layout → 05-typography →
06-hud → 07-stat-bars → 08-location-grid → 09-actions →
10-room-grid → 11-dialogue → 12-choices → 13-prose → 14-images →
15-cards → 16-shops → 17-wardrobe → 18-phone → 19-journal →
20-sleep → 21-buttons → 22-modals → 23-notifications →
24-special → 25-responsive → 26-sugarcube
```

### JS Load Order (in Story JavaScript or script tags)
```
01-config → 15-utilities → 05-stat-engine → 04-time-system →
12-body-system → 06-wardrobe-engine → 07-relationship →
08-economy → 13-sexual-tracker → 14-pregnancy →
11-npc-encounters → 09-phone-system → 10-journal →
02-macros → 03-widgets
```

### Passage Flow (Day 0)
```
Start → AgeGate → CharCreate →
  d00-morning → d00-delivery (5 encounters) →
  d00-evening → d00-novacure → d00-night →
  Sleep (Day 0→1) →
  d01-wakeup → d01-mirror → d01-panic → ...
```

---

## Key Architecture Decisions

### 1. Modular .twee Files
Each day's content is in its own subfolder (`day00/`, `day01/`, etc). This allows monthly content releases   drop in `day31/` through `day60/` for Month 2.

### 2. Separation of Concerns
- **CSS files** handle ALL visual styling   no inline styles in passages
- **JS files** handle ALL game logic   no raw JavaScript in passages
- **Passage files** contain ONLY narrative content + SugarCube macros calling the JS/widget systems
- **Widget files** bridge JS logic and passage display

### 3. Stat System Architecture
Stats live in `$player` object (set in StoryInit). All modifications go through `statChange()` function in `05-stat-engine.js` which handles:
- Capping (0-100 for primary stats)
- Threshold notifications (FEM 25 → "Unlocked: Women's restroom option")
- Stat-gated content checks
- Visual notification popups

### 4. Time System
- `$day` (integer, 0-90)
- `$timeslot` (Morning / Afternoon / Evening / Night)
- Each timeslot allows 1-2 actions
- `advanceTime()` in `04-time-system.js` handles progression
- Sleep passage triggers `advanceDay()` which increments `$day`, resets `$timeslot`, applies passive gains (FEM +1/day after Day 31)

### 5. NPC System
- Main partners: full state objects ($jake, $marcus, $sophie, $river, $vanessa) with affinity scores, flags, scene trackers
- Supporting NPCs: flag-based ($metLuna, $lunaAffinity, etc)
- Random NPCs: encounter pool in `11-npc-encounters.js`   weighted random selection based on location, day, and stats

### 6. Body/Transformation System
- `$body` object in `12-body-system.js` tracks: bust, waist, hips, braCup, weight, height, hairLength, sensitivity, lactation, menstrualDay, pregnant
- Phase 2 timer: if `$phase2Active`, daily check increments transformation markers
- Milestone events fire at cup-size transitions (B→C, C→D, D→DD)

### 7. Wardrobe System
- Items are objects: `{ id, name, type, img, fem, att, cor, owned, equipped }`
- Slots: top, bottom, underwear, bra, shoes, accessory, outerwear
- Outfit bonuses: matching set detection gives bonus ATT
- `$equipped` object tracks current outfit per slot

### 8. Phone System
- Overlay (not a passage   JavaScript-driven overlay like reference game)
- Apps: SMS (NPC threads), Dating (swipe/match), Social Media, Gallery
- SMS threads: stored in `$smsThreads` object, each NPC has message history
- Dating app: `$datingMatches` array with NPC profiles

### 9. Compilation
Using **Tweego** CLI compiler, run from inside `soft-reset/` so the output
lands one level up, next to `assets/`:
```bash
cd soft-reset/
tweego -o ../soft-reset-compiled.html \
  soft-reset.twee \
  css/*.css \
  js/*.js \
  passages/**/*.twee \
  -f sugarcube-2
```

Or just run `soft-reset/compile.sh`, which does exactly this. Or for
development with live reload:
```bash
tweego -o ../soft-reset-dev.html -w \
  soft-reset.twee css/ js/ passages/
```

---

## StoryInit Variable Map (Complete)

### Player Stats
```
$player.name         : ""        ← Player-chosen female name (default "Aida")
$player.maleName     : "Aiden"   ← Original male name
$player.money        : 47        ← Starting cash
$player.fem          : 0         ← Femininity (0-100)
$player.cor          : 0         ← Corruption (0-100)
$player.con          : 5         ← Confidence (0-100)
$player.att          : 20        ← Attractiveness (0-100)
$player.fit          : 30        ← Fitness (0-100)
$player.int          : 40        ← Intelligence (0-100)
$player.energy       : 100       ← Daily energy (0-100)
$player.stress       : 30        ← Stress (0-100)
$player.arousal      : 0         ← Arousal (0-100)
$player.sub          : 0         ← Submission (hidden until activated)
$player.dom          : 0         ← Dominance (hidden until activated)
$player.exhib        : 0         ← Exhibitionism (hidden until activated)
$player.maternal     : 0         ← Maternal (hidden until activated)
$player.addiction    : 0         ← Addiction (hidden until activated)
```

### Body State
```
$body.phase          : 0         ← 0=male, 1=B-cup, 2=C-cup, 3=D-cup, 4=DD-cup
$body.bust           : 36        ← Bust measurement (inches)
$body.waist          : 29        ← Waist measurement
$body.hips           : 33        ← Hip measurement
$body.braCup         : "N/A"    ← Current bra cup
$body.braSize        : "N/A"    ← Full bra size string
$body.weight         : 148       ← Weight (lbs)
$body.height         : 69        ← Height (inches)   5'9" = 69"
$body.hairLength     : "short"   ← short/shoulder/past-shoulder/mid-back
$body.sensitivity    : 1         ← Multiplier for arousal responses
$body.lactating      : false     ← Lactation active
$body.menstrualDay   : -1        ← -1 = not cycling, 0-28 = cycle day
$body.pregnant       : false
$body.pregnancyWeek  : 0
$body.pubicStyle     : "natural" ← natural/trimmed/landing/bare
$body.piercings      : {}        ← ears, nose, navel, nipple, etc
$body.tattoos        : []        ← Array of tattoo objects
$body.phase2Active   : false     ← Taking Phase 2 medication
$body.phase2Day      : 0         ← Days on Phase 2 meds
```

### Time
```
$day                 : 0
$timeslot            : "Morning"
$timeslots           : ["Morning","Afternoon","Evening","Night"]
$timeIcons           : { Morning:"🌅", Afternoon:"☀️", Evening:"🌆", Night:"🌙" }
$weekDay             : "Monday"
$weekDays            : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
$acted               : false     ← Has player used this timeslot's action
```

### Main Partner Objects
```
$jake = {
  met: false, affinity: 0, romance: false, kissed: false,
  kissedDay: 0, sexCount: 0, firstSexDay: 0, girlfriend: false,
  seenFemale: false, seenFemaleDay: 0,
  flags: {} ← scene-specific flags
}
$marcus   = { ... same structure ... }
$sophie   = { ... same structure ... }
$river    = { ... same structure ... }
$vanessa  = { ... same structure ... }
```

### Wardrobe
```
$equipped = {
  top: null, bottom: null, bra: null, underwear: null,
  shoes: null, accessory: null, outerwear: null
}
$wardrobe = []          ← Array of owned clothing item objects
$makeupApplied = false
$makeupLevel   = 0      ← 0=none, 1=basic, 2=intermediate, 3=full glam
$perfumeApplied = false
```

### Phone / Social
```
$phone = {
  contacts: [],
  smsThreads: {},
  datingMatches: [],
  datingActive: false,
  socialMedia: { followers: 0, posts: [] },
  notifications: []
}
```

### NPC Flags (Sample   Day 0 NPCs)
```
$metDolores      = false
$metLuna         = false
$metDerek        = true     ← Known from DashDrop
$metDrAmelia       = false
$metNursePatel   = false
$metTyler        = false
$tylerNumber     = false
$metJade         = false
$firstCatcall    = false
$firstPeriod     = false
$firstKissMale   = false
$firstKissFemale = false
$firstSexMale    = false
$firstSexFemale  = false
$firstOrgasmSolo = false
$firstOrgasmPartner = false
$gloryHoleDiscovered = false
```

### Sexual Tracker
```
$sexLog = {
  totalEncounters: 0,
  partnerCount: 0,
  partners: {},          ← { npcId: { encounters: N, activities: [...] } }
  firsts: {},            ← { "anal": day, "oral_give": day, ... }
  kinks: {},             ← { "blindfold": true, "bondage": true, ... }
  orientation: {
    heteroExp: 0,
    sapphicExp: 0,
    otherExp: 0
  },
  positions: [],         ← Unlocked positions
  toys: []               ← Owned toys
}
```

### Economy
```
$loans = {
  total: 23400,
  monthlyMin: 487,
  daysOverdue: 120,
  paidOff: false
}
$income = {
  dashdrop: 0,           ← Accumulated this month
  nocturne: 0,
  novacure: 800,         ← Monthly stipend
  phase2: 0,             ← 1500 if active
  modeling: 0,
  camwork: 0,
  other: 0
}
$rent = 650
$rentPaid = false
$rentMonthsAhead = 0
```

### Quest / Journal
```
$journal = {
  entries: [],           ← { day, title, text }
  quests: {
    main: [],            ← Active main quests
    side: [],            ← Active side quests
    completed: []
  },
  milestones: []         ← { day, name, description }
}
```

---

## Build Commands

### Install Tweego
```bash
# Download from https://github.com/tmedwards/tweego/releases
# Or via npm wrapper:
npm install -g tweego
```

All commands below run from inside `soft-reset/`, and all write their output
one level up (next to `assets/`)   never into a `build/` folder, which
this project doesn't have.

### Development Build
```bash
cd soft-reset/
tweego -o ../soft-reset-dev.html \
  soft-reset.twee \
  $(find css -name '*.css' | sort) \
  $(find js -name '*.js' | sort) \
  $(find passages -name '*.twee' | sort)
```

### Production Build
```bash
tweego -o ../soft-reset-v1.0.html \
  --head='<link rel="icon" href="assets/ui/favicon.ico">' \
  soft-reset.twee \
  $(find css -name '*.css' | sort) \
  $(find js -name '*.js' | sort) \
  $(find passages -name '*.twee' | sort)
```

### Watch Mode (Auto-rebuild on changes)
```bash
tweego -o ../soft-reset-dev.html -w \
  soft-reset.twee css/ js/ passages/
```

---

## Monthly Content Release Strategy

Each month's content is self-contained in day folders:

**Release 1 (Month 1):** `day00/` through `day30/` + all system files + all location files
**Release 2 (Month 2):** Add `day31/` through `day60/` + new location passages + new NPC passages
**Release 3 (Month 3):** Add `day61/` through `day90/` + ending passages + remaining content

System files (CSS, JS, locations, NPC base) ship with Release 1 and are updated as needed.

---

*This document defines the complete file architecture for SOFT_RESET. All content from the 9-file Day-by-Day Summary maps directly to this structure. Ready for file creation.*
