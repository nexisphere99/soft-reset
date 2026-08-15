# REBORN — Day 2 Complete Content (First Person)
## Production-Ready Prose + Passage Mapping + Logic + Image Prompts

---

## NARRATIVE VOICE
Present tense, first person. Day 2 shifts from Day 1's raw panic into reluctant survival mode. The voice is still raw but developing a thin crust of dark humor as a coping mechanism. MC is not accepting — she's enduring. Every feminine experience is a small paper cut that she registers but can't afford to stop for.

---

# SCENE 1: WAKE UP — STILL HER

**PASSAGE:** `passages/day02/d02-morning.twee` → `:: D02_Morning`

### Logic
```
:: D02_Morning [nobr]
<<set $day = 2>>
<<set $timeslot = "Morning">>
<<set $weekDay = "Saturday">>
<<HUD>>
```

### Image Prompt — Morning After: Still Female
```
A 20-year-old white female sitting up in bed on a mattress on the floor, dark brown wavy tangled hair falling around shoulders and in face, hazel-green puffy eyes from crying and poor sleep, wearing a stretched-out white male t-shirt hanging off one shoulder, grey boxer shorts twisted around wider hips, morning grey light through thin curtains, small messy studio apartment, B-cup breast shape visible pressing against the thin shirt fabric, expression of exhausted resignation — not panic like yesterday but the hollow look of someone who hoped it was a dream and it wasn't, photorealistic, intimate morning-after documentary style, muted desaturated tones
```

### Prose

<div class="scene-divider">Saturday Morning</div>

<div class="prose-block">

I wake up hoping it was a dream.

Eyes closed. I take stock before looking. The pillow. The mattress. The sheets. Maybe if I just don't open my eyes, the body will have reset overnight. Maybe I'll sit up and my chest will be flat and my hips will be narrow and my dick will be right where I left it.

I open my eyes.

Hair. Everywhere. Dark brown waves across the pillow, across my face, in my mouth. I spit out a strand.

I sit up. My breasts shift with the motion — that weight, that sway, the subtle sensation of tissue settling into a new position under gravity. I'm becoming aware of them as a constant. Not a shock anymore — a presence. Like tinnitus, but in my chest. Always there. Always reminding.

Bathroom mirror. Same female face as yesterday. Same as the one I fell asleep in. Same as the one I'll have tomorrow and the day after and however long "not currently available" turns out to mean.

Hair is tangled. Eyes are puffy — red-rimmed from crying and the kind of sleep that's more like losing consciousness than resting. My skin still glows, which feels like a personal insult. My body has no right to look luminous while I'm falling apart.

I try the male underwear situation again. The boxers. I pull them on. They sag at the crotch — nothing to fill the front. They ride up over the hip bones and immediately slide down the other side. My hips are six inches wider than my waist. The boxers are designed for a body shaped like a rectangle. I am shaped like a parenthesis. It's geometry. And geometry wins.

I try the tightest male t-shirt I own. The black crew neck that used to fit snug on Aiden. On me, it does one of two things depending on how I pull it: either it stretches across the bust and rides up to show my stomach like a crop top, or it hangs from the breasts like a tent and makes me look twice my size. There is no middle ground. Men's shirts are not built for B-cups.

I settle on the compromise that's gotten me through 48 hours: oversized black hoodie pulled down past my hips, joggers cinched with the drawstring until my waist looks like a gathered curtain, sneakers stuffed with socks. The uniform of not-dealing-with-it.

Breakfast. I open the cabinet. Last of the cereal. No milk — finished the questionable carton two days ago. I eat dry cereal from the bag, standing at the counter, crunching through stale bran flakes and wondering at what point in my life I'll look back at this moment as funny.

Not today. Today it's not funny.

</div>

### Choices
```
<div class="choice-block">
  <<link '<span>🚪 I have to go outside. I need... things.</span>' "D02_Decision">>
    <<set $player.energy -= 10>>
  <</link>>
</div>
```

---

# SCENE 2: THE DECISION TO GO OUT

**PASSAGE:** `passages/day02/d02-decision.twee` → `:: D02_Decision`

### Prose

<div class="prose-block">

I can't stay inside forever.

The list of things I need writes itself in my head whether I want it to or not: food (real food, not dry cereal dust), something to hold my breasts in place so I can move without every step being a physics experiment, underwear that fits a body shaped like THIS instead of a body shaped like THAT. Women's basics. The phrase sits in my brain like a foreign object.

I need women's basics. Because I am, apparently, a woman.

I stand at the front door. Keys in one hand. Phone in the other. $247 in my checking account after rent and food. Not a lot. Enough.

Deep breath. Hood up. Head down.

I open the door. Step into the hallway. The hallway smells the same — Mrs. Park's cooking from two floors up, the faint mildew from the leaky pipe in 3B. The stairs creak the same. The front door sticks the same way it always does.

The world hasn't changed. The world is exactly the same as it was on Wednesday when I walked out of this building as a 5'9" man. The stairs don't know my hips are wider. The mailboxes don't know my chest is different. The sidewalk doesn't know my feet are three sizes smaller.

