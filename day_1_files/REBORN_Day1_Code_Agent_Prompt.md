# PROMPT FOR CODE AGENT   Add Day 1 to SOFT_RESET

---

## CONTEXT

You have already built the Day 0 version of SOFT_RESET (a SugarCube 2.37+ Twine game). The game has:
- Title screen, age gate, character creation (archetype + name)
- Full CSS theme (dark mode, purple/rose accents, Inter + Playfair Display fonts)
- Stat engine, time system, notification system, HUD, sidebar
- All StoryInit variables initialized
- Day 0 complete and playable (7 passages, 8,000 words)

Now you need to add **Day 1   The Wake-Up** to the existing game.

---

## FILES PROVIDED

1. **`SOFT_RESET_Day1_Content_FirstPerson.md`**   Complete Day 1 prose (first person, ~8,200 words), passage mapping, SugarCube logic blocks, choices, image prompts, and 100% beat verification

---

## NEW PASSAGES TO CREATE

Add these passages to the game. They connect from Day 0's sleep screen (`D00_Sleep` → link to `D01_Wakeup`):

| Passage Name | File | Description |
|---|---|---|
| `D01_Wakeup` | `passages/day01/d01-wakeup.twee` | Waking up wrong   body discovery in bed |
| `D01_Mirror` | `passages/day01/d01-mirror.twee` | Full mirror reveal (face, body, genitals) |
| `D01_Panic` | `passages/day01/d01-panic.twee` | Panic attack on bathroom floor, calling NovaCure |
| `D01_GetDressed` | `passages/day01/d01-getdressed.twee` | Trying to wear male clothes that don't fit |
| `D01_NovaCure` | `passages/day01/d01-novacure.twee` | Bus, examination, stirrups, confrontation, new ID |
| `D01_Evening` | `passages/day01/d01-evening.twee` | Walking home, whistle, sliding down door |
| `D01_Shower` | `passages/day01/d01-shower.twee` | First shower   washing new body, clit discovery |
| `D01_ShowerExplore` | `passages/day01/d01-shower-explore.twee` | BRANCH: Full self-exploration + orgasm scene |
| `D01_ShowerAvoid` | `passages/day01/d01-shower-avoid.twee` | BRANCH: Clinical wash, avoidance, deferred arousal |
| `D01_EveningHome` | `passages/day01/d01-eveninghome.twee` | Ramen, Jake's call, bed, 3:30 AM wet fingers |
| `D01_Sleep` | `passages/day01/d01-sleep.twee` | Sleep transition screen → Day 2 |

### Passage Flow
```
D00_Sleep
  └─→ D01_Wakeup
        └─→ D01_Mirror
              └─→ D01_Panic
                    └─→ D01_GetDressed
                          └─→ D01_NovaCure
                                └─→ D01_Evening
                                      └─→ D01_Shower
                                            ├─→ D01_ShowerExplore ─→ D01_EveningHome
                                            └─→ D01_ShowerAvoid ──→ D01_EveningHome
                                                                        └─→ D01_Sleep
                                                                              └─→ D02_Morning (future)
```

---

## FILE STRUCTURE ADDITIONS

Add this folder and files to the existing structure:

```
passages/
  └── day01/                          ← NEW FOLDER
      ├── d01-wakeup.twee             ← Scene 1: Something Is Wrong
      ├── d01-mirror.twee             ← Scene 2: The Mirror (face + body + below)
      ├── d01-panic.twee              ← Scene 3: Panic Attack
      ├── d01-getdressed.twee         ← Scene 4: Trying to Function
      ├── d01-novacure.twee           ← Scene 5: NovaCure Examination (longest passage)
      ├── d01-evening.twee            ← Scene 6: Walking Home
      ├── d01-shower.twee             ← Scene 7: First Shower (shared intro)
      ├── d01-shower-explore.twee     ← Scene 7A: Explore Branch (orgasm)
      ├── d01-shower-avoid.twee       ← Scene 7B: Avoid Branch (deferral)
      ├── d01-eveninghome.twee        ← Scene 8: Evening at Home
      └── d01-sleep.twee              ← Sleep Transition Screen

assets/
  └── characters/
      └── mc-female-phase1/           ← NEW FOLDER (Phase 1 = B-cup)
          ├── d01-wakeup-pov.png     ← POV from bed, breasts under shirt
          ├── mirror-face-shock.png  ← Face reflection, shock expression
          ├── mirror-fullbody-shock.png ← Full body reflection, oversized clothes
          ├── bathroom-floor-panic.png  ← Huddled on tile, crying
          ├── shower-first.png       ← Artistic nude shower scene
          ├── walk-home-whistle.png  ← Walking past bar, men whistling
          └── evening-alone-couch.png ← On couch, TV glow, exhaustion
  └── locations/
      └── misc/
          └── bus-male-gaze.png      ← Bus interior, man looking back
      └── novacure/
          └── exam-room-stirrups.png ← Exam room with stirrups (if not already created)
  └── items/
      └── misc/
          └── new-female-id.png      ← Close-up of female ID card
```

