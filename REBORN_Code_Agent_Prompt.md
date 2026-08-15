# PROMPT FOR CODE AGENT   Build SOFT_RESET Twine Game

---

## YOUR TASK

Build a complete, playable Twine game (SugarCube 2.37+) called **SOFT_RESET**   an adult MTF transformation interactive fiction game. You are building **Day 0** (the first playable day) with full game infrastructure that supports 90 days of future content.

You have been provided:
1. **`SOFT_RESET_File_Structure.md`**   Complete file architecture, directory structure, variable map, system descriptions
2. **`SOFT_RESET_Day0_Content_FirstPerson.md`**   Complete Day 0 prose, passage mapping, SugarCube logic blocks, image prompts

Your output should be a **single compiled `.html` file** (or a set of `.twee` files that compile via Tweego) containing a fully functional, beautifully styled Twine game.

---

## CRITICAL REQUIREMENTS

### 1. VISUAL DESIGN   Make It Beautiful

This game needs to look like a **premium, modern web application**, not a default Twine game. Study the reference game "Switched" (if provided) or follow these design specifications:

**Color Palette (Dark Theme):**
```css
--bg           : #09090f       /* Deep dark background */
--bg2          : #0e0e18       /* Slightly lighter bg */
--surface      : #13131f       /* Card/panel surfaces */
--surface2     : #1a1a2a       /* Elevated surfaces */
--card         : #161624       /* Card backgrounds */
--card-hover   : #1e1e30       /* Card hover state */
--border       : #ffffff0f     /* Subtle borders */
--border-hi    : #ffffff22     /* Active borders */
--accent       : #a855f7       /* Primary purple accent */
--accent-glow  : #a855f740     /* Purple glow */
--rose         : #f43f8e       /* Femininity/pink accent */
--rose-glow    : #f43f8e30
--text         : #f0eeff       /* Primary text */
--text2        : #a09ec0       /* Secondary text */
--text3        : #5c5a7a       /* Tertiary/muted text */
--gold         : #f59e0b       /* Money/gold */
--green        : #10b981       /* Fitness/success */
--blue         : #3b82f6       /* Intelligence */
--red          : #ef4444       /* Corruption/danger */
```

**Typography:**
- Import `Inter` (body text) and `Playfair Display` (headings) from Google Fonts
- Body: 15px, line-height 1.75
- Headings: Playfair Display, serif, bold
- All text should feel clean, readable, elegant

**UI Components to Build:**

1. **Sidebar (left, 220px):**
   - Game logo/title at top
   - Current day number and weekday
   - Current timeslot with icon (🌅 Morning, ☀️ Afternoon, 🌆 Evening, 🌙 Night)
   - Stat display: Player stats in compact rows (label + value, color-coded)
   - Money display (gold colored)
   - Quick links: Journal, Phone, Wardrobe, Stats
   - Save/Load buttons at bottom

2. **HUD Bar (top of passage):**
   - Horizontal bar showing key stats with color-coded values
   - Updates reactively when stats change
   - Compact, not overwhelming   shows: 💰 Money | 💗 FEM | 🔥 COR | ⚡ Energy | Day #

3. **Location Grid:**
   - 3-column grid of clickable cards
   - Each card has: emoji icon, location name, hint text
   - Hover: subtle lift + border highlight
   - Locked locations: greyed out with lock icon and requirement text

4. **Action Buttons:**
   - Vertical stack of action links
   - Each: card-style, icon + text + optional cost badge on right
   - Hover: slides right slightly, border highlights
   - Special variants: `.action-fem` (pink-tinted for femininity actions), `.action-quest` (purple-tinted for quest-related), `.action-locked` (greyed, no pointer)

5. **Prose Blocks:**
   - Max-width 58ch for readability
   - Scene dividers between major beats (horizontal line with centered label text)
   - Dialogue system: avatar + bubble layout, left-aligned for NPCs, right-aligned for MC
   - NPC name labels color-coded per character

6. **Choice Blocks:**
   - Styled card buttons for player decisions
   - Max-width 480px
   - Hover: slide right + highlight
   - Can include stat requirement indicators

7. **Phone Overlay (iOS-style):**
   - Full-screen dark overlay with centered phone frame (380px wide, rounded corners)
   - Navigation tabs at bottom: Messages, Dating, Social, Gallery, Settings
   - SMS threads with bubble-style messages (them = grey, you = purple)
   - Triggered by sidebar button or passage link

8. **Sleep/Transition Screens:**
   - Centered vertically, large icon, day counter badge, heading, brief text
   - "Continue" button to advance to next day
   - Feels cinematic   like a chapter break

9. **Stat Change Notifications:**
   - Toast-style popup when stats change (e.g., "FEM +3 ▲")
   - Color-coded to the stat
   - Fades in, holds 2 seconds, fades out
   - Positioned top-right or bottom-center

10. **Image Placeholders:**
    - Where images will go, show a dashed-border placeholder box with an icon and label
    - Class: `.img-placeholder` with variants `.portrait`, `.banner`, `.float`
    - This allows the game to work without images while marking where they'll go

