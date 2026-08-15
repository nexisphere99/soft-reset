# SOFT_RESET Asset Manifest

Folder structure matches `SOFT_RESET_File_Structure.md`. Every path below is
already created and empty   drop the matching file in and it's ready to
wire into the game. Nothing here is auto-loaded yet; the passages currently
render dashed `.img-placeholder` boxes instead of `<img>` tags, so hooking
up real files is a separate (small) pass through the relevant `.twee`
files once art exists.

Prompts for every path below are in the two content docs at the project
root   `SOFT_RESET_Day0_Content_FirstPerson.md` and
`SOFT_RESET_Day1_Content_FirstPerson.md`   under each scene's **Image Prompt**
heading, and summarized in each doc's **IMAGE PROMPT SUMMARY** table.

---

## Day 0 (12 images)

| # | Scene | Path |
|---|---|---|
| 1 | Morning POV   mattress, water-stained ceiling, cracked phone alarm | `locations/apartment/d00-morning-pov.png` |
| 2 | Bathroom mirror   male Aiden, tired, stubble | `characters/mc-male/mirror-morning.png` |
| 3 | Delivery scooter   orange DashDrop jacket, urban street | `characters/mc-male/delivery-scooter.png` |
| 4 | Mrs. Calloway   elderly woman at door with cookies | `characters/supporting/calloway-door.png` |
| 5 | The flyer   close-up on telephone pole | `locations/campus/novacure-flyer.png` |
| 6 | Aiden reading the flyer, dusk | `characters/mc-male/flyer-moment.png` |
| 7 | Meridian Tower   glass tower at night | `locations/novacure/meridian-exterior.png` |
| 8 | NovaCure waiting room   sterile, alone | `locations/novacure/waiting-room.png` |
| 9 | Dr. Amelia   clinical portrait | `characters/supporting/dr-amelia.png` |
| 10 | The pill   macro shot, steel case | `items/misc/the-pill.png` |
| 11 | Final mirror   Aiden's last night as himself | `characters/mc-male/final-mirror.png` |
| 12 | Last sleep   overhead, floor mattress, moonlight | `characters/mc-male/last-sleep.png` |

## Day 1 (10 images)

| # | Scene | Path |
|---|---|---|
| 1 | Waking up wrong   POV, breasts under the t-shirt | `characters/mc-female-phase1/d01-wakeup-pov.png` |
| 2 | Mirror reveal   face, shock | `characters/mc-female-phase1/mirror-face-shock.png` |
| 3 | Mirror reveal   full body, oversized clothes | `characters/mc-female-phase1/mirror-fullbody-shock.png` |
| 4 | Bathroom floor   panic, knees to chest | `characters/mc-female-phase1/bathroom-floor-panic.png` |
| 5 | Bus   a man's gaze | `locations/misc/bus-male-gaze.png` |
| 6 | Exam room   stirrups, Dr. Amelia | `locations/novacure/exam-room-stirrups.png` |
| 7 | New female ID card | `items/misc/new-female-id.png` |
| 8 | First shower | `characters/mc-female-phase1/shower-first.png` |
| 9 | Walking home   the whistle | `characters/mc-female-phase1/walk-home-whistle.png` |
| 10 | Evening alone, TV glow | `characters/mc-female-phase1/evening-alone-couch.png` |

---

## Everything else

The remaining folders (`characters/jake`, `marcus`, `sophie`, `river`,
`vanessa`, `mc-female-phase2` through `phase4`, all of `clothes/*`,
`items/toys`, `items/grooming`, `ui/`) don't have assigned filenames yet  
they're scaffolded ahead of Day 2+ content per `SOFT_RESET_File_Structure.md`.
Name new files descriptively (`kebab-case.png`) and add them to this
manifest as you go so it stays the map for what's used where.
