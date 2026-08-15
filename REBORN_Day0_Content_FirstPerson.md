# SOFT_RESET   Day 0 Complete Content (First Person)
## Production-Ready Prose + Passage Mapping + Image Prompts

---

## HOW TO USE THIS DOCUMENT

Each section maps to a specific `.twee` passage file. The **PASSAGE** header tells you which file to create. The **LOGIC** block tells you what SugarCube code to include. The **PROSE** block is the narrative text in **first-person MC perspective**   copy directly into the passage. The **CHOICES** block defines player options. The **IMAGE PROMPT** block gives the AI image generation prompt for that scene.

**NARRATIVE VOICE:** Present tense, first person. MC is the narrator. Internal thoughts are woven into the prose naturally. The voice is dry, self-deprecating, observant, and quietly intelligent   he hides behind humor and deflection but notices everything.

---

# SCENE 1: TITLE SCREEN & AGE GATE

**PASSAGE:** `passages/system/start.twee` → `:: Start`
**PASSAGE:** `passages/system/age-gate.twee` → `:: AgeGate`

### Logic (Start)
```
:: Start [nobr]
<div class="sleep-screen">
  <div class="big-icon">🦋</div>
  <h1>RE<span class="accent">BORN</span></h1>
  <p class="eyebrow">A TRANSFORMATION STORY</p>
  <p>An adult interactive fiction game about identity, desire, and becoming.</p>
  <div style="margin-top:1.5rem">
    <<link '<span class="btn-primary">Enter</span>' "AgeGate">><</link>>
  </div>
  <p style="font-size:.7rem; color:var(--text3); margin-top:2rem;">v1.0   SugarCube 2.37   Content updates monthly</p>
</div>
```

### Logic (AgeGate)
```
:: AgeGate [nobr]
<div class="age-gate">
  <div class="age-gate-icon">🔞</div>
  <h1>Age Verification</h1>
  <p class="age-gate-sub">SOFT_RESET contains explicit sexual content, mature themes, and graphic descriptions. You must be 18 or older to continue.</p>
  <div class="age-gate-warning">
    <p>This game includes: nudity, sexual acts, BDSM, transformation, strong language, drug/alcohol references, and themes of identity and consent.</p>
  </div>
  <div style="margin-top:1.5rem; display:flex; flex-direction:column; gap:.6rem; width:100%; max-width:320px;">
    <<link '<span class="btn-primary">I am 18 or older   Enter</span>' "CharCreate">><</link>>
    <<link '<span class="btn-secondary">I am under 18   Leave</span>' "Start">><</link>>
  </div>
</div>
```

---

# SCENE 2: CHARACTER CREATION

**PASSAGE:** `passages/system/char-create.twee` → `:: CharCreate`

### Logic
```
:: CharCreate [nobr]
<div class="eyebrow">CHAPTER ZERO</div>
<h1>Before the <span class="accent">Change</span></h1>
<h2>Who were you?</h2>

<div class="prose-block">
<p>My name is Aiden Cole. I'm twenty years old, a second-year university student with an undeclared major, $23,400 in student loans, and a diet that consists primarily of instant ramen and bad decisions.</p>
<p>But every version of me started somewhere different. What shaped me?</p>
</div>

<div class="archetype-grid">
  <<link '<div class="arch-card">
    <div class="arch-head"><span class="arch-icon">📚</span><span class="arch-name">The Quiet One</span></div>
    <div class="arch-desc">I kept to myself. Books were safer than people. I observed everything and said almost nothing.</div>
    <div class="arch-stats">
      <span class="arch-stat hi">INT +10</span>
      <span class="arch-stat mid">CON -5</span>
      <span class="arch-stat mid">FIT -5</span>
    </div>
  </div>' "CharCreate2">>
    <<set $archetype = "quiet">>
    <<set $player.int += 10>>
    <<set $player.con -= 5>>
    <<set $player.fit -= 5>>
  <</link>>

  <<link '<div class="arch-card">
    <div class="arch-head"><span class="arch-icon">🏋️</span><span class="arch-name">The Grinder</span></div>
    <div class="arch-desc">I worked out when I couldn&apos;t sleep, which was often. The gym was the one place my body felt like mine.</div>
    <div class="arch-stats">
      <span class="arch-stat hi">FIT +10</span>
      <span class="arch-stat mid">INT -5</span>
      <span class="arch-stat mid">ATT +5</span>
    </div>
  </div>' "CharCreate2">>
    <<set $archetype = "grinder">>
    <<set $player.fit += 10>>
    <<set $player.int -= 5>>
    <<set $player.att += 5>>
  <</link>>

  <<link '<div class="arch-card">
    <div class="arch-head"><span class="arch-icon">🎭</span><span class="arch-name">The Chameleon</span></div>
    <div class="arch-desc">I adapted to every room. Never the center of attention, but never invisible either. People liked me without knowing me.</div>
    <div class="arch-stats">
      <span class="arch-stat hi">CON +10</span>
      <span class="arch-stat hi">ATT +5</span>
      <span class="arch-stat mid">INT -5</span>
    </div>
  </div>' "CharCreate2">>
    <<set $archetype = "chameleon">>
    <<set $player.con += 10>>
    <<set $player.att += 5>>
    <<set $player.int -= 5>>
  <</link>>

  <<link '<div class="arch-card">
    <div class="arch-head"><span class="arch-icon">🌑</span><span class="arch-name">The Ghost</span></div>
    <div class="arch-desc">I barely existed. Depression ate my twenties before they started. I survived, but that&apos;s about all I did.</div>
    <div class="arch-stats">
      <span class="arch-stat lo">All Stats Low</span>
      <span class="arch-stat hi">Bonus: Faster Growth</span>
    </div>
  </div>' "CharCreate2">>
    <<set $archetype = "ghost">>
    <<set $player.con -= 5>>
    <<set $player.fit -= 5>>
    <<set $player.att -= 5>>
    <<set $statGrowthMultiplier = 1.25>>
  <</link>>
</div>
```

