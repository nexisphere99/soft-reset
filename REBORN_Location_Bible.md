# SOFT_RESET   Complete Location Bible
## Multi-Level Open World Map System

---

## MAP ARCHITECTURE

The game world is organized into **4 tiers**:

```
TIER 1: DISTRICTS (top-level map   player picks a district)
  └─ TIER 2: AREAS (district map   player picks a specific place)
       └─ TIER 3: VENUES (area sub-locations   player picks a shop/room/zone)
            └─ TIER 4: ACTIONS (what you do inside   browse, buy, interact, scene)
```

**Example flow:**
```
World Map → "Westside Arts District" → "Black Line Studio" → "Get a tattoo consultation" → Marcus scene
World Map → "Home" → "My Room" → "Check wardrobe" → Outfit selection
World Map → "Lakewood Mall" → "Lace & Whisper" → "Browse lingerie" → Shopping UI
```

---

## DISTRICT MAP

```
                    ┌──────────────────┐
                    │   NORTHGATE       │
                    │   UNIVERSITY      │
                    │   QUARTER         │
                    └────────┬─────────┘
                             │
    ┌────────────────┐       │       ┌────────────────┐
    │  WESTSIDE      │───────┼───────│  CENTRAL       │
    │  ARTS          │       │       │  CITY           │
    │  DISTRICT      │       │       │                 │
    └────────────────┘       │       └────────────────┘
                             │
    ┌────────────────┐       │       ┌────────────────┐
    │  SOUTHBANK     │───────┼───────│  REDLIGHT       │
    │  RESIDENTIAL   │       │       │  QUARTER        │
    │  (HOME)        │       │       │  "Velvet Row"   │
    └────────────────┘       │       └────────────────┘
                             │
                    ┌────────┴─────────┐
                    │   LAKEWOOD       │
                    │   MALL           │
                    │   (Indoor)       │
                    └──────────────────┘
```

---

# 🏠 DISTRICT 1: SOUTHBANK RESIDENTIAL
**Description:** Working-class neighborhood. Walkable. Cheap rent, corner stores, laundromats. Where MC lives. Familiar, grounded, slightly run-down.
**Unlock:** Day 0 (always available)
**Travel from:** Walk (free, 5 min to anywhere in district)
**Vibe:** Warm but worn. Real. The kind of place where neighbors know your business.

## Locations

### 🏠 MC's Apartment   4B Meridian Court
**Unlock:** Day 0 (always available   home base)
**Sub-locations:**

| Room | Activities | Notes |
|---|---|---|
| **My Room** | Sleep, get dressed (wardrobe system), mirror check (body/stat display), self-exploration (sexual), read, use laptop/phone, masturbate, partner sleepovers | Upgradeable: mattress→bed frame (Day 15, $80), full-length mirror (Day 20, $30), bedside drawer (Day 25, $15), fairy lights (Day 30, $10), sex swing mount (Day 60+, $120) |
| **Bathroom** | Shower (basic/extended/sexual), shave/groom (legs, pubic, underarms), skincare routine, bath (if tub   apartment has a combo tub/shower), mirror (face close-up), brush teeth, do makeup, do hair | Upgradeable: shower caddy ($8), bath bombs/candles ($5-15), better mirror with lights ($25) |
| **Kitchen** | Cook meals (skill-based   starts with ramen, learns recipes), eat, make coffee, check fridge (inventory), order delivery via phone | Upgradeable: better cookware ($30), spice rack ($15), proper groceries (variable) |
| **Living Area** | Watch TV, sit on couch, answer door (deliveries, visitors, Jake), check mail | The couch is where most emotional scenes happen. Upgradeable: better couch ($120, Day 40+) |
| **Front Door** | Leave apartment, receive deliveries, let visitors in | Door buzzer system   NPCs text "I'm outside" |

