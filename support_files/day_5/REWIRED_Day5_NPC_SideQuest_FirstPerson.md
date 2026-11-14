# REWIRED — Day 5 NPC / Side Quest Content (First Person)
## Supporting Scenes, Random Encounters, Shop Interactions, Phone Calls

---

# NPC SCENES

---

## NPC SCENE: Owen Extended — Post-Shift Check-In

### Passage: D05_Owen_CheckIn
**Trigger:** Player returns to DashDrop after completing all 5 deliveries
**Condition:** `$d05_work_complete == true`

Owen is still behind the counter when I drop off the dispatch tablet. Same position. Same mustache. Same energy of a man who has achieved perfect equilibrium between caring about his job and not caring about his job.

"Hey, buddy." The pitch goes up slightly on "buddy." There it is. "Good shift?"

"Yeah. Eighty-seven in tips."

He whistles low through his teeth. "Damn. That's your best one." He pauses. Chews the inside of his cheek. Something is working its way through his brain, slow and cautious, like a man walking through a dark room trying not to step on Legos.

"Hey, so, uh." He scratches the back of his neck. "The system updated fine. Your new name and everything. Photo too. But some of the other drivers might, y'know, ask questions. If you want me to say something, or not say something, or just..."

"Just pretend it's normal."

"Right. Normal." He nods like I've given him a gift. "Normal, I can do normal. I'm extremely normal. Ask anyone."

"Thanks, Owen."

He does the wave-off thing again. Don't mention it. Literally. But then he stops me at the door.

"Hey, buddy?"

I turn.

"You did good today. Whatever's going on with..." He gestures at all of me. "Whatever this is. You showed up. That's the job."

I nod because speaking right now would involve my voice cracking, and I refuse to cry in a DashDrop dispatch office that smells like scorched Folgers.

**Stat change:** Stress -3
**Flag:** `$owen_affinity += 5`

---

## NPC SCENE: Trent Extended — Apartment Hallway

### Passage: D05_Trent_Hallway
**Trigger:** Player has completed Delivery 2 (Trent callback)
**Condition:** `$d05_trent_callback == true` and player returns to Trent's building via Outside hub (optional revisit)

This passage is optional. Only accessible if the player goes to Trent's neighborhood via the downtown district.

The elevator opens on his floor and I'm here because his building has a laundromat in the basement that doesn't require quarters, just an app, and my clothes situation is critical. That's the reason. That's definitely the only reason.

I'm carrying a garbage bag of laundry past his door when it opens.

"Oh shit, Mia!" Trent leans against the frame. Different shirt. Still fitted. Still doing the thing where the sleeve ends exactly where the bicep begins to make the arm look bigger. He's holding a protein shake. Of course he is.

"Hey."

"You live in this building?"

"No, just using the laundry."

"Oh word, the basement machines? Those are clutch." He sips his shake. Studies me over the rim. "Nina's back, by the way. My girl. She wants to meet you."

"Meet me."

"Yeah, I told her about the cute delivery girl and she got all interested. She's like that." He grins. "We're both like that."

The implication is not subtle. It's barely even implied. It's the conversational equivalent of a neon sign that says WE WANT A THREESOME in sixty-point font.

<<choice: Engage>>
"I'm... flattered. Both of you?"

"Both of us." No shame. No hesitation. Trent says it the way you'd say "we both like Italian food." Casual. "No pressure. We just think you're gorgeous. Nina especially. She'll probably be more into you than I am, honestly. She's got a thing for brunettes."

My face is doing something I can't control. Heat. Not just embarrassment. Something underneath the embarrassment that feels like a door opening onto a room I didn't know was in my house.

"I'll think about it."

"Take your time." He writes a number on the back of a protein bar wrapper and hands it to me. "Nina's number. So you know it's real. She'd text you herself but she doesn't want to be creepy." He pauses. "I mean, this is already kind of creepy, right? Am I being creepy?"

"A little."

"Fair." He retreats into his apartment. "Offer stands, Mia. No weirdness either way."

The door closes. I stand in the hallway holding a garbage bag of dirty clothes and a protein bar wrapper with a phone number on it and try to remember the last time Marcus had this kind of problem.

Never. Marcus never had this kind of problem.

**Flag:** `$trent_nina_number = true`
**Stat change:** COR +2, Arousal +5

<<choice: Decline politely>>
"That's sweet but I'm not really in a place for... that. Right now."

"Totally." He doesn't miss a beat. Not offended. Not even disappointed, really. "Hey, you're welcome to hang out regardless. Nina makes insane pasta. Like, life-changing penne."

"Maybe sometime."

"Cool. You know where we live." He raises his shake. "Cheers, Mia."