11. **Responsive Design:**
    - At 600px and below: hide sidebar, full-width passages, 2-column grids become 1-column
    - Touch-friendly button sizes on mobile

### 2. GAME SYSTEMS   Make Them Work

Build these JavaScript systems (in `:: Story JavaScript` or separate tagged passages):

**A. Stat Engine**
```javascript
// Function to modify stats with capping and notification
window.statChange = function(stat, amount) {
  var oldVal = State.variables.player[stat];
  State.variables.player[stat] = Math.clamp(oldVal + amount, 0, 100);
  var newVal = State.variables.player[stat];
  if (newVal !== oldVal) {
    // Trigger toast notification
    showStatNotification(stat, amount);
    // Check thresholds
    checkThresholds(stat, newVal);
  }
};
```

**B. Time System**
```javascript
window.advanceTime = function() {
  var slots = State.variables.timeslots;
  var idx = slots.indexOf(State.variables.timeslot);
  if (idx < slots.length - 1) {
    State.variables.timeslot = slots[idx + 1];
  } else {
    // End of day - go to sleep
    Engine.play("Sleep");
  }
  State.variables.acted = false;
};

window.advanceDay = function() {
  State.variables.day++;
  State.variables.timeslot = "Morning";
  State.variables.player.energy = 100;
  State.variables.acted = false;
  // Update weekday
  var days = State.variables.weekDays;
  var idx = days.indexOf(State.variables.weekDay);
  State.variables.weekDay = days[(idx + 1) % 7];
  // Apply passive FEM gain if day > 30
  if (State.variables.day > 30) {
    statChange("fem", 1);
  }
  // Phase 2 daily check
  if (State.variables.body.phase2Active) {
    State.variables.body.phase2Day++;
    checkPhase2Progress();
  }
};
```

**C. Notification System**
```javascript
window.showStatNotification = function(stat, amount) {
  var colors = {
    fem: "var(--rose)", cor: "var(--red)", con: "var(--gold)",
    att: "var(--accent)", fit: "var(--green)", int: "var(--blue)",
    money: "var(--gold)", energy: "var(--green)", stress: "var(--red)"
  };
  var names = {
    fem: "FEM", cor: "COR", con: "CON", att: "ATT", 
    fit: "FIT", int: "INT", money: "$", energy: "⚡", stress: "😰"
  };
  var sign = amount > 0 ? "+" : "";
  var el = document.createElement("div");
  el.className = "stat-toast";
  el.style.color = colors[stat] || "var(--text)";
  el.textContent = names[stat] + " " + sign + amount;
  document.body.appendChild(el);
  setTimeout(function() { el.classList.add("show"); }, 10);
  setTimeout(function() { el.classList.remove("show"); }, 2500);
  setTimeout(function() { el.remove(); }, 3000);
};
```

**D. Custom SugarCube Widgets**
Create these widgets for use in passages:

```
:: Widgets [widget nobr]

/* HUD Bar - displays at top of gameplay passages */
<<widget "HUD">>
<div class="hud">
  <div class="hud-item"><span class="hud-label">Day</span><span class="hud-val" style="color:var(--accent)">$day</span></div>
  <div class="hud-sep"></div>
  <div class="hud-item"><span class="hud-label">Time</span><span class="hud-val">$timeIcons[$timeslot] $timeslot</span></div>
  <div class="hud-sep"></div>
  <div class="hud-item"><span class="hud-label">Money</span><span class="hud-val" style="color:var(--gold)">$$player.money</span></div>
  <div class="hud-sep"></div>
  <div class="hud-item"><span class="hud-label">FEM</span><span class="hud-val" style="color:var(--rose)">$player.fem</span></div>
  <div class="hud-sep"></div>
  <div class="hud-item"><span class="hud-label">COR</span><span class="hud-val" style="color:var(--red)">$player.cor</span></div>
  <div class="hud-sep"></div>
  <div class="hud-item"><span class="hud-label">Energy</span><span class="hud-val" style="color:var(--green)">$player.energy</span></div>
</div>
<</widget>>

/* Stat Bar - visual bar with fill */
<<widget "StatBar">>
<div class="stat-bar-wrap">
  <div class="stat-bar-row">
    <span class="stat-bar-label">_args[0]</span>
    <div class="stat-bar-track">
      <div class="stat-bar-fill" style="width:_args[1]%; background:_args[2];"></div>
    </div>
    <span class="stat-bar-num">_args[1]</span>
  </div>
</div>
<</widget>>

/* Dialogue Line */
<<widget "Dialogue">>
/* _args[0] = name, _args[1] = emoji/avatar, _args[2] = text, _args[3] = "you" or "" */
<div class="dl-line _args[3]">
  <div class="dl-avatar">_args[1]</div>
  <div>
    <div class="dl-name dl-name--_args[0].toLowerCase()">_args[0]</div>
    <div class="dl-bubble">_args[2]</div>
  </div>
</div>
<</widget>>

/* Scene Divider */
<<widget "SceneDivider">>
<div class="scene-divider">_args[0]</div>
<</widget>>

/* Image Placeholder */
<<widget "ImagePlaceholder">>
<div class="img-placeholder _args[1]">
  <span class="ph-icon">🖼️</span>
  <span class="ph-label">_args[0]</span>
  <span class="ph-hint">Image will be added</span>
</div>
<</widget>>
```

