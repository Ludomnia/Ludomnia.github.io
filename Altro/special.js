function impagina(pdf){
	$.get('templ.html', function (data) {
		var d = $(data).get(15);
		console.log(d);
		pdf.addHTML(d);
	});
}

function addSpecial(){
	var tab=document.getElementById("specialTab");
	var row=tab.insertRow(tab.rows.legth);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	
	cell1.innerHTML="<strong>"+testo.value.toString()+": </strong>"+testo.title;
	cell1.title=testo.title;
	testo.title="";
	testo.value="";
	cell2.innerHTML=costo[pos];
}

function removeS(){
	var tab=document.getElementById("specialTab");
	var x=tab.rows.length;
	if(x>1){
		tab.deleteRow(x-1);
	}
}

var testo=document.getElementById("myInput");
var pos=0;
var focus=-1;
var papa=document.getElementById("pop");

testo.addEventListener("keyup",function(e){
	//stringa con il testo cercato
	var t=this.value.toString();
	//chiudi tutte barre aperte per sicurezza
	
	//se si usano le frecce muovo il selettore, se premo invio è come se decidessi di si	
	if(t!=""){ 
	if(e.key=="Enter"){
		if(focus!=-1){
			b=figlioA(focus);
			pos=b.id;
			testo.value=nomi[pos];
			testo.title=effetti[pos];
			chiudi(papa);
			focus=-1;
		}
	}else if(e.key=="ArrowDown"){
		if(focus+1<=papa.childElementCount-1){	
			if(focus!=-1){let b=figlioA(focus);
			b.style.backgroundColor="white";}
			focus++;
			b=figlioA(focus);
			b.style.backgroundColor="blue";
		}
	}else if(e.key=="ArrowUp"){
		if(focus-1>=0){
			if(focus!=-1){let b=figlioA(focus);
			b.style.backgroundColor="white";}
			focus--;
			b=figlioA(focus);
			b.style.backgroundColor="blue";
		}
	}else{
	//cerca elementi con iniziali corrispondenti e se è vuoto ignora tutto e chiude eventuali barre aperte
		chiudi(papa);
		for(var i=0;i<nomi.length;i++){	
			if(nomi[i].substr(0,t.length).toLowerCase()==t.toLowerCase()){
				//crea div con contenuto evidenziato
				let b=document.createElement("DIV");
				//testo in bold dove combacia
				b.innerHTML = "<strong>" + nomi[i].substr(0, t.length) + "</strong>";
         			b.innerHTML += nomi[i].substr(t.length);
				//salvo dove sta l'elemento negli array
				b.id=i;
				b.title=effetti[i];
				b.className="barrette";
				b.addEventListener("click",function(e){
					//aggiorno il contatore universale così so che costo mettere in caso si aggiunga
					pos=this.id;
					testo.value=nomi[pos];
					testo.title=effetti[pos];
					chiudi(papa)
					focus=-1;
				});
				//aggiungo gli elementi che combaciano nella div che contiene le div con i nomi
				papa.appendChild(b);	
			}
		}
	}
	}else{
		//funzione che chiude tutte le div aperte
		chiudi(papa);
		focus=-1;
	}
});

function chiudi(x){
	var c=x.lastElementChild;
	while(c && c.id!="myInput"){
		x.removeChild(c);
		c=x.lastElementChild;
	}
}

function figlioA(a){
	let v=papa.firstElementChild;
	for(let i=1;i<=a;i++) v=v.nextElementSibling;
	return v;
}