The door closes. I shift the laundry bag to my other hand and keep walking. The offer sits in my head like a candy wrapper in a pocket. I know it's there. I don't have to unwrap it.

**Flag:** `$trent_declined_d05 = true`

---

## NPC SCENE: Sage Extended — Yoga Flyer Follow-Up

### Passage: D05_Sage_Flyer
**Trigger:** Player examines the Sunrise Yoga flyer from inventory/phone
**Condition:** `$d05_sage_met == true` and `$sage_flyer == true`

I unfold the lavender flyer on my kitchen counter. SUNRISE YOGA. The schedule is simple. Morning flow at 7 AM, Monday through Friday. Sunset yin at 6 PM, Tuesday and Thursday. Drop-ins welcome. First class free.

There's a small photo of Sage in a pose that shouldn't be physically possible, one leg behind her head while the other supports her entire body weight. She looks like she's enjoying it. Below the photo, a quote in italic.

*"Your body is not a problem to solve. It's a place to live."*

I read that three times. The words hit differently when you're standing in a body you've had for five days. A body that still surprises me every morning in the mirror. A body I'm learning to navigate like a rental car with controls in unfamiliar places.

Not a problem to solve. A place to live.

I stick the flyer to the fridge with a magnet shaped like a cactus that was here when I moved in. Maybe next week. Maybe the morning flow. Maybe I'll walk in and Sage will beam at me and tell me my chakras are misaligned and I'll have to pretend I know what that means.

But the flyer stays on the fridge.

**Flag:** `$sage_flyer_fridge = true` (enables Sunrise Yoga as a Day 7+ location)

---

## NPC SCENE: Kevin Extended — Dorm Encounter

### Passage: D05_Kevin_Dorm_Random
**Trigger:** Player visits Campus district during afternoon/evening on Day 5+
**Condition:** `$d05_kevin_met == true`

I'm cutting through the campus quad when I hear it.

"MIAAAAAA!"

Kevin is jogging across the grass like a Labrador who just spotted his owner at the park. He's wearing the same basketball shorts but has added a hoodie that says LEGALIZE RANCH in letters that definitely mean something I don't understand.

"Hey, Mia! Delivery girl! It's me, Kevin! From room 412! I ordered the Pad Thai!"

"I remember."

"Sick! Hey, so, my buddy Deshawn is having a party this weekend. Nothing crazy, just like thirty people, music, drinks, his cousin's edibles again. You should come."

"I don't even know you."

"I know! That's the beautiful thing about parties, they're where you get to know people!" He says this like he's quoting a TED Talk he found deeply moving. "Here, give me your number and I'll text you the address."

<<choice: Give number>>
I don't know why I do it. Maybe because Kevin is so profoundly non-threatening that saying no feels like kicking a puppy. Maybe because somewhere in the back of my brain, behind the fear and the dysphoria and the endless loop of "what am I becoming," there's a twenty-year-old who hasn't been to a party in months.

I give him my number. He types it in with one thumb, tongue out, concentrating like he's defusing a bomb.

"Got it. I'm going to text you so you have mine. Ready?"

My phone buzzes. The text says: "its kevin 🤙 from room 412 pad thai guy"

"Perfect. Party's Saturday. Wear whatever. Bring whoever. It's chill."

"Okay, Kevin."

"Okay, Mia!" He starts jogging backward, waving. "This is going to be awesome!" He trips over a landscaping brick but catches himself. "I'm good! I'm fine!"

He disappears around the corner of the science building. I stand in the quad holding my phone and wondering what exactly just happened to my social life.

**Flag:** `$kevin_number = true`, `$kevin_party_invite = true`

<<choice: Decline>>
"I'm good. But thanks."

"No worries! Offer's open! Room 412! Tell your friends!" He jogs backward, still waving. "I'm Kevin!"

"I know, Kevin."

He vanishes around a building. I watch him go and feel a small, unexpected pang of something that might be affection. Kevin is exhausting. Kevin is also the first person in five days who looked at me and saw nothing but a potential friend.

**Flag:** `$kevin_declined_d05 = true`

---

## NPC SCENE: Jess Extended — Second Encounter

### Passage: D05_Jess_Second
**Trigger:** Player visits Jess's neighborhood OR gets another delivery to her address (randomized, Day 7+)
**Note:** This passage is seeded on Day 5 but doesn't trigger until a future delivery or neighborhood visit.

The door opens and the toddler is on the floor behind her, surrounded by what appears to be every single crayon in the house, grinding a red one into the carpet with the focus of a master painter.

"Oh, it's you! Mia!" Jess looks relieved. "Please tell me that's my sandwich."

"Two clubs, one cookie."

"You are a saint." She takes the bag. "Hey, can I ask you something? And feel free to tell me to mind my own business."

"Shoot."