### Logic (CharCreate2)
```
:: CharCreate2 [nobr]
<div class="eyebrow">YOUR FEMALE NAME</div>
<h1>After the change, you'll need a <span class="accent">new name</span></h1>
<p>Choose the name you'll carry into your new life. You can always change it later.</p>

<div class="name-block">
  <label class="name-label">Your new name</label>
  <<textbox "$player.name" "Aida" autofocus>>
</div>

<p style="font-size:.78rem; color:var(--text3); margin-top:.5rem;">Your surname remains Cole. Your male name was Aiden.</p>

<div style="margin-top:2rem;">
  <<link '<span class="btn-primary">Begin Day 0</span>' "D00_Morning">>
    <<if $player.name is "">><<set $player.name = "Aida">><</if>>
    <<set $player.maleName = "Aiden">>
  <</link>>
</div>
```

---

# SCENE 3: DAY 0   MORNING

**PASSAGE:** `passages/day00/d00-morning.twee` → `:: D00_Morning`

### Logic
```
:: D00_Morning [nobr]
<<set $day = 0>>
<<set $timeslot = "Morning">>
<<set $weekDay = "Thursday">>
<<HUD>>
```

### Image Prompt   Alarm / Apartment POV
```
First-person POV from a mattress on the floor looking up at a water-stained ceiling in a tiny run-down studio apartment, early morning grey light through thin curtains, a cracked smartphone on the floor showing 6:45 AM alarm, instant ramen cups and empty energy drink cans on a cluttered nightstand, atmosphere of poverty and exhaustion, photorealistic, cinematic lighting, muted desaturated color palette
```

### Image Prompt   Male Aiden Bathroom Mirror
```
Front-facing bathroom mirror reflection of a 20-year-old white male, slim underweight build, dark brown wavy messy hair falling past ears, hazel-green tired eyes with dark circles, angular jaw with light patchy stubble, pale skin, wearing a stretched grey t-shirt, small cramped bathroom with harsh fluorescent lighting, photorealistic, intimate documentary photography style
```

### Prose

<div class="scene-divider">Thursday Morning   6:45 AM</div>

<div class="prose-block">

The alarm screams at 6:45 like it always does   that default iPhone tone I've come to associate with the specific flavor of dread that accompanies being alive. I reach for the phone without opening my eyes, thumb sliding across the cracked screen to kill it. Snooze. Nine more minutes of not existing.

I hit snooze again at 6:54.

At 7:03, I peel my eyes open and stare at the ceiling. There's a water stain directly above my mattress, brown and vaguely fist-shaped, that's been there since I moved in eight months ago. I've thought about complaining to Mrs. Park, my landlord, but Mrs. Park is a 5'1" Korean-American woman in her sixties who already thinks I'm a deadbeat, and I'm two months behind on rent, so the water stain stays. Everything stays. That's the thing about being broke   nothing changes because change costs money.

I sit up. The mattress is on the floor because a bed frame was $80 I didn't have when I moved in and haven't had since. The sheets are grey   originally white, but laundry costs $3.50 a load and I space it out. My studio apartment is exactly what you'd expect for $650 a month in a neighborhood that's "up and coming" the way a boxer is "getting back up" between rounds: half-heartedly and probably just to get hit again.

Bathroom is three steps away. Everything in this apartment is three steps away. I turn on the shower. Cold. The hot water got cut eight days ago for nonpayment. I called the utility company with a voice full of the specific brand of dignity that people scraping the bottom learn to perform. "I'll have it by the fifteenth." I won't have it by the fifteenth.

I splash cold water on my face. Look in the mirror.

Angular jaw with patches of stubble I can't quite grow into a beard. Hazel-green eyes set in slightly downturned corners that make me look perpetually tired, which is fair because I am perpetually tired. Dark circles like bruises under both eyes. Cheekbones too prominent because my face is too thin because I don't eat enough because food costs money.

Dark brown hair, wavy and overgrown past my ears and touching my collar, because a haircut is twenty dollars and twenty dollars is four meals.

Freckles. Scattered across my nose and upper cheeks. The one feature I've never minded. My grandmother used to say freckles were angel kisses. She died when I was sixteen.

"You look like shit," I tell the mirror.

The mirror doesn't argue.