const costo=["-",
"-",
"7 Int",
"-",
"-",
"4+ Int",
"1+ Speed",
"4+ Int",
"-",
"-",
"7 Int",
"3 Speed",
"-",
"1 Int",
"8 Speed",
"-",
"2 Might",
"-",
"7 Int",
"3 Int",
"6 Int",
"-",
"-",
"2 Might",
"2 Int",
"-",
"3 Speed",
"4 Int",
"1 Int",
"-",
"4 Int",
"-",
"3 Speed",
"1 Int",
"6 Int+2 Xp",
"-",
"-",
"-",
"-",
"5 Int",
"3 Int",
"6+ Int",
"-",
"-",
"-",
"2+ Int",
"-",
"3 Int",
"-",
"-",
"-",
"-",
"1 Might",
"-",
"4 Int",
"2+ Int",
"5 Int",
"-",
"3 Int",
"-",
"-",
"-",
"4 Int",
"-",
"-",
"-",
"7+ Might",
"4+ Might",
"-",
"4 Int",
"??",
"3 Int",
"2+ Int",
"2 Int",
"3 Int",
"-",
"3 Int",
"-",
"3 Int",
"2 Int",
"2 Int",
"-",
"1 Int",
"2 Int",
"6 Speed",
"3 Speed",
"4 Speed",
"3 Speed",
"-",
"-",
"3 Might",
"7 Speed",
"4 Int",
"5+ Int",
"-",
"-",
"6+ Int",
"4 Int",
"6 Speed",
"7+ Int",
"-",
"4 Might",
"3 Int",
"-",
"3 Int",
"5 Speed",
"6+ Int"
];

const nomi=["A Smile and a Word",
"Able Assistance",
"Absorb Energy",
"Absorb Kinetic Energy",
"Absorb Pure Energy",
"Accelerate",
"Acrobatic Attack",
"Action Processor",
"Adaptation",
"Adroit Cypher Use",
"Advanced Command",
"Advantage to Disadvantage",
"Advantages of Being Big",
"Advice From a Friend",
"Again and Again",
"Agent Provocateur",
"Aggression",
"Agile Wit",
"All-Out Con",
"Alleviate",
"Alley Rat",
"Amazing Effort",
"Ambusher",
"Amplify Sounds",
"Anecdote",
"Animal Senses and Sensibilities",
"Answering Attack",
"Anticipate Attack",
"Anticipation",
"Applying Your Knowledge",
"Apportation",
"Aquatic Combatant",
"Arc Spray",
"Arcane Flare",
"Artifact Scavenger",
"Artifact Tinkerer",
"As Foretold in Prophecy",
"As If One Creature",
"Assassin Skills",
"Assassin Strike",
"Asserting Your Privilege",
"Assume Control",
"Athlete",
"Attack and Attack Again",
"Attack Flourish",
"Augment Cypher",
"Autodoctor",
"Awareness",
"Babel",
"Balance",
"Band of Desperados",
"Band of Followers",
"Bash",
"Basic Follower",
"Battle Management",
"Battlefield Tactician",
"Beast Call",
"Beast Companion",
"Beast Eyes",
"Beast Form",
"Bestiary Knowledge",
"Betrayal",
"Better Living Through Chemistry",
"Better Surprise Attack",
"Bigger",
"Bigger Beast Form",
"Biomorphic Detonation",
"Biomorphic Healing",
"Blameless",
"Blend In",
"Blessing of the Gods",
"Authority/Law/Peace",
"Benevolence/Righteousness/Spirit",
"Death/Darkness",
"Desire/Love/Health",
"Earth/Stone",
"Knowledge/Wisdom",
"Nature/Animals/Plants",
"Protection/Silence",
"Sky/Air",
"Sun/Light/Fire",
"Trickery/Greed/Commerce",
"War",
"Water/Sea",
"Blind Machine",
"Blinding Attack",
"Blink of an Eye",
"Block",
"Block for Another",
"Blood Fever",
"Bloodlust",
"Blurring Speed",
"Bolt Rider",
"Bolts of Power",
"Bouncing Shield",
"Bound Magic Creature",
"Brainwashing",
"Break the Line",
"Break the Ranks",
"Break Their Mind",
"Breaker",
"Brute Strike",
"Buddy System",
"Built-in Weaponry",
"Burning Light",
"Burst of Escape",
"Bypass Barrier"
];