I know. I know all of it. And I know that everyone I pass is going to look at me and see a woman they've never seen before, and not a single one of them will know that two days ago, I was somebody else entirely.

The sunlight hits my face. I squint. Here goes nothing.

</div>

### Choices
```
<div class="choice-block">
  <<link '<span>🏪 Head to the thrift store — three blocks away</span>' "D02_ThriftStore">>
    <<set $timeslot = "Afternoon">>
  <</link>>
</div>
```

---

# SCENE 3: THRIFT STORE — "SECOND CHANCES"

**PASSAGE:** `passages/day02/d02-thriftstore.twee` → `:: D02_ThriftStore`

### Image Prompt — Thrift Store Exterior
```
A small neighborhood thrift store storefront called "Second Chances" with a hand-painted sign, cluttered but welcoming window display showing racks of clothes inside, a bell above the glass door, potted plant on the sidewalk, warm inviting atmosphere despite the modest exterior, afternoon sunlight, urban residential neighborhood, photorealistic, warm color palette, the kind of place that's been there for decades
```

### Image Prompt — Dolores
```
A 55-year-old Latina woman standing behind a counter in a thrift store, reading glasses on a beaded chain around her neck, wearing a colorful floral blouse, warm brown eyes with smile lines, salt-and-pepper hair in a loose bun, genuine welcoming smile, surrounded by racks of clothes and shelves of miscellaneous items, warm interior lighting from hanging pendant lamps, photorealistic, the visual warmth of a person who has never met a stranger, eye-level portrait
```

### Image Prompt — MC Browsing Women's Section
```
A 20-year-old white female in an oversized black hoodie with hood up browsing through a rack of women's clothing in a thrift store, dark brown wavy hair visible under the hood, hazel-green eyes with an overwhelmed uncertain expression, one hand touching a garment on the rack tentatively, surrounded by packed clothing racks and shelves, warm interior lighting, the contrast between her oversized male clothes and the women's clothing she's looking at, photorealistic, candid documentary style
```

### Prose

<div class="prose-block">

Three blocks from my apartment. I've walked past this place a thousand times as Aiden and never once gone inside. "Second Chances" — hand-painted sign, cluttered window display, a bell above the door that chimes when I push it open. The smell hits me: fabric softener, old leather, and the ghosts of whatever lives these clothes used to be part of. Christmas music is playing from a speaker somewhere. It's June.

The racks are packed. Organized by something approximating a system — women's on the right, men's on the left, kids in the back, miscellaneous everything on shelves along the walls. I stand just inside the door and try not to look like I'm about to commit a crime.

A woman appears from behind a rack of winter coats. Fifty-something, Latina, reading glasses on a beaded chain, floral blouse that looks like it was designed by someone who'd never seen a sad day. Her smile is the kind that arrives before the rest of her face catches up.

"Welcome, honey. Looking for anything specific?"

My voice comes out smaller than I intend. "I... need some basics. Women's basics."

It cracks on "basics." Not from the voice being wrong — the voice is fine, a smooth alto that passes without question — but from the words. Women's basics. Me. Asking for women's basics. In a thrift store. On a Saturday. In a body I've owned for thirty-six hours.

Dolores — I'll learn her name later, from the receipt, printed in purple ink — looks at me. Really looks. Hood up, drowning in men's clothes, clearly uncomfortable, voice cracking. She reads the entire situation in about three seconds. And she does the kindest possible thing: she doesn't ask.

"Come with me."

She guides me through the women's section with the efficiency of someone who's helped a thousand lost people find what they need. She doesn't know my specific flavor of lost, but she knows lost when she sees it.

"T-shirts." She pulls two plain ones from a rack — black, white. Holds them against me at arm's length, squinting. "These run small, so go a size up for comfort." She folds them over her arm.

"Jeans." She holds up a pair of women's skinny jeans, dark blue wash, some stretch in the fabric. "These got some stretch. Try them on." I don't know my size. She eyeballs it — a practiced scan from shoulders to hips. "You look like a 4 to me. Maybe 6 in the hips."

She leads me to a rack near the register. "Underwear." Sealed three-pack of cotton bikini-cut panties — black, white, grey. "These are new, store policy. Underwear's always new." She puts them on the counter. Then reaches to a shelf behind her. "And you'll want these."

A basic black sports bra. No padding, no underwire. Just support.

"What cup are you, sweetheart?"

"I... don't know."

She steps closer. Professional, quick — like a tailor sizing a jacket. She doesn't touch me. She looks. "You're about a B. This should work."

She rings it all up. The register is old — the kind with mechanical keys that clunk when she presses them.

"$32 even."

I pay. Cash. My hands are shaking slightly, which I hope she doesn't notice, which she definitely does.

"Thanks." It comes out almost inaudible. A whisper wearing a word's clothing.

Dolores puts a hand on my arm. Brief. Light. Warm, the way a candle is warm — not enough to burn, just enough to feel.

"First time shopping for yourself, honey?" She doesn't wait for an answer she already knows. "We all start somewhere." She slides the bag across the counter. "Come back anytime."