### 🏪 Corner Store   "Lucky Mart"
**Unlock:** Day 0
**Owner NPC:** Luis (40s, Dominican, doesn't recognize MC post-transformation)
**Sub-locations:**

| Section | Items Available | Notes |
|---|---|---|
| **Groceries** | Ramen ($1), cereal ($3), milk ($4), eggs ($3), bread ($2), pasta ($2), sauce ($3), rice ($2), chicken ($6), vegetables ($4-8), fruit ($3-5), frozen meals ($4-6) | Cooking ingredients unlock recipe options at home |
| **Snacks & Drinks** | Candy ($1-2), chips ($3), coffee ($2), energy drinks ($3), bottled water ($1), soda ($2), beer ($6/6-pack), cheap wine ($8) | Alcohol: COR path enabler, lowers inhibition at parties |
| **Toiletries** | Shampoo/conditioner ($6), body lotion ($4), soap ($2), toothbrush ($3), razor + cream ($10), deodorant ($5), pads ($7), tampons ($5), ibuprofen ($4) | Basic grooming   women's products available |
| **Misc** | Phone charger ($10), umbrella ($8), batteries ($4), condoms ($8/box), pregnancy test ($12) | Condoms and pregnancy tests hidden behind the counter   must ask Luis |

### 🧺 Suds Laundromat
**Unlock:** Day 0
**Sub-locations:**

| Section | Activities | Notes |
|---|---|---|
| **Washers/Dryers** | Do laundry ($3.50/load), wait (30 min game-time per load) | Waiting creates NPC encounter opportunities |
| **Folding Tables** | Fold clothes, NPC conversations while waiting | |
| **Vending Machine** | Snacks, detergent pods ($2) | |

**NPC Encounters:** Sam (nonbinary graphic novelist, Day 28+), random residents, potential hookup NPCs during late-night loads

### 🏪 Second Chances   Thrift Store
**Unlock:** Day 2
**Owner NPC:** Dolores (55, Latina, warm, never asks questions)
**Sub-locations:**

| Section | Items Available | Price Range | Notes |
|---|---|---|---|
| **Women's Tops** | T-shirts, blouses, sweaters, tanks, crop tops | $4-12 | Budget basics. Low FEM/ATT boost. Rotates stock weekly |
| **Women's Bottoms** | Jeans, skirts, shorts, leggings, sweatpants | $5-15 | Good for early-game wardrobe building |
| **Dresses** | Casual dresses, sundresses, vintage finds | $8-20 | Occasional gems   Dolores holds "good ones" for regulars |
| **Outerwear** | Jackets, hoodies, cardigans, coats | $8-25 | The leather jacket ($35, Day 30+) is here |
| **Shoes** | Sneakers, flats, boots, occasional heels | $5-15 | Limited sizes   not always MC's size |
| **Accessories** | Scarves, bags, belts, jewelry (costume) | $2-8 | Dolores gifts MC a silk scarf Day 20 |
| **Men's Section** | Aiden's old world   MC walks past it | N/A | Emotional beat location |
| **Fitting Room** | Try on clothes, mirror, potential Sophie scene (Day 19) | Free | Single curtained room |
| **New Underwear Rack** | Sealed packs   panties, bras (basic), socks | $5-12 | Store policy: underwear is always new |
| **Counter/Register** | Dolores interaction, pay, chat, receive gifts | N/A | Dolores's home base |

### 🏠 Jake's Apartment   2C Cedar Heights
**Unlock:** Day 7 (after Jake sees MC)
**Sub-locations:**

| Room | Activities | Notes |
|---|---|---|
| **Living Room** | Hang out, watch movies, eat together, couch makeout, game nights | Jake's space: gym equipment in the corner, protein powder on the counter, sports posters |
| **Kitchen** | Jake "cooks" (burns things), eat together, beer | Running joke: he only makes 3 things |
| **Bedroom** | Sexual scenes (Day 36+), sleep over, morning-after scenes | His bed is a real bed with a frame (MC is jealous) |
| **Bathroom** | Shared shower scenes (Day 40+) | Small, clean-ish, smells like body wash |

### 🏘️ Mrs. Park's Office   Ground Floor, Meridian Court
**Unlock:** Day 0 (MC's building)
**Activities:** Pay rent, receive passive-aggressive notes, occasionally receive food through the door, emotional NPC beats

### 🛤️ Southbank Walking Trail
**Unlock:** Day 0
**Activities:** Jog (+FIT, +2 per session), walk (Stress -3), sit on bench (think, decompress), random NPC encounters
**NPC Encounters:** Dog walkers, joggers, couples, exhibitionists (high COR, late game), sunbathers (summer events)

### 📦 DashDrop Dispatch   Warehouse District Edge
**Unlock:** Day 0 (but MC calls in sick Days 1-4, available for shifts Day 5+)
**Sub-locations:**

| Area | Activities | Notes |
|---|---|---|
| **Dispatch Office** | Clock in, get route assignments, talk to Derek | Derek's domain   cluttered desk, coffee maker, route board |
| **Parking Lot** | Scooter storage, brief NPC interactions with other drivers | MC's scooter lives here |
| **Delivery Routes** | Active delivery gameplay   visit 3-5 addresses per shift | Each delivery is a mini-scene at the destination with NPC encounters. Random pool draws from all unlocked districts. |

---

# 🎓 DISTRICT 2: NORTHGATE UNIVERSITY QUARTER
**Description:** College neighborhood surrounding State University. Bookstores, cheap eats, student housing, campus buildings. Young, energetic, slightly pretentious.
**Unlock:** Day 5 (MC ventures to campus for deliveries) / Day 8 (MC returns to classes)
**Travel from:** Bus ($2, 15 min) or scooter (free, 10 min)
**Vibe:** Academic, social, alive with student energy. Where MC's "normal" life is supposed to happen.

## Locations

### 🏫 State University   Main Campus
**Unlock:** Day 8 (returns to classes)
**Sub-locations:**

| Building/Area | Activities | NPCs | Notes |
|---|---|---|---|
| **Lecture Halls** | Attend classes (INT +2/session), Professor Klein's English Lit, Whitfield's Sociology | Klein, Whitfield | Attending classes is an activity choice, not mandatory |
| **Library** | Study (INT +2), study with Sophie, study group sessions, quiet NPC encounters, research (laptop) | Sophie, Taylor, study group | Sophie's domain   study partner scenes here |
| **Student Center** | Eat (cafeteria, $5-8), socialize, bulletin board (job postings, events, flyers), vending machines | Random students, Kayla | Social hub   party invitations appear here |
| **Campus Quad** | Hang out, people-watch, NPC encounters (Liam guitar guy, Maya), eat outside, random events | Liam, Maya, random | The "main street" of campus life |
| **Registrar's Office** | Update records, academic admin, confirm name change | Admin NPCs | Bureaucracy scenes |
| **Women's Bathroom** | Use restroom (FEM milestone first time), mirror check, NPC encounters (gossip, bonding, crying girl) | Random female students | A space that's emotionally loaded for MC |
| **Campus Gym** | Workout (FIT +3), locker room (women's   FEM milestone), sauna, showers, weight room, cardio | Jake, Mika, Rene, Veronica, random | Full gym sub-hub   see below |
| **Sports Field** | Jog, watch games, outdoor exercise, pickup games | Random | Occasional events |

### 🏋️ Campus Gym   Sub-Hub
**Unlock:** Day 7 (Jake invites MC)
**Sub-locations:**

| Area | Activities | NPCs |
|---|---|---|
| **Weight Room** | Lift (FIT +2), get spotted by Jake, NPC encounters | Jake, gym bros |
| **Cardio Zone** | Treadmill, elliptical, bike (FIT +2, Stress -3) | Mika, random |
| **Yoga/Stretch Area** | Stretch, yoga flow, flexibility (FIT +1, FEM +1) | Sage (if visiting from her studio) |
| **Women's Locker Room** | Change clothes, shower, use restroom (FEM milestone), NPC encounters | Mika, Veronica, random women |
| **Sauna** | Relax (Stress -5), towel-only nudity, NPC encounters, sexual potential | Veronica (hookup chain) |
| **Pool** | Swim laps (FIT +3), bikini scene, lifeguard Casey NPC | Casey |
| **Smoothie Bar** | Post-workout drinks ($5), Jake hangout spot | Jake |

### ☕ Grounded Coffee House
**Unlock:** Day 5
**Owner NPC:** River Chen (barista, main romance)
**Sub-locations:**

| Area | Activities | NPCs |
|---|---|---|
| **Counter** | Order coffee ($4-6), chat with River, customize drink | River, other baristas |
| **Window Booth** | Study, read, people-watch, date spot | Sophie (study sessions), dates |
| **Back Corner** | Quiet zone, laptop use, erotica reading, phone activity | Writer NPCs |
| **Outside Patio** | Sit, smoke (NPC), seasonal events, overheard conversations | Random |

### 🍕 Campus Strip   Food Row
**Unlock:** Day 5
**Sub-locations:**

| Venue | Type | Price | Notes |
|---|---|---|---|
| **Noodle House** | Cheap Asian food | $6-10 | Budget meal option, always open late |
| **Burger Palace** | Fast food | $5-8 | Where MC delivers FROM as Aiden |
| **Thai Garden** | Thai restaurant | $10-15 | Mrs. Calloway's Pad Thai comes from here |
| **Pizza Junction** | Pizza | $8-15 | Delivery and dine-in |
| **Boba Tea Stand** | Drinks + snacks | $4-7 | Social hangout, study group meets here |

### 📚 Campus Bookstore
**Unlock:** Day 8
**Activities:** Buy textbooks ($40-80, saves money if Sophie shares), stationery, campus merch, browse fiction, erotica section (COR +1 if browsing)

### 🏠 Student Housing Area
**Unlock:** Day 10 (party invitations)
**Activities:** Visit NPC apartments for parties, hangouts, hookups
**Key locations:** Marco's house (party house), Kevin's dorm, student apartment complexes
**NPC Encounters:** Party-specific NPCs (Benny, Kayla, Megan, random hookups)

### 🧘 Sunrise Yoga Studio
**Unlock:** Day 5 (Sage gives MC a flyer)
**Owner NPC:** Sage (yoga instructor, potential sexual NPC)
**Sub-locations:**

| Area | Activities | Notes |
|---|---|---|
| **Main Studio** | Group yoga class (FIT +2, FEM +2, Stress -5)   $12/class or $40/month | Weekly schedule   mornings |
| **Private Room** | 1-on-1 with Sage ($40/session)   escalates to tantric | Requires Sage affinity 10+ |
| **Changing Room** | Change into yoga wear, mirror, NPC encounters | |
| **Reception** | Sign up, schedule, chat with Sage | Class schedules, event flyers |

---

# 🏙️ DISTRICT 3: CENTRAL CITY
**Description:** Downtown core. Glass towers, commerce, nightlife, professional spaces. Where the money is. Where NovaCure hides. Where MC goes to become someone new.
**Unlock:** Day 0 (NovaCure visit) / Day 5+ (general exploration)
**Travel from:** Bus ($2, 20 min) or rideshare ($8-12, 10 min)
**Vibe:** Polished, imposing, both aspirational and predatory. The city has teeth here.

## Locations

### 🏢 Meridian Tower
**Unlock:** Day 0 (NovaCure visit)
**Sub-locations:**

| Floor | Venue | Activities | Notes |
|---|---|---|---|
| **Ground Floor** | Lobby, elevator, security desk | Enter building, check in | The glass-and-steel entrance MC walks through repeatedly |
| **Floor 6   NovaCure Labs** | Suite 604   waiting room, exam rooms, Dr. Amelia's office | Monthly check-ins, blood work, exams, Phase 2 discussions, confrontations, the reveal | The clinical heart of MC's origin story |
| **Floor 10   NovaCure Executive** | Conference rooms, server room (Day 75+ heist path) | INT path investigation, data destruction | Only accessible via specific quest paths |

**NPC Encounters:** Dr. Amelia, Nurse Patel, NovaCure receptionist, other test subjects (Day 72+   unnamed woman in waiting room)

### 🌳 Central Park   Meridian Gardens
**Unlock:** Day 0 (walkthrough location)
**Sub-locations:**

| Area | Activities | NPCs |
|---|---|---|
| **Main Path** | Walk (Stress -3), jog (FIT +2), people-watch | Random   dog walkers, couples, families |
| **Benches** | Sit and think, phone activity, NPC conversations | Elena (novelist, Day 17+), random |
| **Fountain Plaza** | Meet-up spot for dates, social gatherings | Date NPCs |
| **Secluded Trail** | Private area   make-out spot, outdoor sex (COR 30+, Night) | Partner scenes, exhibitionism |
| **Duck Pond** | Peaceful. Feed ducks. Existential contemplation. | MC goes here when she needs to not be a person for 20 minutes |
| **Playground** | Watch kids play. Maternal stat trigger if pregnant. Bittersweet. | Pregnant women NPCs (if MC is pregnant   solidarity) |

### 🍸 Nocturne Bar & Lounge
**Unlock:** Day 5 (sees Help Wanted sign) / Day 11 (interview with Vanessa) / Day 13 (first shift)
**Owner NPC:** Vanessa Cross
**Sub-locations:**

| Area | Activities | NPCs |
|---|---|---|
| **Main Floor** | Work shifts (waitress/hostess), serve tables, earn tips ($100-280/shift), socialize | Luna, regulars (Paul), customers |
| **Bar** | Order drinks ($8-15) when off-duty, chat with Luna, watch the room | Luna, bar NPCs |
| **VIP Room** | VIP table service (assigned by Vanessa), high-tip clients, Diana encounters | Diana (sugar-mommy), businessmen, wealthy clientele |
| **Vanessa's Office** | Private meetings with Vanessa, post-shift conversations, the stockings scene, the kiss, the power dynamic | Vanessa |
| **Staff Room** | Change into uniform, Luna's crash course, coworker bonding, mirror | Luna, other waitresses |
| **Back Hallway** | Storage, quiet moments, staff hookup spot (COR 30+) | Coworker NPCs |
| **Upstairs Apartment** | Available for rent (Vanessa offers Day 35+)   reduced rent, proximity to work/Vanessa | Vanessa (if MC moves in as a stepping stone before the penthouse) |
| **Restrooms** | Customer encounters, cleaning up, emotional resets, mirror | Random |

### 🏢 Vanessa's Penthouse   The Crown Building
**Unlock:** Day 52 (first invitation) or Day 68 (contract / move-in)
**Sub-locations:**

| Room | Activities | Notes |
|---|---|---|
| **Living Room** | Wine, conversation, city views, emotional Vanessa scenes | Floor-to-ceiling windows, minimalist luxury |
| **Kitchen** | Vanessa cooks (surprisingly well), morning-after breakfast | Open plan, marble counters |
| **Bedroom** | Sexual scenes, sleeping over, waking up in silk sheets | King bed, walk-in closet |
| **Bathroom** | Luxury bath (jacuzzi tub), dual sinks, mirror, grooming | Heated floors, rainfall shower |
| **Balcony** | Night conversations, wine, city skyline, emotional climax scenes | The most romantic/dramatic location in the game |
| **Walk-in Closet** | Vanessa's wardrobe + clothes she buys for MC | If MC moves in: her wardrobe merges here |
| **Play Room** | BDSM equipment (if Vanessa route progresses): restraint bed, toy cabinet, mirror wall | Locked room   Vanessa reveals it on her terms |

### 🍽️ Restaurant Row   Downtown Dining
**Unlock:** Day 10+
**Sub-locations:**

| Venue | Type | Price | Date NPC | Notes |
|---|---|---|---|---|
| **Rosario's** | Italian | $15-30 | Chris | Chris's go-to date spot |
| **Sakura** | Japanese/Sushi | $12-25 | Various | Sushi body scene location (Day 80+) |
| **The Brass Fox** | Gastropub | $12-20 | Jake (special occasion) | Jake's "nice dinner" place (he googled it) |
| **Bloom Café** | Brunch/Café | $8-15 | Jade | Jade's first date spot |
| **Pho Street** | Vietnamese | $8-12 | River | River's favorite   cheap, authentic, no pretension |
| **Le Petit** | French fine dining | $40-80 | Diana, Vanessa | Luxury   Diana's world, Vanessa's territory |

### 🏦 Business District
**Unlock:** Day 30+ (as MC's world expands)
**Sub-locations:**

| Venue | Activities | Notes |
|---|---|---|
| **Banks/ATM** | Withdraw cash, check balance, loan office | Loan officer NPC   face of financial pressure |
| **Photography Studio** | Jerome's studio   modeling shoots | Jerome (photographer NPC, Day 35+) |
| **Temp Agency** | Job listings, apply for work | Alternative income paths |
| **Law Office** | Lauren Park meets MC here (Go Public path) | Day 59+ journalist arc |
| **Rideshare Pickup** | Wait for rides, NPC driver encounters | Random driver NPCs |

### 🎭 Central Theater & Arts Center
**Unlock:** Day 25+
**Activities:** See shows ($15-30), art exhibitions, cultural events, date activity
**NPC Encounters:** Elena (novelist), art crowd, intellectual NPCs, Sophie (if art event)

---

# 🛍️ DISTRICT 4: LAKEWOOD MALL
**Description:** The mega-mall. Three floors, indoor, climate-controlled, everything-under-one-roof consumerism. Where MC transforms through purchasing power. Where every woman becomes a different version of herself under fluorescent lights.
**Unlock:** Day 3 (can visit) / Day 12 (Sophie takes MC for real shopping)
**Travel from:** Bus ($2, 25 min) or rideshare ($10, 12 min)
**Vibe:** Bright, overwhelming, aspirational. The temple of femininity's material expression.

## FLOOR 1: FASHION & BASICS

| Venue | Type | Items | Price Range | Key NPC | Unlock |
|---|---|---|---|---|---|
| **H&Mode** | Fast fashion | Tops, bottoms, dresses, basics, activewear, swimwear | $8-35 | Sales associates | Day 3 |
| **DenimBar** | Jeans specialist | Skinny, straight, wide-leg, high-rise, mom, shorts | $20-50 | Fitting room attendant | Day 3 |
| **Stride** | Shoe store | Sneakers, flats, boots, heels (low/mid/high), sandals, slippers | $15-60 | Shoe fitter | Day 3 |
| **Lace & Whisper** | Lingerie | Bras (all types), panties, bodysuits, teddies, corsets, garter sets, robes, sleepwear | $8-65 | Carmen (fitting specialist) | Day 3 |
| **SockBox** | Hosiery & socks | Stockings, tights, thigh-highs, ankle socks, knee-highs, sheer, opaque | $3-15 | | Day 3 |
| **ValueBasics** | Budget essentials | Multi-packs (underwear, bras, tees, socks), basics in bulk | $5-20 | | Day 3 |

## FLOOR 2: BEAUTY, WELLNESS & LIFESTYLE

| Venue | Type | Items/Services | Price Range | Key NPC | Unlock |
|---|---|---|---|---|---|
| **Glow Counter** | Makeup | Foundation, concealer, powder, eyeshadow palettes, liner, mascara, lipstick, lip gloss, brushes, setting spray, contour kits, highlighter | $5-45 | Kim (makeup artist) | Day 3 |
| **Studio 7 Salon** | Hair salon | Cut ($30-50), color ($50-100), highlights ($60-120), blowout ($25), extensions ($150+), treatments ($30-60) | $25-200 | Priya (stylist) | Day 3 |
| **Skin Lab** | Skincare | Cleanser, toner, serum, moisturizer, SPF, masks, eye cream, exfoliant, acne treatment | $8-40 | Skincare consultant | Day 10 |
| **Nail Garden** | Nail salon | Manicure ($15-25), pedicure ($20-30), gel ($30-45), acrylics ($40-60), nail art ($10+ add-on) | $15-70 | Nail tech NPC | Day 10 |
| **Scent Bar** | Perfume | Fragrance testing, sample sizes ($5-15), full bottles ($20-80), layering sets | $5-80 | | Day 10 |
| **Fresh Pharmacy** | Pharmacy/Health | Birth control refills, pregnancy tests, menstrual products, supplements, OTC meds, first aid, condoms | $4-30 | Rosa (kind pharmacist, Day 19) | Day 3 |
| **Wax & Glow** | Waxing salon | Bikini ($25), Brazilian ($45), legs ($35-50), underarms ($15), full body ($120+) | $15-150 | Waxing technician | Day 15 |
| **Specs & Shades** | Eyewear | Sunglasses ($15-40), blue-light glasses ($20) | $15-40 | | Day 3 |

## FLOOR 3: ENTERTAINMENT, FOOD & TECH

| Venue | Type | Items/Services | Price Range | Key NPC | Unlock |
|---|---|---|---|---|---|
| **Food Court** | Dining | 8 food stalls   sushi, burgers, salads, boba, pizza, Chinese, smoothies, wraps | $5-12 | Random NPCs, Sophie (mall trips) | Day 3 |
| **Boba Bliss** | Bubble tea | Drinks, snacks, cute seating area, social spot | $4-7 | | Day 3 |
| **TechZone** | Electronics | Phone cases ($10-30), chargers ($15), earbuds ($20-50), ring light ($25), webcam ($35-60), laptop accessories | $10-200 | Tech sales NPC | Day 3 |
| **BookNook** | Bookstore | Fiction, nonfiction, textbooks, erotica section (COR browse), manga, journals | $8-25 | | Day 3 |
| **GameVault** | Games/Entertainment | Board games, card games, party games, sex games (card-based, 18+ section) | $10-35 | | Day 10 |
| **CinePlex** | Movie theater | Watch movies ($12), date activity, dark theater groping scenes | $12 | Date NPCs | Day 10 |
| **GymFlex** | Sportswear | Sports bras, leggings, yoga pants, workout tops, running shoes, swimsuits | $15-50 | | Day 7 |
| **PetStop** | Pet store | Browse (cute animals, stress relief), potential future pet purchase | Free to browse | | Day 3 |

## MALL COMMON AREAS

| Area | Activities | Notes |
|---|---|---|
| **Main Atrium** | People-watch, sit on benches, meet friends, arrival/departure point | Three-story open space with glass ceiling |
| **Restrooms** | Mirror check, outfit adjustment, NPC encounters, breathing room | Women's bathroom   first use is a FEM milestone |
| **Fitting Rooms** | Try on clothes from ANY Floor 1 store. Mirror scenes. Sophie fitting room scene (Day 19). Potential stranger encounters | Shared fitting area for multiple stores |
| **Escalators** | Transition between floors, brief NPC encounters, accidental eye contact with attractive strangers | |
| **Customer Service** | Returns, gift cards, lost & found | Rarely visited but exists for completeness |
| **Parking Garage** | If MC gets a car (Day 50+): car scenes, Jake parking garage makeout (Day 34), private space | Semi-public   car sex location |

---

# 🎨 DISTRICT 5: WESTSIDE ARTS DISTRICT
**Description:** Bohemian, creative, slightly rough. Tattoo parlors, galleries, live music venues, indie shops. Where artists and misfits live. Marcus's territory. River's vibe.
**Unlock:** Day 5 (MC rides through on deliveries) / Day 9 (enters Marcus's shop)
**Travel from:** Bus ($2, 15 min) or scooter (free, 12 min)
**Vibe:** Edgy, authentic, creative. Smells like espresso and ink. Every surface has a mural or a sticker.

## Locations

### 🎨 Black Line Studio   Tattoo & Piercing
**Unlock:** Day 6 (visible) / Day 9 (enterable)
**Owner NPC:** Marcus Delaney
**Sub-locations:**

| Area | Activities | NPCs | Notes |
|---|---|---|---|
| **Main Floor** | Browse flash art, watch Marcus work, get consultation | Marcus, clients | The smell of ink and sandalwood |
| **Tattoo Chair** | Get tattooed (chrysalis Day 28, butterfly Day 78, custom designs) | Marcus | Each tattoo is a 30-60 min scene with intimate proximity |
| **Piercing Station** | Ear piercings ($20-30), nose ($25), navel ($35), nipple ($40/pair), clit hood ($50   Day 60+, COR 40+) | Piercer NPC (not Marcus   separate specialist) | Each piercing is a body modification milestone |
| **Back Room** | Marcus's private space   after-hours encounters, the kiss, the first BDSM scene | Marcus | Padded bench, soft lighting, the space between professional and personal |
| **Portfolio Wall** | Marcus's best work   including his secret sketchbook of MC (Day 85 reveal) | | Visual storytelling through displayed art |

### 🎵 The Basement   Live Music Venue
**Unlock:** Day 24 (River's gig)
**Sub-locations:**

| Area | Activities | NPCs |
|---|---|---|
| **Stage** | Watch performances, River's band plays, open mic nights | River, Pete (guitarist), Jamie (bassist, NB) |
| **Bar** | Drinks ($6-10), post-show socializing, NPC encounters | Bartender NPC, random music fans |
| **Back Room** | Band hangout, River's gear storage, intimate post-gig conversations | River, band members |
| **Upstairs Balcony** | Watch from above, quieter conversation spot, makeout location | Date NPCs |

### 🖼️ Prism Gallery
**Unlock:** Day 15+
**Activities:** Art exhibitions, Sophie's art show (Day 85), cultural events, intellectual NPC encounters, date activity
**NPC Encounters:** Elena (novelist), Sophie (at art events), art crowd

### 🎸 Vinyl Revival   Record Store
**Unlock:** Day 10
**Activities:** Browse music ($10-25), discover new artists, River takes MC here (Day 38 date), date activity, NPC conversations about music
**NPC Encounters:** Music nerd NPCs, River (date location)

### 🍳 The Griddle   Diner
**Unlock:** Day 5
**Activities:** Cheap food ($6-12), coffee ($3), late-night meals, NPC encounters, Jake dinner spot
**Vibe:** 24-hour diner with cracked vinyl booths and a jukebox nobody uses

### 📸 Snap Studio   Photography
**Unlock:** Day 35+ (Dom's connection)
**Activities:** Portfolio shoots (modeling), boudoir photography ($80-150), headshots ($40), lingerie editorial
**NPC Encounters:** Jerome (photographer), Dom (music producer who connected MC)

### 🏠 River's Apartment   3A Vine Street
**Unlock:** Day 24 (post-gig invite)
**Sub-locations:**

| Room | Activities | Notes |
|---|---|---|
| **Living Room** | Hang out, guitar sessions, the blanket fort (permanent after Day 47), movie nights | Cozy, cluttered with music gear and books |
| **Rooftop Access** | Star-gazing, conversations, first kiss location, emotional scenes | The most intimate outdoor space |
| **Bedroom** | Sexual scenes, sleepovers, binder-off intimate moments | Small, warm, fairy lights |
| **Kitchen** | River cooks (well   his mom taught him), post-sex snacks | Taiwanese comfort food |

### 🎭 Fringe Theater
**Unlock:** Day 30+
**Activities:** Indie plays ($10-15), experimental performances, date activity, audition for a role (INT/CON 40+)
**NPC Encounters:** Theater crowd, potential NPC chains

### 🧶 Odd Threads   Vintage/Alternative Fashion
**Unlock:** Day 15
**Activities:** Alternative fashion   band tees, vintage denim, leather, boots, unique pieces, accessories
**Price range:** $10-50
**Vibe:** Where the leather jacket lives. Where MC's "edgy" wardrobe options come from. Not thrift-store budget, not mall-mainstream. The middle ground of personal style.

---

# 🔴 DISTRICT 6: VELVET ROW   THE RED-LIGHT QUARTER
**Description:** The adult entertainment district. Legal, regulated, but raw. Neon-lit. Unapologetic. Where desire is a commodity and shame is left at the door. MC doesn't wander here accidentally   she's drawn by curiosity, need, or someone else's invitation.
**Unlock:** Day 20 (Pulse nightclub   first nightlife location) / Day 30+ (deeper locations)
**Travel from:** Rideshare ($10, 15 min) or Night bus ($2, 25 min   only runs after 9 PM)
**Vibe:** Neon, dark, electric. The air smells like smoke and perfume and adrenaline. Everything here is a transaction   but not all transactions involve money.

## Locations

### 🎵 Pulse Nightclub
**Unlock:** Day 20 (Luna takes MC)
**Sub-locations:**

| Area | Activities | NPCs |
|---|---|---|
| **Dance Floor** | Dance (FEM +2, Stress -5), grind with strangers, NPC encounters | Dance Floor Guy, random attractive strangers |
| **Main Bar** | Order drinks ($8-15), flirt with bartender, socialize | Cute Bartender Girl, random |
| **VIP Section** | Bottle service ($100+), wealthy NPC encounters, group invitations | VIP Group NPCs |
| **DJ Booth** | Meet the DJ, exclusive access (social climbing) | DJ NPC |
| **Bathroom** | Mirror, freshening up, glory hole (stall 2), crying girl encounters, hookup location | Anonymous (glory hole), Megan-type NPCs |
| **Back Alley/Smoking Area** | Smoke, cool off, intimate conversations, makeout spot, dealer NPC (substance path) | Substance NPC (COR path), random |
| **Rooftop Terrace** | VIP outdoor area (Day 40+, high ATT/COR required), cocktails, city views, exclusive hookup | Wealthy NPCs |

### 💃 Silk   Gentleman's & Ladies' Club
**Unlock:** Day 30 (as patron) / Day 62 (as dancer, COR 40+)
**Sub-locations:**

| Area | Activities | NPCs |
|---|---|---|
| **Main Stage** | Watch strip performances (male or female nights), tip dancers | Amber (female dancer), male dancers |
| **Lap Dance Booths** | Receive a lap dance ($20-50), private one-on-one, touching negotiation | Amber, other dancers |
| **VIP Champagne Room** | Private performances ($100-500), extended contact, sexual potential (COR 50+) | High-end clients, dancers |
| **Backstage/Dressing Room** | If MC is a dancer: get ready, peer interactions, mentor Amber, pre-show nerves | Amber, other dancers |
| **The Pole** | If MC dances: stage performance, crowd reaction, tips, FIT/ATT check | Audience NPCs |
| **Manager's Office** | Apply for work, discuss terms, schedule | Club manager NPC |
| **Private Rooms** | Extended client sessions (COR 50+)   negotiated services | Client NPCs |

### 🔗 The Foundry   BDSM Club & Community Space
**Unlock:** Day 68 (Marcus takes MC) or Day 50 (if MC discovers independently via Vanessa/online)
**Sub-locations:**

| Area | Activities | NPCs |
|---|---|---|
| **Social Lounge** | Bar, seating, socializing, mingling in the community. Clothed. Casual. | Mistress Kay, community members |
| **Main Play Space** | Observe or participate in scenes: bondage, impact, wax, rope, D/s dynamics, pet play | Community members, couples, professional dommes/doms |
| **St. Andrew's Cross** | Public play: MC can be restrained here by Marcus or others. Exhibitionist scenes. | Marcus, audience |
| **Shibari Rig** | Rope suspension   Marcus's specialty. Public or private. | Marcus |
| **Private Rooms** | Bookable spaces ($30-50/hr) for individual scenes   soundproofed, equipped | Any partner |
| **Dungeon Equipment** | Stocks, spanking bench, cage, breeding bench, suspension frame | Various   player explores |
| **Aftercare Corner** | Blankets, water, snacks, comfortable couches, quiet recovery | Community mentors |
| **Education Room** | Workshops: rope basics, consent communication, impact negotiation, dom/sub dynamics | Mistress Kay, guest educators |
| **Locker Room** | Change into fetish wear, store street clothes | |

### 🌙 Crimson Alley   Street Scene
**Unlock:** Day 35+ (Night only)
**Description:** The walking strip of Velvet Row. Neon signs, bars, adult shops, peep shows, sex workers, and the electric hum of a city's id on display.
**Sub-locations:**

| Venue | Activities | Notes |
|---|---|---|
| **Neon Bar Row** | Bar-hopping (3-4 dive bars, each with unique vibe and NPCs), drinks ($5-10), hookup opportunities | Each bar has a flavor: leather bar, dance bar, cocktail lounge, dive |
| **Peep Show Arcade** | Watch solo performances through glass ($5/booth), voyeurism stat | Anonymous, COR +3 per visit |
| **Adult Cinema** | Watch adult films ($8), dark theater encounters (sit next to someone, hands wander) | Anonymous, COR +5 |
| **Street Encounters** | Solicitation (MC can be approached   accept or decline), people-watching, the reality of sex work | Sex worker NPCs   humanized, not caricatured |
| **The Cage** | Underground fighting/wrestling venue. Mud wrestling, oil wrestling. MC can watch or participate (FIT 40+). Bets. | Rene (gym NPC) moonlights as ref |

### 🏪 Velvet   Premium Sex Shop
**Unlock:** Day 32 (first visit, COR 20+)   previously in Westside, MOVED to Velvet Row for thematic consistency
**Owner NPC:** Felix (30, nonbinary, warm, knowledgeable)
**Sub-locations:**

| Section | Items | Price Range | Notes |
|---|---|---|---|
| **Vibrators** | Bullet ($16), rabbit ($45), wand ($35), clit suction ($40), G-spot curved ($30), remote panties ($35), app-controlled ($50) | $16-50 | Felix guides beginners |
| **Dildos** | Realistic (various sizes $15-40), fantasy (curved, textured, $20-45), glass ($30-50), double-ended ($35) | $15-50 | Size progression available |
| **Anal** | Plugs (S/M/L $10-25), beads ($15-20), prostate toys ($25), trainer kits ($30) | $10-30 | Graduated sizing |
| **BDSM Gear** | Blindfolds ($8-15), restraints ($12-30), cuffs ($15-25), rope/shibari set ($20-40), collars ($15-50), leashes ($10-20), gags ($15-30), crops ($12-20), paddles ($15-25), floggers ($20-40), whips ($25-50), nipple clamps ($10-20), spreader bar ($35), electrostim ($40-60) | $8-60 | Organized by intensity level |
| **Lingerie & Fetish Wear** | Latex pieces ($30-80), leather harnesses ($25-50), body chains ($15-30), crotchless panties ($15-25), open-cup bras ($20-35), full latex catsuit ($120+), maid outfit ($35), nurse outfit ($30), schoolgirl set ($25) | $15-150 | Costumes, fetish wear, role-play outfits |
| **Lubes & Enhancement** | Water-based ($12), silicone ($15), flavored ($10), warming ($12), tingling/arousal gel ($15), CBD lube ($20), desensitizing ($10) | $10-20 | Felix's religion: "Lube is not optional" |
| **Couple's Toys** | We-Vibe type ($50-80), cock rings ($10-20), strap-on harness + dildo ($35-60), double-ended dildo ($35), sex furniture inflatable ($40-80) | $10-80 | |
| **Books & Media** | Erotica, sex guides, BDSM education, anatomy books, kink workbooks, yes/no/maybe list pads | $8-25 | Educational + arousing |
| **Demonstration Area** | Felix does product demos on request (non-sexual, using display models). Group classes monthly. | Free | "Toy 101" class available |

### 🌃 Motel & Short-Stay
**Unlock:** Day 15+ (when MC needs a discreet location)
**Activities:** Rent a room ($40-80/night), hookup location for dating app NPCs, anonymous encounters, affair location
**NPC Encounters:** Motel clerk (seen-it-all attitude), various hookup partners

### 🔮 Madame Lux   Fortune Teller / Occult Shop
**Unlock:** Day 25+
**Activities:** Tarot reading ($15, reveals stat insights), crystal shopping, candles (body-safe wax play candles here!), incense, occult books, "love potions" (flavored body oils)
**Vibe:** The one weird magical shop on the strip. Adds flavor and a breather from the sexual intensity of the district.

---

# 🏥 DISTRICT 7: MEDICAL & SERVICES CORRIDOR
**Description:** Not a "district" in the fun sense   this is where practical life happens. Clinics, offices, services. MC comes here for health, not adventure. But some adventures happen anyway.
**Unlock:** Day 14 (first clinic visit)
**Travel from:** Bus ($2) from any district
**Vibe:** Clinical, practical, necessary. The fluorescent-lit backbone of adult life.

## Locations

### 🏥 Southside Women's Health Clinic
**Unlock:** Day 14
**Doctor NPC:** Dr. Lin
**Sub-locations:**

| Area | Activities | Notes |
|---|---|---|
| **Waiting Room** | Wait, NPC encounters, anxiety, magazine reading | Other patients   bonding, commiseration |
| **Exam Room** | Pelvic exams, breast exams, Pap smears, birth control consult, STI testing, pregnancy tests/ultrasounds | Dr. Lin   thorough, kind, professional |
| **Lab** | Blood work, results pickup | Nurse NPCs |
| **Pharmacy Window** | Fill prescriptions (BC pills, prenatal vitamins if pregnant) | |

### 🏢 Government Services Building
**Unlock:** Day 1 (NovaCure handles initially, but MC may need to visit independently)
**Activities:** DMV (update ID photo), Social Security office (name/gender marker), legal name change filing ($150)
**Vibe:** Soul-crushing bureaucracy. But necessary for identity consolidation.

### 🦷 Other Services (Background   Available When Needed)
- **Dentist**   checkup ($50), teeth whitening ($120, ATT +2)
- **Optometrist**   if MC needs glasses/contacts (optional cosmetic)
- **Therapist**   available Day 30+ ($80/session, or free campus counseling). Reduces Stress -10, provides emotional processing scenes. Not played for laughs   genuine mental health support.

---

## TRANSIT SYSTEM

### How MC Gets Around

| Method | Cost | Speed | Unlock | Notes |
|---|---|---|---|---|
| **Walking** | Free | Slow (within district only) | Day 0 | Default for Southbank. NPC encounters during walks. |
| **Electric Scooter** | Free (owned) | Medium | Day 0 | Can reach adjacent districts. Breaks down occasionally ($50-200 repair). |
| **City Bus** | $2/ride | Medium-slow | Day 0 | Reaches all districts. NPC encounters on bus. Night bus for Velvet Row. |
| **Bus Pass** | $40/month | Unlimited rides | Day 10+ | Cost-effective if traveling daily |
| **Rideshare App** | $8-15/ride | Fast | Day 5+ (app downloaded) | NPC driver encounters. Some drivers flirty. One hookup chain available. |
| **Bicycle** | $60 one-time | Medium-fast | Day 15+ (purchase) | FIT +1 per trip. Can reach all districts. |
| **Used Car** | $1,500 | Fast | Day 50+ (if finances allow) | Unlocks car sex scenes, road trips, new distant locations. Insurance $80/month. |
| **Jake's Car** | Free (if with Jake) | Fast | Day 7+ | Jake drives MC   creates car conversation/makeout scenes |
| **Vanessa's Driver** | Free (if with Vanessa) | Fast, luxury | Day 52+ | Black car. Driver doesn't ask questions. |

### Transit Events
Random events that fire while traveling between districts:

| Event | Trigger | Effect |
|---|---|---|
| **Catcall** | Random, walking/bus, Day 2+ | Stress +3-5, FEM +1. Various NPC types. |
| **Bus Creep** | Random, bus, Day 5+ | Man sits too close / stares. Options: confront (CON+), move seats, ignore. |
| **Helpful Stranger** | Random, any transit | Someone gives directions, holds door, offers seat. Warmth in the city. |
| **Old Acquaintance** | Random, Day 15+, campus area | Someone from Aiden's life   may or may not recognize MC. |
| **Rain** | Random weather event | MC gets caught in rain. Ducking into a shop/café creates impromptu NPC encounter. |
| **Flat Tire/Scooter Breakdown** | Random, scooter, Day 10+ | $50-200 repair. Stranded   rideshare or walk. Time lost. |
| **Attractive Stranger** | Random, any | Eye contact with someone beautiful. No interaction required. Arousal +3. A city moment. |
| **Street Performer** | Random, Westside/Central | Music, art, performance. Stress -2. Liam may appear. |

---

## LOCATION UNLOCK PROGRESSION

### By Day (Approximate)

| Day | New Locations Accessible | Trigger |
|---|---|---|
| 0 | MC's Apartment, Corner Store, Walking Trail, DashDrop (but calling in sick), Meridian Tower (NovaCure one-time), Park | Game start |
| 2 | Second Chances (thrift store), Laundromat | MC needs clothes |
| 3 | Lakewood Mall (basic access   Floors 1-3) | Can visit but overwhelming at first |
| 5 | Grounded Coffee, Northgate area (delivery), Yoga Studio (flyer), Black Line Studio (visible) | MC goes back to work |
| 7 | Campus Gym, Jake's Apartment | Jake invites MC |
| 8 | State University (classes), Campus Strip | MC returns to school |
| 9 | Black Line Studio (enterable), Vinyl Revival | MC explores Westside |
| 10 | Mall beauty floor fully accessible, Student Housing area, Restaurant Row begins | Social expansion |
| 15 | Odd Threads, Wax & Glow, Nail Garden, Prism Gallery | Style evolution |
| 20 | Pulse Nightclub, Motel | Luna takes MC out. Nightlife begins. |
| 24 | The Basement (live music), River's Apartment | River's gig |
| 25 | Madame Lux, Central Theater | Cultural expansion |
| 30 | Silk (as patron), Crimson Alley, Peep Show | Velvet Row opens. COR gated. |
| 32 | Velvet (sex shop) | COR 20+ |
| 35 | Snap Studio (photography), Nocturne upstairs apartment | Career expansion |
| 40 | Adult Cinema, The Cage | Deeper Velvet Row |
| 50 | The Foundry (BDSM club)   can also unlock Day 68 via Marcus | COR 35+ or Marcus route |
| 52 | Vanessa's Penthouse | Vanessa invitation |
| 60 | All locations accessible   stat gates remain but all districts open | Full open world |
| 68 | The Foundry (if not yet via COR) | Marcus route |
| 75 | NovaCure Executive Floor | Quest path only |

---

## LOCATION CARD DESIGN SPEC

Each location in the hub renders as a card:

```
┌─────────────────────────────────┐
│ 🏪                              │
│ Second Chances                  │
│ Thrift store. Cheap clothes.    │
│                                 │
│ ⚡ 15    💰 $5-35              │
│                                 │
│         [ Go ]                  │
│                            ★    │  ← quest marker if active objective
└─────────────────────────────────┘
```

**Locked version:**
```
┌─────────────────────────────────┐
│ 🔒                              │
│ ???                             │
│ Unlocks Day 20                  │
│                                 │
│                                 │
│      [ Locked ]                 │
│                                 │
└─────────────────────────────────┘  ← greyed out, no hover effect
```

**Stat-gated version:**
```
┌─────────────────────────────────┐
│ 🔗                              │
│ The Foundry                     │
│ BDSM community space            │
│                                 │
│ Requires: COR 35+              │
│ Your COR: 28                   │
│                                 │
│      [ Locked ]                 │
│                                 │
└─────────────────────────────────┘  ← visible but locked, shows requirement
```

---

## DISTRICT HUB DESIGN

The World Map is the top-level hub. It shows district cards, not individual locations:

```
┌────────────┐ ┌────────────┐ ┌────────────┐
│ 🏠         │ │ 🎓         │ │ 🏙️         │
│ SOUTHBANK  │ │ NORTHGATE  │ │ CENTRAL    │
│ Home &     │ │ University │ │ CITY       │
│ Neighbors  │ │ Quarter    │ │            │
│            │ │            │ │            │
│  [Go]      │ │  [Go]      │ │  [Go]      │
└────────────┘ └────────────┘ └────────────┘
┌────────────┐ ┌────────────┐ ┌────────────┐
│ 🛍️         │ │ 🎨         │ │ 🔴         │
│ LAKEWOOD   │ │ WESTSIDE   │ │ VELVET     │
│ MALL       │ │ ARTS       │ │ ROW        │
│            │ │ DISTRICT   │ │            │
│  [Go]      │ │  [Go]      │ │ 🔒 Day 20  │
└────────────┘ └────────────┘ └────────────┘
              ┌────────────┐
              │ 🏥         │
              │ MEDICAL    │
              │ CORRIDOR   │
              │  [Go]      │
              └────────────┘
```

Clicking a district → shows that district's locations as a sub-grid.
Clicking a location → enters the venue.
Each venue → shows available actions/sub-locations.

**Three levels of navigation:**
1. World Map (districts)
2. District Map (locations within district)
3. Venue (actions within location)

"Back" button at every level returns to the previous tier.

---

## TOTAL LOCATION COUNT

| District | Locations | Sub-venues | Approximate Actions |
|---|---|---|---|
| Southbank Residential | 7 | 22 | 45+ |
| Northgate University | 8 | 28 | 55+ |
| Central City | 8 | 35 | 60+ |
| Lakewood Mall | 20 | 25 | 80+ |
| Westside Arts | 9 | 20 | 40+ |
| Velvet Row | 8 | 30 | 65+ |
| Medical Corridor | 4 | 8 | 15+ |
| **TOTAL** | **64** | **168** | **360+** |

---

*This document is the definitive location bible for SOFT_RESET. Every district, location, sub-venue, and action is mapped with unlock conditions, NPC assignments, price ranges, and thematic descriptions. Hand this to the code agent alongside the Day Content files and Hub Architecture prompt.*