"Are you okay? Like, genuinely. Because the other day when you were here, you had this look. Not a bad look, just a... heavy look. I know that look because I invented that look. I see that look in the mirror every morning before my coffee kicks in."

Nobody has asked me that in five days. Not "what happened to you" or "why do you look different" or "are you sick." Just "are you okay." The simplest question. The hardest one.

"I'm getting there."

She nods. Not pushing. "Good. Getting there is good." She leans against the doorframe, one ear tilted toward the interior of the house where the carpet is definitely being ruined. "Listen, I don't have a lot of friends in this neighborhood. I moved here after the divorce and it's been me and this tiny terrorist for eight months. If you ever want to grab coffee or just sit in silence while small humans destroy furniture, I'm here. That's all."

"I might take you up on that."

"Please do. I'm losing my mind talking exclusively to a person whose vocabulary is twenty words, eleven of which are 'no.'"

Behind her, the toddler looks up from the carpet, makes direct eye contact with me, and says, "No."

Jess closes her eyes. "See?"

**Flag:** `$jess_affinity += 5`, `$jess_coffee_invite = true`

---

## NPC SCENE: River Extended — Grounded Coffee Return Visit

### Passage: D05_River_Return
**Trigger:** Player visits Grounded Coffee House a second time on Day 5 (evening) or Day 6+
**Condition:** `$d05_river_met == true`

The evening crowd is thinner. Two laptops. One couple sharing a muffin. The ambient playlist has shifted from upbeat acoustic to something moodier, jazz with a piano that sounds like rain.

River spots me before I reach the counter.

"Hey! Latte girl!" He snaps his fingers. "Mia, right?"

"Good memory."

"It's the job. Also, you tipped well. I remember good tippers." He's already reaching for a cup. "Same thing? Oat latte?"

"Yeah."

He makes it with the same easy precision. This time I watch his hands more closely. The way he tamps the espresso with three firm pushes. The angle of the steaming wand. He's good at this. Not performatively good. Quietly good. The kind of good that comes from repetition and genuine interest.

"So." He sets the latte down. The swirl is better this time. More deliberate. "Day get any better?"

"Actually, yeah."

"Glad to hear it." He leans on the counter again. The apron is a little crooked. The beanie has slipped slightly. He looks comfortable in a way that radiates outward, like warmth from a wood stove. "I'm here most days, if you need a spot. Wi-Fi's good. Music's curated, not algorithmic. And nobody'll bother you in the corner booth."

"You sell coffee like a real estate agent."

He laughs. Full, open, surprised. "I've never gotten that one before. I'll put it on Yelp." He straightens up, grabs a rag, wipes the counter in a circular motion that's pure muscle memory. "Hey, can I ask you something kind of personal?"

My guard goes up. Not all the way. But it lifts.

"Depends."

"What do you do? Like, when you're not delivering food in a very orange jacket."

I think about that. What do I do. What did Marcus do. What does Mia do. The answer to all three is essentially the same, which is "not much," but it sounds worse for Mia because at least Marcus was theoretically enrolled in college.

"I'm figuring that out."

He nods. No judgment. "Same, honestly. I'm a barista who plays drums in a band that practices in my bassist's garage. We're terrible but enthusiastic."

"What kind of music?"

"We call it 'indie' but that's what everybody calls it when they can't pick a genre. It's basically sad white-boy guitar with too much reverb." He grins. "You should come to a gig."

"Where do you play?"

"Wherever will have us. Mostly house shows. Last one was in a yoga studio, which was weird. Great acoustics though."

"Was it Sage's studio?"

"You know Sage?" His eyebrows go up. "Small world. Yeah, she lets us use the space on Sundays when it's closed. She does guided meditation during our set break and honestly it kind of works."

I sip my latte. He wipes the counter. The jazz piano keeps falling like rain. Something about this moment feels important in a way I can't name. Not romantic, not yet, maybe not ever. But present. Connected. Like two people standing in the same warm room during a storm.

"I'm carrying something heavy." I don't know why I say it. It just comes out, the way things come out in coffee shops at dusk when the light is low and the person across the counter has kind eyes.

River stops wiping. Looks at me. Really looks. Not the way men usually look, assessing, categorizing, deciding. He looks the way you look at someone who just said something true.

"I figured." He sets the rag down. "Well. Coffee helps. And if it doesn't, I make a mean hot chocolate."

"I'll keep that in mind."

"Do." He taps the counter twice. A punctuation mark. Then the next customer arrives and he pivots and he's River again, easy smile, quick hands, a question about oat versus almond. But he glances back once. Just once. Quick enough to miss if you weren't watching.

I was watching.

**Stat change:** Stress -5
**Flag:** `$river_affinity += 5`, `$river_personal_moment = true`

