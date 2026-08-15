# REBORN — Day 2 Supplementary Content
## NPC Scenes, Random Encounters, Shop Interactions, Phone Calls
### ~5,000 words of additional location-based content for Day 2

---

## HOW THIS DOCUMENT WORKS

This content supplements `REBORN_Day2_Content_FirstPerson.md`. The main file contains the **core story scenes** (wake up, thrift store/Dolores, catcall, trying on clothes, evening). This file contains **everything else that can happen on Day 2** — the ambient world, the random encounters, the shop conversations, the phone notifications that make the day feel alive and open.

Each scene is tagged with:
- **LOCATION:** Where it triggers
- **TRIGGER:** What condition makes it appear
- **TYPE:** Random (pool draw), Guaranteed (always happens), Conditional (flag-based)
- **PASSAGE:** Where to place it in the code

---

# 📱 PHONE EVENTS — DAY 2

**PASSAGE:** `passages/systems/phone.twee` → Day 2 phone content
**TRIGGER:** Player opens phone at any point during Day 2

---

### Phone: Morning Notifications (8:15 AM)

**PASSAGE:** Shows when MC checks phone in morning or opens phone app

```
Three notifications wait on my cracked screen like little grenades of reality.
```

**Notification 1 — Loan Servicer Voicemail:**
> 📞 Missed Call: Pinnacle Student Loans (7:02 AM)
> 
> I play the voicemail on speaker. A robot woman's voice, cheerful in that way only machines and sociopaths can manage at 7 AM:
> 
> "Hello! This is a courtesy call from Pinnacle Student Loan Services regarding account ending in 4471. Your account is currently 127 days past due with an outstanding balance of twenty-three thousand, four hundred dollars. Please call us at—"
> 
> I delete it before she finishes. Courtesy. They call harassment a "courtesy" now. I'll add it to the list of words that don't mean what they used to — right next to "unforeseen physiological outcomes."

**Notification 2 — DashDrop App:**
> 🛵 DashDrop: "Shifts available this weekend! Tap to claim."
> 
> I stare at the notification. I've been "sick" for two days. Derek hasn't questioned it but he will soon. I need to go back. I need the money. I need to ride my scooter through the city in this body and hand food to strangers who will see a woman and not think twice about it.
> 
> Not today. Soon. But not today.

**Notification 3 — Weather:**
> 🌤️ Weather: Saturday — Partly cloudy, 72°F. No umbrella needed.
> 
> The weather doesn't care about my chromosomes. Refreshing.

### Phone: Afternoon Text — Jake (1:30 PM)

**TRIGGER:** Fires automatically after MC returns from thrift store

```
My phone buzzes in my pocket. The new jeans pocket — tighter, higher, shaped for a hip that curves.
```

> 💬 **Jake:** hey
> 💬 **Jake:** so I know you said you're sick
> 💬 **Jake:** but you've been MIA for like 3 days and I'm starting to worry
> 💬 **Jake:** like actual worry not bro worry
> 💬 **Jake:** are you dying??

**Player Response Options:**

**Option A — Deflect with humor:**
> 💬 **Me:** not dying. just ugly
> 💬 **Jake:** bro you were always ugly that's not new
> 💬 **Jake:** 😂😂
> 💬 **Jake:** seriously tho. you good?
> 💬 **Me:** yeah. just need a few more days
> 💬 **Jake:** ok but I'm coming over soon whether you like it or not
> 💬 **Jake:** bringing soup
> 💬 **Me:** jake
> 💬 **Jake:** SOUP

**Option B — Honest but vague:**
> 💬 **Me:** I'm not sick. something happened. I need to tell you in person
> 💬 **Jake:** ...
> 💬 **Jake:** that sounds serious
> 💬 **Jake:** should I come now?
> 💬 **Me:** not yet. give me till monday?
> 💬 **Jake:** monday. ok. but if I don't hear from you monday I'm breaking down your door
> 💬 **Jake:** I know where you hide the spare key
> 💬 **Me:** ...how do you know that
> 💬 **Jake:** bro I've known you for 2 years. under the fire extinguisher on 3rd floor. it's not exactly CIA level
> *(Sets $jakeVisitDay = 5)*

