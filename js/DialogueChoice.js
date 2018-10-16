let DialogueChoice = function(State, myPosition){

	let X;
	let Y;
	let myAlign;
	switch(myPosition){
		case 'left':
			X = 1100 - 300;
			Y = 900;
			myAlign = 'left';
			break;
		case 'right':
			X = 1100 + 300;
			Y = 900;
			myAlign = 'right';
	}
	
	Dialogue.call(this, X, Y, State, myAlign);
	
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(spawnMoreDialogue, this);
	
	function spawnMoreDialogue(){
		
		//destroy stuff
		bigDialogue.sprite.kill(); bigDialogue.text.kill();
		for (let i=0; i<dialogueOptions.length; i++){
			dialogueOptions[i].sprite.destroy();
			dialogueOptions[i].text.destroy();
		}
		switch(currentDialogue){
			
			case 1:
				switch(this.state){
					case 'Yes, sir, that\'s me. (truth)':
						bigDialogue = new DialogueBig('Right! Well, then, I suppose we\'d best get started! I don\'t suppose this is your first time constructing an empire?');
						dialogueOptions.push(new DialogueChoice('Nope, I\'m a bonafide expert! (skip tutorial)', 'left'));
						dialogueOptions.push(new DialogueChoice('Well . . . I suppose I could use some pointers. (tutorial)', 'right'));
						break;
					case 'Aha, yes, I\'m Brady, I was only fibbing.':
						bigDialogue = new DialogueBig('Right! Well, then, I suppose we\'d best get started! I don\'t suppose this is your first time constructing an empire?');
						dialogueOptions.push(new DialogueChoice('Nope, I\'m a bonafide expert! (skip tutorial)', 'left'));
						dialogueOptions.push(new DialogueChoice('Well . . . I suppose I could use some pointers. (tutorial)', 'right'));
						break;
					case 'No, you must have me confused with somebody else. (lie)':
						bigDialogue = new DialogueBig('Oh . . . are you certain? You look mighty like the description I was given. If you\'re not the Mr. Brady, then I\'m afraid I\'ve no business with you.');
						dialogueOptions.push(new DialogueChoice('Aha, yes, I\'m Brady, I was only fibbing.', 'left'));
						dialogueOptions.push(new DialogueChoice('No, really, that\’s someone else. (quit game)', 'right'));
						break;
					case 'Nope, I\'m a bonafide expert! (skip tutorial)':
						bigDialogue = new DialogueBig('Splendid! In that case I\'ll get back to Oklahoma City and let you get on your way! I\'ll be checking back in about 10 years to see how you\'re doing, so try not to muck it up too badly.');
						bigDialogue.text.addFontStyle('oblique', 114);
						bigDialogue.text.addFontStyle('normal', 123);
						new DialogueDone();
						break;
					case 'Well . . . I suppose I could use some pointers. (tutorial)':
						bigDialogue = new DialogueBig('Well, then, you\'ve come to the right man! I just so happen to know everything there is to know about building a city from nothing. Here\'s what you need to know to get started. In order to have a city, you need people! And people can\'t stay anywhere for very long without a roof over their heads, so you\'ll need some houses to hold them. Hotels bring in outsiders and some cash to boot! With all these citizens, you can start rakin\' in the dough, and put those people to work. This land is rich with oil, so that\'s going to be your most profitable investment. If anybody asks you for help or advice, it might do you good to hear them out. People round these parts tend to give back in a big way. That\'s about all there is to it! I’m on my way back to Oklahoma City, but I\'ll be back in 10 years or so to see how you\'re doing, so try not to muck anything up! If you\'ve not made a name for yourself by January of 1908, I\'ll have to sell this land to somebody that can handle it! Best of luck!');
						new DialogueDone();
						break;
					case 'No, really, that\'s someone else (quit game)':
						bigDialogue = new DialogueBig('Oh. Well, that’s a shame. If you come across him, send him my way. Good luck, traveler.');
						new DialogueDone();
						break;
				}
			
			case 2:
				switch(this.state){
					case 'Sure am!':
						bigDialogue = new DialogueBig('Oh, thank the heavens! I\'m terribly sorry to bother you, sir, but I came to this land looking to make a name for myself. I want to build a farm and live self-sufficiently, but, see, the problem is, I haven\'t got much money to do it.');
						dialogueOptions.push(new DialogueChoice('I see.', 'left'));
						dialogueOptions.push(new DialogueChoice('Go on?', 'right'));
						break;
					case 'Yep, that\'s me!':
						bigDialogue = new DialogueBig('Oh, thank the heavens! I\'m terribly sorry to bother you, sir, but I came to this land looking to make a name for myself. I want to build a farm and live self-sufficiently, but, see, the problem is, I haven\'t got much money to do it.');
						dialogueOptions.push(new DialogueChoice('I see.', 'left'));
						dialogueOptions.push(new DialogueChoice('Go on?', 'right'));
						break;
					case 'I see.':
						bigDialogue = new DialogueBig('Well, I was wondering if you’d be kind enough to give me a loan. Yes, it\'ll cost you for now, but I promise I\'ll make it worth your while once I get my roots in the ground, so to speak. Once I get my farm going, I\'ll be sure to pay you back with interest.');
						dialogueOptions.push(new DialogueChoice('(Give him a loan of 1000 dollars)', 'left'));
						dialogueOptions.push(new DialogueChoice('(Don\'t give him a loan)', 'right'));
						break;
					case 'Go on?':
						bigDialogue = new DialogueBig('Well, I was wondering if you’d be kind enough to give me a loan. Yes, it\'ll cost you for now, but I promise I\'ll make it worth your while once I get my roots in the ground, so to speak. Once I get my farm going, I\'ll be sure to pay you back with interest.');
						dialogueOptions.push(new DialogueChoice('(Give him a loan of 1000 dollars)', 'left'));
						dialogueOptions.push(new DialogueChoice('(Don\'t give him a loan)', 'right'));
						break;
					case '(Give him a loan of 1000 dollars)':
						money -= 1000;
						helpedFarmer = true;
						dialogueEffect = new Effect('- 1000 BradyBucks');
						new DialogueDone();
						break;
					case '(Don\'t give him a loan)':
						helpedFarmer = false;
						new DialogueDone();
				}
			
			case 3:
				switch(this.state){
					case 'What\'s the meaning of all this ruckus?!':
						bigDialogue = new DialogueBig('Well, you see Mr. Brady, if you don\'t mind my saying so, we think we at the rig ought to have some protections! They\'re working us half to death out there, Mr. Brady. Isn\'t there anything you can do?');
						dialogueOptions.push(new DialogueChoice('I\'ll see if I can talk to some of the higher-ups for you, but I\'m no miracle-worker!', 'left'));
						dialogueOptions.push(new DialogueChoice('There\'s nothing I can do for you. Maybe a nearby town has better work options?', 'right'));
						break;
					case 'Is that so?':
						bigDialogue = new DialogueBig('It sure is, sir! Do you know how hard they\'re pushing us at the rigs? It\'s like they don\'t hardly think we\'re people! You think we\'re people, don\'t you, Mr. Brady? Of course you do! Won\'t you help us? I mean, I\'m not expecting you to pick up a picket or nothin\', but surely there\'s something you can do. Everybody likes YOU!');
						dialogueOptions.push(new DialogueChoice('I\'ll see if I can talk to some of the higher-ups for you, but I\'m no miracle-worker!', 'left'));
						dialogueOptions.push(new DialogueChoice('There\'s nothing I can do for you. Maybe a nearby town has better work options?', 'right'));
						break;
					case 'I\'ll see if I can talk to some of the higher-ups for you, but I\'m no miracle-worker!':
						oilValue -= 5;
						Tpopulation += 10;
						dialogueEffect = new Effect('-5 oil value; +10 population');
						new DialogueDone();
						break;
					case 'There\'s nothing I can do for you. Maybe a nearby town has better work options?':
						population += 10;
						dialogueEffect = new Effect('-10 population');
						new DialogueDone();
				}
			
			case 4:
				switch(this.state){
					case 'Just looking around. I\'m the landlord of this place.':
						bigDialogue = new DialogueBig('Oh, you own this hotel\'s land? Do you mind if I ask you a few things?');
						dialogueOptions.push(new DialogueChoice('If you must.', 'left'));
						dialogueOptions.push(new DialogueChoice('I\'m all ears.', 'right'));
						break;
					case 'I think I\'m fine. This is my hotel, ya know.':
						bigDialogue = new DialogueBig('Oh, you own this hotel\'s land? Do you mind if I ask you a few things?');
						dialogueOptions.push(new DialogueChoice('If you must.', 'left'));
						dialogueOptions.push(new DialogueChoice('I\'m all ears.', 'right'));
						break;
					case 'If you must.':
						bigDialogue = new DialogueBig('I have some fine ideas of how to spruce this place place up, do some redecorating, make it feel more lively. I\'m sure, with my changes, we could bring in more guests.');
						dialogueOptions.push(new DialogueChoice('I love redecorating!', 'left'));
						dialogueOptions.push(new DialogueChoice('Sounds lovely!', 'right'));
						break;
					case 'I\'m all ears.':
						bigDialogue = new DialogueBig('I have some fine ideas of how to spruce this place place up, do some redecorating, make it feel more lively. I\'m sure, with my changes, we could bring in more guests.');
						dialogueOptions.push(new DialogueChoice('I love redecorating!', 'left'));
						dialogueOptions.push(new DialogueChoice('Sounds lovely!', 'right'));
						break;
					case 'I love redecorating!':
						bigDialogue = new DialogueBig('Indeed, sir, but the matter is that I can\'t get my ideas through to the manager. Frankly, I\'m pretty sure he shoots down my suggestions because of the color of my skin.');
						dialogueOptions.push(new DialogueChoice('That\'s terrible!', 'left'));
						dialogueOptions.push(new DialogueChoice('. . . uh-huh.', 'right'));
						break;
					case 'Sounds lovely!':
						bigDialogue = new DialogueBig('Indeed, sir, but the matter is that I can\'t get my ideas through to the manager. Frankly, I\'m pretty sure he shoots down my suggestions because of the color of my skin.');
						dialogueOptions.push(new DialogueChoice('That\'s terrible!', 'left'));
						dialogueOptions.push(new DialogueChoice('. . . uh-huh.', 'right'));
						break;
					case 'That\'s terrible!':
						bigDialogue = new DialogueBig('Surely you could get through to him, sir. Could you put in a good word for me?');
						dialogueOptions.push(new DialogueChoice('Frankly, I\'d rather trust the intuition of one of my own over that of a negroe. Nothing personal you see, just the way I see things.', 'left'));
						dialogueOptions.push(new DialogueChoice('Consider it done.', 'right'));
						break;
					case '. . . uh-huh.':
						bigDialogue = new DialogueBig('Surely you could get through to him, sir. Could you put in a good word for me?');
						dialogueOptions.push(new DialogueChoice('Frankly, I\'d rather trust the intuition of one of my own over that of a negroe. Nothing personal you see, just the way I see things.', 'left'));
						dialogueOptions.push(new DialogueChoice('Consider it done.', 'right'));
						break;
					case 'Frankly, I\'d rather trust the intuition of one of my own over that of a negroe. Nothing personal you see, just the way I see things.':
						population += 10;
						dialogueEffect = new Effect('-10 population');
						new DialogueDone();
						break;
					case 'Consider it done.':
						Tpopulation += 10;
						dialogueEffect = new Effect('+10 population');
						new DialogueDone();
				}
			
			case 5:
				switch(this.state){
					case 'I\'m a little busy . . .':
						bigDialogue = new DialogueBig('Oh, this won\'t take a minute. Ya see, the thing is, it\'s recently come to our attention that you got a negroe bellhop working down at your hotel.');
						dialogueOptions.push(new DialogueChoice('"Our" attention?', 'left'));
						dialogueOptions.push(new DialogueChoice('That\'s right.', 'right'));
						break;
					case 'Yeah, I can spare some time.':
						bigDialogue = new DialogueBig('Thank ya kindly, sir. Ya see, the thing is, it\'s recently come to our attention that you got a negroe bellhop working down at your hotel.');
						dialogueOptions.push(new DialogueChoice('"Our" attention?', 'left'));
						dialogueOptions.push(new DialogueChoice('That\'s right.', 'right'));
						break;
					case '"Our" attention?':
						bigDialogue = new DialogueBig('Oh, pardon me, sir, I haven\'t properly introduced myself. The name\'s Jeremiah Davis, wizard of the Ku Klux Klan. Now, Some of us have been talkin it over and, well, a lot of people are uncomfortable with the whole situation. I dare say it\'s costing you some business.');
						dialogueOptions.push(new DialogueChoice('I see what you mean.', 'left'));
						dialogueOptions.push(new DialogueChoice('Where are you going with this?', 'right'));
						break;
					case 'That\'s right.':
						bigDialogue = new DialogueBig('Now, Some of us down at the Klan have been talkin it over and, well, a lot of people are uncomfortable with the whole situation. I dare say it\'s costing you some business.');
						dialogueOptions.push(new DialogueChoice('I see what you mean.', 'left'));
						dialogueOptions.push(new DialogueChoice('Where are you going with this?', 'right'));
						break;
					case 'I see what you mean.':
						bigDialogue = new DialogueBig('Yeah, well, we got to thinking things would be better for everyone if you fired this man. I reckon you\'d find your establishment in the service of a fair few more guests.');
						dialogueOptions.push(new DialogueChoice('I think I know how to run my business. (Don\'t fire the bellhop)', 'left'));
						dialogueOptions.push(new DialogueChoice('I\'ll take it under consideration. (Fire the bellhop)', 'right'));
						break;
					case 'Where are you going with this?':
						bigDialogue = new DialogueBig('Well, we got to thinking things would be better for everyone if you fired this man. I reckon you\'d find your establishment in the service of a fair few more guests.');
						dialogueOptions.push(new DialogueChoice('I think I know how to run my business. (Don\'t fire the bellhop)', 'left'));
						dialogueOptions.push(new DialogueChoice('I\'ll take it under consideration. (Fire the bellhop)', 'right'));
						break;
					case 'I think I know how to run my business. (Don\'t fire the bellhop)':
						new DialogueDone();
						break;
					case 'I\'ll take it under consideration. (Fire the bellhop)':
						population += 10;
						dialogueEffect = new Effect('your hotel is losing business \n-10 population');
						new DialogueDone();
				}
			
			case 6:
				switch(this.state){
					case 'Speaking.':
						bigDialogue = new DialogueBig('Right. You see, it\'s come to our attention that you were assaulted a few years back by some rioters from the rigs. Well, the arm of liberty never forgets, nor do her knights, and it\'s about time those violent agitators got what was coming to them.');
						dialogueOptions.push(new DialogueChoice('Well, actually . . .', 'left'));
						dialogueOptions.push(new DialogueChoice('Yes, officer, I couldn\'t agree more. What\'s being done?', 'right'));
						break;
					case 'W. Tate, if you don\'t mind. How can I help you today?':
						bigDialogue = new DialogueBig('Right. You see, it\'s come to our attention that you were assaulted a few years back by some rioters from the rigs. Well, the arm of liberty never forgets, nor do her knights, and it\'s about time those violent agitators got what was coming to them.');
						dialogueOptions.push(new DialogueChoice('Well, actually . . .', 'left'));
						dialogueOptions.push(new DialogueChoice('Yes, officer, I couldn\'t agree more. What\'s being done?', 'right'));
						break;
					case 'Well, actually . . .':
						bigDialogue = new DialogueBig('The so-called "union" is being held at the county jail as we speak, ready to receive sentence by the judge. We figured, being personally involved in it, you\'d like to see this sentence carried out properly. Are you with us?');
						dialogueOptions.push(new DialogueChoice('Shameful, acting the way they did. I\'d like to see them feel some of that shame. (Go with the police)', 'left'));
						dialogueOptions.push(new DialogueChoice('They did nothing wrong! Those are innocent men, and I\'ll have no part in this farce of a trial.', 'right'));
						break;
					case 'Yes, officer, I couldn\'t agree more. What\'s being done?':
						bigDialogue = new DialogueBig('The so-called "union" is being held at the county jail as we speak, ready to receive sentence by the judge. We figured, being personally involved in it, you\'d like to see this sentence carried out properly. Are you with us?');
						dialogueOptions.push(new DialogueChoice('Shameful, acting the way they did. I\'d like to see them feel some of that shame. (Go with the police)', 'left'));
						dialogueOptions.push(new DialogueChoice('They did nothing wrong! Those are innocent men, and I\'ll have no part in this farce of a trial.', 'right'));
						break;
					case 'Shameful, acting the way they did. I\'d like to see them feel some of that shame. (Go with the police)':
						helpedWorker = false;
						dialogueEffect = new Effect('You helped tar and feather some unionized workers.');
						DialogueDone();
						break;
					case 'They did nothing wrong! Those are innocent men, and I\'ll have no part in this farce of a trial.':
						helpedWorker = true;
						dialogueEffect = new Effect('Some workers were tarred and feathered, but you\nstayed out of it.');
						DialogueDone();
				}
			
			case 8:
				switch(this.state){
					case 'Why weren\'t you?':
						bigDialogue = new DialogueBig('Well, I\'ve been taking time off work to look after my little girl and wife. They\'ve come down with something terrible, and they\'ve got noone but me and themselves, so thankfully they let me off work now for family emergencies. Lots has changed since you and I last talked, huh? Well, I’d wager you\'re responsible for at least half of it, so I\'d best be going before you steamroll me, too. Good to see you again!');
						new DialogueDone();
						break;
					case 'How\'s the rig?':
						bigDialogue = new DialogueBig('Well, I\'ve been taking time off work to look after my little girl and wife. They\'ve come down with something terrible, and they\'ve got noone but me and themselves, so thankfully they let me off work now for family emergencies. Lots has changed since you and I last talked, huh? Well, I’d wager you\'re responsible for at least half of it, so I\'d best be going before you steamroll me, too. Good to see you again!');
						new DialogueDone();
				}
			
			case 9:
				switch(this.state){
					case 'Uh, sure?':
						bigDialogue = new DialogueBig('I\'m the farmer you gave a loan to some years ago. Well, I\'m proud to say that I\'m fully self-sufficient now, and I came to repay what I owe!');
						dialogueOptions.push(new DialogueChoice('Good for you, man!', 'left'));
						dialogueOptions.push(new DialogueChoice('Good for you, man! Now give me my money.', 'right'));
						break;
					case 'I\'m terrible with faces. And names. People in general, really.':
						bigDialogue = new DialogueBig('I\'m the farmer you gave a loan to some years ago. Well, I\'m proud to say that I\'m fully self-sufficient now, and I came to repay what I owe!');
						dialogueOptions.push(new DialogueChoice('Good for you, man!', 'left'));
						dialogueOptions.push(new DialogueChoice('Good for you, man! Now give me my money.', 'right'));
						break;
					case 'Good for you, man!':
						money+=10000;
						netWorth+=10000;
						dialogueEffect = new Effect('+10000 BradyBucks');
						new DialogueDone();
						break;
					case 'Good for you, man! Now give me my money.':
						money+=3000;
						netWorth+=3000;
						dialogueEffect = new Effect('+3000 BradyBucks');
						new DialogueDone();
				}
			
			case 10:
				switch(this.state){
					case 'Have we met?':
						bigDialogue = new DialogueBig('It\'s me! The farmer who came to you asking for a loan all those years ago!');
						dialogueOptions.push(new DialogueChoice('Oh, yeah. Hi.', 'left'));
						dialogueOptions.push(new DialogueChoice('Huh. Didn\'t think I\'d see you again, to be honest . . .', 'right'));
						break;
					case 'Yes . . . and you are?':
						bigDialogue = new DialogueBig('It\'s me! The farmer who came to you asking for a loan all those years ago!');
						dialogueOptions.push(new DialogueChoice('Oh, yeah. Hi.', 'left'));
						dialogueOptions.push(new DialogueChoice('Huh. Didn\'t think I\'d see you again, to be honest . . .', 'right'));
						break;
					case 'Oh, yeah. Hi.':
						bigDialogue = new DialogueBig('Oh man, I bet you wish you\'d given me a hand back then, because I\'m doing great now! I own a settlement just West of here, and we are booming!');
						dialogueOptions.push(new DialogueChoice('Good to hear!', 'left'));
						dialogueOptions.push(new DialogueChoice('I hope you don\'t consider me competition.', 'right'));
						break;
					case 'Huh. Didn\'t think I\'d see you again, to be honest . . .':
						bigDialogue = new DialogueBig('Oh man, I bet you wish you\'d given me a hand back then, because I\'m doing great now! I own a settlement just West of here, and we are booming!');
						dialogueOptions.push(new DialogueChoice('Good to hear!', 'left'));
						dialogueOptions.push(new DialogueChoice('I hope you don\'t consider me competition.', 'right'));
						break;
					case 'Good to hear!':
						bigDialogue = new DialogueBig('Haha, yeah! In fact, from the looks of this place, we\'re already cutting into your population. Welp, Godspeed, old-timer!');
						population += 10;
						dialogueEffect = new Effect('-10 population');
						new DialogueDone();
						break;
					case 'I hope you don\'t consider me competition.':
						bigDialogue = new DialogueBig('Oh, no, I definitely do. In fact, from the looks of this place, we\'re already cutting into your population. Welp, Godspeed, old-timer!');
						population += 10;
						dialogueEffect = new Effect('-10 population');
						new DialogueDone();
				}
			
			case 11:
				switch(this.state){
					case 'Well, if it isn’t old officer Tar-n-Feathers!':
						bigDialogue = new DialogueBig('Haha, we go way back, don\'t we? Anyhow, We\'ve got a bit of a sticky situation on our hands.');
						dialogueOptions.push(new DialogueChoice('What in tarnation is it this time?', 'left'));
						dialogueOptions.push(new DialogueChoice('"Sticky" situation? Was that a tar and feathers pun?', 'right'));
						break;
					case 'I hope I can say the same, depending on why you’re here . . .':
						bigDialogue = new DialogueBig('Haha, we go way back, don\'t we? Anyhow, We\'ve got a bit of a sticky situation on our hands.');
						dialogueOptions.push(new DialogueChoice('What in tarnation is it this time?', 'left'));
						dialogueOptions.push(new DialogueChoice('"Sticky" situation? Was that a tar and feathers pun?', 'right'));
						break;
					case 'What in tarnation is it this time?':
						bigDialogue = new DialogueBig('Ha, "Tar"-nation. Good one. Anyhow, we\'ve got ourselves in a tight spot. A storm\'s a brewin, yessir, and there\'s bound to be rioting tonight.');
						dialogueOptions.push(new DialogueChoice('Dare I ask why?', 'left'));
						dialogueOptions.push(new DialogueChoice('What do you need me to do?', 'right'));
						break;
					case '"Sticky" situation? Was that a tar and feathers pun?':
						bigDialogue = new DialogueBig('You bet your bottom dollar, buckaroo. Anyhow, we\'ve got ourselves in a tight spot. A storm\'s a brewin, yessir, and there\'s bound to be rioting tonight.');
						dialogueOptions.push(new DialogueChoice('Dare I ask why?', 'left'));
						dialogueOptions.push(new DialogueChoice('What do you need me to do?', 'right'));
						break;
					case 'Dare I ask why?':
						bigDialogue = new DialogueBig('Couple a negros got in a fight with a couple a whites, now both sides are seein\' red and it\'s bound to be trouble. Could you lend us a hand, just watch guard here and try to keep things from escalating too bad?');
						dialogueOptions.push(new DialogueChoice('(Be a guard)', 'left'));
						dialogueOptions.push(new DialogueChoice('(Don\'t be a guard)', 'right'));
						break;
					case 'What do you need me to do?':
						bigDialogue = new DialogueBig('Could you lend us a hand, just watch guard here and try to keep things from escalating too bad?');
						dialogueOptions.push(new DialogueChoice('(Be a guard)', 'left'));
						dialogueOptions.push(new DialogueChoice('(Don\'t be a guard)', 'right'));
						break;
					case '(Be a guard)':
						population += 10;
						dialogueEffect = new Effect('there were casualties \n but not as many as there could have been');
						new DialogueDone();
						break;
					case '(Don\'t be a guard)':
						population += 30;
						dialogueEffect = new Effect('there were a lot of casualties');
						new DialogueDone();
				}
			
			case 12:
				switch(this.state){
					case 'Yessir. What can I do for you?':
						bigDialogue = new DialogueBig('Well, see, I\'ve got something of a proposition for ya. I know you\'re in the business of business, so let\'s talk numbers.');
						dialogueOptions.push(new DialogueChoice('You\'ve piqued my interest. Keep talking.', 'left'));
						dialogueOptions.push(new DialogueChoice('There are plenty more important things we could talk about, but if this will make you leave, I\'m listening.', 'right'));
						break;
					case 'In a manner of speaking. What do you want?':
						bigDialogue = new DialogueBig('Well, see, I\'ve got something of a proposition for ya. I know you\'re in the business of business, so let\'s talk numbers.');
						dialogueOptions.push(new DialogueChoice('You\'ve piqued my interest. Keep talking.', 'left'));
						dialogueOptions.push(new DialogueChoice('There are plenty more important things we could talk about, but if this will make you leave, I\'m listening.', 'right'));
						break;
					case 'You\'ve piqued my interest. Keep talking.':
						bigDialogue = new DialogueBig('We\'ve got quite a following, since last we\'ve talked, and as your father before you knew, limiting the growth of such a movement as this would be to deprave the American people of a pure life.');
						dialogueOptions.push(new DialogueChoice('"Pure" by whose standards?', 'left'));
						dialogueOptions.push(new DialogueChoice('Quit dancing around the bush. I thought you said you had a business proposition for me.', 'right'));
						break;
					case 'There are plenty more important things we could talk about, but if this will make you leave, I\'m listening.':
						bigDialogue = new DialogueBig('We\'ve got quite a following, since last we\'ve talked, and as your father before you knew, limiting the growth of such a movement as this would be to deprave the American people of a pure life.');
						dialogueOptions.push(new DialogueChoice('"Pure" by whose standards?', 'left'));
						dialogueOptions.push(new DialogueChoice('Quit dancing around the bush. I thought you said you had a business proposition for me.', 'right'));
						break;
					case '"Pure" by whose standards?':
						bigDialogue = new DialogueBig('The ones that matter, naturally. If you need to ask that question maybe you\'re too thick to figure my deal anyhow. Awlright, here it is in the toss of a hat. We\'re lookin\' to expand our territory to this here city, but we need your approval, seein\' as how you own it. We\'d bring a good number of people and pay you for the land, o\' course. What d\'ya say?');
						dialogueOptions.push(new DialogueChoice('Not in my lifetime, rat.', 'left'));
						dialogueOptions.push(new DialogueChoice('Money talks far better than you do, friend. You\'ve got yourself a deal.', 'right'));
						break;
					case 'Quit dancing around the bush. I thought you said you had a business proposition for me.':
						bigDialogue = new DialogueBig('Well, we\'re in no rush, we\'re QUITE sure you\'ll say yes.');
						dialogueOptions.push(new DialogueChoice(' . . . ', 'left'));
						dialogueOptions.push(new DialogueChoice('Tell me anyway.', 'right'));
						break;
					case ' . . . ':
						bigDialogue = new DialogueBig('Awlright, here it is in the toss of a hat. We\'re lookin\' to expand our territory to this here city, but we need your approval, seein\' as how you own it. We\'d bring a good number of people and pay you for the land, o\' course. What d\'ya say?');
						dialogueOptions.push(new DialogueChoice('Not in my lifetime, rat.', 'left'));
						dialogueOptions.push(new DialogueChoice('Money talks far better than you do, friend. You\'ve got yourself a deal.', 'right'));
						break;
					case 'Tell me anyway':
						bigDialogue = new DialogueBig('Awlright, here it is in the toss of a hat. We\'re lookin\' to expand our territory to this here city, but we need your approval, seein\' as how you own it. We\'d bring a good number of people and pay you for the land, o\' course. What d\'ya say?');
						dialogueOptions.push(new DialogueChoice('Not in my lifetime, rat.', 'left'));
						dialogueOptions.push(new DialogueChoice('Money talks far better than you do, friend. You\'ve got yourself a deal.', 'right'));
						break;
					case 'Not in my lifetime, rat.':
						new DialogueDone();
						break;
					case 'Money talks far better than you do, friend. You\'ve got yourself a deal.':
						money += 2000;
						netWorth+=2000;
						Tpopulation += 10;
						dialogueEffect = new Effect('+2000 BradyBucks, +10 population');
						new DialogueDone();
				}
			
			case 13:
				switch(this.state){
					case 'This place is the worst and I want to go home.':
						bigDialogue = new DialogueBig('Ain\'t this place your home now? Anyway, let\'s see what kinda profit you done did brought in.');
						dialogueEffect = new Effect('You have ' + money + 'BradyBucks!!!\nBuy yourself something nice!');
						new DialogueDone();
						break;
					case 'I made a lot of money and would like to receive praise for it now.':
						bigDialogue = new DialogueBig('Slow down there, buckaroo. Lemme tally up your total.');
						dialogueEffect = new Effect('You have ' + money + 'BradyBucks!!!\nBuy yourself something nice!');
						new DialogueDone();
				}
			
		}

	}

};

DialogueChoice.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;