---

## IMPLEMENTATION DETAILS

### 1. No HUD for First Two Passages
Day 1 opens in disorientation. Do NOT show the HUD bar (`<<HUD>>`) on `D01_Wakeup` or `D01_Mirror`. The player should feel lost, like the MC. 

Start showing the HUD from `D01_Panic` onward (once MC has processed enough to be "in the game").

### 2. The Branching Choice (Shower)
The shower scene splits into TWO paths that reconverge:
- **Explore path** (`D01_ShowerExplore`): MC masturbates, discovers female orgasm. Stats: FEM +3, COR +2. Sets `$firstOrgasmSolo = true`.
- **Avoid path** (`D01_ShowerAvoid`): MC washes clinically, defers. Stats: FEM +1, Stress +5. `$firstOrgasmSolo` stays false.

Both paths lead to `D01_EveningHome`. The evening scene has ONE subtle difference based on the branch:
- If explored: MC wakes at 3:30 AM with hand between legs, fingers wet → pulls away, goes back to sleep. (Body processing what happened.)
- If avoided: MC wakes at 3:30 AM with hand between legs, fingers wet → pulls away, goes back to sleep. (Body doing it anyway   the avoidance is temporary.)

The 3:30 AM beat is the same either way, which is the point   the body doesn't care about the player's choice. But the emotional framing differs:
```
<<if $firstOrgasmSolo>>
  /* MC recognizes the sensation   the arousal is familiar now */
  I wake up once, at 3:30. My hand is between my legs. My fingers are wet. I know what that wetness is now. I know what my body is asking for.
  I pull my hand away. Close my eyes. Not tonight.
<<else>>
  /* MC doesn't have context   the wetness is confusing */
  I wake up once, at 3:30. My hand is between my legs. My fingers are wet. I don't know what that means. I don't want to know what that means.
  I pull my hand away. Go back to sleep.
<</if>>
```

### 3. Dynamic Name Display
The NovaCure scene includes the new ID card. Use the player's chosen name:
```
<<print $player.name>> Cole
```
This means if the player chose "Aida" during CharCreate, the ID reads "Aida Cole." If they chose "Luna" or any other name, it reflects that.

### 4. Stat Changes Summary
| When | What Changes | Amount |
|---|---|---|
| `D01_Wakeup` → `D01_Mirror` | Stress | +20 |
| `D01_Wakeup` → `D01_Mirror` | Energy | -15 |
| `D01_Mirror` → `D01_Panic` | Stress | +15 |
| `D01_Panic` → `D01_GetDressed` | Stress | -5 (slight recovery from action) |
| `D01_Panic` → `D01_GetDressed` | Energy | -10 |
| `D01_NovaCure` | Money | +800 (stipend) |
| `D01_NovaCure` → `D01_Evening` | Stress | +5 |
| `D01_Shower` → Explore | FEM | +3 |
| `D01_Shower` → Explore | COR | +2 |
| `D01_Shower` → Explore | `$firstOrgasmSolo` | true |
| `D01_Shower` → Avoid | FEM | +1 |
| `D01_Shower` → Avoid | Stress | +5 |
| `D01_EveningHome` → Sleep | Energy | reset to 80 (poor sleep) |
| `D01_EveningHome` → Sleep | Stress | -5 (overnight partial recovery) |

### 5. New StoryInit Variables (Add to Existing)
```javascript
/* Day 1 tracking */
<<set $firstOrgasmSolo = false>>
<<set $firstShower = false>>
<<set $seenMirrorDay1 = false>>
<<set $novaCureVisitCount = 1>> /* increments each visit */
```

### 6. Image Placeholders
Use the existing `.img-placeholder` CSS class from Day 0. Each scene has an image prompt in the content document   place the placeholder where the image should go:

```html
<<ImagePlaceholder "MC waking up   POV" "banner">>
```