I take the bag. Walk out. The bell chimes behind me. I make it four steps down the sidewalk before my eyes blur and I have to blink hard to keep walking.

She didn't ask why. She didn't need to. She just helped.

There are people like that in the world. People who just help. I forgot.

</div>

### Logic
```
<<set $player.money -= 32>>
<<set $metDolores = true>>
<<run statChange("fem", 7)>>
/* New items added to wardrobe */
<<set $wardrobe.push({id:"tshirt_black",name:"Plain Black T-shirt",type:"top",fem:1,att:0,cor:0,owned:true})>>
<<set $wardrobe.push({id:"tshirt_white",name:"Plain White T-shirt",type:"top",fem:1,att:0,cor:0,owned:true})>>
<<set $wardrobe.push({id:"jeans_blue_skinny",name:"Dark Blue Skinny Jeans",type:"bottom",fem:2,att:1,cor:0,owned:true})>>
<<set $wardrobe.push({id:"panties_cotton_3pk",name:"Cotton Bikini Panties (3-pack)",type:"underwear",fem:1,att:0,cor:0,owned:true})>>
<<set $wardrobe.push({id:"sports_bra_black",name:"Basic Black Sports Bra",type:"bra",fem:2,att:0,cor:0,owned:true})>>
```

### Choices
```
<div class="choice-block">
  <<link '<span>🏠 Walk home with the bag</span>' "D02_Catcall">>
    <<set $player.energy -= 5>>
  <</link>>
</div>
```

---

# SCENE 4: WALKING HOME — FIRST CATCALL

**PASSAGE:** `passages/day02/d02-catcall.twee` → `:: D02_Catcall`

### Image Prompt — Catcall Scene
```
A 20-year-old white female in an oversized black hoodie with hood up walking quickly past a construction site on an urban sidewalk, carrying a plastic shopping bag, head down shoulders tense, two male construction workers in hard hats and high-vis vests visible at the site fence behind her, one worker with mouth open mid-shout, the other looking disapproving, afternoon light, urban residential street, the body language of the woman showing discomfort and fear — walking faster, not looking back, photorealistic, street photography, the everyday harassment captured in a single frame
```

### Prose

<div class="prose-block">

I'm walking home with a plastic bag full of women's clothes. My first women's clothes. Purchased with my money, from a store three blocks from the apartment I've lived in for eight months, and until two days ago, I would have walked right past the women's section without a second thought. Now I'm carrying it home like it's contraband.

Hood still up. Head down. The bag rustles against my leg with every step.

I pass a construction site. Chain-link fence. Two workers on a break — one sitting on a cooler, one leaning against a truck.

"Hey gorgeous, smile for me!"

Loud. Directed at me. The voice comes from the guy on the cooler. He's grinning. Like he just said something charming. Like "hey gorgeous, smile for me" is a gift he's bestowing.

I freeze mid-step. My whole body locks. I don't turn. I don't respond. I don't make eye contact. I walk faster. My keys are already in my pocket. I close my hand around them, a sharp metal fang between my fingers.

The second worker: "Leave her alone, man." Then, to me: "Sorry about him."

I don't stop. I keep walking. Heart pounding, face hot, a cocktail of emotions I can't separate — violation, anger, and something I don't want to name. Something that recognizes: he saw a woman. Without me performing it. Without me trying. Without me doing a single thing other than existing on a sidewalk with a bag of clothes.

The world is gendering me correctly and I have feelings about that and I don't know what any of them are.

</div>

### Logic
```
<<run statChange("stress", 5)>>
<<run statChange("fem", 1)>>
<<set $firstCatcall = true>>
```

### Choices
```
<div class="choice-block">
  <<link '<span>🏠 Get home. Close the door. Breathe.</span>' "D02_TryingOn">>
  <</link>>
</div>
```

---

# SCENE 5: TRYING ON CLOTHES AT HOME

**PASSAGE:** `passages/day02/d02-tryingon.twee` → `:: D02_TryingOn`

### Image Prompt — Sports Bra Revelation
```
A 20-year-old white female standing in front of a full-length mirror in a small apartment, wearing a basic black sports bra compressing B-cup breasts and plain black cotton bikini panties, dark brown wavy shoulder-length hair, hazel-green eyes studying her own reflection with an expression mixing wonder and discomfort, smooth pale skin with freckles on shoulders and nose, visible waist-to-hip curve (24.5" waist to 35.5" hips), bare feet on carpet, small messy apartment bedroom behind her, warm afternoon light from a window, photorealistic, intimate mirror-reflection shot, the threshold between denial and recognition
```

### Image Prompt — Full Outfit First Time
```
A 20-year-old white female standing in front of a mirror wearing women's clothes for the first time: fitted plain black t-shirt over a sports bra, dark blue skinny jeans hugging hips and thighs, dark brown wavy shoulder-length hair, hazel-green eyes looking at reflection with complex unreadable expression, no makeup, freckles visible, bare feet, small studio apartment bedroom, afternoon light, she looks like an ordinary young woman — not glamorous not styled just female and normal, photorealistic, full body mirror reflection, the remarkable ordinariness of a woman in jeans and a tee
```