---

# RANDOM ENCOUNTERS

---

## RANDOM ENCOUNTER: Bus Stop — Being Watched

### Passage: D05_Random_BusStop
**Trigger:** Player uses transit during Day 5 daytime
**Pool:** Random encounter, 30% chance

I'm waiting for the Route 7 at the stop on Garfield when I notice the man on the bench.

He's maybe forty. Khakis. Polo. The kind of guy who blends into any office in the country. He's looking at his phone but his eyes keep flicking up. Toward me. Then back to the phone. Up. Phone. Up. Phone.

I know what he's doing because I used to do it. The subtle checkout. The look-without-looking. The peripheral surveillance that men learn to do so early it becomes automatic, this constant low-level scanning of every woman in visual range, filing them under categories they didn't ask to be filed under.

He's not being threatening. He's not approaching. He's not saying anything. He's just looking, in that way men look, like women are channels on a TV and they're deciding whether to stop flipping.

I shift my weight. Cross my arms. Turn slightly so my body faces away from him. All of these are things I'm doing without thinking. Defensive posture. Making myself smaller. Closing off access. Five days ago I wouldn't have understood any of these movements. Now my body performs them like choreography it learned in a dream.

The bus comes. I board. Sit near the driver. The man gets on too, takes a seat in the back. Never looks at me again.

Nothing happened. That's the point. Nothing happened and yet something happened, something invisible and pervasive that takes up space in my head for the rest of the ride. This is it. This is what women mean when they say "the weight of being looked at." Not violence. Not harassment. Just the steady, ambient pressure of existing inside someone else's gaze.

Marcus never understood. Mia is learning.

**Stat change:** FEM +1

---

## RANDOM ENCOUNTER: Grocery Store Aisle

### Passage: D05_Random_Grocery
**Trigger:** Player visits Corner Store during Day 5
**Pool:** Random encounter, 40% chance

I'm in the snack aisle at the corner store reaching for granola bars when an older woman stops beside me. She's got a cart with one of those small dogs sitting in the child seat, which I'm fairly sure violates several health codes but nobody in this store has ever enforced a health code and the dog seems happy.

"Excuse me, sweetie, can you reach that?" She points to the top shelf. Rice cakes. The kind that taste like flavored styrofoam.

"Sure." I stretch up and grab the box and hand it to her. My shirt rides up and I feel the air on a strip of belly and yank it down reflexively.

"Thank you, dear. My shoulders don't do what they used to." She puts the rice cakes in the cart next to the dog, who sniffs them. "Are you new in the neighborhood? I haven't seen you before."

"Sort of. I've been here a while but I've been... staying in."

"Well, you're too pretty to be staying in." She says it the way grandmothers say things, as fact rather than flattery, the way they'd say "it's cold outside" or "you should eat more." "I'm Helen. This is Biscuit."

Biscuit regards me with the ancient, judgmental eyes of a dog who has seen everything and approves of nothing.

"Mia."

"Pretty name for a pretty girl. You take care now."

She wheels her cart away. Biscuit watches me over her shoulder until they round the corner.

Pretty name for a pretty girl. She said it like it was obvious. Like there was no other possibility. Like the person standing in the granola bar aisle in a DashDrop jacket and day-old jeans was, unquestionably, a pretty girl.

Marcus would have been invisible to Helen. Men in their twenties are invisible to women in their seventies. But a girl in the snack aisle is someone Helen talks to. Someone Helen calls "sweetie." Someone who exists in Helen's world in a way that Marcus never would have.

I buy the granola bars and a banana and leave.

**Stat change:** FEM +1

---

## RANDOM ENCOUNTER: Scooter Breakdown

### Passage: D05_Random_Scooter
**Trigger:** Player traveling between deliveries, Day 5
**Pool:** Random encounter, 20% chance

The scooter dies on Maple between Fourth and Fifth.

No warning. No sputtering. It just stops, the motor cutting out mid-block and the wheels coasting on momentum alone until friction takes over and I roll to a stop next to a hydrant.

"No. No, no, no." I turn the key. Nothing. Turn it again. The dashboard flickers once and goes dark. Battery, probably. The charging cable at DashDrop has been sketchy for weeks.

I'm standing on the sidewalk with a dead scooter and two more deliveries left when a pickup truck slows down. The window rolls down. A guy leans out. Big. Beard. Ball cap. The kind of guy who has "strong opinions about trucks" as a personality trait.

"You okay?"

"Scooter died."

"Hang on." He pulls over, gets out. I tense. Five days of being a woman in the world and my body already has an opinion about strange men who approach on empty sidewalks.

But he walks past me to the scooter, crouches, jiggles something near the battery housing. "These DashDrop units are garbage. The connector gets loose." He pushes something and I hear a click. Stands up, wipes his hands on his jeans. "Try it now."