For the mirror scene, use the `.portrait` variant:
```html
<<ImagePlaceholder "Mirror reveal   full body" "portrait">>
```

### 7. Prose Formatting
- Wrap all narrative text in `<div class="prose-block">...</div>`
- Use `<div class="scene-divider">Scene Title</div>` between major beats
- Use `<div class="choice-block">...</div>` for player choices
- Dialogue uses the `<<Dialogue>>` widget defined in Day 0:
  ```
  <<Dialogue "Dr. Amelia" "🧪" "Vaginal canal present and fully formed." "">>
  <<Dialogue $player.name "👤" "Can you PLEASE talk about my body like I'm in the room?" "you">>
  ```

### 8. The NovaCure Scene   Special Handling
The NovaCure examination is the longest single passage (~2,100 words). Consider splitting it into sub-sections using scene dividers rather than separate passages, to maintain narrative flow:

```html
<div class="scene-divider">The Bus</div>
/* bus prose */

<div class="scene-divider">Examination</div>
/* exam prose */

<div class="scene-divider">The Confrontation</div>
/* confrontation prose */
```

This keeps the player in one passage (avoiding loading breaks during an emotionally continuous scene) while visually breaking it into digestible chunks.

### 9. Day 1 Sleep Screen
The sleep screen at the end of Day 1 should acknowledge the branch:
```
<<if $firstOrgasmSolo>>
  <p style="color:var(--text2); max-width:36ch; margin:0 auto;">
    The body is real. The tears were real. The orgasm was real. 
    Everything is real. Nothing makes sense.
  </p>
<<else>>
  <p style="color:var(--text2); max-width:36ch; margin:0 auto;">
    The body is real. The tears were real. The avoidance was temporary. 
    Everything is real. Nothing makes sense.
  </p>
<</if>>
```

### 10. Compilation
After adding Day 1 files, recompile:
```bash
tweego -o build/soft-reset-compiled.html \
  soft-reset.twee \
  $(find css -name '*.css' | sort) \
  $(find js -name '*.js' | sort) \
  $(find passages -name '*.twee' | sort)
```

---

## QUALITY CHECKLIST

Before considering Day 1 complete, verify:

- [ ] `D00_Sleep` "Wake Up → Day 1" button correctly links to `D01_Wakeup`
- [ ] No HUD on `D01_Wakeup` and `D01_Mirror` (disorientation)
- [ ] HUD appears from `D01_Panic` onward
- [ ] Sidebar updates: Day 1, Friday, Morning → Afternoon → Evening → Night
- [ ] Shower branch works: Explore and Avoid both lead to `D01_EveningHome`
- [ ] Stat changes fire correctly with toast notifications
- [ ] `$firstOrgasmSolo` flag properly set/unset based on branch
- [ ] `$player.money` increases by $800 at NovaCure (stipend)
- [ ] Player's chosen name appears on the ID card (`<<print $player.name>>`)
- [ ] 3:30 AM scene correctly uses `<<if $firstOrgasmSolo>>` conditional
- [ ] Sleep screen transitions to `D02_Morning` (link exists even if passage doesn't yet   will be added in Day 2 release)
- [ ] All image placeholders present with correct labels
- [ ] All prose wrapped in `.prose-block` divs
- [ ] All choices in `.choice-block` divs
- [ ] Scene dividers between major beats
- [ ] Body stat variables unchanged from the `D00_Sleep` transformation set (Phase 1 values persist)
- [ ] Responsive: everything works on mobile (no sidebar, full-width passages)
- [ ] Save/load works   player can save mid-Day 1 and resume

---

## WHAT NOT TO CHANGE

- Do NOT modify any Day 0 passages (they're complete and tested)
- Do NOT change the CSS theme or color variables
- Do NOT alter StoryInit variables that are already working   only ADD new ones
- Do NOT modify the stat engine, time system, or notification system   they should work with the new passages as-is
- Do NOT remove image placeholder styling   it's needed until actual images are generated

---

## DELIVERABLE

Updated game file (single `.html` or updated `.twee` set) that includes:
- All existing Day 0 content (unchanged)
- All 11 new Day 1 passages with complete prose
- The shower branching choice (Explore vs Avoid)
- Conditional 3:30 AM text based on branch
- Sleep transition to Day 2 (forward link)
- Day 1 working end-to-end with stat tracking, notifications, and HUD

The player should be able to play from the title screen through Day 0 and Day 1 seamlessly, making one meaningful choice (shower explore/avoid), and arrive at the Day 1 sleep screen with appropriate stats based on their path.