**Option C — Short and closed:**
> 💬 **Me:** yeah I'm fine. just need space
> 💬 **Jake:** ok
> 💬 **Jake:** ...
> 💬 **Jake:** you know I'm here right
> 💬 **Me:** I know
> *(Jake doesn't text again for 2 days — he respects boundaries but it costs him. Jake affinity -2 for the distance.)*

### Phone: Evening Text — Mom's Contact (9:45 PM)

**TRIGGER:** Player checks phone during evening. MC's mother's contact exists in the phone but they haven't spoken in years.

```
I'm scrolling through my contacts. Most of them are delivery-related — restaurant numbers, Derek, the DashDrop helpline. A few campus people. Jake.

Then I see it. "Mom." Still there. A number I haven't called since I was seventeen. She left when I was seven. Called on birthdays for a few years. Then stopped. The number might not even work anymore.

I hover my thumb over it. What would I say? "Hey Mom, it's Aiden. Except I'm not Aiden anymore. I'm a woman now. A pharmaceutical company did it. How's Florida?"

I close the contacts app. Some calls aren't ready to be made. Some might never be.
```

*No player choice — this is atmospheric. Plants the seed for a potential future arc (MC contacts her mother on Day 60+ if CON > 40).*

### Phone: Late Night — Dating App Notification (11:15 PM)

**TRIGGER:** If MC created a dating app profile (Day 4 earliest, but can trigger Day 2 if app is pre-installed and MC browses)

```
I don't create a profile. Not tonight. But I download the app. Just to look. Just to see.

The icon sits on my home screen between the calculator and the weather app. A little flame. Waiting.

I open it. "Create Profile" or "Browse."

I hit Browse. Just looking. Window shopping for human connection.

The faces scroll past. Men, women, everyone in between. Smiling, posing, trying. Everyone performing a version of themselves they think someone else will want.

I close the app.

Not yet. But the flame icon stays on my home screen. Waiting.
```

*Sets $datingAppInstalled = true. Creates the app infrastructure for Day 4+ when MC creates a profile.*

---

# 🏪 CORNER STORE ENCOUNTERS — DAY 2

**PASSAGE:** `passages/locations/cornerstore-d02.twee` or within `Loc_CornerStore`
**TRIGGER:** If MC visits Corner Store on Day 2 (available as a hub location)

---

### Scene: Buying Groceries from Luis

```
The bell dings when I push open the door. Lucky Mart. The fluorescent lights hum their eternal hum. Luis is behind the counter, newspaper open, reading glasses perched on his nose, a half-eaten empanada next to the register.

"Morning, miss." He says it without looking up. "Need a bag?"

Miss. From Luis. Who called me "kid" and "buddy" for eight months when I was Aiden. Who knows — knew — my cereal preferences and my inability to afford real food. Now I'm "miss." A stranger in the store where I was a regular.

"Yeah. Thanks."

I grab a basket. Navigate the aisles. My shopping list has changed along with my body:

Milk (not expired this time). Eggs. Bread. Bananas — I've been craving fruit since the transformation, which is weird because Aiden's relationship with produce was strictly theoretical. Instant ramen (old habits). Pasta and sauce (I'm going to learn to cook if it kills me). A candy bar because I deserve it.

I pause in the toiletries aisle. Shampoo and conditioner — women's, the kind in the pink bottle that smells like coconut. Body lotion. Deodorant — I stand there for a full minute debating between "Powder Fresh" and "Vanilla Orchid." This is what my life has become. Fragrance decisions. I grab both. I'll figure it out.
```

### NPC Encounter: The Aisle Collision

**TYPE:** Random — 40% chance when visiting Corner Store on Day 2

```
I round the corner of aisle 3 and nearly collide with another customer. She's my age — maybe a year older — with dark curly hair, a State University hoodie, and a basket full of what appears to be exclusively Hot Pockets and wine.

"Oh! Sorry!" She steadies her basket. One of the Hot Pockets makes a break for it — I catch it before it hits the floor.

"Nice reflexes." She grins. "I'm Carmen. Not the lingerie Carmen — I don't know any lingerie Carmen, that would be weird. Just... Carmen."

"Aida."

"Cool name. You go to State? I feel like I've seen you around."

She hasn't. She's never seen me because I didn't exist before Thursday. But her face is open and friendly and she's the first person my age who's spoken to me since the transformation who isn't a medical professional or a delivery customer.

"Yeah. Second year."

"Me too! We should study together sometime. I'm pre-law and I'm dying. Like, actively dying. Torts are killing me."

She scribbles her number on the back of a Hot Pocket box, tears off the flap, and hands it to me. "Text me! Or don't. No pressure. But seriously, torts. I need help."

She waves and disappears around the pasta sauce. I stand there holding a piece of cardboard with a phone number on it, written in purple ink, smelling faintly of pepperoni.

I just made a friend. I think. Do women make friends this fast? Is this how it works?

I put the Hot Pocket flap in my pocket. Next to Mrs. Calloway's cookie crumbs and the ghost of the NovaCure flyer.
```

**Logic:**
```
<<set $metCarmenStore = true>>
<<set $phone.contacts.push({name:"Carmen (Corner Store)", number:"555-0188", met:"Day 2", notes:"Pre-law. Hot Pockets. Purple ink."})>>
```

### Luis — Checkout Conversation

**TYPE:** Guaranteed — plays during purchase

```
Luis rings me up. The register clunks with each item. He pauses on the women's shampoo.

"Switching brands?" He asks it casually. Like it's about shampoo. Maybe it is about shampoo.

"Yeah. Trying something new."

He looks at me over his reading glasses. Really looks. For a moment I'm terrified — does he see something? Does he see Aiden behind my face?

"You know what, you remind me of someone." My blood freezes. "My niece. Same eyes. She's about your age. Just moved to Portland." He bags the shampoo. "Good kid. Terrible taste in music."

I exhale. Not recognized. Just compared to a niece. The relief is physical — my shoulders drop three inches.

"That's $37.80."

I pay. He hands me the bag. "You be careful out there, miss. Lot of weirdos in this neighborhood."

I want to laugh. I want to say: Luis, I've walked these blocks a thousand times. I know the crack in the sidewalk outside your store. I know which streetlight flickers. I know you close early on Sundays because your wife makes arroz con pollo and you'd rather be there than here.

Instead I say: "I will. Thanks, Luis."

The bell dings behind me. He goes back to his newspaper. I walk home with groceries I chose for a body I didn't.
```

---

# 🌳 WALKING TRAIL ENCOUNTERS — DAY 2

**PASSAGE:** `passages/locations/trail-d02.twee` or within `Loc_WalkingTrail`
**TRIGGER:** If MC visits the Walking Trail on Day 2 (available from Day 0)

---

### Scene: First Walk as Female

```
I need air. The apartment is small and my thoughts are big and the walls are closing in on the body I'm trapped inside — or the body that's trapped inside me. I can't tell which.

The walking trail. Three blocks south. A loop around a small pond with benches and old oak trees and the illusion of nature in an urban grid.

I walk. Hood up. Hands in pockets. The walk itself is different — shorter stride, hip sway I can't suppress, the awareness of my chest moving under the hoodie with each step. I'm learning to walk again. Twenty years of muscle memory overwritten in a night.
```

### NPC Encounter: Old Man on Bench (First Meeting)

**TYPE:** Guaranteed — always present at the pond bench

```
He's on the bench by the pond. Old — seventies at least. Tweed jacket that's been patched at the elbows. A hardcover book on his knee, spine cracked with love. He's feeding ducks from a paper bag of bread crusts, tossing each piece with the precision of someone who's done this ten thousand times.

I sit on the other end of the bench. Not close. Not far. The neutral distance of strangers sharing public furniture.

We sit in silence for three minutes. He feeds ducks. I stare at the water. The pond reflects a sky I can't look at directly.

Then, without looking up from his book:

"The ducks don't care, you know."

I glance at him. "What?"

"Whatever you're carrying." He tosses another crust. A duck scrambles. "The ducks don't care about it. They only care about the bread. There's a lesson in that, if you want one."

"What's the lesson?"

He considers this. Tosses another crust. "I have no idea. I'm eighty-three. I've been coming to this bench for twelve years and the only wisdom I've achieved is that ducks are shameless opportunists." He glances at me sideways. The faintest crinkle around his eyes. "But you looked like you needed someone to say something that sounded wise, so I improvised."

I laugh. It surprises me — the sound. Higher than it used to be. A real laugh, not the quiet huff Aiden used to manage. This one has air in it. This one has shape.

"What are you reading?"

He holds up the cover. Ovid. *Metamorphoses.* The title hits me like a physical thing.

"Stories about transformation," he says. "People becoming animals. Animals becoming stars. Everyone becoming something they didn't expect." He looks at me again. Gentler this time. "You'd like it."

I don't ask his name. He doesn't offer it. But when I stand to leave, he nods. A small nod. The kind that says: *I see you. Whatever you are. I see you.*

I nod back. Walk home. My lungs feel clearer than they have in days.
```

**Logic:**
```
<<set $metOldManBench = true>>
<<run statChange("stress", -5)>>
```

### NPC Encounter: Mom with Stroller

**TYPE:** Random — 30% chance, Afternoon

```
A woman pushing a stroller passes me on the path. The baby inside is asleep — mouth open, fists clenched, wearing a onesie with a dinosaur on it. The woman looks exhausted in the specific way that new parents look exhausted: beyond tired into a new dimension of consciousness that runs on caffeine and love.

She sees me looking at the baby and smiles. "Eight weeks. I haven't slept since March."

"She's beautiful."

"He, actually. The dinosaur is misleading." She laughs. "I'm running out of clean onesies. Everything is a crisis at this point."

She walks on. The baby doesn't stir.

I stand on the path and put my hand on my lower belly. Not because of anything specific. Not because I'm pregnant or thinking about pregnancy. Just because my body has a uterus now, and ovaries, and fallopian tubes, and the theoretical capacity to grow a person inside it, and that fact hits me at random moments like this — watching a stranger push a stroller down a path I've walked a hundred times as a man who never once thought about wombs.

I take my hand away. Keep walking. But the feeling stays — the awareness of possibility. Of a body that can do things I never imagined it doing.
```

**Logic:**
```
<<run statChange("fem", 1)>>
/* No maternal stat trigger yet — too early. But plant the seed. */
```

### NPC Encounter: Two Joggers Arguing

**TYPE:** Random — 25% chance, any time

```
Two women jog past me, mid-argument, barely breaking stride.

"—told you he was trash, I TOLD you—"
"He's not TRASH, he's just emotionally unavailable—"
"That IS trash! That's the DEFINITION of trash!"
"He texted me good morning!"
"Serial killers text good morning, Karen!"

They round the curve and their voices fade. I stand on the path, accidentally eavesdropping on the most aggressively normal female interaction I've ever witnessed.

This is girl world. Arguments about boys that happen at 7-minute-mile pace. Friendship that sounds like combat and feels like love.

I don't belong here yet. But I'm starting to understand the language.
```

---

# 🧺 LAUNDROMAT ENCOUNTER — DAY 2

**PASSAGE:** `passages/locations/laundromat-d02.twee` or within `Loc_Laundromat`  
**TRIGGER:** If MC visits laundromat on Day 2 (available, but she might not go — it's optional)

---

### Scene: Washing the Old Sheets

```
I take my sheets to the laundromat. The grey sheets that used to be white. The ones Aiden slept on. The ones I woke up female on. There's a symbolism in washing them that I refuse to think about because if I start thinking about symbolism I'll never stop and I'll become one of those people who sees metaphors in laundry and I have enough problems.

$3.50 into the machine. Detergent pod from the vending machine. I watch the drum fill with water and the grey sheets start to turn. Round and round. Clockwork. Predictable. Everything the last three days have not been.
```

### NPC Encounter: Kind Older Lady

**TYPE:** Random — 35% chance at laundromat

```
A woman in her sixties is folding towels at the next table. She's methodical — each towel folded into thirds, then thirds again, edges aligned with military precision. She sees me watching.

"You fold or you stuff?" she asks.

"What?"

"Your laundry. Some people fold. Some people stuff it in the basket like animals." She eyes me. "You look like a stuffer."

"I'm... a reformed stuffer."

"Good. There's hope for you." She folds another towel. Perfect rectangle. "You know the secret to towels?"

"No."

"Same direction every time. Don't think about it. Let your hands learn. After a while, they do it without you."

She's talking about towels. She's also, somehow, talking about everything else.

"I'm Dorothy."

"Aida."

"Nice to meet you, Aida. Your machine's done."

I pull out the sheets. They're warm. They smell like detergent instead of stale sweat and expired milk. I fold them. Same direction every time. I let my hands learn.

They're still grey. But they're clean. That counts for something.
```

---

# 🏠 APARTMENT — ADDITIONAL HOME SCENES

**PASSAGE:** Various apartment sub-passages
**TRIGGER:** Various conditions throughout Day 2

---

### Scene: Cooking First Real Meal (Kitchen)

**TRIGGER:** MC buys groceries from Corner Store, then uses "Cook" action at home

```
I'm going to cook something that isn't instant ramen. This is either growth or desperation. Possibly both.

Pasta. I can do pasta. Boil water, add noodles, heat sauce from a jar. Three steps. Even this body — with its different height and different reach and different everything — can manage three steps.

I fill the pot. The faucet is the same but my hands are smaller and the pot feels heavier. I put it on the burner. Turn the gas on. The click-click-click of the igniter. Blue flame.

While the water heats, I open the sauce jar. Twist. Twist harder. My grip strength has decreased with the rest of my upper body mass — the jar won't budge. I try running it under hot water. I try the rubber grip thing with a dishcloth. I try swearing at it.

The jar defeats me for four minutes. Then the lid pops and marinara sauce sprays across my t-shirt.

"GREAT."

I change shirts. Add this to the list: jar lids are a gendered experience. Men open jars without thinking. Women develop strategies. I now need strategies.

The pasta turns out... edible. Slightly overcooked. The sauce is from a jar and I didn't add anything to it because I don't know what "anything" would be. But it's warm and it's real food and I sit at the wobbly kitchen table and eat it with a fork and it's the first meal I've cooked and sat down to eat in weeks.

It tastes like survival. And survival tastes like Prego and overcooked penne. Not Michelin-star material. But mine.
```

**Logic:**
```
<<set $player.energy += 30>>
<<run completeObjective("d02_eat")>>
<<set $cookingSkill = 1>> /* novice */
```

### Scene: Hearing the Neighbors (Living Area, Evening)

**TRIGGER:** Evening timeslot, MC is in apartment

```
The walls in this building are thin. I've always known this — I could hear 4A's TV through the wall, the couple in 3B arguing about dishes, Mrs. Park's Korean drama theme songs drifting up from the ground floor.

Tonight I hear something different from 4A. The apartment next door. The one that's been empty for two weeks.

Someone's moving in. Thuds. Furniture being dragged. A woman's voice: "No, the couch goes THERE. No. THERE. Why do men not understand pointing?"

A man's voice, muffled: "I'm holding a couch, I can't look where you're pointing!"

Normal sounds. New-neighbor sounds. Someone's starting a life on the other side of my wall while I'm restarting mine on this side.

I'll introduce myself eventually. Not tonight. Tonight I'm still learning how to introduce THIS — [gestures at entire body] — to the mirror. Strangers can wait.
```

*Sets $newNeighborMovingIn = true. Creates NPC chain for Day 5+ when MC knocks on 4A's door or encounters them in the hallway.*

### Scene: Shower — Washing the New Underwear (Bathroom)

**TRIGGER:** MC uses shower after buying clothes

```
Before I try on the new clothes, I wash them. Habit from childhood — my grandmother always washed new clothes before wearing them. "You don't know where they've been," she'd say. The thrift store underwear is new (store policy), but the t-shirts and jeans were someone else's before they were mine.

I run them under the bathroom sink with hand soap. Wring them out. Hang them on the shower rod to dry. My apartment now has women's clothing dripping from the shower rod — two t-shirts, a pair of jeans, a sports bra.

I look at them hanging there. If someone walked into this apartment right now, they'd assume a woman lived here. They'd be right. Technically. In every way that matters except the way I feel about it, which is complicated and I'm not unpacking that while standing in a bathroom holding wet panties.
```

### Scene: Finding Aiden's Stuff (My Room, During Wardrobe Access)

**TRIGGER:** First time MC opens closet after buying women's clothes

```
I open the closet to hang the new clothes and Aiden is still there.

His hoodies — grey, black, navy. His t-shirts in various states of decay. His joggers. His jeans that were too loose even on him. The DashDrop jacket, orange as a traffic cone.

The closet is split now. Left side: Aiden's clothes, hanging limp, waiting for a body that isn't coming back. Right side: two t-shirts, one pair of jeans, and a sports bra, still slightly damp from the sink wash.

It's a small closet. There isn't room for two people's wardrobes. Not for long.

I push Aiden's clothes to the far left. Make room. The hangers scrape against the rod with a sound like teeth.

I don't get rid of them. Not yet. I can't. But I push them aside. I make room for what's here now, what's real now, what I'm wearing now.

The grey hoodie stays in the center. Neutral territory. It was my grandmother's before it was mine, and it doesn't belong to any version of me more than another. It's just love in fabric form. It stays.
```

**Logic:**
```
<<set $closetSplit = true>>
/* This flag is checked on Day 66 when the "dispose of male wardrobe" choice appears */
```

---

# 🏗️ TRANSIT ENCOUNTERS — DAY 2

**PASSAGE:** `passages/systems/transit-d02.twee` or within `TransitEvent`
**TRIGGER:** When MC travels between locations on Day 2

---

### Transit: Walking to Thrift Store (Guaranteed — Day 2)

```
Three blocks. I've walked this route hundreds of times. Past the nail salon that always has one customer and four bored technicians. Past the bodega with the cat who sleeps in the window regardless of season, weather, or the state of the economy. Past the community bulletin board — I don't look at it. The last time I looked at a bulletin board it cost me my entire biological identity.

The sidewalk has a crack at the corner of Vine and 3rd that I've been stepping over since I moved in. The crack is the same. My feet are smaller. The step over it is slightly shorter. These are the details you notice when your body changes overnight: sidewalk cracks feel different at size 7 women's than at size 10 men's.

A dog barks from a balcony. A kid rides a bike. A car honks for no discernible reason, which is the urban equivalent of a bird's morning call. Normal. All of it normal. I'm the anomaly walking through a normal world, wearing men's clothes on a woman's body, heading to a thrift store to buy a bra because the universe has a specific and elaborate sense of humor.
```

### Transit: Walking Home from Thrift Store (Catcall + Additional)

**After the catcall scene, additional walking-home content:**

```
Past the catcall. Heart still hammering. Keys in my fist.

I pass a hair salon. Through the window: a woman in a chair getting her hair blow-dried. She's scrolling her phone while the stylist works. She looks bored. Comfortable. Like sitting in a salon is the most normal thing in the world.

I've never been in a hair salon. As Aiden, I went to a barber — $15, ten minutes, sports on the TV, done. Women's salons are different. They're temples. I can see the products lining the walls, the wash stations, the mirrors surrounded by lights. A whole industry built around hair. My hair — this dark brown cascade that's past my shoulders and growing — is going to need that industry eventually.

Not today. Today I walked to a thrift store and bought panties and survived a catcall and that's more than enough for one Saturday.

I pass the bodega. The cat in the window opens one eye, evaluates me, and closes it. Even the cat doesn't recognize me. Or maybe the cat does recognize me and doesn't care. Cats are like that. They've been doing gender ambiguity for millennia.
```

---

# 🏠 NEIGHBOR HALLWAY ENCOUNTER — DAY 2

**PASSAGE:** `passages/locations/apartment-hallway.twee`
**TRIGGER:** Random — 20% chance when MC enters/exits apartment on Day 2

---

### NPC: Mrs. Park Hallway Sighting

```
I'm locking my apartment door when I hear slippers on the stairwell carpet. Mrs. Park, ascending from the ground floor, carrying a grocery bag. She rounds the landing and sees me.

We make eye contact. Her eyes — sharp, dark, missing nothing behind those thin-framed glasses — scan me head to toe. The oversized hoodie. The cinched joggers. The face she's never seen before coming out of apartment 4B.

I open my mouth to explain — to say something, anything, to bridge the gap between the tenant she knows and the woman standing in his doorway—

"You're the new 4B." Not a question. A statement.

"I'm—"

"Rent is $650. Due first of the month. No parties after 10. No smoking inside. Recycling goes in the blue bin."

"Mrs. Park, I'm—"

She holds up one hand. Small, weathered, absolute authority in five fingers.

"The previous tenant settled his balance. If you are his... replacement... then the account is current." She adjusts her grocery bag. "Don't be late."

She continues up the stairs. Her slippers make no sound. She knows, I think. On some level, in the way that landlords know everything about their buildings the way spiders know every vibration in their web — she knows something has changed. She just doesn't care, as long as the rent is paid.

The slippers whisper up the stairs. A door closes. A lock turns.

I exhale. Rent is current. Identity crisis is not her problem. I'm beginning to understand why Jake calls her terrifying. She's not terrifying. She's efficient. There's a difference, and the difference is that efficient people don't waste time on your feelings, which is either the rudest or the kindest thing anyone has done for me today.
```

---

# 📺 EVENING CONTENT — ADDITIONAL HOME SCENES

**PASSAGE:** Various apartment sub-passages, Evening timeslot

---

### Scene: TV Channel Surfing

**TRIGGER:** MC watches TV in the evening

```
I surf channels. Remote in hand. The TV is a flat-screen that came with the apartment — 32 inches of someone else's left-behind entertainment.

A cooking show. A woman demonstrates how to dice an onion. I watch her hands. Confident, fast, the knife moving in a blur. "The key is a sharp knife and no hesitation." I look at the knife block on my counter. Two knives, both dull. Add to the list.

A sitcom. A man and woman argue about something stupid. The laugh track tells me it's funny. It isn't, but the normality of it — the expected rhythms of fictional people having fictional problems — is sedative. I watch for twenty minutes without registering a single plot point.

A nature documentary. A caterpillar builds a cocoon. The narrator: "Inside the chrysalis, the caterpillar's body dissolves almost entirely. It becomes a kind of biological soup — completely undifferentiated. And from that dissolution, the butterfly assembles itself."

I turn off the TV.

Too on the nose. Even the nature channel is doing it.
```

### Scene: Looking at Old Photos on Phone

**TRIGGER:** MC uses phone, Night timeslot, before bed

```
I'm scrolling through my phone and my thumb hits the photo gallery by accident.

Photos of Aiden. Not many — he wasn't the selfie type. But they're there. A group photo from freshman orientation — Aiden in the back row, shortest by default, hoodie pulled up despite being indoors. A photo Jake took at the gym — Aiden attempting a deadlift, face like he's passing a kidney stone, arms like pipe cleaners. A screenshot of a text conversation with his dad: three messages, two from Aiden ("Happy birthday dad" and, three months later, "Merry Christmas"), one from Dad ("Thanks bud"). That's the whole relationship. Three texts and the word "bud."

I swipe to the most recent photo taken by the phone's camera. It's from the NovaCure exam room — the new ID photo Nurse Patel took. A woman with Aiden's eyes and nobody else's face, looking at the camera like she's been caught doing something she can't explain.

I look at the two photos side by side. Aiden at orientation. Aida at NovaCure.

Same eyes. Same freckles. Same person? Different person? The question used to feel binary. Today it feels like the wrong question. Maybe the right question isn't "same or different?" Maybe it's "who's still in there?"

I close the gallery. Put the phone face-down on the mattress. Some questions are better asked in the morning, when the answers might be kinder.
```

---

## INTEGRATION NOTES FOR CODE AGENT

### Where to Place This Content

| Content | Passage | Trigger Condition |
|---|---|---|
| Morning phone notifications (loan, DashDrop, weather) | `D02_Morning` or `Apt_Phone` | Automatic — shows during morning |
| Jake afternoon text (3 response options) | `Apt_Phone` → conditional on time | `$timeslot == "Afternoon"` and player opens phone |
| Mom's contact scene | `Apt_Phone` | `$timeslot == "Night"` and player browses contacts |
| Dating app download | `Apt_Phone` | `$timeslot == "Night"` — atmospheric, no choice |
| Corner Store scene (Luis, groceries, Carmen NPC) | `Loc_CornerStore` | MC visits Corner Store on Day 2 |
| Walking Trail scenes (Old Man, Mom with Stroller, Joggers) | `Loc_WalkingTrail` | MC visits Walking Trail on Day 2 |
| Laundromat scene (Dorothy) | `Loc_Laundromat` | MC visits Laundromat on Day 2 |
| Cooking first real meal | `Apt_Kitchen` or `Apt_Eat` | MC has groceries AND uses cook action |
| Hearing the neighbors | `Loc_Apartment` | Evening, automatic ambient text |
| Shower — washing new clothes | `Apt_Shower` | After thrift store purchase, before trying on |
| Finding Aiden's stuff in closet | `Apt_Wardrobe` | First time opening closet with new clothes |
| Transit — walking to thrift store | `TransitEvent` | Walking TO thrift store |
| Transit — walking home (hair salon, bodega cat) | `TransitEvent` | Walking FROM thrift store (after catcall) |
| Mrs. Park hallway encounter | `TransitEvent` or `Loc_Apartment` entry | 20% random chance entering/exiting apartment |
| TV channel surfing | `Loc_Apartment` → TV action | Evening, MC watches TV |
| Old photos on phone | `Apt_Phone` | Night timeslot, browsing phone |

### NPC Flags to Set

```javascript
<<set $metCarmenStore = false>>    /* Corner store Carmen */
<<set $metOldManBench = false>>    /* Walking trail old man */
<<set $metDorothy = false>>        /* Laundromat Dorothy */
<<set $newNeighborMovingIn = false>> /* Heard through wall */
<<set $datingAppInstalled = false>> /* Downloaded but no profile yet */
<<set $closetSplit = false>>       /* Aiden's clothes pushed aside */
<<set $cookingSkill = 0>>          /* 0=nothing, 1=novice after first cook */
```

### Random Encounter Weights for Day 2

When MC visits a location, the game draws from that location's NPC pool. For Day 2, the pools are small (it's early game). Weight = chance of triggering:

| Location | NPC | Weight | Max Triggers/Day |
|---|---|---|---|
| Corner Store | Carmen (aisle collision) | 40% | 1 |
| Corner Store | Luis extended chat | 100% | 1 (at checkout) |
| Walking Trail | Old Man on Bench | 100% (first visit) | 1 |
| Walking Trail | Mom with Stroller | 30% | 1 |
| Walking Trail | Arguing Joggers | 25% | 1 |
| Laundromat | Dorothy (towel folder) | 35% | 1 |
| Apartment Hallway | Mrs. Park sighting | 20% | 1 |

### Scene Priority System

If multiple scenes can trigger at the same location, use priority:
1. **Quest/Objective scenes** (highest — always play first)
2. **First-visit scenes** (play on first visit to a location)
3. **Flag-triggered scenes** (play when specific conditions met)
4. **Random NPC encounters** (lowest — pool draw after main scenes)

This prevents random encounters from overriding story content, but ensures they fill the space between story beats.

---

*This supplementary file adds ~5,200 words of ambient NPC content to Day 2. Combined with the core Day 2 content (~5,950 words), total Day 2 prose is ~11,150 words — enough for a rich, explorable game day where every location visit feels alive with human interaction.*