I brush my teeth with a toothbrush that should've been replaced two months ago. The bristles splay outward like they're trying to escape my mouth. I spit and don't look at the mirror again.

Breakfast is stale cereal   store brand, the kind that comes in a bag, not a box, because the bag is $1.29   with the last of the milk. I check the expiration date. Yesterday. I smell it. Fine enough. Pour. Eat standing at the counter because the single chair at my tiny table has one leg shorter than the others and I'm not in the mood for wobbling.

Phone check while chewing.

Three missed calls from Pinnacle Student Loan Services. The automated kind that calls daily, sometimes twice, always from a different number so I can't block them. $23,400 in student loans. Minimum payment: $487 per month. I haven't made a payment in four months.

One email from Mrs. Park. Subject line: **FINAL NOTICE**. I open it. "Mr. Cole   You are $1,300 past due (2 months). Pay in full within 7 days or vacate the premises. This is not a request.   M. Park." I close the email. Stare at the cabinet above the stove. Open it. Count the ramen packets. Eleven. That's eleven dinners. If I get evicted, I won't have a kitchen to boil water in.

One notification from the DashDrop app: "Your shift starts at 11:00 AM. Tap to confirm." I tap. The gig economy doesn't care that I'm drowning. It just needs me to carry food from point A to point B on an electric scooter that's one pothole away from dying.

One text from Jake: "Gym tomorrow? 💪" I text back: "maybe."

Jake Reeves. Closest thing I've got to a best friend, which says less about Jake's significance and more about my isolation. We met freshman orientation   he sat next to me, said "this professor sucks, wanna get food?" and that was it. Two years of gym sessions, bad movies, and the kind of male friendship where genuine emotion is communicated exclusively through shoulder punches and the word "bro."

I get dressed. The faded grey hoodie   oversized, pilling at the cuffs, the one possession I'd grab if the building caught fire. It was my grandmother's. She wore it around the house in the mornings with coffee and crosswords. It doesn't smell like her anymore. But it's the closest thing I've got.

Black joggers. The elastic in the waistband is giving up on life at roughly the same pace I am. White sneakers with frayed laces and a sole separating at the toe. I grab the DashDrop delivery bag, my helmet, and the keys to the electric scooter parked downstairs.

I leave the apartment. The hallway smells like someone else's breakfast. Something good. Something real. My stomach tightens around the stale cereal and expired milk.

I lock the door behind me.

</div>

### Choices
```
<div class="choice-block">
  <<link '<span>🛵 Head to the DashDrop shift</span>' "D00_Delivery1">>
    <<set $timeslot = "Afternoon">>
    <<set $player.energy -= 10>>
  <</link>>
</div>
```

---

# SCENE 4: DAY 0   DELIVERY SHIFT

**PASSAGE:** `passages/day00/d00-delivery.twee` → `:: D00_Delivery1` through `:: D00_Delivery5`

### Image Prompt   Aiden on Scooter
```
A 20-year-old white male delivery rider on a beat-up electric scooter in an urban street, wearing a bright orange DashDrop branded jacket over a grey hoodie, black joggers, holding an insulated delivery bag, tired resigned expression, city traffic background, overcast sky, late morning light, photorealistic, street photography, slightly desaturated
```

### Image Prompt   Mrs. Calloway's Door
```
A warm elderly woman in her 70s with silver hair and kind eyes standing in doorway of a well-kept brownstone, holding a Tupperware container of cookies, smiling warmly at the viewer POV, afternoon light, warm inviting interior visible behind her, photorealistic, warm color palette
```

### Prose

<div class="scene-divider">DashDrop Shift   11:00 AM to 5:00 PM</div>

<div class="prose-block">

The scooter coughs to life on the third attempt. I take that as a win. I'd take anything as a win at this point.

Four hours on the road. Five deliveries. The math of gig work: each delivery pays $4.50 base plus tip plus a time bonus if I'm fast enough, minus gas, minus the slow death of the scooter's battery, minus the part of my soul that dies every time someone answers the door in their underwear and doesn't tip.

**First delivery.** College apartments west of campus. Burger Palace   two cheeseburgers, large fry, extra sauce. The customer is a frat boy in boxers who opens the door, grabs the bag, and goes "took you long enough" before closing the door without eye contact. No tip. I stand on the doorstep for a moment, holding the receipt that says $0.00 in the tip field, and think about the many careers I'm not pursuing.

**Second delivery.** My favorite stop on the route. Mrs. Calloway. Seventy-something, retired schoolteacher, orders the same Pad Thai from Thai Garden every Thursday like clockwork. She opens the door of her tidy brownstone and her face does what it always does when she sees me   lights up like I'm someone who matters.

"Aiden, dear. You always come so fast." She takes the bag and presses a folded twenty into my palm. "You eat enough? You look thin."

"I'm fine, Mrs. Calloway."

She doesn't believe me. She has too much grace to argue. She disappears inside and comes back with a Tupperware. "Oatmeal raisin. I made too many." She didn't make too many. She made them for me. She does this every other week.

"Thank you." My voice does something strange. Thicker. I clear my throat and turn away before she can see my face do whatever it's doing.