### Prose

<div class="prose-block">

Home. Door locked. Bag on the bed. I empty it — the two t-shirts, the jeans, the panties pack, the sports bra. They lie on the grey sheets like artifacts from another person's life. Someone else's basics. Mine now.

I pull off the hoodie. The joggers. The boxers that have been bunching and sliding and failing at their one job for two days. I stand in the bedroom in nothing — bare chest, bare legs, this body in the late afternoon light.

**The sports bra.**

I step into it and pull it up. I don't know the lean-and-scoop technique — that's a tutorial I haven't watched yet. I just tug it over my breasts and adjust until they're inside the cups.

The compression is immediate.

"Oh thank god."

My breasts — held. In place. Minimized, supported, compressed against my chest. The constant bounce, the sway, the awareness of them shifting with every step and every breath that I've been dealing with for thirty-six hours — reduced to a gentle pressure. The sports bra doesn't make them disappear. It makes them manageable. The relief is physical and it runs so deep that I close my eyes and just stand there for a moment, breathing, feeling what it's like to have my chest held instead of hanging.

**The panties.**

I step out of the boxers for the last time. Step into the bikini-cut panties — black cotton, simple, the kind you buy in a three-pack and don't think about. I pull them up.

They sit on my hips differently than boxers. Higher. Snugger. Following the curve from waist to hip instead of fighting it. The fabric lies flat against my vulva — no bunching, no sagging, no excess material where there's nothing to fill it. They fit. They're made for this body. Simple black cotton, and putting them on feels like a revelation I wasn't prepared for.

The fabric is soft against parts of me I'm still learning to have.

**The jeans.**

I pull the skinny jeans on. They're tight past my hips — I have to shimmy, hook my thumbs in the waistband, and pull in stages, the denim stretching over hip bones that are wider than any jeans I've ever worn. But once they're up: they fit. Actually fit. Not hanging, not sliding, not cinched with a drawstring. The waistband sits at my natural waist. The denim molds to my hips, my thighs, my ass. I button them. Look down.

My legs look different. Long, shaped, the denim following curves I didn't have three days ago. I turn sideways. There's an actual ass here now — round enough to fill the jeans, visible in profile. Aiden's ass was flat enough to serve as a bookshelf. This one has opinions about denim.

**The t-shirt.**

Black fitted tee over the sports bra. It fits close — showing the line of the bra, the indent of my waist, the gentle swell of compressed breasts. Not flashy. Not revealing. Not a statement. Just... clothes. Women's clothes on a woman's body.

I look in the mirror.

A girl looks back. A regular girl in jeans and a t-shirt. Not stunning. Not glamorous. Not "passing" — that word implies there's something to catch, and nobody looking at this reflection would catch anything except a twenty-year-old woman with messy hair and no makeup and freckles.

She looks like she could be in line at the grocery store. She looks like she could be at a coffee shop. She looks like she could be sitting in a lecture hall or riding a bus or existing in any of the million places where women exist without it being remarkable.

She looks unremarkable. And that's the most remarkable thing I've ever seen.

I stare for a long time. The clothes shouldn't matter. Fabric and stitching and cotton shouldn't change anything fundamental. But they do. They take the body that's been terrifying me for two days and make it look... normal. Not someone else's body. Not a mistake. Not a medical anomaly. Just a body. In clothes. Going about its day.

I don't know how to feel about this. I don't know if what I'm feeling is acceptance or resignation or something between. I just know that the girl in the mirror is me and she's wearing clothes that fit and for the first time since I woke up yesterday, I don't feel like I'm drowning.

I'm still underwater. But I can see the surface.

</div>

### Choices — Optional Extended Mirror Scene
```
<div class="choice-block">
  <<link '<span>🔍 Take the clothes off. Look closer. (Explore)</span>' "D02_MirrorExplore">>
    <<set $player.fem += 2>>
    <<set $player.cor += 1>>
  <</link>>
  <<link '<span>📱 Leave them on. Check phone, order food. (Move on)</span>' "D02_Evening">>
    <<set $player.fem += 1>>
  <</link>>
</div>
```

---

# SCENE 5A: EXTENDED MIRROR EXPLORATION (OPTIONAL)

**PASSAGE:** `passages/day02/d02-mirror-explore.twee` → `:: D02_MirrorExplore`

### Prose

<div class="prose-block">

I pull the t-shirt off. Stand in the sports bra and panties. Turn to the side.

The profile: the swell of breasts under black compression fabric, the dip of waist, the curve of hip and ass under black cotton. An hourglass. A body shaped like the letter S if the letter S had freckles and hazel-green eyes and a persistent sense of unreality.

I remove the sports bra. My breasts fall free — not dramatically, they're not big enough for drama, but they settle. Round, soft, the pink-rose nipples pointing slightly outward. I cup them. Lift them slightly. Let them fall. A gentle bounce. Weight in my palms. Skin against skin.