const effetti=["When you use Effort on any action involving interactions-even those having to do with calming animals or communicating with someone or something whose language you do not speak-you gain a free level of Effort on the task.  Action.",
"When you help someone with a task and they apply a level of Effort, they get a free level of Effort on that task. Enabler. ",
"You touch an object and absorb its energy. If you touch a manifest cypher, you render it useless. If you touch an artifact, roll for its depletion. If you touch another kind of powered machine or device, the GM determines whether its power is fully drained. In any case, you absorb energy from the object touched and regain 1d10 Intellect points. If this would give you more Intellect than your Pool’s maximum, the extra points are lost, and you must make a Might defense roll. The difficulty of the roll is equal to the number of points over your maximum you absorbed. If you fail the roll, you take 5 points of damage and are unable to act for one round. You can use this ability as a defense action when you’re the target of an incoming ability. Doing so cancels the incoming ability, and you absorb the energy as if it were a device. Action.",
"You absorb a portion of the energy of a physical attack or impact. You negate 1 point of damage you would have suffered and store that point as energy. Once you have absorbed 1 point of energy, you continue to negate 1 point of damage from any incoming blow or impact, but the residual energy bleeds off with a flare of harmless light (you cannot store more than 1 point at a time). Enabler. ",
"When you use Absorb Kinetic Energy, you can also absorb and store energy from attacks made with pure energy (focused light, radiation, transdimensional, psychic, etc.) or from conduits that direct energy, if you can make direct contact. This ability does not change how many points of energy you can store. If you also have Improved Absorb Kinetic Energy, you can absorb 2 points of damage from other energy sources as well. Enabler.",
"Your words imbue the spirit of a character within immediate range who is able to understand you, accelerating them so they gain an asset on initiative tasks and Speed defense rolls for ten minutes. In addition to the normal options for using Effort, you can choose to use Effort to affect more targets; each level of Effort affects one additional target. You must speak to additional targets to accelerate them, one target per round. Action per target to initiate.",
"You leap into the attack, twisting or flipping through the air. If you roll a natural 17 or 18, you can choose to have a minor effect rather than deal extra damage. If you apply Effort to the attack, you get a free level of Effort on the task. You can’t use this ability if your Speed Effort costs are reduced from wearing armor. Enabler.",
"Thanks to a latent mutation, a device implanted in your spine, a ritual performed with dragon’s blood, or some other gift, you now remain at a comfortable temperature; never need to worry about dangerous radiation, diseases, or gases; and can always breathe in any environment (even the vacuum of space). Enabler.",
"You can bear four cyphers at a time. Enabler.",
"A target within short range obeys any command you give as long as they can hear and understand you. Further, as long as you continue to do nothing but issue commands (taking no other action), you can give that same target a new command. This effect ends when you stop issuing commands or they are out of short range. Action to initiate.",
"With a number of quick moves, you make an attack against an armed foe, inflicting damage and disarming them so that their weapon is now in your hands or 10 feet (3 m) away on the ground-your choice. This disarming attack is hindered. Action.",
"When you use Enlarge, you’re so big that you can move massive objects more easily, climb buildings by using hand-and footholds unavailable to regular-sized people, and jump much farther. While you enjoy the effects of Enlarge, all climbing, lifting, and jumping tasks are eased. Enabler.",
"You know your friend’s strengths and weaknesses, and how to motivate them to succeed. When you give an ally a suggestion involving their next action, the character is trained in that action for one round. Action.",
"You can take an additional action in a round in which you have already acted. Enabler.",
"Choose one of the following to be trained in: attacking with a weapon of your choice, demolitions, or sneaking and lockpicking (if you choose this last option, you are trained in both). Enabler.",
"You focus on making attacks to such an extent that you leave yourself vulnerable to your opponents. While this ability is active, you gain an asset on your melee attacks, and your Speed defense rolls against melee and ranged attacks are hindered. This effect lasts for as long as you wish, but it ends if no combat is taking place within range of your senses. Enabler.",
"When attempting a Speed task, you instead can roll (and spend points) as if it were an Intellect action. If you apply Effort to this task, you can spend points from your Intellect Pool instead of your Speed Pool (in which case you also use your Intellect Edge instead of your Speed Edge). Enabler.",
"You put everything into it. You add three free levels of Effort to the next task you attempt. You can’t use this ability again until after you’ve taken a ten-hour recovery action. Action.",
"You attempt to cancel or cure one malady (such as disease or poison) in one creature. Action.",
"While in a city, you find or create a significant shortcut, secret entrance, or emergency escape route where it looked like none existed. Doing so requires that you succeed on an Intellect action whose difficulty is set by the GM based on the situation. You and the GM should work out the details. Action.",
"When you apply at least one level of Effort to a noncombat task, you get a free level of Effort on that task. When you choose this ability, decide if it applies to Might Effort or Speed Effort. Enabler.",
"When you attack a creature that has not yet acted during the first round of combat, your attack is eased. Enabler.",
"For one minute, you can amplify distant or small sounds so that you can hear them clearly, even if it’s a conversation or the sound of a small animal moving through an underground burrow up to a very long distance away. You can attempt to perceive the sound even if interceding barriers block it or the sound is very slight, though this requires a few additional rounds of concentration. To discriminate the sound you wish in a noisy environment might also require a few additional rounds of concentration as you audibly explore the surrounding soundscape. Given enough time, you could pinpoint every conversation, every breathing creature, and every device creating noise within range. Action to initiate, up to several rounds to complete, depending on the difficulty of the task.",
"You can lift the spirits of a group of creatures and help them bond together by entertaining them with an uplifting or pointed anecdote. For the next hour, those who pay attention to your story are trained in a task you choose that’s related to the anecdote, as long as it’s not an attack or defense task. Action to initiate, one minute to complete.",
"You are trained in listening and spotting things. In addition, most of the time, the GM should alert you if you’re about to walk into an ambush or a trap that is lower than level 5. Enabler.",
"If you are struck in melee, you can make an immediate melee attack against that attacker once per round. The attack is hindered, and you can still take your normal action during the round. Enabler.",
"You can sense when and how creatures attacking you will make their attacks. Speed defense rolls are eased for one minute. Action.",
"You look ahead to see how your actions might unfold. The first task you perform before the end of the next round gains an asset. Action.",
"When you help another character undertake any action that you’re untrained in, you are treated as if you are trained in it. Action.",
"You call a physical object to you. You can choose any piece of normal equipment on the standard equipment list, or (no more than once per day) you can allow the GM to determine the object randomly. If you call a random object, it has a 10 percent chance of being a manifest cypher or artifact, a 50 percent chance of being a piece of standard equipment, and a 40 percent chance of being a bit of worthless junk. You can’t use this ability to take an item held by another creature. Action.", 
"You ignore penalties for any action (including fighting) in underwater environments. Enabler.",
"If a weapon has the ability to fire rapid shots without reloading (usually called a rapid-fire weapon, such as a crank crossbow), you can fire your weapon at up to three targets (all next to one another) at once. Make a separate attack roll against each target. Each attack is hindered. Action.",
"You enhance the damage of another attack spell with an extra charge of energy so that it deals 1 additional point of damage. Alternatively, you attack a target within long range by projecting a flare of raw magic that inflicts 4 points of damage. Enabler for enhancement; action for long-range attack.",
"You’ve developed a sixth sense for searching for the most valuable items in the wasteland. If you spend the time required to succeed on two scavenging tasks, you can exchange all the results you would otherwise obtain for a chance to gain an artifact of the GM’s choosing if you succeed on a difficulty 6 Intellect task. You can use this ability at most once per day, and never within the same general area. Action to initiate, several hours to complete.",
"If you spend at least one day tinkering with an artifact in your possession, it functions at one level higher than normal. This applies to all artifacts in your possession, but they retain this bonus only for you. Enabler.",
"You accomplish something that proves you are truly the chosen one. The next task you attempt is eased by three steps. You can’t use this ability again until after you’ve taken a one-hour or a ten-hour recovery action. Action.",
"When you and your beast (from your Beast Companion ability) are within immediate distance of each other, you can share damage inflicted on either of you. For instance, if one of you is struck by a weapon for 4 points of damage, divide the damage between the two of you as you see fit. Only the Armor and resistances of the target initially damaged come into play. So if you have 2 Armor and are struck by a force blast for 4 points of damage, your beast can take the 2 points of damage you would suffer, but their Armor does not come into play, nor does their immunity to force blasts, if any. Enabler.",
"You are trained in stealth and disguise tasks. Enabler.",
"If you successfully attack a creature that was previously unaware of your presence, you deal 9 additional points of damage. Enabler.",
"Acting as only a privileged person can, you verbally harangue a foe who can hear and understand you so forcefully that they are unable to take any action, including attacks, for one round. Whether you succeed or fail, the next action the target takes is hindered. Action.",
"You control the actions of another creature you have interacted with or studied for at least a round. This effect lasts for ten minutes. The target must be level 2 or lower. Once you have assumed control, the target acts as if it wants to accomplish your desire to the best of its ability, freely using its own best judgment unless you use an action to give it a specific instruction on an issue-by-issue basis. In addition to the normal options for using Effort, you can choose to use Effort to increase the maximum level of the target. Thus, to attempt to command a level 5 target (three levels above the normal limit), you must apply three levels of Effort. When the effect ends, the target remembers everything that happened and reacts according to its nature and your relationship to it; assuming control might have soured that relationship if it was previously a positive one. Action to initiate.",
"You are trained in carrying, climbing, jumping, and smashing. Enabler.",
"Rather than granting additional damage or a minor or major effect, a natural 17 or higher on your attack roll allows you the option of immediately making another attack. Enabler.",
"With your attack, you add stylish moves, entertaining quips, or a certain something that entertains or impresses others. One creature you choose within short range who can see you gains an asset to its next task if taken within a round or two. Enabler.",
"When you activate a cypher, add +1 to its level. In addition to the normal options for using Effort, you can choose to use Effort to increase the level of the cypher by an additional +1 (per level of Effort applied). You can’t increase the cypher’s level above 10. Enabler.",
"You are trained in healing, performing surgical procedures, and withstanding pain. You can perform surgeries on yourself, remaining conscious while you do so. Enabler.",
"You become hyperaware of your surroundings in order to better locate your target. For ten minutes, you are aware of all living things within long range (including their general position), and by concentrating (another action), you can attempt to learn the general health and power level of any one of them. Action.",
"After hearing a language spoken for a few minutes, you can speak it and make yourself understood. If you continue to use the language to interact with native speakers, your skills improve rapidly, to the point where you might be mistaken for a native speaker after just a few hours of speaking the new language. Enabler.",
"You are trained in balancing. Enabler.",
"Your reputation draws a band of six level 2 desperado NPC followers who are completely devoted to you. You and the GM must work out the details of these followers. If a follower dies, you gain a new one after at least two weeks and proper recruitment. Enabler.",
"You gain four level 3 followers. They are not restricted on their modifications. Enabler.",
"This is a pummeling melee attack. Your attack inflicts 1 less point of damage than normal, but dazes your target for one round, during which time all tasks it performs are hindered. Action.",
"You gain a level 2 follower. One of their modifications must be persuasion. You can take this ability multiple times, each time gaining another level 2 follower. Enabler. (When you use Basic Follower, the GM may require that you actually look for a suitable follower.)",
"As long as you use your action each round giving orders or advice, attack and defense actions taken by your allies within short range are eased. Action.",
"You scrutinize your surroundings, learning whatever facts the GM feels are pertinent about attacking, defending, maneuvering, and dealing with environmental hazards within a short distance. For example, you might notice a pile of rubble you can stand on for an advantage in melee, a sheltered corner to help protect against enemy attacks, a less-slippery part of a frozen lake, or a place where the poison gas is thinner than elsewhere. If you (or someone you tell) move to that location, you (or they) gain an asset on tasks related to that optimal position (such as attack rolls from the high ground, Speed defense rolls from the sheltered corner, balance rolls on the frozen lake, or Might defense rolls against the poisonous cloud). Instead of gaining an advantageous location, you might learn of a disadvantageous location that you could use against your enemies, such as maneuvering them into an awkward corner that hinders their melee attacks or a weak spot on the frozen lake that will break if they stand on it.",
"You summon a horde of small animals or a single level 4 beast to help you temporarily. These creatures do your bidding for as long as you focus your attention, but you must use your action each turn to direct them. Creatures are native to the area and arrive under their own power, so if you’re in an unreachable place, this ability won’t work. Action.",
"A level 2 creature of your size or smaller accompanies you and follows your instructions. You and the GM must work out the details of your creature, and you’ll probably make rolls for it in combat or when it takes actions. The beast companion acts on your turn. As a level 2 creature, it has a target number of 6 and 6 health and it inflicts 2 points of damage. Its movement is based on its creature type (avian, swimmer, and so on). If your beast companion dies, you can hunt in the wild for 1d6 days to find a new one. Enabler. (A creature’s level determines its target number, health, and",
"By linking to the creature from your Beast Companion ability, you can perceive through its senses if it is within 1 mile (1.5 km) of you. This effect lasts up to ten minutes. Action to establish.",
"On five consecutive nights each month, you change into a monstrous beast for up to one hour each night. In this new form, you gain +8 to your Might Pool, +1 to your Might Edge, +2 to your Speed Pool, and +1 to your Speed Edge. While in beast form, you can’t spend Intellect points for any reason other than to try to change to your normal form before the one-hour duration is over (a difficulty 2 task). In addition, you attack any and every living creature within short range. After you revert to your normal form, you take a –1 penalty to all rolls for one hour. If you did not kill and eat at least one substantial creature while in beast form, the penalty increases to –2 and affects all your rolls for the next 24 hours. Action to change back.",
"You are trained in the lore of flesh-eating, nonhumanoid creatures—recognizing them, knowing their weaknesses, and knowing their habits and behaviors. Enabler.",
"Any time you convince a foe that you are not a threat and then suddenly attack it (without provocation), the attack deals 4 additional points of damage. Enabler.",
"You’ve developed drug cocktails specifically designed to work with your own biochemistry. Depending on which one you inject, it makes you smarter, faster, or tougher, but when it wears off, the crash is a doozy, so you use it only in desperate situations. You gain 2 to your Might Edge, Speed Edge, or Intellect Edge for one minute, after which you can’t gain the benefit again for one hour. During this follow-up hour, every time you spend points from a Pool, increase the cost by 1. Action.",
"If attacking from a hidden vantage, with surprise, or before an opponent has acted, you get an asset on the attack (if you have Surprise Attack, this is in addition to the asset from that ability). On a successful hit with this surprise attack, you inflict 2 additional points of damage (for a total of 4 additional points of damage if you have Surprise Attack). Enabler.",
"When you use Enlarge, you can choose to grow up to 12 feet (4 m) in height, and you add 3 more temporary points to your Might Pool. Enabler.",
"When you use Beast Form, your beast form grows bigger than before, during which time you achieve a height of 12 feet (4 m). Being so large, your beast form gains the following additional bonuses: +1 to Armor, +5 to your Might Pool, and you are trained in using your fists as heavy weapons (if you weren’t already). However, your Speed defense tasks are hindered. While bigger, you also gain an asset to tasks that are easier for a larger creature to perform, like climbing, intimidating, wading rivers, and so on. Enabler.",
"You radiate a pulse of biomorphic energy up to a short distance away, but you tune it to disrupt life in an area an immediate distance across. All within the detonation take 5 points of damage that ignores Armor (unless it is Armor provided by a force field effect). If you apply additional Effort to increase the damage, you deal 2 additional points of damage per level of Effort (instead of 3 points); targets in the area take 1 point of damage even if you fail the attack roll. Action.",
"You consciously send out a pulse of your biomorphic field (a strange energy your body generates) and focus it on a living creature within short range. The target gains a free and immediate one-action recovery roll. You can’t use this ability again on that creature until after its next ten-hour rest. Action.",
"You are trained in one of the following: deception, stealth, or disguise. Enabler.",
"When you blend in, creatures still see you, but they attach no importance to your presence for about a minute. While blending in, you are specialized in stealth and Speed defense tasks. This effect ends if you do something to reveal your presence or position—attacking, using an ability, moving a large object, and so on. If this occurs, you can regain the remaining period of effect by taking an action to focus on seeming innocuous and as if you belong. Action to initiate or reinitiate.",
"As a servant of the gods, you can call up blessings in their name. This blessing depends on the god’s general demeanor and area of influence. Choose two of the following abilities: Authority/Law/Peace Benevolence/Righteousness/Spirit Death/Darkness Desire/Love/Health Earth/Stone Knowledge/Wisdom Nature/Animals/Plants Protection/Silence Sky/Air Sun/Light/Fire Trickery/Greed/Commerce War Water/Sea",
"You prevent a foe that can hear and understand you from attacking anyone or anything for one round. Action.",
"One level 1 demon, spirit, or similar creature within short range is destroyed or banished. In addition to the normal options for using Effort, you can choose to use Effort to increase the maximum level of the target. Thus, to destroy or banish a level 5 target (four levels above the normal limit), you must apply four levels of Effort. Action.",
"A target you choose within short range withers, suffering 3 points of damage. Action.",
"With a touch, you restore 1d6 points to one stat Pool of any creature, including yourself. This ability is a difficulty 2 Intellect task. Each time you attempt to heal the same creature, the task is hindered by an additional step. The difficulty returns to 2 after that creature rests for ten hours. Action.",
"You are trained in climbing, stonecraft, and spelunking. Enabler.",
"Choose up to three creatures (potentially including yourself). For one minute, a particular type of task (but not an attack roll or defense roll) is eased for those creatures, but only while they remain within immediate range of you. Action.",
"You are trained in botany and handling natural animals. Enabler.",
"You create a quiet bubble of protection around you to an immediate radius for one minute. The bubble moves with you. All defense rolls for you and all creatures you designate within the bubble are eased, and no noise, regardless of its origin, sounds louder than a normal speaking voice. Action to initiate.",
"A creature you touch is immune to airborne toxins or contaminants for ten minutes. Action.",
"You cause one creature or object within short range to catch fire, inflicting 1 point of ambient damage each round until the fire is extinguished (requiring an action). Action.",
"You are trained in detecting the deceptions of other creatures. Enabler.",
"A target you choose within short range (potentially yourself) deals 2 additional points of damage with its next successful weapon attack. Action.",
"A target you touch can breathe water for ten minutes. Action.",
"You deactivate the sensory apparatus of a machine, making it effectively blind until it can be repaired. You must either touch the target or strike it with a ranged attack (inflicting no damage). Action.",
"If you have a source of light, you can use it to make a melee attack against a target. If successful, the attack deals no damage, but the target is blinded for one minute. Action.",
"You move up to 1,000 feet (300 m) in one round. Action.",
"You automatically block the next melee attack made against you within the next minute. Action to initiate.",
"If you use a light or medium weapon, you can block attacks made against an ally near you. Choose one creature within immediate range. You provide an asset to that creature’s Speed defense tasks. You can’t use Quick Block while using Block for Another. Enabler.",
"When you have no points in one or two Pools, you gain an asset to attacks or defense rolls (your choice). Enabler.",
"If you take down a foe, you can move a short distance, but only if you move toward another foe. You don’t need to spend the points until you know that the first foe is down. Enabler.",
"You move so quickly that until your next turn, you look like a blur. While you are blurred, if you apply Effort to a melee attack task or Speed defense task, you get a free level of Effort on that task; you can move a short distance as part of another action or a long distance as your entire action. Enabler.",
"You can move a long distance from one location to another almost instantaneously, carried by a bolt of lightning. You must be able to see the new location, and there must be no intervening barriers. Action.",
"You blast a fan of lightning out to short range in an arc that is approximately 50 feet (15 m) wide at the end. This discharge inflicts 4 points of damage. If you apply Effort to increase the damage rather than to ease the task, you deal 2 additional points of damage per level of Effort (instead of 3 points); targets in the area take 1 point of damage even if you fail the attack roll. Action.",
"When you use Throw Force Shield, instead of dissipating after one attack (whether it hits or misses), it will attack up to two additional targets within short range. Effort or other modifiers applied to the first attack affect all other targets as well. Whether you hit all, some, or none of your targets, the shield dissipates and then reforms in your grasp. (If you choose Bouncing Shield and have previously taken the Throw Force Shield ability, you have the option to exchange that ability for Healing Pulse.) Enabler.",
"You have a level 3 magic ally bound to a physical object (perhaps a minor djinn bound to a lamp, a lesser demon bound to a coin, or a spirit bound to a mirror). The magic ally doesn’t yet have the full power that one of its kind could possess when mature. Normally, the ally remains quiescent in its bound object. When you use an action to manifest it, it appears next to you as a creature that can converse with you. The creature has its own personality determined by the GM and is a level higher than its base level for one area of knowledge (such as local history). The GM determines whether the magic ally has a long-term goal of its own. Each time the magic ally becomes physically manifest, it remains so for up to one hour. During that period, it accompanies you and follows your instructions. The magic ally must remain an immediate distance from you; if it moves farther away, it is yanked back into its object at the end of your following turn and cannot return until after your next ten-hour recovery roll. It doesn’t attack creatures, but it can use its action to serve as an asset for any one attack you make on your turn. Otherwise, it can take actions on its own (though you’ll likely roll for it). If the creature is reduced to 0 health, it dissipates. It reforms in its object in 1d6 + 2 days. If you lose the bound object, you retain a sense of the direction in which it lies. Action to manifest the magic creature.",
"You use trickery, well-spoken lies, and mind-affecting chemicals (or other means, like magic or high technology) to make others temporarily do what you want them to do. You control the actions of another creature you touch. This effect lasts for one minute. The target must be level 3 or lower. You can allow it to act freely or override its control on a case-by-case basis as long as you can see it. In addition to the normal options for using Effort, you can choose to use Effort to increase the maximum level of the target or increase the duration by one minute. Thus, to control the mind of a level 6 target (three levels above the normal limit) or control a target for four minutes (three minutes above the normal duration), you must apply three levels of Effort. When the duration ends, the creature doesn’t remember being controlled or anything it did while under your influence. Action to initiate.",
"You have an eye for group discipline and hierarchy, even among your foes. If a group of foes is gaining any kind of benefit from working together, you can attempt to disrupt that benefit by pointing out the weak spot in the enemy’s line, formation, or swarm attack. This effect lasts for up to a minute or until all the affected foes spend a round assessing and resetting themselves to regain their normal advantage. Action to initiate.",
"You move up to a short distance and attack up to four different foes as a single action as long as they are all along your path. Any modifiers that apply to one attack apply to all the attacks you make. If you have another special ability that allows you to move and take an action, when you use Break the Ranks, you gain an asset to attacking these foes. Action.",
"Using your clever words and knowledge of others, and given a couple of rounds of conversation to gain a few specific pieces of context regarding your target, you can utter a sentence designed to cause your target immediate psychological distress. If the target can hear and understand you, it suffers 6 points of Intellect damage (ignores Armor) and forgets the last day of its life, which might mean it forgets you and how it came to be where it currently is. In addition to the normal options for using Effort, you can choose to use Effort to attempt to break the mind of one additional target who can hear and understand you. Action to initiate, action to complete.",
"You are trained in tasks related to damaging objects with the goal of breaking, piercing, or demolishing them. It is a Might action to damage an object, and on a success, the object moves one step down the object damage track. If the Might roll exceeds the difficulty by two steps, the object instead moves two steps down the object damage track. If the Might roll exceeds the difficulty by four steps, the object moves three steps down the object damage track and is immediately destroyed. Brittle material reduces the effective level of the object, while hard material like wood or stone adds 1 to the effective level or 2 for very hard objects like those made of metal. Enabler.",
"You deal 4 additional points of damage with all melee attacks until the end of the next round. Enabler.",
"Choose one character standing next to you. That character becomes your buddy for ten minutes. You are trained in all tasks involving finding, healing, interacting with, and protecting your buddy. Also, while you stand next to your buddy, both of you have an asset on Speed defense tasks. You can have only one buddy at a time. Action to initiate.",
"Biomechanical implants, a magical jewel fused to your forehead, or something just as wild now provides you with inherent weaponry. This allows you to fire a blast of energy up to long range that inflicts 5 points of damage. There is no cost for you to use this ability. Action.",
"You send a beam of light at a creature within long range and then tighten the beam until it burns, inflicting 5 points of damage. Action.",
"You can take two separate actions this round, as long as one of them is to hide or to move in a direction that is not toward a foe. Enabler.",
"You get past a door, force field, or other barrier up to 3 feet (1 m) thick that is blocking your way. Depending on the barrier, this might involve finding a weak spot you can push through, pressing the right button by luck, just breaking through, or even weirder explanations like touching a thin place between dimensions or an unexpected interaction with your equipment. The difficulty of the task is the level of the barrier. This ability allows you alone to pass through, not anyone else, and the way through closes at the end of your turn (which might mean you’re trapped on the far side). You have an asset in any attempts to get through it again. In addition to the normal options for using Effort, you can choose to use Effort to increase the maximum thickness of the barrier, each level adding 3 feet (1 m). Action."


];