I turn the key. The motor hums. The dashboard lights up.

"That should hold for a few hours. Get dispatch to look at the connector though. It'll happen again."

"Thank you. Seriously."

"No problem. My daughter rides one of these for school. Same issue." He tips his hat, literally tips his hat, like a character in a movie about the South, and gets back in his truck.

I watch him pull away and let go of the tension I was holding in my shoulders and my jaw and my fists. He was just a guy who knew about scooters. That's all. But the three seconds between him approaching and him crouching next to the battery were three seconds where my body prepared for something else. Something worse.

This is new math. Every stranger is a problem until they prove they're not. Marcus walked through the world assuming safety. Mia walks through the world calculating risk.

**Stat change:** Stress +2

---

## RANDOM ENCOUNTER: Street Musician

### Passage: D05_Random_Musician
**Trigger:** Player is in Downtown district, Day 5 evening
**Pool:** Random encounter, 50% chance

On the corner of Bell and Third, a woman is playing cello. Just sitting on a folding chair with a cello between her knees and an open case in front of her, playing Bach to an audience of nobody.

I stop. Something about it hooks me. The sound. Rich and low and physical, the kind of music you feel in your sternum before you hear it in your ears. She's got her eyes closed. Her bow arm moves in long, confident strokes. She's not performing. She's just playing, the way you breathe, because stopping is not an option.

I stand there for two songs. The first is sad and the second is sadder and both of them are beautiful in the way that things are beautiful when they don't know they're being watched.

When she opens her eyes, she sees me. Smiles.

"You looked like you needed that."

"Maybe I did."

"Bach does that. He wrote the sadness out so you don't have to carry it yourself." She adjusts a tuning peg. "I'm here most evenings. If you need him again."

I put three dollars in the case. She plays another note, single and clear, and nods.

**Stat change:** Stress -3

---

# SHOP INTERACTIONS

---

## SHOP: Corner Store — Hector Return Visit

### Passage: D05_Shop_CornerStore
**Trigger:** Player visits Corner Store on Day 5
**Condition:** `$d04_hector_met == true`

Hector is behind the register. Same position as yesterday, same comfortable lean, same warm face that doesn't change whether you're buying eggs or condoms. He's got a novela playing on a small TV behind the counter, the sound turned low, the drama turned high.

"Hey, you." He recognizes me. Not as Marcus. As the girl who came in yesterday. As Mia. "Back so soon?"

"Needed granola bars."

"Aisle three, halfway down, next to the trail mix." He knows this store the way some people know their own body. Every item filed and retrievable. "You eating enough? You look skinny."

"I'm fine."

"Everybody who says they're fine is not fine. My wife says that." He rings up the granola bars and the banana. "Six forty-two."

I pay. He bags it. The transaction is simple and warm and entirely unremarkable, which is exactly what makes it valuable. Hector treats me like a regular. Like someone who belongs here. Like someone who will keep coming back.

"You have a good day, mija."

Mija. Little daughter. He says it casually, the way you'd say "buddy" or "pal." But it goes through me like voltage. Little daughter. A term of endearment from a stranger who sees me as a young woman he is mildly protective of. A role Marcus was never cast in.

"You too, Hector."

**Flag:** `$hector_affinity += 3`
**Stat change:** FEM +1

---

## SHOP: Grounded Coffee House — Menu and Atmosphere

### Passage: D05_Shop_Grounded
**Trigger:** Player visits Grounded via Outside hub
**Condition:** `$d05_grounded_visited == true`

The menu is written in chalk behind the counter.

ESPRESSO $3
AMERICANO $3.50
LATTE $5
CAPPUCCINO $5
MOCHA $5.50
CHAI $4.50
HOT CHOCOLATE $4
DRIP $2.50

PASTRIES
MUFFIN $3
SCONE $3.50
COOKIE $2.50
BANANA BREAD $3

Everything is made in-house. I can see into the back kitchen where someone is pulling a tray of muffins out of an industrial oven. The muffins are enormous. The smell is devastating.

<<action: Buy latte>> $5
River makes it with the swirl. "Your usual," he says, even though I've been here exactly once. I let him have it. Some people earn familiarity faster than others.

<<action: Buy muffin>> $3
The muffin is blueberry. It's warm. It falls apart in my hands in a way that's either a flaw or a feature. I eat it in four bites and consider ordering another one.

<<action: Buy hot chocolate>> $4
River was right. It's good. Dark chocolate, not milk. A little spicy, like there's cayenne in it. He watches me taste it with the quiet satisfaction of someone who knows they've won.

<<action: Sit in corner booth>>
The booth is the same one from earlier. Same cracked leather. Same view of the room. I pull out my phone and for a while I'm just a girl in a coffee shop on her phone and that's enough.