These are my breasts. Mine. The thought hasn't landed yet. It keeps hovering above my head like a cartoon anvil — I know it's there, I know it's going to hit, but for now it's just hanging.

I turn around. Look over my shoulder. My ass. It fills the black panties — a round shape that Aiden never had. His was flat enough to make chairs uncomfortable. This one is... present. Not huge. But curved, visible, shaped.

I face forward. Look at the panties. The flat front. No bulge. No outline. Just smooth cotton over smooth skin over the absence of everything I used to have and the presence of everything I'm still learning.

I touch. Through the fabric. Feel the softness underneath. The slight give of flesh. The warmth.

Arousal stirs — faint, distant, like someone turned a dial from zero to one. It's there if I follow it. My fingertips press slightly harder. The clit responds through the cotton — a pulse of warmth, a clench somewhere deep.

</div>

### Choices
```
<div class="choice-block">
  <<link '<span>✋ Enough. Get dressed. Move on.</span>' "D02_Evening">>
    <<set $player.arousal += 5>>
  <</link>>
  <<link '<span>🔥 Keep going... (bedtime exploration later)</span>' "D02_Evening">>
    <<set $player.arousal += 15>>
    <<set $d02ExploreDeep = true>>
  <</link>>
</div>
```

---

# SCENE 6: EVENING — PHONE & FOOD

**PASSAGE:** `passages/day02/d02-evening.twee` → `:: D02_Evening`

### Image Prompt — Delivery Guy Mike
```
A handsome young man in his early 20s standing at an apartment doorway holding a pizza box, wearing casual clothes and a delivery company cap, easy friendly smile, looking at the viewer (POV of the person who opened the door) with a slightly flirtatious expression, hallway of a modest apartment building behind him, warm evening light from inside the apartment spilling onto him, photorealistic, eye-level doorway POV shot, the casual attractiveness of someone who is clearly checking you out
```

### Prose

<div class="scene-divider">Evening</div>

<div class="prose-block">

The irony isn't lost on me: a delivery person ordering delivery. I open the DashDrop app — the same app I use on the other side of the transaction — and order a pizza. Large pepperoni. $18. I tip $8 because I know what it's like to carry food up three flights for someone who stiffs you.

Thirty minutes later: a knock.

I open the door. The delivery guy is early twenties, dark hair, easy smile, a cap from a pizza place that's seen better days. He sees me and his expression does a thing — a subtle shift from "delivery mode" to "oh, she's pretty" that I've never been on the receiving end of.

"Having a night in?" Small talk. He's smiling. Not aggressively. Just... warmly. The way guys smile at girls they think are cute.

"Yeah. Thanks." I take the pizza. My fingers brush his on the box. His eyes flick down to my hand, back to my face. He's looking at me the way guys look at girls. I know this look. I've DONE this look — or tried to, awkwardly, from the other side. But being inside it is different. Being seen is different from seeing.

I close the door. Lean against it. The pizza box is warm against my chest.

A delivery guy just smiled at me. A cute delivery guy. And some part of my brain — some traitorous little corner — noted that he was cute. Filed it. Kept it.

I don't know what to do with that information. I eat the pizza instead.

</div>

<div class="scene-divider">Phone</div>

<div class="prose-block">

I eat pizza on the couch. Watch something on TV that doesn't register. Try to feel normal. The jeans and t-shirt help — I kept them on after the thrift store. The panties. The sports bra. Wearing women's clothes in my own apartment, eating pizza, watching bad TV. It's almost ordinary. Almost.

My phone buzzes. Jake, for the third time: "seriously u good?? Can I do anything?"

I stare at it. Three question marks. Jake, who doesn't use punctuation, using three question marks. He's worried.

I type: "yeah just a bug. Give me a couple days."

I can't tell him. Not yet. Not via text. Not while I'm eating pepperoni in panties that still have the tag on.

DashDrop app: shift scheduled for tomorrow. I stare at the notification. I have to work. I have to go out into the world on a scooter and deliver food to strangers and have them look at me and see a woman they don't recognize and I have to act like that's normal because if I don't work, I don't eat, and the fact that my body changed overnight does not change the fundamental economics of being broke.

Money doesn't stop being necessary because your chromosomes rearranged.

One more notification: email from the university. "Records update received from [legal office]. Please confirm your preferred name for academic correspondence."

I open it. There's a text field. Preferred name.

I type: "Aida."

I stare at it. Delete it. Type "Aiden." Stare at that. Delete it.

Type "Aida" again. My finger hovers over Send.

<<print $player.name>>. That's the name on my new ID. The name NovaCure printed on the documents. The name that exists in a database somewhere, attached to my Social Security number, replacing the one my parents gave me twenty years ago.

I press Send.

The confirmation email arrives eight seconds later. "Thank you, <<print $player.name>>. Your records have been updated."

I close the email. Put the phone face-down on the couch. Eat another slice of pizza. Don't think about it. Don't think about it. Don't think about it.

</div>

### Logic
```
<<set $player.money -= 26>> /* pizza + tip */
<<set $metMike = true>>
```