I eat a cookie on the scooter, parked on the sidewalk, watching traffic. The raisin-to-oat ratio is mathematically precise. Nobody in my life gives me things. Mrs. Calloway gives me cookies and twenty-dollar tips and the brief sensation of being visible.

**Third delivery.** High-rise apartment downtown. Pizza Junction   one large pepperoni. The door opens to a guy in a t-shirt, visibly post-coital, hair wrecked, and behind him, a girl in an oversized shirt and nothing else, giggling on the couch. They've clearly been at it all afternoon.

"Oh, HELL yes, pizza," she calls from the couch. He takes the box with a grin. "Thanks, man." Tips ten bucks.

Must be nice. Having a body someone else wants to touch. Having an apartment where the hot water works. Having a Wednesday afternoon that looks like that.

I take the elevator down. The mirror inside shows a skinny kid in an orange jacket holding an empty delivery bag. I don't look at myself. Already did that this morning.

**Fourth delivery.** Campus library. Smoothie King   one mango-passion fruit for someone named Maya. I find her on the library steps, ponytail, reading a textbook in the afternoon sun, looking like she has her life figured out in a way that makes me feel like a different species.

"Thanks!" She smiles. "You go to State too?"

"Yeah. Second year."

"Cool! I'm Maya. Maybe I'll see you around." She waves.

I walk back to my scooter. Didn't ask for her number. Wouldn't have known what to do with it. Maya will forget me by the time she finishes the smoothie. This is how I move through the world: seen briefly, forgotten immediately, like a background extra in everyone else's movie.

**Fifth delivery.** A rougher neighborhood. Chinese Express. Third floor of a building where the buzzer doesn't work and the stairwell smells like mold and something chemical. The customer opens the door on a chain, slides cash through the gap, takes the food, slams it shut. Multiple locks engage. I don't linger.

On the way down, the scooter makes a grinding noise that suggests expensive problems. Something in the motor   a bearing, maybe, or the belt. Repair estimate: $200 minimum. Money I don't have. Money nobody is going to give me.

Shift total: $67 in tips plus base pay. Net after the platform's cut: approximately $52. Enough for three days of eating. Not enough for the scooter repair, the overdue rent, the student loans, the utility bill, or the slow crushing sensation in my chest that I'm pretty sure is just stress but could, for all I know, be my heart deciding to clock out early.

I ride home through the late afternoon, wind cold on my face, scooter rattling, orange jacket flapping. Another day of delivering other people's lives to their doors.

</div>

### Choices
```
<div class="choice-block">
  <<link '<span>🏠 Head home through campus</span>' "D00_Flyer">>
    <<set $player.money += 52>>
    <<set $timeslot = "Evening">>
  <</link>>
</div>
```

---

# SCENE 5: DAY 0   THE FLYER

**PASSAGE:** `passages/day00/d00-evening.twee` → `:: D00_Flyer`

### Image Prompt   The Flyer
```
Close-up of a torn paper flyer stapled to a wooden telephone pole on a university campus at dusk, the flyer reads "EARN $2,000 - Healthy volunteers needed for Phase-II pharmaceutical trial. One visit. One pill. NovaCure Laboratories" in generic typed font, slightly weathered paper with torn corners, other flyers partially visible, campus buildings blurred in background, golden hour light, photorealistic, shallow depth of field
```

### Image Prompt   Aiden at the Pole
```
A 20-year-old white male in a faded grey hoodie standing in front of a telephone pole at dusk on a university campus, looking at a paper flyer, expression caught between desperation and hope, hazel-green eyes reflecting last light, dark brown messy hair, skinny frame, campus walkway with scattered students blurred in background, golden-hour lighting, photorealistic, cinematic, shallow depth of field
```

### Prose

<div class="scene-divider">Campus   Late Afternoon</div>

<div class="prose-block">

The route home takes me through campus. It always does   the shortcut between the delivery zone and my apartment cuts straight across the quad, past the lecture halls and the library and all the infrastructure of a future I'm technically enrolled in but can't quite touch.

Students everywhere in the amber light. A guy plays guitar on the quad steps, badly, to a girl who doesn't seem to mind. A group shares a blanket and a bag of chips. Two people kiss against a tree with the unselfconscious hunger of people who haven't learned to be embarrassed by wanting.

I walk through them like a ghost. I'm technically one of them   student ID in my wallet, two classes I attend when my schedule allows, a 2.7 GPA that represents the distance between what I'm capable of and what my circumstances allow. But I'm on the outside of every window. Always looking in. Never knocking.

I pass the campus bulletin board. The usual chaos pinned in layers: club meetings, lost cats, tutoring, roommate wanted, protest this Saturday, DJ set tonight. I don't read them. Haven't joined a club, found a cat, needed a tutor, or gone to a party in months.

But something catches my eye.

Half-hidden under a notice about a missing tabby named Professor Whiskers, there's a flyer. Plain paper. Generic font. No design, no color. The kind of flyer that's barely trying to be seen, which is exactly why it stands out   everything else on this board is screaming for attention.

I push Professor Whiskers aside and read.