<<action: People-watch>>
A woman at the window table is editing what looks like a novel manuscript, crossing out whole paragraphs with a red pen and the savage joy of someone who loves killing their own words. Two students are arguing about Foucault. An older man reads a biography of someone I don't recognize. River stocks cups and hums something tuneless and catches my eye once and raises an eyebrow and I look away too fast.

This place is good. This place feels like somewhere I could be a person.

---

# PHONE CALLS AND TEXTS

---

## PHONE: Tyler Text Chain — Day 5 Evening

### Passage: D05_Phone_Tyler
**Trigger:** Player opens Phone during Day 5 evening
**Condition:** `$tyler_active == true`

The notification badge says 3. Tyler's been busy.

> hey gorgeous
> thinking about you today
> is that weird? probably weird right lol

Three messages spread across the afternoon. The first one sent at 1 PM, the last at 4. He's thinking about me during work hours. Either his job is boring or I made an impression. Probably both.

<<choice: Respond flirty>>
> not weird 🙂
> oh good. I was sitting here like "should I text her again" and then I texted you again so clearly the answer was yes
> lol you're honest at least
> that's my whole thing. no games no bullshit just vibes. so when can I take you out? 😏

The question. Direct. No hedging.

<<choice: Accept date>>
> how about Friday?
> friday's perfect. I know a spot. low key, good food, zero pressure. I'll text you the address
> sounds good
> it's a date. wear whatever you want. you looked incredible in a delivery jacket so honestly you could show up in a garbage bag and I'd still be staring

I'm going to ignore how good that made me feel. I'm going to lock my phone and set it down and not smile and not think about what I'm going to wear on Friday.

I do all of those things except for not smiling.

**Flag:** `$tyler_date_friday = true`

<<choice: Stall>>
> we'll see 😊
> playing hard to get?
> not playing anything. just figuring stuff out
> I get it. no rush. just know the offer stands. whenever you're ready, wherever you want, I'm there
> that's sweet
> I am sweet. I'm also tall and I've been told I smell good. just throwing that out there

Okay. Okay, he's funny. That's annoying because funny makes it harder to keep distance. Funny gets in through cracks that serious can't find.

**Flag:** `$tyler_stall_d05 = true`

<<choice: Don't respond>>
I read the messages. Read them again. Put the phone down.

Tyler is fine. Tyler is attractive and interested and available and none of those things are wrong and I still can't bring myself to type back. Not tonight. Tonight the thought of someone new in my life, someone who only knows Mia, someone who would have to learn me from scratch because the person I used to be is not a person they'll ever meet, is exhausting.

The messages sit there. Delivered. Read. Unanswered.

**Flag:** `$tyler_ghosted_d05 = true`

---

## PHONE: Nolan Pre-Visit Texts

### Passage: D05_Phone_Nolan
**Trigger:** After the Nolan phone call scene
**Condition:** `$d05_nolan_called == true`

Forty minutes after the call, the texts start.

> ok I can't sleep now
> what the hell is going on with you
> are you in witness protection
> did you join a cult
> is it a sex thing
> whatever it is I've probably seen weirder
> remember when Deshawn ate that entire ghost pepper on a dare and we had to take him to urgent care
> whatever you're about to tell me can't be worse than that
> right?
> marcus?
> ok going to sleep for real now
> but I'm coming tomorrow at 6 and I'm bringing beer and you better explain everything
> love you bro
> no homo
> ok maybe a little homo
> goodnight

Sixteen texts in forty minutes. Classic Nolan. He processes anxiety through volume. The more worried he is, the more he talks, a reverse relationship between fear and silence that makes him the worst person to ever play poker and the best person to have in a crisis.

I read them all. I don't respond to any of them. Not because I don't want to. Because anything I type right now is either a lie or a truth he's not ready for, and he deserves better than both.

Tomorrow. Six o'clock. Beer and a revelation.

I turn the phone face-down. The screen glows faintly against the nightstand. Nolan's contact photo catches light. Freshman year. Orientation shirts. Both of us grinning.

Tomorrow that grin is going to fall off his face like a painting off a wall.

Or it won't. Maybe it won't. Maybe Nolan, who once drove forty minutes at 2 AM to bring me Gatorade when I had food poisoning, who threatened to fight my student loan company on the phone like a suburban attorney, who sends "love you bro no homo ok maybe a little homo" at midnight on a Wednesday, maybe that Nolan will look at Mia and see Marcus underneath and decide the outside is just packaging.

Maybe.

I turn off the light. The ceiling fist disappears into dark.

**Flag:** `$nolan_texts_read = true`

---

## PHONE: Dating App Setup