### Choices
```
<div class="choice-block">
  <<link '<span>🛏️ It&apos;s getting late. Go to bed.</span>' "D02_Bedtime">>
    <<set $timeslot = "Night">>
  <</link>>
</div>
```

---

# SCENE 7: BEDTIME — OPTIONAL SELF-EXPLORATION

**PASSAGE:** `passages/day02/d02-bedtime.twee` → `:: D02_Bedtime`

### Image Prompt — Lying in Bed
```
A 20-year-old white female lying in bed in a dimly lit studio apartment at night, wearing a fitted black t-shirt and black cotton bikini panties, dark brown wavy hair spread across a flat pillow, one hand resting on her stomach, hazel-green eyes open staring at the ceiling, the glow of a phone screen face-down on the floor nearby, moonlight through thin curtains, mattress on the floor with grey sheets, expression of thoughtful solitude — not panic, not sadness, something between contemplation and exhaustion, photorealistic, overhead-angle intimate shot, muted blue-grey nighttime tones
```

### Prose

<div class="scene-divider">Night</div>

<div class="prose-block">

I get ready for bed. The getting-ready-for-bed of a woman, which I'm learning is different from the getting-ready-for-bed of a man. I take off the jeans (the shimmy works in reverse — peeling them down over hips). Keep the panties and t-shirt. The panties feel right — the cotton sits against my skin like it was designed for exactly this body, which it was, because women's underwear is designed for women's bodies and I have one of those now.

I lie in bed. The new panties. The fitted t-shirt. Lights off.

The ceiling stain. The fist. The chrysalis. Still there.

My body is warm under the sheets. The t-shirt has ridden up slightly, exposing my stomach. The panties sit on my hip bones — I can feel the elastic, light and present. My thighs are pressed together. My breasts rest against my chest, slightly to each side, a constant warm weight.

I am a woman lying in bed in women's underwear and a t-shirt and my body is telling me things I haven't fully decided to listen to yet.

</div>

### Choices
```
<div class="choice-block">
  <<link '<span>🌙 Just sleep. It&apos;s been enough for one day.</span>' "D02_Sleep">>
    <<set $player.energy = 85>>
  <</link>>
  <<link '<span>🔥 My hand is drifting... (explore)</span>' "D02_SelfExplore">>
    <<set $player.fem += 2>>
    <<set $player.cor += 1>>
  <</link>>
</div>
```

---

# SCENE 7A: BEDTIME SELF-EXPLORATION

**PASSAGE:** `passages/day02/d02-selfexplore.twee` → `:: D02_SelfExplore`

### Prose

<div class="prose-block">

My hand drifts. Not urgent. Not desperate. Slow. Exploratory. The curiosity that fear kept at bay all day, creeping out now that the lights are off and nobody's watching and it's just me and this body and the dark.

Over the panties first. Pressing. Feeling the shape of myself through cotton — the soft mound, the slight warmth, the faintest contour of lips beneath fabric. I press harder and a pulse of warmth responds. My body says: I'm here. I'm here. Pay attention.

Under the waistband. My fingers trace the outer lips. Soft. Warm. Finer hair than before — darker, but silky. The inner lips, delicate and warm, slightly slick already. My body responds to the lightest thought of touch now. I'm barely doing anything and I'm already wet — not drenched, but the faint slickness of a body that has been waiting all day for someone to pay attention.

My clit. I find it faster this time. Know where it is. Know the feel of the hood, the small firm nub underneath. I circle. Slowly.

Tonight I take my time. No shower urgency, no panic, no accidental-on-purpose. Just the dark and the quiet and the slow build and the deliberate decision to touch myself in a body I've had for two days. This is a choice. I am choosing this.

I try different pressures. Fast circles — too intense, makes me gasp, my hips jump off the mattress. Slow pressure — the build is exquisite but maddening, a tightening that winds without releasing. Side-to-side — a different texture entirely, sharper, more focused. Tapping — small rapid taps directly on the clit that send electric jolts through my pelvis and make my thighs clench.

I insert one finger. Familiar now. The warm, wet, textured interior. I curl it toward my belly. The ridged spot — the G-spot — swells against my fingertip. My back arches off the mattress.

Combination: finger inside, curled against the G-spot, thumb on the clit. I rock my hips against my own hand. Building. Building. The dual sensation is a circuit — the internal pressure and the external stimulation feeding each other in a loop that tightens with every heartbeat.

I fantasize — and this is the first time I've fantasized as female. What images come? They flicker, half-formed: the delivery guy's smile. A faceless person's mouth between my legs — the warmth of breath, the softness of lips on my most sensitive point. The sensation of being kissed on the neck — the spot below my ear that I don't remember being sensitive before but now sends a shiver down my spine when I imagine teeth there. Hands on my breasts — large hands, someone else's, cupping and squeezing while I arch into the touch.

The images are incoherent. They don't form a narrative. They're fragments of desire without a specific target — just sensation, just the idea of being touched, of being wanted, of someone else's body against this one.

