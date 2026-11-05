const addCoverStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .page.cover-page .page-title {
            font-size: 3.5rem;
            text-align: center;
            margin-top: 60px;
            border-bottom: none;
            color: #3498db;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.2);
            letter-spacing: 2px;
            position: relative;
            animation: titleGlow 2s ease-in-out infinite alternate;
        }
        .theme-dark .page.cover-page .page-title { color: #FFD700; }

        @keyframes titleGlow {
            from { text-shadow: 3px 3px 6px rgba(0,0,0,0.2); }
            to   { text-shadow: 0 0 20px rgba(52,152,219,0.6), 3px 3px 6px rgba(0,0,0,0.2); }
        }
        .theme-dark .page.cover-page .page-title { animation: titleGlowDark 2s ease-in-out infinite alternate; }

        @keyframes titleGlowDark {
            from { text-shadow: 3px 3px 6px rgba(0,0,0,0.4); }
            to   { text-shadow: 0 0 20px rgba(255,215,0,0.6), 3px 3px 6px rgba(0,0,0,0.4); }
        }

        .page.cover-page .page-content {
            text-align: center;
            font-size: 1.4rem;
            line-height: 2;
            margin-top: 50px;
            min-height: 400px;
            position: relative;
            padding: 40px;
        }
        .page.cover-page .page-content::before {
            content: "✦";
            position: absolute; top: 10px; left: 50%;
            transform: translateX(-50%);
            font-size: 2rem; color: #f1c40f; opacity: 0.5;
        }
        .page.cover-page .page-content::after {
            content: "✦";
            position: absolute; bottom: 10px; left: 50%;
            transform: translateX(-50%);
            font-size: 2rem; color: #f1c40f; opacity: 0.5;
        }

        .page.outro-page .page-title {
            font-size: 2.8rem;
            text-align: center;
            margin-top: 80px;
            border-bottom: none;
            color: #2c3e50;
            position: relative;
        }
        .theme-dark .page.outro-page .page-title { color: #ecf0f1; }

        .page.outro-page .page-content {
            text-align: center;
            font-size: 1.3rem;
            line-height: 1.8;
            margin-top: 60px;
            min-height: 400px;
            padding: 40px;
            background: linear-gradient(135deg, rgba(52,152,219,0.1) 0%, rgba(241,196,15,0.1) 100%);
            border-radius: 15px;
            position: relative;
            overflow: hidden;
        }
        .page.outro-page .page-content::before {
            content: "";
            position: absolute; top: 0; left: 0; right: 0; height: 3px;
            background: linear-gradient(90deg, #3498db, #f1c40f);
        }
        .page.outro-page .page-content::after {
            content: "";
            position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
            background: linear-gradient(90deg, #f1c40f, #3498db);
        }
        .page.outro-page .page-content .contact-info {
            font-size: 1.2rem;
            font-weight: bold;
            margin-top: 30px;
            padding: 15px;
            background: rgba(255,255,255,0.2);
            border-radius: 10px;
            display: inline-block;
        }
        .theme-dark .page.outro-page .page-content .contact-info {
            background: rgba(255,255,255,0.1);
        }

        .page.cover-page::before {
            content: "";
            position: absolute; top: 20px; left: 20px; right: 20px; bottom: 20px;
            border: 2px dashed rgba(52,152,219,0.3);
            border-radius: 10px; pointer-events: none;
        }
        .page.outro-page::before {
            content: "";
            position: absolute; top: 20px; left: 20px; right: 20px; bottom: 20px;
            border: 2px solid rgba(241,196,15,0.2);
            border-radius: 10px; pointer-events: none;
        }
    `;
    document.head.appendChild(style);
};

addCoverStyles();

const pages = [
    {
        title: "Just Like A Whisper",
        content: `LIGHT NOVEL

JUST LIKE A WHISPER

Total Episodes: 22
`
    },
    {
        title: "Prologue",
        content: `One night, an entire village was burned to ashes by the Cease Kingdom.

Two children — Feris and Joie — were not there that night.
They had gone to their uncle's house.

When they returned...
there was nothing left.

Houses reduced to smoke.
Silence where life once lived.

They searched their home —
and found their mother burned,
their father dead, still gripping a small knife, as if he had fought till his last breath.

Shaken, terrified, and alone,
they took the knife and fled back to their uncle.

But war had already reached there.

Their uncle and his family tried to protect them —
helping Feris and Joie escape into the jungle
with only a few tools and fading hope.

The uncle's family was captured.
Enslaved.

Two children.
A burning past.
A world at war.

And in the depths of the jungle...
their real story begins.
`
    },
    {
        title: "Episode 1",
        content: `They walked deep into the forest until they found an old, silent tent.

No one was there.

What they didn't know was that the owner of this tent had once been part of the massacre.

They waited, hoping someone would return.
But as the hours passed, winter crept in.
The cold grew sharper.

Left with no choice, they entered the house.

They ate the food their uncle had given them and tried to rest.
But soon, Joie's body began to burn with fever.

Feris stayed awake all night.

He tried to calm her, talked to her softly, made her laugh when he could.
Inside, he was breaking.
Outside, he smiled — pretending to be strong.

That night, one laughed to hide fear,
and one watched the darkness to protect.

Eventually, exhaustion won.
They fell asleep.

Morning came.

Feris woke up early.

He cleaned the house, explored the nearby area,
and built a small cooking place using soil and stones — simple, but safe.

When everything was ready,
Joie woke up.

She slowly walked to him, held his hand, and said softly:

"Brother… I'm hungry."
`
    },
    {
        title: "Episode 2",
        content: `Feris nodded softly.
"Okay, Joie."

He went outside to look for food. After some time, Joie suddenly called out,
"Brother, come here fast!"

When Feris rushed back, he saw that Joie had reheated the food from the previous night. It was simple, but warm. They sat together and ate quietly.

Soon after, Joie's fever started rising again. Feeling weak, she lay down to rest.

Feris understood that food was becoming a serious problem. Before leaving, he gently said,
"Joie, I'm going out to arrange food. I'll come back soon."

As he held her hand, he felt it — her hand was ice-cold.

"Please don't go, brother," Joie said softly, almost whispering.

"I'll be just outside. You can call me anytime, okay?" Feris replied, trying to sound calm.

"Okay, brother," she answered.

Outside, Feris stood thinking desperately. Then he remembered the house. He searched every corner carefully — and finally found two apples and a watermelon. His eyes lit up with relief.

He immediately grabbed an apple and went back.
"Wake up, sister! Look, I found an apple for you. Want to eat?"

Joie slowly replied, "No…"

Her fever was getting worse.

Feris brought firewood inside and used the matches his uncle had given him. He built a small fire and prepared a warm resting place nearby. Then he went back to Joie.

"Come on, sister. I've made a warm place for you. Wake up."

"I don't have enough energy…" Joie cried weakly.

Before she could finish, Feris gently but firmly lifted her.
"Hey, come with me."

He placed her carefully near the fire.

"Oh… thank you very much, brother," Joie whispered.

Later, Feris cut all the fruits and returned.
"It's 7:20, sister. Please wake up."

Joie tried to speak but stopped.

"For my sake?" Feris said softly.

She held his hand and slowly sat beside him. Feris felt warmth returning to her fingers — slowly, but surely. They ate together, shared the silence, and soon drifted into sleep beside the fire.
`
    },
    {
        title: "Episode 3",
        content: `Feris woke up early again. He picked up the small knife his father had left behind — the one he had gripped till his last breath — and began practicing with it. He thought of Joie, and of his own life. He had to protect them both. That was why he wanted to become a good fighter.

After some time he came back home and saw Joie standing in front of him, looking better. Joie hugged Feris and said, "Thank you, brother." Feris was very happy at that moment. He said, "Oh, dear."

After that, Joie said, "Brother, have you prepared something to eat? I'm a bit hungry."

Feris replied, "No, sister — but soon."

Then they heard a sound — someone shouting, "Please don't do that!" It was the voice of a child, younger than Feris and Joie.

Feris took her hand, gripped the knife, and whispered, "Shhh — wait."

The child cried, "You traitors! Give me my family's food!"

There was only one person standing there. He replied, "Hey, child — even your father doesn't speak to me like that. Who are you?"

Feris said to Joie, "Listen — go to the right side. Use your full power to throw a big stone. When you throw it, come back to the child. Okay?"

Joie said, "Uh… I'm tired, bro. I'm not fully rested. But I'll do it."

Joie threw the stone with all her strength. It landed near the robber. Then Feris came in slightly and hurled another stone — full power — into his back. The robber sat down.

Feris said to Joie, "Grab him — bring him to the house. I'll come soon."

The robber replied, "Please don't do that. I have a mother waiting for me. If I don't bring her food, she'll die of starvation. Please."

Feris replied, "Uh — what?"

The robber said, "Because of the war, many people have died. Only my mother and I are alive in the whole family. Please don't take the food."

Feris said, "I understand your condition. I'll give you some food — but remember this: don't rob anyone's house. Because if you save your mother by robbery, someone else's mother dies."

Feris gave the robber a quarter of the food.

Then he turned back and saw Joie and the child watching him, smiling.

Joie said, "Brother, how sweet you are!"

And the child said, "Thank you very much. But why didn't you kill him?"

Feris said, "His mother was dying of starvation. That's why he did all this."

Then Feris said, "Now — you can give me your home's address."

And they moved forward.
`
    },
    {
        title: "Episode 4",
        content: `They finally reached the child's home.

The child ran ahead and grabbed both Feris and Joie's hands, pulling them inside.

The child's father looked at them with relief.
"Oh, thank you so much! You saved us, children. We have enough food now to survive," he said.

Feris raised an eyebrow.
"Wait… why didn't you stop your child? He ran so fast to grab the food. I thought it was mine!"

The father laughed.
"Yes, he's always impulsive. He saw the food and ran without thinking. Thank you for understanding, young man."

Feris nodded, a small smile on his face.
"Okay, sir. We'll meet again soon. Goodbye!"

As they were leaving, the child's mother called out and handed them the food they had saved.
"This belongs to you," she said warmly.

Feris accepted it gratefully.
"Thank you very much, ma'am."

As they walked back home, Joie giggled.
"Oh, brother — I know you too well! You grabbed the food immediately because you didn't want to take risks. If you'd said no thanks, and if she hadn't given it to you, you'd have had to find food elsewhere. That's why you acted fast!"

Feris laughed, slightly embarrassed.
"Haha… you're right, Joie. I didn't want to take any chances."

He looked at the amount of food they had.
"This is more than enough. We can manage for at least three days."

Back at their house, they prepared some food and preserved the rest carefully. They ate together — the warmth of the fire and the satisfaction of surviving filling the room.

Feris spoke seriously.
"Joie, now we have a good head start. We should find more food before this runs out. I need to work somewhere."

Joie looked worried.
"Please, brother… what will I do? If you weren't here, I'd be helpless…"

Feris smiled softly and put a hand on her shoulder.
"Shh… don't worry. I won't let anything hurt you. You'll help me in your own way too, right?"

Joie nodded, a little reluctantly.
"Yes… as you wish," she said sadly.

After finishing cleaning the house, Joie started her chores while Feris stepped outside to practice with the knife.
The sun rose higher, and the forest around them seemed calm — but both knew the war was still far from over.
`
    },
    {
        title: "Episode 5",
        content: `Feris woke up early and stepped outside with the small knife in his hand. The blade felt heavier than before — not in weight, but in meaning. It had been his father's. As he practiced swinging it, trying to remember how his father once moved, the knife slipped and cut a thin line across his thumb.

Blood beaded. Feris didn't flinch. He only stared at the red — then wrapped his hand with a strip of cloth and kept practicing.

Joie rushed out of the house, fear on her face.
"Brother, what happened?"

Feris looked at the knife, half shocked, half thoughtful.
"Joie… this blade is small. But it's ours. It's all we have."

Joie took it carefully and examined it. After a moment, her expression changed.
"Brother… the edge is dull. It won't cut wood like an axe, and it won't protect you against a sword. We need to sharpen it — or find a better one."

Feris's excitement faded into silence. Joie handed it back and thought for a second. Inside her mind, another worry appeared — the food. She ran back to check it.

Feris sat on a stone, staring at the ground, thinking. Where would he find a good blade? Were there towns nearby? Were there shops still alive after the war?

"Brother, the food is ready!" Joie called.

"I'll come in some time," Feris replied, still lost in thought.

Joie came closer and sat beside him.
"What happened, bro?"

"I need a real blade. This knife is too small. Maybe nearby towns sell tools."

Joie tilted her head slightly.
"What if we check our old house? Maybe father kept something there."

Feris looked at her, surprised, then smiled.
"Mashallah… you're right, Joie."

"I'm going now," he said, standing up.

Joie grabbed his hand gently.
"Eat first, brother."

"If I go with you, it might be dangerous," Feris said softly.

Joie looked at him, hurt.
"So you'll leave me alone here waiting for you?"

Feris sighed. "Okay, my dear. Let's go."

She pulled him toward the house. "First food, then anywhere."

After eating, they walked together toward the old house. Inside, everything was silent and empty. Behind a wooden wall, they pushed together and managed to move it. Joie slipped inside and found an old locked wooden box.

Night had almost fallen.
"Run," Feris said, grabbing her hand. "Before predators come."

As they ran, a large white figure appeared in the darkness. Joie whispered, trembling,
"Brother… is that a wolf?"

Feris's whole body shook. He couldn't speak. Then a soft sound came — a sheep's cry. They both exhaled in relief and ran faster, not stopping until they reached home.

Inside, Feris tried breaking the box, but it was reinforced with iron.
"Try forcing it with the knife," Joie suggested.

Feris wedged the blade into the lock and twisted hard. The lock gave way with a crack. He opened the box slowly.

It was empty.

For a moment, there was only silence. Then Joie burst out laughing.
"Sorry, brother… I couldn't control it."

Feris stared at the box, disappointed. Then he smiled faintly. The tension faded. They put the box aside, ate quietly, and lay down to sleep — tired, safe for the night, and together.
`
    },
    {
        title: "Episode 6",
        content: `Feris woke up with frustration burning inside him. He dragged the wooden box outside, placed it on a high stone, and picked up the knife. Without thinking, he started striking the box again and again. His anger controlled his hands.

On the third heavy hit, the box slipped from the stone and crashed onto the ground.
Crack.
The lid opened slightly.
Small metal objects rolled out and scattered on the soil.

Feris froze.
He dropped to his knees and picked one up.
A coin.
Old lire — worn, dull, forgotten.

Confused, he turned the box upside down and looked carefully. Inside, there was a hidden layer — a false bottom. It had made the box look empty, but beneath it…
A small pouch of coins and a whetstone.

His breath caught.
"Joie!" he shouted.

She ran outside, startled. Feris grabbed her hands, almost laughing, almost crying.
"Look! There was a hidden layer… coins, and a whetstone to sharpen the knife!"

Joie smiled, her eyes shining — enjoying his excitement more than the discovery itself.

Later, Feris went a little distance away to practice. While moving through the trees, he noticed a small house nearby. An old man — a sailor — was leaving, carrying his things.

Joie called Feris back for food. They ate quietly.
"Brother," Joie said softly, "the food will only last two or three days. What have you planned next?"

Feris lowered his eyes.
"I don't know, Joie. I've tried… but I can't find anything."

She moved closer.
"We still have tomorrow. And if you want… I can help too."

Feris smiled faintly.
"Inshallah… I'll figure something out."

Later that day, Feris went back and saw the sailor returning.
"Hello, sir," Feris said politely. "I'm Feris. I live nearby. How much would it cost to sail to the nearest village?"

"One lira per person," the old man replied.

Feris nodded and walked back home, thinking. They needed work. They needed money.

That's when he remembered the child.
He ran to the child's house.
"Feris, brother!" the boy said happily.

"I need a favor," Feris said. "I need five lire."

"I have it," the child replied without hesitation. "You can return it anytime."

Feris thanked him deeply and returned home.

Night began to fall. Joie was cleaning the house when Feris walked up behind her and gently covered her eyes with a cloth.
"Brother… what are you doing?" she laughed.

"Don't you like surprises?" he asked.

"Yes."

"Then come with me."

And hand in hand, they stepped forward into whatever awaited them next.
`
    },
    {
        title: "Episode 7",
        content: `Feris led Joie onto the ship and gently removed the cloth from her eyes.
"See it, Joie."

For a second, she didn't speak. Then her eyes filled with tears. She hugged Feris tightly, crying with happiness.
"Thank you, brother… it's our first time on a boat."

Feris smiled softly.
"You were holding too much tension inside. I wanted to make us happy… even if just for a while."

Joie wiped her tears and smiled.

Feris waved toward the shore.
"Hello, sir. I'm back."

The old sailor — Daylan — stepped forward and looked at them carefully.
"You both really want to go? Do you have two lire?"

"Yes," Feris replied.

They stepped onto the boat.

The ship was old, built of worn wood, but peaceful. As it moved forward, the sound of water calmed their hearts. Feris and Joie sat together, talking quietly, watching the sky change colors as they headed toward Piedmont.

Night was beginning to fall.

Suddenly, another boat appeared from the side.
Daylan stiffened. He slowed down and tried to move back.
A harsh voice came from the other boat.
"Stay where you are. Don't try to move."

A soldier jumped down, sword in hand.
"We don't have anything," Daylan said quickly.

Joie clutched Feris's chest, crying, her whole body shaking.
Feris held her tightly. Then he slowly reached for the knife at his belt.
"I will protect you, sister."

His heart was pounding. Inside, fear screamed at him to run — but he couldn't swim. He looked at Joie. That fear turned into resolve.

Feris stepped forward.
He charged the soldier with everything he had. The sword slashed near him. Feris ducked low, drove his shoulder into the man's chest, and stabbed the knife into his side.

The soldier gasped — then staggered. He didn't fall at once, but his grip on the sword loosened. Daylan grabbed an oar and struck him hard across the head. The man collapsed.

Silence.
Everyone froze.

The captain on the other boat turned to flee. Daylan grabbed Feris's arm.
"Don't. Let him go. If we chase, we die."

Feris's hands trembled. He nodded.

No one spoke.

They dragged the body to the nearby land and continued forward, shaken and quiet.

Feris glanced at the other boat.
"What about that one—"

Daylan interrupted him calmly.
"That boat is yours now."

Feris stared at him.
"What?"

"You earned it," the man said. "But you don't know how to sail. For now, leave it here. I'll keep it safe. You can sell it to me… or learn to sail one day."

Feris nodded slowly.

They left the boat hidden and continued toward the village.
Behind them, the water was calm.
But Feris's heart was not.
`
    },
    {
        title: "Episode 8",
        content: `They reached Piedmont with Daylan by noon. The town felt alive — voices, footsteps, carts, and unfamiliar faces everywhere. Joie's eyes sparkled with curiosity, while Daylan quietly asked Feris if they could buy some food.

"Joie, stay with uncle for a bit," Feris said gently. "I'll be back soon."

Joie frowned slightly.
"Brother, aren't we here to explore?"

"We are," Feris smiled, "but first… work."

Feris moved through the market, asking shopkeepers and traders for small jobs. Some shook their heads. Some ignored him. Still, he didn't stop. Before returning, he bought a simple but beautiful dress — nothing expensive, but chosen carefully. He hid it in Daylan's boat.

Meanwhile, Joie explored the market with the old man, touching fabrics, watching people, smiling at small things she had never seen before.

When Feris returned, Daylan said, "I'll be back after sunset."

The siblings explored the town together — narrow streets, small stalls, quiet corners. While walking, Joie asked softly,
"Did you find any work, brother?"

Feris shook his head.
"No. But maybe it's better this way. If I work here… what will you do?"

He paused, then added, "I want to start something of our own. A small business. We'll come here every week to sell."

Joie smiled warmly.
"Thank you, brother."

As the sun dipped low, the boat returned. They boarded and headed back toward the forest, tired but peaceful.

That night, after eating, Feris said quietly,
"Joie… I have something for you."

Her eyes lit up.
"For me?"

He brought out the dress. Joie froze for a second — then hugged him tightly, tears forming.
"You are the best person in my life, brother."

She tried it on and stood shyly in front of him.
"You look beautiful," Feris said honestly. "Seeing you happy makes me happy."

Joie smiled, then carefully folded the dress.
"I'll wear it on a special day. It's my first gift. I'll never forget it."

That night, they slept peacefully.

Morning came quietly. The food was almost gone. Feris woke early, staring at the ceiling. One lira left. No supplies. No certainty.

He sat outside, thinking.
What kind of business should I start?
`
    },
    {
        title: "Episode 9",
        content: `"I should start wood cutting," Feris said quietly to himself.
"It's a simple beginning… but a beginning."

When he returned home, Joie was already awake.
"Joie," Feris said, "I think wood cutting is the best option for now."

Joie smiled immediately.
"I'll be happy if you do that, brother. I can help too."

Feris laughed.
"You? The girl who struggles with cutting vegetables wants to cut wood?"

Joie crossed her arms, pretending to be offended.
"Oh really? And how many times have you helped me, huh?"

She paused, then added softly, "Only yesterday… because I was tired after everything."

Feris sighed and smiled.
"Alright, alright. Don't be angry."

Then more seriously, "But listen — I won't allow you to do such hard work."

Joie narrowed her eyes playfully.
"We'll see how you say no to me."

Feris raised his hands.
"Sorry, my sister."

Joie smiled. The argument ended there — like always.

A little later, Feris said,
"When the food is ready, call me. After eating, we'll go to the village."

Before he could even turn away, Joie replied quickly,
"It's ready already! Just wait two minutes."

After eating, they went to Daylan.
"Oh, Feris!" the old man said warmly. "How are you, son?"

"I'm good, sir. Thank you."

Then Feris hesitated. "Can you drop us to the town?"

Daylan nodded. Feris reached for his pouch — then stopped. One lira left.
"I… I'll give it to you later," Feris said honestly.

"That's fine," Daylan replied. "But don't forget — your boat isn't safe there. You'll need to bring it back."

"I will, sir."

In town, Feris found an axe shop. He bought a strong axe and a small box — spending all the money he had.

Joie looked at him and teased,
"Nothing for me, brother?"

Feris laughed.
"Even if I had money, I wouldn't buy it for you."

He held her hand, and they walked back toward the boat.
"Brother!" Joie said, dragging the word dramatically.

At the shore, Daylan helped them.
"Pull it slowly," he instructed.

They dragged the boat into the water. Daylan showed Feris how to row.
"Push both paddles together. If one is late, the boat will turn. And if anything goes wrong — stop immediately. I'll call you."

Feris nodded seriously.
"Thank you, sir. You are a very good person."

The old man laughed.
Feris gripped the paddles… and pushed.

The boat moved forward.
For the first time, Feris wasn't just surviving —
he was starting something.
`
    },
    {
        title: "Episode 10",
        content: `When Feris pushed the boat into the water, Joie's eyes lit up with excitement.
"Brother, can I come in your boat… please?" she asked eagerly.

Feris smiled. "Okay — come fast!"

As the boat moved forward, Feris tried to stop it, but there were no buttons, no brakes. Joie laughed at his confused expression. Before Daylan could say anything, she spoke confidently,
"Brother, stop doing anything. It will stop by itself."

Feris and Daylan both turned toward her in shock.
"How do you know that?" Daylan asked.

Joie folded her hands proudly and said in a playful tone,
"Because I watched how you did it."

Feris laughed in relief. "It stopped! Come on."

Joie held Feris's hand and carefully stepped into the boat.
"Brother, can I help you with the paddles?"

Feris hesitated. "I want to say no… but I'm a little tired. Can you really do it?"

"Yes!" Joie replied happily. She grabbed both paddles and began rowing with effort and excitement.
"Brother, are you seeing this? I'm driving a boat myself!"

Feris smiled softly. "Hmm… awesome."

After a while, Joie's arms started to shake.
"Oh, brother… can you take over now?"

Feris reacted dramatically. "What? Already tired?"
But in truth, he had closed his eyes and was pretending to sleep.

Joie quickly handed him the paddles. "Sorry, brother, but—"

Before she could finish, Feris interrupted gently,
"Joie… thank you, my sister."

She hugged his arm tightly.
Because of that, Feris's right hand continued paddling, but his left — held by Joie — did not move. The boat tilted slightly. Joie immediately let go.

Daylan said calmly,
"Don't panic. Just paddle on the left."

Feris followed his guidance, and the boat slowly corrected itself.
Feris laughed. "Joie…"

She looked down shyly. "Sorry, brother. I didn't think about it."

After some time, they reached the forest. They parked the boat near Daylan's house, since Feris's home was a little farther away.

Joie looked at Feris and said softly,
"Brother… thank you."

Feris smiled. "Thank you for what?"

"For everything," she said, hugging his arm again.

Later, Joie asked,
"Brother, can you help me cook food?"

"Yes," Feris replied.

Suddenly, there was a knock on the door. Joie moved to open it, but Feris stopped her with a hand gesture, signaling her to step back.
"Who is it?" Feris asked carefully.

"It's me — Daylan," came the reply.

Both Feris and Joie smiled with relief. Feris opened the door.
Daylan stood there holding cooked food.
"Don't worry about dinner. I brought some."

"Oh, sir, thank you," Feris said. "But Joie was cooking—"

At that moment, Joie widened her eyes and raised her eyebrows as if saying, What?
Feris laughed quietly.

Daylan smiled. "My family went to a wedding, so I thought I'd eat with you. If you don't want—"
He pretended to leave, laughing.

"No, no — please come in," Feris said quickly.
He called out, "Joie, come here. It's enough for all of us."

Joie washed her hands. As Feris was about to sit, she caught his hand and said,
"Brother, did you forget the water? Aren't you helping me today?"

Feris chuckled. "Okay, okay… miss."

They ate together peacefully. After finishing, Daylan stood up.
"I should go now. Take care, children."

They tried to stop him, but he smiled and left.

That night, Feris and Joie lay down to sleep —
safe, calm, and together.
`
    },
    {
        title: "Episode 11",
        content: `Feris woke up to find Joie already awake, quietly preparing things near the hearth.
"Brother, wait a little. I've almost finished," she said.

Feris blinked in surprise. "Joie, when did you wake up? And why so early?"

She looked at him seriously.
"Brother, from now on you'll be going to work. You'll need more energy. Working in the morning without rest is harder. Also… I want to help you."

Feris smiled warmly. "Thank you, sister."

After freshening up, he sat beside her. Joie spoke again, her voice soft but thoughtful.
"Brother… today you're going out again, right? Will you go toward the village? And… what about the child's money?"

Feris paused, surprised. "Joie… you're growing up, my sister. I'm really glad. But how do you know about the money I got from the child?"

She answered calmly, almost proudly,
"Yesterday, the child came and asked for you. Later I thought about it… he was the only one you could have asked for help. Because you told Daylan you didn't have money, right?"

"Oh, my sister…" Feris whispered, deeply touched.

Joie's eyes shimmered, and her voice grew a little firm.
"Brother, what's this? I was asking you something, and you were just quiet. If you don't want to answer, just say it — I wouldn't ask again."

Feris gently held her hand.
"Joie, I love you. Yes, I took the money from the child yesterday and told him the truth. You were right about everything. Now, sister, let me go to work. But remember… I will always be with you."

Joie smiled, her heart warmed.

Feris's work turned out to be harder than he expected. Cutting even a small tree took nearly an hour. By nightfall, he had chopped it into pieces and carried it back home. Thinking of Joie, he hurried inside and found her sleeping.
"Joie…?" he whispered, touching her hand gently.

"I woke up early… I needed some rest," she murmured.

Feris smiled softly and rested his head against her hand.
"Oh, Joie… I'm glad you're alright."

Later that night, Joie stirred slightly.
"Brother… it's night."

"Yes," Feris replied quietly, "but I need to finish bringing everything inside."

He stepped out again, worked patiently until all the wood was stored safely, and finally returned inside.

The next day began…
`
    },
    {
        title: "Episode 12",
        content: `Morning light slipped quietly into the house.
Joie was already awake. She stood near the stove, carefully preparing food when she called out softly,
"Brother… it's very late. Please wake up."

Feris opened his eyes, surprised.
"You woke up early again, Joie?"

She smiled gently.
"Yes, brother. It doesn't matter. I've already prepared breakfast."

She held his hand and pulled him up playfully. Feris stood, still half-asleep — then suddenly froze.
"Joie…" he said in shock. "What happened to the wood? Why has its shape changed?"

He walked closer, removed the cloth covering it, and saw that all the wood had been cut into small, neat pieces.

Joie looked at him nervously.
"Brother… is it good?"

Feris's face softened.
"It's… very good."

Overwhelmed, he gently reached for her right hand, about to kiss it in gratitude — but Joie pulled back quickly.
"Brother!" she cried and ran away.

"Joie, what's wrong?" Feris followed her and caught her hand again.

"Please, brother…" she whispered.

Only then did Feris notice the cloth wrapped tightly around her hand.
"Remove it," he said quietly.

"Please don't, brother…"

His voice suddenly rose, filled with fear and anger.
"Joie! I said remove it!"

Her eyes filled with tears as her hands trembled. Slowly, she removed the cloth.

Feris saw a deep wound — clearly caused while cutting the wood.
His heart shattered.
"Didn't I tell you not to do this?" he shouted, tears forming in his own eyes.
"Why did you hide it? Why, Joie? This cloth is so tight… you were hurting, weren't you?"

Unable to control himself, Feris turned and walked out.

"Brother… I—" Joie tried to speak, but he was gone.
She sat on the floor, crying silently.

After some time, Feris stopped outside. His chest felt heavy.
I've never shouted at her like that…
He went back inside.

Joie was still there, crying. When she saw him, she stood up quickly.
"I'm very, very sorry, brother…"

Feris pulled her into a tight embrace.
"Joie… I love you. You are my sister."

Both of them cried quietly.
"I became an obstacle—" she began.

"Joie!" he interrupted sharply — then softened his voice.
"You are my life. If you ever call yourself an obstacle again, then no one is worse than me in this world."

She smiled through her tears.
"Promise me," Feris said gently, "you'll never lie to me, and never do anything I haven't allowed."

"I promise," Joie replied.
"I won't lie unless there's a very big reason… and I won't do anything without your permission — unless there's a very big reason."

Feris laughed softly, lifted her, and spun her around.
"You were amazing, Joie."

"Brother… have you forgiven me?" she asked.

"Yes," he smiled. "Now I'm hungry. Can you bring the food?"

"It's ready," she said happily.

Inside, Feris couldn't stop worrying about her hand.

Later, when they sat to eat, Joie hesitated.
"Brother… the wound is on my right hand. Can you help me eat?"

Feris's heart clenched.
"Of course. Come here."

He gently fed her with his own hand, then ate beside her.

Joie smiled brightly.
"Brother… when you're here, I don't need parents."

Feris shook his head softly.
"No, Joie. No one can replace their love. But I'll give you everything I can."

She smiled, and they ate together happily.
`
    },
    {
        title: "Episode 13",
        content: `After some time, Feris heard distant voices.
"There are no armies here," one voice said. "I only saw a few houses far away."

Another voice replied coldly,
"Burn them. We don't need anyone to know we were here."

Feris's heart tightened. He turned to Joie urgently.
"Joie — quickly. Pack only the essentials. Hurry."

Joie looked confused.
"Why, brother?"

"Don't ask now," Feris said firmly. "Just do it fast. I'll explain later."

They gathered what they could in haste and stepped outside.

What they saw froze them.
Daylan was crying, his voice shaking.
"Feris! Joie! Take the boats and tools and go — now! My house has been burned. Run!"

Before Feris could respond, an arrow flew past them, barely missing.
"Pick it up," Feris told Joie quickly.

He handed her the knife, grabbed the remaining items, and tore down the tent. The three of them rushed toward the boats.

Daylan climbed into his own boat and began rowing hard. Feris and Joie entered theirs. Feris hesitated for a moment — driving alone under fear — but Joie, terrified yet brave, helped him push harder.

Suddenly, a soldier appeared with a flaming arrow.
Without hesitation, Feris threw the knife. It struck the soldier's shoulder — not deep, but enough. The man dropped the bow, screaming. Daylan rowed past and struck him with an oar. The soldier fell into the water.

They rowed faster, hearts pounding.

Ahead, the river split into two paths.
"Right!" Daylan shouted. "You go left!"

Feris turned left — but his breath caught in his throat.
The village ahead was nothing but ashes. Burned homes. Silence. Death.

Feris immediately changed direction and continued straight into the darkness.

Night fell. Hunger and exhaustion crept in.
After some time, Feris saw it — a dead end.
"We'll stop here," he said quietly. "We'll go back tomorrow."

"Joie?" he called.
No answer.
She had fallen asleep.

Feris stepped out of the boat and worked alone. He secured the boat, set up the tent, arranged the supplies, and prepared what little food they had for morning.

Then he returned and gently lifted Joie in his arms, laying her down.
As he did, his hand brushed against hers.
Cold.
Too cold.

Fear rushed through him. He touched her cheek — cold as well.
"Joie," he whispered urgently. "Wake up."

She opened her eyes slowly.
"Brother… it's very cold."

Feris's heart sank.
Fever.

He quickly removed his coat and wrapped it around her, then added more wood to the fire.
"Joie, please eat something," he said softly, waking her again.

"Okay, brother," she murmured.

Feris ate a little, then fed her with his own hands.
When she fell asleep again, Feris sat beside her, watching her breathe.
Tears slipped from his eyes.

After some time — exhausted, broken, and afraid — Feris finally fell asleep too.
`
    },
    {
        title: "Episode 14",
        content: `The next morning, Feris went out to explore the nearby area. Not far from the house, he found a forest, a flowing river, and a wide patch of clear land. To his surprise, there were also four jackfruit trees — and a jamun tree heavy with ripe fruit.
It felt like a small blessing.

When Feris returned home, he saw Joie crying.
The moment she noticed him, she said in a trembling voice,
"Brother… where were you? I've been calling you for so long."

Feris sat beside her at once, gently wiping her tears.
"I was just around the house, Joie," he said softly. "You should rest properly, okay?"

He held her hand and felt the difference — her fever still hadn't fully gone.
"Joie," he added carefully, "I found something. Do you want to see?"

She shook her head weakly and tightened her grip on his hand.
"No… just stay. I feel better when you talk to me."

Feris smiled sadly. "I'll be back in just two minutes, my dear. I promise."

Joie didn't reply. She only held his hand a little tighter before slowly letting go.

Feris stepped outside quickly and returned with a handful of fresh jamun. He gently lifted the edge of her blanket and said,
"Look, Joie. Jamun."

Her eyes lit up. She smiled and sat up slightly.
"Oh, brother… thank you. Where did you find them?"

"Nearby," he replied, feeling lighter just seeing her smile.

Feris touched her shoulders gently.
"Joie, I need to cut some wood today."

She whispered quietly, "Okay, brother… whatever you think is right."

He paused, then said, "If you allow me, I'll help you sit near the jamun tree. You can eat, watch me work, and talk to me."

She nodded.

As Joie tried to stand, she almost lost her balance — but Feris caught her immediately.
"Slowly," he said. "You're not well yet."

He carried her carefully, wrapped her in her blanket, and settled her near the tree. He shook the branches lightly, and jamuns fell around them. Then he brought water from the river, washing each fruit carefully.

Joie laughed as she tried to stop him.
"Brother! That's enough!"

Feris laughed too.
"You used to say I was always angry and quiet," she teased. "Look at you now."

Inside, Feris felt something warm — hope. Seeing her laugh made everything feel lighter.

After some time, Joie asked,
"Brother… those are jackfruit trees too, right?"

"Yes," he said.

"Can we eat them later?"

"After cooking," she smiled.

Feris cut two small trees while talking to her the whole time. When he finished, he carried everything back to the house — wood, fruits, and Joie herself.
This time, she insisted on walking, holding his hand tightly. Feris supported her, his other hand resting on her shoulder.

Later, he prepared the jackfruit, and they ate together in silence, comfortable and calm.
As night fell, Joie touched her cheek softly and whispered,
"Thank you, brother… because of you, I feel better now."

Feris had already fallen asleep.
The night passed quietly.
`
    },
    {
        title: "Episode 15",
        content: `Morning arrived quietly.
Feris returned home after finishing his work and immediately noticed Joie was already awake. She sat upright, her breathing steady, her face no longer pale. Color had returned to her cheeks, and her eyes — once dull with fever — were clear again.

For a moment, Feris just stood there.
Then his face softened into relief.
"Joie… are you feeling better now?"

She looked at him and nodded, a small but genuine smile forming on her lips.
"Yes, brother."

Her gaze drifted around the room.
"Brother… where is the food?"

Feris paused, choosing his words carefully.
"There isn't much left," he said gently. "I thought… once you fully recover, we'll leave and search for another village. Until then, we can manage with jackfruits."

Joie smiled faintly.
"Oh… so now we can go—"

Her voice stopped mid-sentence.
Both of them remembered the village — the smoke, the ashes, the silence left behind.

Feris spoke before the memory could hurt her further.
"We won't go there," he said softly.
"Daylan once told me there are other small villages nearby. That one was the closest… but now, we'll search farther."

Hope slowly returned to Joie's eyes.
"Oh, brother… then when are we going?"

"After we eat," Feris replied. "I brought jackfruits. Can you cook them?"

"Yes," she answered quietly.

They prepared the food together and ate in silence. It wasn't much, but it was enough.

Afterward, Feris packed the firewood they had gathered. Most of it fit into the boat, but one bundle was too large — he left it behind. Before leaving, he took his axe and his knife, just in case.

They pushed the boat into the river and followed a different route this time, moving upstream.
Hours passed.
The sun began to lower, painting the water gold. Still, there was nothing — no houses, no smoke, no signs of life. Joie's shoulders drooped, and Feris felt the familiar weight of uncertainty settle in his chest.

Then—
"There," Joie whispered.

Ahead, a village appeared.
Relief washed over Feris. Joie's face lit up with quiet joy as the boat drifted closer to shore.
`
    },
    {
        title: "Episode 16",
        content: `They docked near the shore and gathered more wood before entering the village cautiously.

Feris sold the wood to a shopkeeper for seven lire. With five, he bought food. With one, he bought utensils and tools. The last lira, he hid away — for another day, another need.

As they walked back toward the boat, the air changed.
Footsteps.
Shadows moved between the buildings.

Four — no, five swordsmen emerged.

Feris stepped forward instantly.
"Joie — go!"

She froze.
Fear filled her eyes, her body trembling — but she didn't run. She believed in him.

The soldiers attacked.
Steel clashed. Feris fought with everything he had. His arms burned, his breath grew heavy. He struck one man with the knife — not deep, but enough to make him stumble — but the others closed in.

He knew he couldn't win.
Feris grabbed Joie's hand and ran.

They reached the boat. He shoved it into the water with all his strength.
The boat began to move.
The soldiers shouted and charged.

Feris jumped, reaching for the boat.
Joie grabbed his hand — crying, screaming his name.
For one heartbeat, the world stopped.

Then a soldier seized Feris's arm.
Their hands slipped apart.

"BROTHER!" Joie screamed.
"JOIE!" Feris shouted back.

The boat drifted away.
The river swallowed her cries as the soldiers dragged Feris back.

He was bound and taken captive.

They were not many — about ten men. They called themselves the Acurs.

He was brought before their leader.
"Hey, child," the man said coldly. "What's your name?"

Feris lifted his head, eyes burning.
"What do you want from me? Why do you burn villages? Why do you kill people?"

The leader laughed bitterly.
"Because of need. Listen."

And he told his story —
the Cease Kingdom burning his village,
his rise as a soldier,
his betrayal, imprisonment, escape,
and his oath to burn everything tied to the kingdom.

"Will you join us?" the leader asked.

Feris raised his head.
"No."

His voice was calm, but it shook.
"No. I won't join you."

He looked at the leader — not with a prisoner's fear, but with the tired eyes of a boy who had already lost too much.
"You say your village burned. So did mine. I've seen the same smoke. The same silence."

He took a small step forward.
"But I didn't need revenge. I needed peace. Just one quiet life with my sister. Your soldiers took that from me today. You ask me to join you — after you took the only thing I had left?"

His voice cracked, but he kept going.
"You say you burn because of need. I don't see need. I see anger. I see pain. I see men hurting strangers because they were hurt by strangers. My sister and I — we never touched your war. We only tried to live."

He looked down at his bound hands.
"If you want the king dead, go to the king. Not to villages. Not to children. Not to people like us."

He lifted his eyes again — tired, but steady.
"By burning the innocent to reach the guilty, you've become the same thing you hate. You leave the same orphans. You leave the same silence."

He stood as tall as his bound hands allowed.
"So no. I won't join you. I'll only feel sorry for you. Because once revenge takes everything, there's nothing left to burn — except yourself."

When Feris finished, silence filled the space.
The leader stood, shaken.
"Put him in prison—"

Feris cried out, voice breaking.
"Please… let me go to my sister. She's the only one I have."

The leader stopped.
For a long moment, he said nothing.
Then, quietly—
"Free him. Let him go."
`
    },
    {
        title: "Episode 17",
        content: `The soldiers hesitated.
"But why free him?" one of them asked.
"He could become a great warrior. And what about the soldier he killed?"

The leader's voice was firm, yet heavy with emotion.
"The man he killed was defending himself," he said. "And as for greatness — yes, he could become a great soldier. I wanted that too."

He paused, his eyes lowering.
"But he has something stronger than any blade or army. His sister. Their bond."

The soldiers fell silent.
"He doesn't seek power," the leader continued. "He seeks peace. And the pain he's living through now… I once lived it myself."

His voice cracked.
"When my father was burning with fever, I stood helpless — just like he did. The soldiers didn't let me go. I accepted the kingdom's offer, became their soldier… and later betrayed them for revenge."

Tears filled his eyes.
"When I was finally freed and returned home… my father was already dead."

The leader turned away.
"I will not let my mistake become another man's fate. Free him. Now. I don't want what happened to me to happen to anyone else."

The soldiers obeyed.

Feris was released and guided toward the village.
Night passed as he moved — walking, running, swimming — driven by only one name in his heart.
"Joie!"

The cry echoed outside the house.
Joie froze.

She ran to the door, hands trembling, tears already falling. Slowly, she pulled the cloth aside—
And there he was.

"M—Brother…?"

Both of them broke.
Their hands shook as they reached for each other, then they collapsed into a tight embrace. No words — only sobs, only names whispered again and again.

Feris sank to one knee, exhaustion finally claiming him.
Joie didn't let go — not even for a moment. She held him as if the world might steal him away again.

After a while, Feris gently touched her shoulders and wiped her tears.
"I'm here, Joie," he said softly. "I came back for you."

Her tears kept falling, but now they carried relief.
"B-Brother… is it really you?" she whispered, touching his face as if to be sure.

He smiled faintly. "Yes. It's me."
Then, gently, with warmth in his voice,
"Now help me stand. I'm very tired… and very hungry."

She smiled through tears, touched his cheeks once more.
"Brother…"

Feris held her hands and helped her stand. Together, slowly, they walked inside.

"Joie," he said as he lay down, "please let me rest a little. Did you cook anything?"

She hesitated, nervous energy rushing through her.
"Y-Yes… I did."

She hurried to prepare the food, hands shaking — until Feris reached out and held her wrist.
"Joie," he said softly. "Calm yourself. I'm here."

She breathed. Smiled. Then cooked.

They ate together.
Later, they shared everything — what each had suffered while apart. The night grew deep.

As they lay down to sleep, Joie slowly rested her head on Feris's arm.
He was still awake.
He smiled, gently brushing her hair, resting his hand on her head — protective, grateful, present.

And finally…
he slept.
`
    },
    {
        title: "Episode 18",
        content: `Morning did not arrive gently.
Feris woke long before dawn, when the world was still wrapped in darkness. Without waking Joie, he quietly stepped outside, took his axe, and began working. The sound of wood splitting echoed softly through the forest. By the time the sky hinted at light, he had already cut two trees halfway through. His arms burned, his breath grew heavy — but he didn't stop until his body forced him to.

Exhausted, he returned home.
Joie was still asleep.

Feris stood there for a moment, watching her carefully, making sure her breathing was steady. Satisfied, he stepped outside again. His thoughts drifted back to the leader of the Acurs — the man who spoke of loss and revenge with the same fire Feris had once felt himself.

Kind… yet consumed, Feris thought.
Revenge had burned him from the inside.

After some time, Joie woke up.
She looked around the quiet house.
"Brother…?"

No answer.
Her heart skipped. She rushed outside.
"Brother!"

"Yes," Feris's voice replied from nearby. "I'm here."

She found him standing still, eyes distant, lost in thought. Without warning, she clapped her hands in front of his eyes.
"Brother! Where did you go?" she said, half sleepy, half playful.
"What are you worrying about so early?"

Feris blinked, then smiled softly at her.
"I was thinking about someone I met yesterday," he said.
"He was kind… but revenge had burned him."

Joie, still half-awake, nodded slowly.
"Hm…" she murmured, not fully understanding, then turned back inside as sleep pulled her away again.

As the day went on, Feris returned to work. Joie prepared food, and they ate together quietly. But even after that, Feris picked up the axe again and went back outside.
Again.
And again.

Joie watched him from the doorway. Her chest tightened.
He's doing everything for me… and I'm doing nothing.

Unable to hold it anymore, she ran to him and hugged him tightly.
Tears fell.
"Joie?" Feris said, startled. "What happened? Why are you crying?"

She wiped her face, but more tears followed.
"Brother… can I ask you for one thing?"

"Of course," he said immediately.

"I want to help you," she said, her voice shaking.
"Can you find some work for me? Or buy another axe? I promise I won't hurt myself… please, brother."

Feris gently placed his hands on her shoulders and looked into her eyes.
"Joie," he said calmly, "I'm here. We'll manage everything together."
"I don't want to hurt you. I don't want to give you work that tires you."

He smiled softly.
"You can ask me for anything… except this."

Joie looked at him, tears shining in her eyes, silently saying please.
Then she turned away and went back inside.

That evening, Feris returned home and saw Joie cooking.
"What are you making?" he asked gently.

She didn't reply. Her movements were slow, her silence heavy.
"Oh," Feris said teasingly, "so you're not talking to me now?"

Still no response.
He scratched his head.
"Well… I actually thought about work for you."

Joie froze.
She turned around, eyes lighting up, and rushed toward him. Feris raised his hands quickly.
"Hey! If you weren't talking to me, then I wasn't going to talk to you either!"

She stared at him, realized the lie — and smiled before hugging him tightly.
Both of them laughed.

"Okay, brother," Joie said softly.
"What work did you decide for me?"

"Cooking," Feris replied seriously—
Then burst out laughing.

Joie's smile dropped instantly.
"I'm joking!" he said quickly.
"The real work is collecting good, edible leaves for the animals from the forest. It's easy, safe, and perfect for you."

Joie smiled in relief.
"Oh… thank you, brother."

Feris added gently,
"But first, your hand must heal properly. Only then will I allow you."

"Brother, please!" Joie protested.
"Why do you tease me so much? This is the first wish I've asked for since our parents died… please."

Tears fell again.
Feris placed a hand on her shoulder and pulled her into a gentle half-hug.
"Alright," he said softly.
"But don't do too much work with your right hand. It needs rest, okay?"

Joie smiled through her tears and hugged him tightly.

They talked casually — until a burnt smell filled the room.
Feris sniffed the air.
"…Joie."

Her eyes widened.
"The food!"

They rushed back inside. The meal was burnt.

Feris laughed.
"Maybe you should master cooking first before moving on to another job."

"Oh, brother, that's enough!" she said, embarrassed.

She cooked again, and this time they ate properly.

That night, Joie lay down thinking about her new work. Slowly, her thoughts faded and she fell asleep.
Feris was already asleep beside her.

The house grew quiet once more—
but the weight they carried continued to grow.
`
    },
    {
        title: "Episode 19",
        content: `Joie knew Feris would wake up early again.
So the night before, she quietly placed a small utensil beneath the blanket near his feet. If he moved even a little, it would make a sound.
A perfect plan, she thought.

Morning arrived just as she had hoped.
The utensil clinked softly.

Joie's eyes opened at once. She smiled to herself, but instead of getting up, she stayed still.
If I wake up now, brother will make me sleep again, she thought.
She waited.

Moments later, Feris carefully slipped out of bed and stepped outside.
Only then did Joie rise.

She moved quickly but quietly, preparing food. While working, she noticed the axe still inside. Then her eyes fell on the water bottle.
He'll come back, she thought.

Joie lay down again, pretending to sleep.
Sure enough, Feris returned to grab the bottle. But he stopped.
The fireplace was warm.
Water was already boiling.

He turned toward her.
"Joie… why are you acting?" he asked calmly.

She opened her eyes slowly.
"Oh… brother. I was caught," she said shyly.
"I wanted to prepare food early so you could go to work faster."

Feris raised an eyebrow.
"And how did you wake up?"
He paused. "Was the utensil your idea?"

She murmured softly, "Yes…"

"So," he smiled faintly, "you used me as an alarm clock?"

She nodded again. Tears began to form.
Feris's expression softened instantly. He stepped closer and spoke gently.
"Joie… I love you, my sister."

She looked up at him.
"Brother… aren't you angry with me?"

"Why would I be?" he said.
"You did nothing wrong. You were only trying to help me. And I already allowed you to work."

Then his tone became protective.
"But listen — don't go outside before me, okay?"

Her face lit up.
"Yes, brother. I love you too."

The water boiled over, pulling them back to reality. Joie returned to cooking while Feris stepped outside.

A little later, Joie followed him.
"Okay, brother," she said seriously.
"Now explain. Or give me a demo."

Feris smiled.
"First, I'll cut the branches," he explained.
"They'll fall to the ground. You just need to pick the good ones and put them into the boat. And make sure to wash them first — there can be insects or dirt."

She nodded carefully.

They worked side by side until evening.
By then, they had gathered many branches, but three full trees couldn't fit.
"We'll take the branches now," Feris decided.
"We'll come back for the trees later."

They set off.

Night had fallen by the time they reached the market.
They sold the branches for two lire.

Feris smiled, satisfied.
Joie, however, stood frozen — eyes wide, hands trembling. She was shocked… and unbelievably happy.

"Brother," she said suddenly, "I want to buy something."
Feris looked at her.
"But it's a surprise," she added quickly.
"So… can I cover your eyes?"

He chuckled.
"Alright."

She wrapped cloth over his eyes, held his hand, and led him to a shop. She bought what she wanted quietly.
"Brother," she asked afterward, "do you want to buy anything?"

"No," he replied honestly.

She guided him back to the boat and placed the surprise inside.
As they moved toward home, Feris tried to ask—
But Joie smiled mischievously.
"Tomorrow, brother."
`
    },
    {
        title: "Episode 20",
        content: `They returned home at night.
Feris kept glancing at the small box Joie had brought with her. Curiosity quietly grew inside him. He waited, thinking she might show it to him before sleeping.

But Joie noticed his restlessness.
"Brother," she said with a teasing smile, "I told you tomorrow. Why are you thinking I'll show it to you now?"

Feris blinked. "How did you know I was thinking that?"

Joie laughed softly to herself and returned to cooking. Feris stayed silent, still wondering — how did she know? And why tomorrow, not today?

Unable to hold it, he asked again, "Joie… why tomorrow?"

She replied gently, without looking back,
"Because I want the surprise to be more precious. And curiosity makes it even better. So wait."

Feris sighed in defeat, pretending to be sad.

After some time, Joie called him to eat. They shared their meal quietly, then lay down to sleep.

Morning arrived.
Feris woke up early. Joie was still asleep — her sleep was light, sensitive to even the smallest sound. He moved carefully toward the box. Slowly, he opened it.

It was empty.

His heart skipped for a moment. Confused, he stared inside, wondering what had happened. He wanted to ask Joie — but if he did, she'd know he tried to peek.
So he said nothing.

He picked up his tools and went outside to work.

Joie woke up soon after.
She checked beneath her pillow — and smiled. The surprise was still there. She noticed the box had been opened, but instead of getting upset, her smile grew wider.

She stood up, prepared food, then took the surprise in her hands and called out,
"Brother!"

Feris returned.

She placed something softly into his hands. He felt cloth beneath his fingers. Slowly, he unfolded it.

A beautiful piece of clothing.

Feris smiled — deeply, honestly. His eyes softened. He gently kissed her hand.
"Joie… it's beautiful."

He was genuinely happy. Seeing his expression, Joie felt even happier.

"You did this because my first gift to you was also clothes, right?" Feris asked.

She shook her head.
"No, brother," she said simply.
"I did it because I love you."

They ate together after that, talking softly. Later, they went outside and sat on a stone near the house, sharing quiet thoughts.

After a while, Joie asked,
"Brother… now we have to work, right?"

Feris replied,
"Not yet. Later we'll go sell the wood."

"Oh… hmm," she nodded.

They went to the village and sold the wood. On the way back, Joie looked around and said,
"Brother, this place is good… why don't we settle here?"

Feris answered calmly, thoughtfully,
"We sell wood and branches, but there's no forest nearby. No one here knows us. If we ask for work, people won't trust us at first — and you'd be alone."

He paused, then added softly,
"Our place is peaceful. We are safe there. We don't need to go anywhere."

Joie smiled and nodded.
"Okay."

They turned back toward their home—
And that's when they saw…
`
    },
    {
        title: "Episode 21",
        content: `They saw it.

Their house had been burned to ashes.

Feris and Joie froze. Their bodies trembled as they ran forward, hoping — desperately — that something might still be safe. But inside, everything was destroyed. The fire had burned for a long time; nothing remained.

Fear swallowed them whole.

Joie broke down, crying uncontrollably.
"Brother… it happened again," she sobbed. "We lost our home again."

Feris's eyes filled with tears, but he forced himself to stay strong. He pulled her into a gentle embrace, holding her tightly, trying to calm her shaking body.

At that moment, the Acurs arrived.

They saw Feris standing there in shock. Their leader stepped forward, his voice trembling.

"Hey… child — h-how did this happen? Have you seen them?"

Feris shook his head. "N-no… I don't know."

The leader took a deep breath and said,

"Listen carefully. The war between the kingdoms has reached its final stage. They're destroying entire territories. I've made a plan — to kill one of the kings. If one king dies, the war will end. And the other will win."

Feris stepped back instinctively, closer to Joie.

"Why are you telling me this?" he asked.

"My chosen soldier died," the leader replied. "If you help us, this war will end. You and your sister can finally live in peace."

Feris's voice cracked.
"W-what? Are you crazy? I'm not going to be part of any war!"

The leader's tone softened, but his eyes burned with pain.

"You already are, Feris. Look at what they've done to you. I'm not asking you to fight for us — I'm asking you to save the country. Think about the people. Your house burned today… countless others are burning too. Don't you want to stop that fire? Don't you want to pour water on it?"

Tears formed in the leader's eyes. Behind him stood seven soldiers, silent and broken. Slowly, the leader dropped to his knees.

"Please, Feris."

Joie clutched Feris's clothes, crying desperately.
"Please don't, brother… please."

Feris stood frozen between them.

The leader turned to Joie and said softly,

"Girl… this is for the future. For you. For people like you who suffer endlessly and receive nothing in return. Please… allow him."

Joie cried even harder.

Then Feris spoke.

"I will do it."

Joie froze — and collapsed.

Feris caught her before she hit the ground. He sat down, laying her gently across his legs. Tears streamed down his face. Even the soldiers looked away, hearts heavy.

He kissed Joie's forehead and looked up at the leader.

"I'll do it. But nothing must happen to my family."

The leader nodded and explained the entire plan.

And they began.

After the plan was set, the leader said urgently,

"Feris, we have to go now. The king isn't far. Are you ready?"

Feris panicked.
"Now?! Joie is unconscious — and you're telling me to leave her here?"

"There's no other choice," the leader said sadly. "The king's convoy moves faster than us."

Feris cried silently. He hugged Joie tightly, kissed her hand, then turned away and followed them.

The plan began.

They ran — faster and faster. In about an hour, exhausted and drained, they reached the king's route. They changed their clothes.

A poor figure appeared on the road, face hidden, clothes torn.

The convoy stopped.

Soldiers stepped forward.
"Move away."

The figure pleaded, "Please help me. My brother is dying from starvation. Just a little food—"

"I said move away. We don't have time."

"Please!"

A soldier raised his arrow.

Suddenly — a child rushed forward, holding a small knife. He aimed straight at the king.

He lunged.

Arrows flew, but seven soldiers stepped in front, shields raised.

Chaos erupted.

"The king is dead!" someone shouted.

The forward soldiers attacked. The poor figure vanished. Five soldiers and the poor man retreated with Feris's group.

As the king's soldiers chased, the poor man pushed the child into the bushes.

"Run. As fast as you can."

The soldiers raised their hands.

"We killed your king."

The commander shouted, "What about the child?"

At that moment, the leader stepped forward.

"I am the leader of the Acurs. I pretended to be the child. My soldiers distracted you. I struck the blow."

They surrendered — choosing capture over escape.

To save Feris's life.

Feris ran.

He looked back, crying, as the leader smiled faintly.

"Our work is done," the leader whispered to his soldiers. "Now… we can die in peace."

They were arrested — crying, yet smiling.

And far away, Feris ran — tears falling — toward Joie.

The war quietly began to end.
`
    },
    {
        title: "Episode 22",
        content: `Joie woke to an empty house.

No soldiers. No guards. No one watching over her.

Only silence — and the hollow space where her brother had been.

She sat up slowly. Her head spun. Her chest ached.
"Brother…?"

No answer.

She stepped outside. The forest was quiet. The boat was gone.

Then she understood.

Her face went pale. Her hands began to tremble.
"No… no, no, no—"

She ran.

She didn't know the way. She didn't know how far. She only knew the direction the Acurs had taken him — toward the king's road.

Her feet tore through the undergrowth. Branches whipped her cheeks. She didn't feel them.

"BROTHER!"

Her voice cracked against the trees.

Far ahead, on the road, Feris heard something.

It was faint — almost swallowed by the wind — but he knew it.
He knew it the way he knew his own heartbeat.

He stopped.
Turned.

And there — far behind him, small against the trees — was Joie.

Running.
Running toward him.

"JOIE—!"

He didn't think. He didn't weigh the danger. He didn't care about the plan, the king, the war, the soldiers, the burning world.
He only cared about her.

He broke away from the Acurs and ran back.

The soldiers saw it.

The commander raised his hand.
"Archers."

The king's men drew their bows.

Feris and Joie ran toward each other.

Her face was streaked with tears. His was the same.
Both of them were smiling — even now, even here.

"Brother—!"
"Joie—!"

Their voices reached each other.

Closer.
Closer.

The first volley came from behind.

An arrow struck Feris in the shoulder. The force spun him half around — but he didn't fall. He kept running.
Another arrow struck Joie in the side. She stumbled — but she didn't stop.

They kept running toward each other.

Blood soaked their clothes.
Their breaths came in broken gasps.
Their hands reached out — fingers stretching, trembling, almost touching.

The second volley came.

An arrow struck Feris in the back.
An arrow struck Joie in the chest.

They staggered.

For one long, impossible moment, they stood facing each other — close enough to see each other's eyes, close enough to hear each other breathe.

Then their legs gave way.

Not together.
Each one fell where they stood — Feris forward, Joie backward — hitting the ground with a soft, final weight.

For a moment, there was only silence.
Only breath.
Only the slowing of two hearts.

Then Feris's hand moved.

Slowly. Weakly. Fingers dragging across the dirt.
Reaching.

Joie's hand moved too.

Her arm trembled. Her fingers stretched — trembling, searching, almost giving up.

Closer.
Closer.

Their fingertips brushed.

Then — touched.

Her fingers curled around his. Weak, but certain.
His curled around hers.

Neither of them spoke for a long moment.

Then Joie's lips moved — barely a sound.
"Brother…"

Feris turned his head. His eyes found hers.
"I'm here."

Her breath was shallow. Her voice was a whisper — just like a whisper.
"We… will love each other… even after this life… right?"

Feris smiled. Blood traced the corner of his mouth.
"Even after this life."

Her fingers tightened around his.

Then loosened.

Her eyes softened. Her breath faded.
Her hand — still holding his — grew still.

Feris's own breath slowed.
He didn't cry.
He didn't scream.
He only held her hand.

And in the quiet, as the world dimmed around him, he whispered the last thing he would ever say —

"I'll find you."

The soldiers lowered their bows.

The commander said nothing.
Even the Acurs, far behind, had stopped.

No one spoke.
No one cheered.
No one moved.

Two children lay on the road, hands joined, faces turned toward each other.

The wind passed over them, softly — just like a whisper.

And the war, which had taken everything from them, took them too.

Behind them, in the distance, a single old man rowed toward the shore.

He did not know yet.
But when he reached the road and saw the two small figures lying together, he dropped to his knees and wept.

Daylan knelt beside them.
He did not try to separate their hands.

He only closed their eyes — hers first, then his —
and whispered, "Sleep, children. You are together now. You always were."

Far away, the war ended.

The king was dead.
The Acurs were captured.
The Cease Kingdom fell into silence.

And no one — no one — ever spoke of the two children who died on that road.

But somewhere, in the way the wind moved through the trees, in the way the river whispered against the shore, in the way the evening light touched the ashes of forgotten villages —
their names were still carried.

Feris.
Joie.

Together.
Even after this life.

Just like a whisper.

THE END
`
    },
    {
        title: "The End",
        content: `THANK YOU FOR READING

JUST LIKE A WHISPER

Contact the Author:

storieswebsite1@gmail.com

Stay tuned for what comes next.
`
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const renderPages = () => {
        const container = document.getElementById('pages-container');
        if (container) {
            const firstPage = container.querySelector('#page-1');
            if (firstPage) firstPage.classList.add('cover-page');

            const lastPage = container.querySelector('#page-' + pages.length);
            if (lastPage) lastPage.classList.add('outro-page');
        }
    };
    setTimeout(renderPages, 100);
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pages };
}