### 3. DAY 0 CONTENT   Make It Playable

Using the `SOFT_RESET_Day0_Content_FirstPerson.md` file, implement ALL Day 0 passages:

1. `Start` → Title screen with logo, tagline, Enter button
2. `AgeGate` → 18+ verification with warning list
3. `CharCreate` → Archetype selection (4 options with stat modifiers)
4. `CharCreate2` → Female name input (default "Aida") + Begin button
5. `D00_Morning` → Full morning prose (apartment, breakfast, phone, getting dressed)
6. `D00_Delivery1` through `D00_Delivery5` → Five delivery encounters with NPC interactions
7. `D00_Flyer` → Campus walk, discovering the NovaCure flyer
8. `D00_Evening` → Home, ramen, internal debate, phone call
9. `D00_NovaCure_Arrival` → Meridian Tower, waiting room, Nurse Patel
10. `D00_NovaCure_Pill` → Dr. Amelia, the consent form, the pill, the bank notification
11. `D00_LastNight` → Bus home, cookies, paying rent, final mirror scene, falling asleep
12. `D00_Sleep` → Sleep transition screen, Day 0 → Day 1 advancement with body transformation variables

The prose is provided verbatim in the content document. Copy it into the passages with appropriate HTML markup (`.prose-block`, `.scene-divider`, `.dialogue-block`, `.choice-block`).

### 4. StoryInit   Complete Variable Initialization

Set up ALL variables as specified in the File Structure document. This includes:
- `$player` object (all stats)
- `$body` object (all measurements, starting as male)
- `$day`, `$timeslot`, `$weekDay` and related time variables
- All 5 main partner objects (`$jake`, `$marcus`, `$sophie`, `$river`, `$vanessa`)
- `$equipped` wardrobe object
- `$phone` object
- `$sexLog` object
- `$loans` object
- `$income` object
- `$journal` object
- All NPC flags (starting as false)
- All item ownership flags
- All first-time event flags

### 5. StoryCaption   Sidebar Content

Build a sidebar that displays:
- Game title with butterfly icon
- Current day + weekday
- Current timeslot with emoji
- All player stats (compact rows, color-coded values)
- Money
- Quick navigation links (if those passages exist)

### 6. QUALITY STANDARDS

- **No default Twine styling**   every element should be custom styled
- **Smooth transitions**   use CSS transitions on hovers, state changes
- **Consistent spacing**   follow an 8px grid system (padding/margin in multiples of .4rem/.8rem)
- **Animations**   stat notifications should animate in/out, buttons should have hover states, page transitions should feel smooth
- **Border radius**   use 12-14px for cards, 99px for pills/badges
- **Box shadows**   subtle (`0 8px 32px #00000040`) for depth on hover states
- **No harsh contrast**   everything should feel luxurious and moody, like a premium app
- **Font weights**   use 300 (light) for ambient text, 400 (normal) for body, 600 (semi-bold) for labels, 700 (bold) for values and headings
- **Responsive**   sidebar hides on mobile, grids collapse, padding reduces

### 7. SAVE SYSTEM

Configure SugarCube's save system:
```javascript
Config.saves.slots = 8;
Config.saves.autosave = true;
Config.history.maxStates = 40;
```

---

## DELIVERABLE

A single `.html` file (compiled Twine game) OR a set of `.twee` files that compile via Tweego into the game. The game should:

1. Load with a beautiful title screen
2. Age-gate properly
3. Allow character creation (archetype + name)
4. Play through ALL of Day 0's content with proper prose, dialogue, and choices
5. Track stats and display them in the sidebar and HUD
6. Show stat change notifications when stats update
7. Transition to Day 1 via the sleep screen
8. Save/load properly
9. Look gorgeous on desktop and functional on mobile
10. Feel like a premium adult interactive fiction experience, not a homework assignment

---

## TONE REFERENCE

This is an **adult game** for MTF transformation enthusiasts. The writing is literary, emotionally genuine, and explicit when appropriate. The design should match: dark, moody, elegant, with accent colors that feel sensual (purple, rose) rather than clinical. Think "luxury app meets erotic visual novel"   not "Twine default with custom colors."

The reference game "Switched" (if provided) shows the benchmark for UI quality. Match or exceed that level of polish.

---

## NOTES

- All image references use placeholder divs (the game works without images)
- Day 0 is the ONLY day with male content   Day 1 onward is female
- The game engine/systems you build must support 90 days of content added incrementally
- Future content will be added as additional `.twee` passage files dropped into the folder structure
- The CSS and JS systems should be robust enough to handle: shops, wardrobe management, phone overlays, NPC relationship tracking, sexual content branching, pregnancy systems, and body transformation phases   even if those specific passages don't exist yet in Day 0