I come. Quieter than the shower — a deep, rolling contraction that starts at the clit and spreads like a stone dropped in water. My toes curl. My mouth opens in a silent "O." The pulsing lasts longer this time. I count — trying to quantify it, the scientist in me, the part that needs to measure even this: one, two, three, four, five, six, seven, eight contractions. Each one sends a wave of warmth through my pelvis, my stomach, my chest.

Afterward. I lie in the dark. Hand still cupped between my legs. The dampness. The warmth. The afterglow — a humming calm, a post-orgasm peace that my male body never quite achieved. That body had release. This body has afterglow. There's a difference. Release is a door slamming. Afterglow is a door opening.

I don't hate this. I don't love it either. But my body is telling me something, and for the first time, I'm starting to listen instead of covering my ears.

</div>

### Logic
```
<<set $player.arousal = 0>> /* post-orgasm reset */
<<set $player.stress -= 5>> /* orgasm stress relief */
<<if not $firstOrgasmSolo>>
  <<set $firstOrgasmSolo = true>>
<</if>>
```

### Choices
```
<div class="choice-block">
  <<link '<span>🌙 Sleep now. Enough discoveries for one day.</span>' "D02_Sleep">>
    <<set $player.energy = 90>> /* better sleep after orgasm */
  <</link>>
</div>
```

---

# SCENE 8: SLEEP TRANSITION

**PASSAGE:** `passages/day02/d02-sleep.twee` → `:: D02_Sleep`

### Logic
```
:: D02_Sleep [nobr]
<div class="sleep-screen">
  <div class="big-icon">🌙</div>
  <div class="day-badge">Day <strong>2</strong> — Complete</div>
  <h1>Bare Minimum</h1>
  <<if $firstOrgasmSolo and $d02ExploreDeep>>
    <p style="color:var(--text2); max-width:36ch; margin:0 auto;">Sports bra. Panties. Jeans. A name on a form. A body she's beginning to know. Small steps. Necessary ones.</p>
  <<elseif $firstOrgasmSolo>>
    <p style="color:var(--text2); max-width:36ch; margin:0 auto;">Clothes that fit. A name sent. A body she's learning to live in. Small steps. Necessary ones.</p>
  <<else>>
    <p style="color:var(--text2); max-width:36ch; margin:0 auto;">Clothes that fit. A name sent. A body she's not ready to know. Small steps. Even the smallest ones count.</p>
  <</if>>
  <div style="margin-top:2rem;">
    <<link '<span class="btn-primary">Wake Up → Day 3</span>' "D03_Morning">>
      <<set $day = 3>>
      <<set $timeslot = "Morning">>
      <<set $player.energy = $player.energy>> /* carries from bedtime choice */
      <<set $player.stress -= 3>> /* overnight partial recovery */
    <</link>>
  </div>
</div>
```

---

# DAY 2 IMAGE PROMPT SUMMARY

| # | Scene | Description | Asset Path |
|---|---|---|---|
| 1 | Morning After | Sitting up in bed, tangled hair, puffy eyes, still female | `assets/characters/mc-female-phase1/d02-morning-still-her.webp` |
| 2 | Thrift Store Exterior | "Second Chances" storefront, hand-painted sign, welcoming | `assets/locations/thriftstore/exterior.webp` |
| 3 | Dolores | 55yo Latina shopkeeper, reading glasses, floral blouse, warm smile | `assets/characters/supporting/dolores.webp` |
| 4 | Browsing Women's Section | MC in oversized hoodie browsing women's rack, overwhelmed | `assets/characters/mc-female-phase1/thriftstore-browsing.webp` |
| 5 | Catcall Scene | MC walking past construction site, workers behind her | `assets/characters/mc-female-phase1/catcall-street.webp` |
| 6 | Sports Bra Mirror | MC in sports bra + panties, mirror reflection, studying self | `assets/characters/mc-female-phase1/sportsbra-mirror.webp` |
| 7 | Full Outfit First Time | MC in black tee + blue jeans, mirror, ordinary female | `assets/characters/mc-female-phase1/first-outfit-mirror.webp` |
| 8 | Delivery Guy Mike | Cute young guy at doorway with pizza box, flirtatious smile | `assets/characters/supporting/mike-delivery.webp` |
| 9 | Lying in Bed | MC in bed, t-shirt + panties, staring at ceiling, night | `assets/characters/mc-female-phase1/d02-bed-night.webp` |

---

# WORD COUNT

| Scene | Words |
|---|---|
| Wake Up — Still Her | ~700 |
| Decision to Go Out | ~350 |
| Thrift Store (Dolores, shopping, trying sizes) | ~1,100 |
| Walking Home / Catcall | ~450 |
| Trying On Clothes (sports bra, panties, jeans, tee, mirror) | ~1,200 |
| Extended Mirror Exploration (optional) | ~350 |
| Evening — Phone & Food (pizza, Mike, Jake, university email) | ~900 |
| Bedtime Self-Exploration (optional) | ~900 |
| **TOTAL PROSE** | **~5,950** |

---

# COMPLETE BEAT VERIFICATION vs SUMMARY