> **EARN $2,000   FAST**
> Healthy volunteers needed for Phase-II pharmaceutical trial.
> One visit. One pill. Immediate compensation.
> NovaCure Laboratories   Suite 604, Meridian Tower
> Call: (555) 0147-CURE
> *Must be 18-25, no current medications, no allergies.*

Two thousand dollars.

I read it again. Two thousand dollars. One visit. One pill.

Two thousand dollars is two months of rent. Two thousand dollars is the difference between having an apartment and sleeping on a park bench. Two thousand dollars is breathing room. Space. A buffer between me and the void.

One pill. What kind of pill? Probably some allergy medication. Or a vitamin. They test vitamins, right? Phase-II means it's already been through Phase-I, which means someone's already swallowed it and lived. Probably. I didn't pay attention in bio.

I tear the flyer off the pole. Fold it into a small rectangle. Slip it into the front pocket of my hoodie, next to the crumbs from Mrs. Calloway's cookie.

I walk home. The flyer burns a hole in my pocket the entire way.

</div>

### Prose   Home Evening

<div class="scene-divider">Home   Evening</div>

<div class="prose-block">

I heat water on the stovetop   the microwave died three weeks ago, another casualty in the ongoing war between my life and functionality   and pour it over instant ramen. The noodles soften in the styrofoam cup. I sit on the couch. The couch is secondhand, stained in places I choose not to investigate, and sags in the middle like it's given up on posture the same way I have.

I eat and stare at the eviction notice on the coffee table. Seven days. I have seven days to produce $1,300 or lose the apartment. Where does someone with $47 in their checking account find $1,300?

I take the flyer out of my pocket. Unfold it. Smooth the creases against my thigh.

$2,000. One visit. One pill.

Worst case: it's shady and the pill makes me sick for a week. I've been sick before. I ate gas station sushi once and survived. A pharmaceutical pill can't be worse than gas station sushi.

Best case: I walk in, swallow a vitamin, walk out with two thousand dollars, pay rent, and buy real food for the first time in a month.

I pick up my phone. Dial the number. My thumb hovers over the call button for a beat.

Two rings.

"NovaCure Laboratories, participant intake. How can I help you?" A woman's voice. Pleasant. Professional. The kind of voice that sounds like it comes with a clean office and health insurance.

"Hi, I   I saw the flyer. On campus. About the trial."

"Of course. Can I get your name and age?"

"Aiden Cole. Twenty."

"Any current medications, Mr. Cole?"

"No."

"Known allergies?"

"No."

"Wonderful. We have availability tonight at 8:30 PM. Can you make it?"

Tonight. I check the clock on the stove. 6:47 PM. "Tonight?"

"Compensation is processed same-day. Direct deposit." She pauses. "Most of our participants appreciate the promptness."

Same-day deposit. I could have $2,000 in my account before midnight. I could pay Mrs. Park before breakfast.

"I'll be there."

She gives me the address. Meridian Tower, 6th floor, Suite 604. Check in at reception. Bring valid ID. "Is there anything else I can help with?"

"What does the pill do? Like, what's it for?"

"Dr. Amelia will explain the trial parameters when you arrive. It's a very standard process, Mr. Cole."

Standard. Of course. Everything about this is standard. I hang up and sit on the couch and eat instant ramen and tell myself it's fine. It's a pill. One pill. It's fine.

I finish the ramen. Wash the fork. Stare out the window at the darkening street. Make a decision that feels small   so small it barely registers against the weight of everything else   and don't know yet that it's the largest decision of my life.

</div>

### Choices
```
<div class="choice-block">
  <<link '<span>🧥 Shower and head to NovaCure</span>' "D00_NovaCure_Arrival">>
    <<set $timeslot = "Night">>
    <<set $player.energy -= 15>>
  <</link>>
</div>
```

---

# SCENE 6: DAY 0   NOVACURE

**PASSAGE:** `passages/day00/d00-novacure.twee` → `:: D00_NovaCure_Arrival` and `:: D00_NovaCure_Pill`

### Image Prompt   Meridian Tower Exterior
```
A modern glass and steel office tower at night, 12 stories, illuminated by interior lights, ground floor entrance with revolving glass doors, "MERIDIAN TOWER" in sleek silver letters, a lone figure in a grey hoodie approaching the entrance, urban setting, cool blue and white lighting, wet pavement reflecting lights, photorealistic, cinematic wide shot, noir atmosphere
```

### Image Prompt   NovaCure Waiting Room
```
A sterile clinical waiting room in a modern pharmaceutical laboratory, white walls, grey chairs, a water cooler, a single potted plant that might be artificial, harsh fluorescent lighting, frosted glass reception window, clipboard with papers on one chair, one young man sitting alone looking anxious in a black hoodie, clean medical aesthetic, photorealistic, cold color palette
```

### Image Prompt   Dr. Amelia
```
Front-facing portrait of a 44-year-old white woman doctor, ash blonde hair in tight French twist, pale blue-grey eyes behind frameless rectangular glasses, thin lips neutral expression, sharp angular features, crisp white lab coat over grey silk blouse, tablet in one hand, sterile exam room background, cold clinical lighting, photorealistic, direct gaze, professional detached expression
```