### Passage: D05_Phone_DatingApp
**Trigger:** Player opens Phone and selects Dating App tab
**Condition:** `$player.cor >= 5`

The profile setup takes ten minutes. One photo. The bathroom selfie with the good angle, the one where the light from the window catches my cheekbones and my eyes look green instead of hazel. I look at it for a long time before I upload it.

This is Mia. This is what Mia looks like to strangers on the internet.

She looks good. That's not vanity. That's data. The bones NovaCure built from Marcus's raw material are symmetrical and sharp and assembled in a combination that the algorithm is going to love.

Bio. Four words.

**Mia, 20, figuring things out.**

Submit.

I make tea. Earl Grey, which Marcus hated and Mia is discovering she likes. The kettle boils. The tea steeps. I add honey because there's no sugar.

Eleven minutes later I pick up the phone.

Forty-seven likes. Twelve matches. Six messages.

I scroll through the messages. Each one is a man who saw my photo and decided I was worth three to seven words of his time.

"hey beautiful" -- Low effort. Casting a wide net.
"you're gorgeous" -- See above but with better vocabulary.
"you seem cool, want to grab coffee?" -- Reasonable. Normal. The kind of message a human sends.
"sit on my face" -- And there it is. Six minutes into having a dating profile and someone has already suggested I use their face as furniture.
"hi! love your vibe" -- What vibe. My bio is four words long. What vibe is he detecting.
"dtf?" -- Three letters. No greeting. No punctuation. The absolute minimum viable product of human communication.

So this is dating for women. The volume is insane. Marcus went weeks without a match. Mia has been live for eleven minutes and six men have entered the chat, two of them with their dicks as their primary credential.

I close the app. The notification badge will keep climbing. By morning it'll be triple digits. The algorithm feeds fresh faces to hungry eyes and my face is very, very fresh.

<<choice: Reply to "coffee" message>>
> coffee sounds nice! where do you have in mind?
> there's this spot called Grounded on the east side. best oat lattes in town
> I actually just discovered that place. it's great
> no way! small world. I'm Chris btw

Chris. Twenty-six. Firefighter, according to his profile. Two photos, both in full gear, one with a dalmatian that's definitely not his but suggests emotional intelligence.

He seems normal. Which in the context of dating apps is so remarkable it's almost suspicious.

**Flag:** `$chris_matched = true`

<<choice: Read and close>>
I close the app without responding to anyone. Not tonight. Tonight the messages are data, not invitations. Evidence that the world sees Mia and finds her desirable. That's worth knowing. It's not worth acting on. Not yet.

**Flag:** `$dating_app_created = true`

---

## PHONE: Social Media Browse

### Passage: D05_Phone_Social
**Trigger:** Player selects Social Media on phone
**Condition:** None

I open Instagram. Same feed as always. Same people from campus I haven't talked to since dropping out. Same brunch photos and gym selfies and sunset shots that all look identical.

But tonight I'm looking differently. I'm looking at the women. Not their bodies, not like that, but their presentation. How they pose. Which angles they use. The way they hold a coffee cup so their nails show. The tilt of a chin. The placement of hair.

I'm studying. I don't call it that, not even to myself. I'm scrolling, that's all, the way everyone scrolls. But my eyes linger on the outfit posts. The before-and-after skincare transformations. The tutorials where someone turns a plain face into something polished and glowing with nothing but concealer and confidence.

Three months ago Marcus would have scrolled past all of this without registering it. He existed in a different feed, a different algorithm, a different internet. The internet for men is sports and memes and rage bait. The internet for women is a masterclass in self-presentation disguised as entertainment.

I'm learning. Unconsciously, involuntarily, in the way you learn a language by listening to it spoken around you. Not fluent yet. Not even conversational. But the words are starting to stick.

I double-tap a photo of a girl in a sundress standing in front of a mural. She has good style. The kind of style that looks effortless but probably took thirty minutes and six outfit changes. I want to learn how to do that. I want to stand in front of something beautiful and look like I belong there.

The thought startles me. Not because it's new. Because it isn't. Because some version of this thought has been sitting in my head since Day 2, growing quietly like a vine I didn't plant.

I close the app. Plug in my phone. Roll over.

**Stat change:** FEM +1

---

## PHONE: Selfie / Self-Pleasure (Optional Mature Content)

### Passage: D05_Phone_Selfie
**Trigger:** Player selects Camera on phone, evening
**Condition:** None

I hold the phone up. The front camera shows me my own face against the ceiling.

I take a photo. Look at it. Delete it. Take another. The angle's wrong. Another. Too close. Another. There.

This one is good. Not posed, not filtered, just me looking at the camera with an expression that's somewhere between tired and curious. My hair is down now, the ponytail taken out, and it falls in loose waves that weren't there when it was short. The light from the bedside lamp is warm. My eyes look big.