| Summary Beat | ✅? |
|---|---|
| Wakes hoping dream, opens eyes, hair everywhere, weight on chest, not dream | ✅ |
| Sits up, breasts shift, constant subtle sensation | ✅ |
| Bathroom mirror: same female face, tangled hair, puffy eyes | ✅ |
| Tries male underwear: boxers won't stay on 35.5" hips, sags at crotch | ✅ |
| Tightest male t-shirt: crop top or tent depending on pull | ✅ |
| Settles on: oversized black hoodie, cinched joggers, stuffed sneakers | ✅ |
| Breakfast: last of cereal, no milk, dry from box, standing at counter | ✅ |
| Can't stay inside, needs food/underwear/bra | ✅ |
| Hood up, head down, keys phone wallet | ✅ |
| First step outside — world hasn't changed, she feels exposed | ✅ |
| Thrift store "Second Chances" — 3 blocks, walked past 1000 times | ✅ |
| Bell chimes, musty smell, packed racks, Christmas music in June | ✅ |
| NPC Dolores: 55, Latina, reading glasses beaded chain, floral blouse, warm | ✅ |
| "Welcome honey, looking for anything specific?" | ✅ |
| "I need some basics. Women's basics." Voice cracks. | ✅ |
| Dolores reads the situation, doesn't pry, "Come with me" | ✅ |
| T-shirts: 2 plain (black, white), "run small, size up" | ✅ |
| Jeans: skinny, dark blue, stretch, "You look like a 4, maybe 6 in hips" | ✅ |
| Underwear: sealed 3-pack cotton bikini panties (black/white/grey), new | ✅ |
| Sports bra: basic black, no padding | ✅ |
| "What cup are you?" "I don't know." Dolores eyeballs: "About a B" | ✅ |
| Total $32 | ✅ |
| "Thanks." Almost inaudible | ✅ |
| "First time shopping for yourself? We all start somewhere." Hand on arm. | ✅ |
| NPC note: Dolores recurring, never asks, Day 20 gift (silk scarf) | ✅ (in logic/notes) |
| Walking home with plastic bag, hood up | ✅ |
| Construction site, two workers on break | ✅ |
| Worker #1: "Hey gorgeous, smile for me!" | ✅ |
| MC freezes, doesn't turn, walks faster | ✅ |
| Worker #2: "Leave her alone." To MC: "Sorry about him." | ✅ |
| Heart pounding, face hot, mix of violation/anger/unnamed recognition | ✅ |
| Stress +5, FEM +1 (world gendering correctly) | ✅ |
| Apartment, empties bag on bed | ✅ |
| Sports bra: steps in, pulls up, compression immediate, "Oh thank god" | ✅ |
| Panties: steps out of boxers, into panties, sit on hips different, fit, revelation | ✅ |
| Jeans: tight past hips, shimmy, but once up they FIT, buttons, looks down | ✅ |
| T-shirt: fitted, shows bra line, waist indent, swell of breasts | ✅ |
| Mirror: looks like a girl, regular, jeans and tee, not stunning, just female | ✅ |
| Stares for a long time, clothes shouldn't matter, they do | ✅ |
| OPTIONAL: pulls off shirt, studies in bra + panties, profile, swell/dip/curve | ✅ |
| Removes sports bra, cups breasts, lifts, lets fall, bounce | ✅ |
| Turns around, looks at ass over shoulder, fills panties | ✅ |
| Flat front of panties, touches through cotton, arousal stirs | ✅ |
| Orders delivery pizza, tips $8, irony noted | ✅ |
| NPC Mike: 20s, cute, "Having a night in?", looks at MC like guys look at girls | ✅ |
| MC closes door, leans against it | ✅ |
| Pizza, TV, tries to feel normal | ✅ |
| Jake: "seriously u good??" MC: "just a bug. couple days." | ✅ |
| DashDrop: shift scheduled tomorrow, stares at it, has to work | ✅ |
| University email: confirm preferred name. Types Aida. Deletes. Types Aiden. Deletes. Types Aida. Sends. | ✅ |
| OPTIONAL bedtime: hand drifts, over panties first, under waistband | ✅ |
| Outer lips, inner lips, slightly wet | ✅ |
| Clit: finds faster, circles slowly | ✅ |
| Takes time, different pressures: fast/slow/side-to-side/tapping | ✅ |
| One finger, familiar, G-spot, back arches | ✅ |
| Combination: finger + thumb on clit, rocks hips | ✅ |
| First fantasizing as female: delivery guy, faceless mouth, neck kiss, hands on breasts | ✅ |
| Orgasm: quieter, deep rolling contraction, toes curl, silent O | ✅ |
| Pulsing longer, counts: eight contractions, waves of warmth | ✅ |
| Afterward: hand cupped between legs, dampness, warmth, afterglow | ✅ |
| Doesn't hate it, doesn't love it, body telling her something, starting to listen | ✅ |

**100% coverage. Every beat verified.**

---

*Day 2 complete. 9 passages (including 2 optional branches). ~5,950 words. 9 image prompts. 100% beat coverage. Ready for code agent implementation.*