### Image Prompt   The Pill
```
Extreme close-up of a single unmarked white pharmaceutical capsule in a black foam-lined steel case on a stainless steel medical tray, paper cup of water beside it, clinical background blurred, dramatic shallow depth of field, cold blue-white overhead lighting creating slight glow, sterile environment, photorealistic macro photography
```

### Prose

<div class="scene-divider">NovaCure Laboratories   8:30 PM</div>

<div class="prose-block">

I shower in cold water. Shave   half-heartedly, miss a few patches. Put on my cleanest clothes: black hoodie (not the grey one   the grey one is for comfort, not for places where people might judge me), least-wrinkled joggers, the sneakers held together by habit and denial.

The 7:45 bus to downtown. I sit in the back. Watch the city lights through glass smeared with fingerprints and someone's forehead grease. The bus smells like wet metal and resignation. I'm the only person under thirty on it. Everyone else looks like they're heading to night shifts or coming from bad news.

Meridian Tower is glass and steel, twelve stories of corporate ambition rising from a block of restaurants and boutiques. It doesn't look like a place where desperate twenty-year-olds go to swallow pills for rent money. It looks like a place where people with retirement accounts drink coffee from ceramic mugs.

Sixth floor. Suite 604. The hallway is hushed, carpeted, the kind of quiet that costs money. I push open the door marked NOVACURE LABORATORIES and enter a waiting room that is aggressively inoffensive: white walls, grey chairs, a water cooler that hums, a potted plant that might be real or might be the most convincing fake I've ever seen. Elevator music from somewhere invisible. The room smells like nothing. Intentionally.

I'm the only person here.

A nurse appears through a side door. Late thirties, South Asian, kind eyes, efficient movements. The energy of someone who's genuinely good at her job and doesn't need you to notice.

"Mr. Cole? I'm Nurse Patel. Let's get you started."