I look like someone I'd want to know.

I save it. Don't post it. Don't send it. Just save it. Evidence. This is what I look like at the end of Day 5. When I look back at this photo in a week or a month or a year, I'll remember this specific version of myself. The one who had just worked her first shift and drunk her first latte and been asked to a party by a stoned kid named Kevin.

The camera rolls into my gallery. One photo. The first photo of Mia, by Mia, for Mia.

---

### Passage: D05_SelfPleasure
**Trigger:** Player selects "Relax" or "Self-Care" in bedroom, evening
**Condition:** `$player.arousal >= 15`

The day sits in my body like sediment. Every interaction, every glance, every moment of being perceived collects somewhere below my navel and hums.

Trent watching me walk away. Kevin calling me cute. The bus stop man with his sideways glances. River's eyes when I said I was carrying something heavy. Tyler's texts. All of it pooled in one place, warm and insistent.

I lie on my bed. My hand finds the waistband of my sweats without my brain giving permission. Familiar now. Not clinical the way it was on Day 2, not exploratory. My fingers know the route. They know the pressure and the pace and the small circle on the left side that sends voltage up my spine.

I close my eyes.

The images come. Trent's arms in that tank top. The way he leaned in the doorframe. Confident. Hungry. Both of them. Him and Nina. What would that even look like. Three bodies. His hands on my hips. Her mouth on my neck. The thought sends a pulse through me so sharp I gasp and my hips roll upward into my own hand.

Or River. Quieter. His hands, the ones that hold a coffee cup so carefully. Those hands on my waist. In my hair. His mouth tasting like espresso and chocolate. Slow. Patient. The opposite of Trent. Taking his time until I can't take mine.

Or nobody. Just sensation. Circles and pressure and the slick heat that builds from warm to unbearable. My fingers slide inside, two of them, curled forward against the spot that makes my thighs clench. My thumb stays on the clit. I rock against my own hand, slow then faster, and the sounds that come out of me are sounds Mia makes that Marcus never could. High, breathy, desperate. "Ahh... mmn... fuck..."

I come with my face in the pillow and my back arched and the orgasm rolls through me in contractions I count without meaning to. Seven. Eight. Each one sends a wave from my center to my fingertips and my toes curl and my mouth opens and the last one is so deep it feels like it starts in my spine.

After. Lying there. Hand still between my legs, cupped over the warmth. The dampness. The pulse that keeps going, little aftershocks, for a full minute after the main event.

I'm getting used to this body. More than used to it. I'm starting to enjoy it. Not in a grateful way, not "at least the orgasms are good." In an actual, unqualified, I-want-to-feel-this-again way. My body is not a consolation prize. My body is the venue.

I clean up. Pull my sweats back up. Check my phone. Tyler sent a goodnight text.

> goodnight gorgeous 😘

I type "goodnight" and add a 😊 emoji and stare at the emoji for thirty seconds weighing its implications before hitting send.

Then I put the phone down and pull the blanket up and let sleep come.

**Stat change:** Arousal reset, Stress -5

---

# END OF FILE

## NPC Summary - Day 5 Side Content

| NPC | Scene Count | Relationship Progression |
|---|---|---|
| Owen | 2 (main + check-in) | Supportive manager, affinity +5 |
| Trent (+ Nina) | 2 (delivery + optional hallway) | Couple proposition seeded |
| Sage | 2 (delivery + flyer) | Yoga class seeded for Day 7+ |
| Kevin | 2 (delivery + campus) | Party invite, friend NPC |
| Jess | 2 (delivery + optional return) | Coffee invite, friend NPC |
| River | 2 (first visit + return) | Personal connection, affinity +10 total |
| Hector | 1 (return visit) | Regular customer relationship |
| Helen | 1 (random) | One-time warmth NPC |
| Tyler | 1 (phone chain) | Date potentially set for Friday |
| Nolan | 1 (phone texts) | Day 6 visit confirmed |
| Chris | 1 (dating app match) | Future date seeded |

## All Flags Set in This File
```
$owen_affinity (cumulative)
$trent_nina_number (bool)
$trent_declined_d05 (bool)
$sage_flyer_fridge (bool)
$kevin_number (bool)
$kevin_party_invite (bool)
$kevin_declined_d05 (bool)
$jess_affinity (cumulative)
$jess_coffee_invite (bool)
$river_affinity (cumulative)
$river_personal_moment (bool)
$hector_affinity (cumulative)
$tyler_date_friday (bool)
$tyler_stall_d05 (bool)
$tyler_ghosted_d05 (bool)
$nolan_texts_read (bool)
$chris_matched (bool)
$dating_app_created (bool)
```