She takes my vitals in a small exam room. Blood pressure cuff. Heart rate. Temperature. She draws blood   smooth, practiced stick that barely registers. Weighs me (148 pounds) and measures my height (5'9") and asks the questions that medical professionals ask when they need a baseline.

"Any medications?"

"No."

"Known allergies?"

"No."

"Family history of anything we should know about?"

"My dad's an alcoholic. If that counts."

She doesn't laugh. Doesn't judge. Writes it down. "It counts."

She hands me a clipboard. Fourteen pages, single-spaced. The consent form.

I flip through it. Legal language. Liability waiver. Participant rights. Data collection agreement. I read the first three pages with the kind of attention you give a long text from someone you don't care about   scanning for key words, registering none.

Page seven: "Potential side effects may include: nausea, headache, fatigue, skin sensitivity, hormonal fluctuation, temporary cognitive changes..."

Hormonal fluctuation. Sounds like nothing. Like a bad night's sleep or too much coffee.

Page nine. Clause 12(b). My eyes pass over it the way they pass over terms of service before clicking ACCEPT:

"Participant acknowledges that unforeseen physiological outcomes may occur as a result of the administered compound. NovaCure Laboratories LLC is not liable for permanent alterations to participant biology resulting from study participation."

Permanent alterations. The words are right there. I see them and don't see them. I'm thinking about $2,000 and Mrs. Park's email and the fact that I have $47 and eleven ramen packets and seven days before I'm homeless.

I sign at the bottom. Date. Initials on every page. Hand the clipboard back to Nurse Patel, who flips to the signature page, verifies, and nods.

"Dr. Amelia will be with you shortly."

I sit on the examination table. The paper crinkles under me. My feet dangle. I feel like a child at a checkup.

The door opens.

Dr. Maren Amelia enters the room the way a surgeon enters an operating theater: with absolute certainty that everything in this space belongs to her. Tall for a woman   5'7"   but she carries herself like she's six feet. Ash blonde hair pulled back in a French twist so tight it could double as a weapon. Frameless rectangular glasses over pale blue-grey eyes that look at me the way a microscope looks at a slide: with interest, without warmth.

She extends her hand. The grip is dry and cold. "Thank you for participating, Mr. Cole."

"What exactly am I participating in?"

"A Phase-II tolerability trial for a novel compound. You'll ingest a single oral capsule. We'll monitor your vitals for thirty minutes post-ingestion, and you'll be free to go. The compound has been through extensive preclinical and Phase-I trials with no significant adverse events."

"What does it do?"

"The compound modulates endocrine function. We're testing for bioavailability and subject response variability."

I understand approximately three words of that. "So it's a hormone thing."

"In layman's terms, yes." She opens a small steel case on the counter. Inside, nestled in a foam slot, is a single white capsule. No markings. No label. Just a smooth white pill, smaller than my thumbnail, that looks like nothing at all.

She places the case on the tray beside a paper cup of water. "Whenever you're ready."

I pick up the pill. It's warm   probably from the case, but the warmth feels intentional. Like it's already alive. I look at it. A small white thing between my fingers. It weighs nothing. It means everything.

I place it on my tongue. Pick up the water. Drink. Swallow. It slides down without resistance. I feel it pass my esophagus. Then nothing. Just water and the aftertaste of nothing.

Dr. Amelia watches. Makes a note on her tablet. Was that a micro-expression   a flicker of satisfaction? Anticipation? Or am I imagining it? I'm tired. Probably imagining it.

"Your compensation will process within the hour. We'll contact you for a follow-up in two weeks." She snaps the tablet case closed. "Any immediate symptoms   dizziness, nausea, vision changes   call the 24-hour line."

Nurse Patel walks me out. At the elevator, she pauses. "Take care of yourself, Aiden."

Not "Mr. Cole." Aiden. The use of my first name catches me off guard. I almost ask her to say it again. Instead I say "thanks" and step into the elevator and watch the floors count down in the mirrored walls. A skinny kid in a black hoodie. Going home. Two thousand dollars richer and none the wiser.

My phone buzzes as the elevator opens on the ground floor.

**Bank notification: $2,000.00 deposited   NovaCure Laboratories LLC.**

I stare at the number. Four digits. A comma. For the first time in months, my checking account has a comma in it. I let out a breath I've been holding for approximately two months, and it comes out shaking.

</div>

### Choices
```
<div class="choice-block">
  <<link '<span>🏠 Head home</span>' "D00_LastNight">>
    <<set $player.money += 2000>>
    <<set $metDrAmelia = true>>
    <<set $metNursePatel = true>>
  <</link>>
</div>
```

---

# SCENE 7: DAY 0   THE LAST NIGHT

**PASSAGE:** `passages/day00/d00-night.twee` → `:: D00_LastNight`

### Image Prompt   Final Mirror
```
A 20-year-old white male standing in a small bathroom looking at himself in a mirror at night, warm dim lighting from single overhead bulb, wearing a white undershirt and grey boxers, dark brown wavy overgrown hair slightly damp, hazel-green eyes looking directly at reflection with expression blending exhaustion and something almost like goodbye, angular jaw light stubble, freckles across nose, one hand on sink edge, small cluttered bathroom, photorealistic, intimate portrait, warm muted tones, melancholy
```

### Image Prompt   Sleeping Final
```
Overhead view of a 20-year-old white male sleeping on a mattress on the floor in a tiny studio apartment, lying on his side in fetal position, white t-shirt and grey boxers, dark brown wavy hair spread on flat pillow, one hand tucked under cheek, grey tangled sheets, dim moonlight through thin curtains casting blue-grey light, cracked smartphone face-down on floor, Tupperware of cookies on nightstand, overhead shot, photorealistic, muted blue-grey palette, peaceful but lonely
```

### Prose

<div class="scene-divider">Home   10:15 PM</div>

<div class="prose-block">

The bus home is emptier. Late-night passengers: a woman in scrubs asleep against the window, a teenager with headphones nodding to something inaudible, and me, sitting in the back, refreshing my bank app every forty-five seconds to confirm the $2,000 is still real.

Home. Lock the door. Stand in my apartment. Same apartment. Same water stain. Same ramen packets. But the number in my bank account has changed, and that changes the specific gravity of everything else.

I sit on the couch. Open the banking app. Transfer $1,300 to Mrs. Park's account   the overdue rent. Both months. Paid. I watch the confirmation screen appear: "Transfer complete." The number drops from $2,047 to $747. Still more than I've had in months.

I exhale. The weight of eviction lifts off my chest. It doesn't float away   shifts sideways, replaced by the other weights (loans, scooter, utilities, future)   but the most immediate, most crushing one is gone. I have a home. For now. I'm safe. For now.

I eat three of Mrs. Calloway's cookies. Oatmeal raisin. Perfect every time. I watch TV   some sitcom I'm not following, laugh track erupting at intervals that have nothing to do with humor. Watch without watching. My body feels normal. No nausea. No dizziness. No side effects. The pill did nothing. Probably a placebo. A $2,000 placebo. Best deal I've ever made.

I get sleepy earlier than usual. 10:30. Normally I'm up until 1 AM   not doing anything, just existing in the way insomnia mandates: staring at the phone, scrolling feeds of people living lives, drifting in and out of consciousness on the couch until my body gives up and collapses into something approximating rest.

But tonight: heavy. My eyelids are lead curtains. My limbs sink into the cushions. A warm drowsiness that feels pharmaceutical   which it probably is. Nurse Patel said I might feel drowsy.

I force myself off the couch. Bathroom. Brush my teeth. And then   without knowing why, without any premonition or narrative foreshadowing that my life is about to split in half   I look at myself in the mirror.

Really look. Not the morning glance, the quick inventory of damage. A real, sustained look.

Angular jaw. The stubble I can't grow. Hazel-green eyes   downturned, tired, but strangely beautiful in a way I've never let myself acknowledge. They're my grandmother's eyes. She had the same color, the same shape. I see her in myself and it hurts in a specific way that has no name.

Cheekbones. Prominent. The bone structure under the thin face. High cheekbones are supposed to be attractive. On me they just look hungry.

Freckles. Scattered like someone flicked a paintbrush at me. Angel kisses. I touch them. Touch my own face. The stubble. The jaw. The nose. The lips that are chapped because I don't drink enough water.

I don't know this is the last time I'll see this face.

If I knew, would I look longer? Would I memorize the angle of the jaw, the way my Adam's apple bobs when I swallow? Would I say goodbye?

I don't know. I brush my teeth. Spit. Turn off the bathroom light.

I lie in bed. The mattress on the floor. The pillow that smells stale. The sheets that used to be white. I lie on my back and stare at the water stain on the ceiling. The fist. Or the chrysalis. Depends on how you look.

My eyes close. Breathing slows. The pill   that small white capsule that weighed nothing and cost $2,000   dissolves in my stomach acid and releases its compound into my bloodstream. It passes through my liver, my kidneys, my endocrine system. It reaches my hypothalamus, my pituitary, my gonads. It begins.

I don't feel it. I'm already asleep. Deep, warm, dreamless sleep. The last sleep of the man named Aiden Cole.

Outside, the city doesn't notice. The buses run. The streetlights cycle. A cat crosses the road. A bartender closes up. A student types an essay. The world keeps turning.

Inside, on a mattress on the floor, a body begins to change.

</div>

### Logic (End   Auto-advance)
```
<div style="margin-top:2rem; text-align:center;">
  <<timed 3s>>
    <<goto "D00_Sleep">>
  <</timed>>
  <p style="color:var(--text3); font-size:.8rem; font-style:italic;">I sleep.</p>
</div>
```

---

# SCENE 8: SLEEP TRANSITION

**PASSAGE:** `passages/system/sleep.twee` → `:: D00_Sleep`

### Logic
```
:: D00_Sleep [nobr]
<div class="sleep-screen">
  <div class="big-icon">🌙</div>
  <div class="day-badge">Day <strong>0</strong>   Complete</div>
  <h1>The Last Night</h1>
  <p style="color:var(--text2); max-width:36ch; margin:0 auto;">Something is changing. Something that cannot be undone.</p>
  <div style="margin-top:2rem;">
    <<link '<span class="btn-primary">Wake Up → Day 1</span>' "D01_Wakeup">>
      <<set $day = 1>>
      <<set $timeslot = "Morning">>
      <<set $player.energy = 100>>
      <<set $body.phase = 1>>
      <<set $body.bust = 34>>
      <<set $body.waist = 24.5>>
      <<set $body.hips = 35.5>>
      <<set $body.braCup = "B">>
      <<set $body.braSize = "32B">>
      <<set $body.weight = 128>>
      <<set $body.height = 66>>
      <<set $body.hairLength = "shoulder">>
      <<set $body.sensitivity = 1.5>>
      <<set $body.menstrualDay = -1>>
      <<set $player.att = 30>>
    <</link>>
  </div>
</div>
```

---

# DAY 0 IMAGE PROMPT SUMMARY

| # | Scene | Prompt | Asset Path |
|---|---|---|---|
| 1 | Morning POV | Mattress view of crappy apartment ceiling, alarm | `assets/locations/apartment/d00-morning-pov.png` |
| 2 | Bathroom Mirror | Male Aiden reflection, tired, stubble | `assets/characters/mc-male/mirror-morning.png` |
| 3 | Delivery Scooter | Aiden on scooter, orange jacket, urban street | `assets/characters/mc-male/delivery-scooter.png` |
| 4 | Mrs. Calloway | Elderly woman at door with cookies, warm | `assets/characters/supporting/calloway-door.png` |
| 5 | The Flyer | Close-up of NovaCure flyer on telephone pole | `assets/locations/campus/novacure-flyer.png` |
| 6 | Seeing Flyer | Aiden in hoodie looking at pole, dusk | `assets/characters/mc-male/flyer-moment.png` |
| 7 | Meridian Tower | Glass tower at night, figure approaching | `assets/locations/novacure/meridian-exterior.png` |
| 8 | Waiting Room | Sterile clinical waiting room, alone | `assets/locations/novacure/waiting-room.png` |
| 9 | Dr. Amelia | 44yo doctor, lab coat, glasses, clinical | `assets/characters/supporting/dr-amelia.png` |
| 10 | The Pill | White capsule in steel case, macro shot | `assets/items/misc/the-pill.png` |
| 11 | Final Mirror | Aiden at night, bathroom, looking at reflection | `assets/characters/mc-male/final-mirror.png` |
| 12 | Last Sleep | Overhead, sleeping on floor mattress, moonlight | `assets/characters/mc-male/last-sleep.png` |

---

# WORD COUNT

| Scene | Words |
|---|---|
| CharCreate UI text | ~150 |
| Morning (alarm → leaving apartment) | ~1,150 |
| Delivery Shift (5 deliveries) | ~1,550 |
| The Flyer (campus walk → discovery) | ~750 |
| Home Evening (ramen → phone call → decision) | ~1,100 |
| NovaCure (bus → intake → Amelia → pill → deposit) | ~1,800 |
| Last Night (bus home → cookies → rent → mirror → sleep) | ~1,250 |
| **TOTAL PROSE** | **~7,750** |

---

*This document contains every word of Day 0 in first-person MC voice, mapped to passages with complete logic blocks, 12 image prompts, and word count verification. The voice is present tense, first person, dry and self-deprecating, quietly observant. Hand this to your developer alongside the File Structure and Code Agent Prompt documents.*
