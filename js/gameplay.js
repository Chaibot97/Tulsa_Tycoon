// gameplayState constructor
let money = 2000;
let population=0;
let Tpopulation=0;
let time=3000;
let pause = false;
let c;

let buildings=Array();

let image;
//let this.hud;
let popMenu;
let map;

//DIALOGUE!!!
let dialogueOptions = Array();

let bigDialogue;
let dialogueEffect;

let semiTransparent;
let npc;

let helpedWorker;
let helpedFarmer;
let oilValue = 50;

let currentDialogue = 0;
//YAY!!!

let hud;
let timer1;
let timer2;
let clickFX;
let alertFX;
let buildingFX;
let lvUp1FX;
let lvUp2FX;
let dialogueFX;
let dialogueGoodFX;
let dialogueBadFX;
let BGM;
let gameplayState = function(){
};

gameplayState.prototype.create = function(){
	map=game.add.tileSprite(0, 0,  3654, 2250, 'background');
	map.events.onInputDown.add(closeMenu,this);
    game.world.setBounds(0, 0, 3654, 2250);
    game.camera.x = 0;
	game.camera.y = 2250-1125;
    this.moneyInfo = null;
    this.PopuInfo = null;
    this.timeInfo = null;
	let coords= game.cache.getJSON('buildingCoords');
	for(let i=0;i<coords.length;i++){
		buildings.push(new BuildingSite(coords[i][0], coords[i][1]));
    }
    let timer1=game.time.create(false);
    let timer2=game.time.create(false);
    timer1.loop(2500, counteTime, this);
    timer2.loop(1250, sumYields, this);
    timer1.start();
    timer2.start();
    hud=new HUD();
    hud.updateTime();
    hud.updateHud(money,population,Tpopulation);

	popMenu=new PopMenu();
    clickFX=game.add.audio('click_audio');
    alertFX=game.add.audio('alert_audio');
    buildingFX=game.add.audio('building_audio');
    lvUp1FX=game.add.audio('levelup1_audio');
    lvUp2FX=game.add.audio('levelup2_audio');

	firstDialogue();
	
    dialogueFX=game.add.audio('dialogue_audio')
    dialogueBadFX=game.add.audio('dialogue_bad_audio')
    dialogueGoodFX=game.add.audio('dialogue_good_audio')

    BGM=game.add.audio("main_audio")
    BGM.loop=true;
    BGM.play();
};

gameplayState.prototype.update = function(){
    
    if (this.game.input.activePointer.isDown && !pause) {
        if (this.game.origDragPoint) {		// move the camera by the amount the mouse has moved since last update
            game.camera.x += this.game.origDragPoint.x - this.game.input.activePointer.position.x;
            game.camera.y += this.game.origDragPoint.y - this.game.input.activePointer.position.y;
        }
        // set new drag origin to current position
		this.game.origDragPoint = this.game.input.activePointer.position.clone();
    }
    else {
		this.game.origDragPoint = null;
	}
    
};

function counteTime(){
	if (!pause)
	{
		time-=10;
		hud.updateTime(time);
	}
}

function sumYields(){
    buildings.forEach(function(e) {
        if(e.building && !pause)
            e.building.yieldMoney();
    });
    hud.updateHud(money,population,Tpopulation);
}

function stopInteracting(){
	buildings.forEach(function(e) {
        if(e.building)
            e.building.sprite.inputEnabled = false;
    })
}
function continueInteracting(){
	buildings.forEach(function(e) {
        if(e.building)
            e.building.sprite.inputEnabled = true;
    })
}

function loadDialogue(year){
	switch(year){
		case 1899:
			secondDialogue();
			break;
		case 1900:
			thirdDialogue();
			break;
		case 1901:
			fourthDialogue();
			break;
		case 1902:
			fifthDialogue();
			break;
		case 1903:
			sixthDialogue();
			break;
		case 1904:
			if (!helpedWorker) {seventhDialogue();}
			else {eigthDialogue();}
			break;
		case 1905:
			if (helpedFarmer) {ninthDialogue();}
			else {tenthDialogue();}
			break;
		case 1906:
			eleventhDialogue();
			break;
		case 1906:
			twelfthDialogue();
			break;
		case 1907:
			thirteenthDialogue();
	}
}
function firstDialogue(){
	//prepare the dialogue!
	prepareDialogue('richMan');
	
	currentDialogue = 1;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Ah, so you’re the young man helping to build this here settlement! Brady, wasn’t it?');
	dialogueOptions.push(new DialogueChoice('Yes, sir, that\'s me. (truth)', 'left'));
	dialogueOptions.push(new DialogueChoice('No, you must have me confused with somebody else. (lie)', 'right'));
}
function secondDialogue(){
	prepareDialogue('farmer');
	
	currentDialogue = 2;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Excuse me, sir! Are you Mr. Brady?', 'NPC');
	dialogueOptions.push(new DialogueChoice('Sure am!', 'left'));
	dialogueOptions.push(new DialogueChoice('Yep, that\'s me!', 'right'));
}
function thirdDialogue(){
	prepareDialogue('oilWorker');
	
	currentDialogue = 3;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('WORKERS\' RIGHTS! WORKERS\' RIGHTS! WORKERS\' - Oh! Mr. Brady! Boy, have you come at the right time!', 'NPC');
	dialogueOptions.push(new DialogueChoice('What\'s the meaning of all this ruckus?!', 'left'));
	dialogueOptions.push(new DialogueChoice('Is that so?', 'right'));
}
function fourthDialogue(){
	prepareDialogue('bellhop');
	
	currentDialogue = 4;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Excuse me sir, do you need assistance with anything?', 'NPC');
	dialogueOptions.push(new DialogueChoice('Just looking around. I\'m the landlord of this place.', 'left'));
	dialogueOptions.push(new DialogueChoice('I think I\'m fine. This is my hotel, ya know.', 'right'));
}
function fifthDialogue(){
	prepareDialogue('kkkMan');
	
	currentDialogue = 5;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Howdy, Mr. Brady! Got a moment to sit and chat?', 'NPC');
	dialogueOptions.push(new DialogueChoice('I\'m a little busy . . .', 'left'));
	dialogueOptions.push(new DialogueChoice('Yeah, I can spare some time.', 'right'));
}
function sixthDialogue(){
	prepareDialogue('police');
	
	currentDialogue = 6;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Wyatt Brady?  We\'re looking for a Mr. Wyatt T. Brady?', 'NPC');
	dialogueOptions.push(new DialogueChoice('Speaking.', 'left'));
	dialogueOptions.push(new DialogueChoice('W. Tate, if you don\'t mind. How can I help you today?', 'right'));
}
function seventhDialogue(){
	prepareDialogue('oilWorker');
	
	currentDialogue = 7;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('You...Brady? What the hell are you thinking, showing your face around here? No hood to hide behind this time, huh, bastard? So, you\'re everybody\'s friend in public, but we ask you for one favor and all of a sudden it\'s your right to do that shit to us? I just thank God for my daughter\'s sake that I wasn\'t around on the day of the sentencing, if that\'s what you think it deserves to be called. You\'re a monster . . . stay away from me and my family.', 'NPC');
	new DialogueDone();
}
function eigthDialogue(){
	prepareDialogue('oilWorker');
	
	currentDialogue = 8;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('You . . . Brady? Is that really you? Oh, a miracle to see a friendly face nowadays. Seems they\'re getting fewer and farther between by the minute. I\'m sure you must\'ve heard what happened to my buddies from the rig… I just can\'t believe somebody would be sick enough to do something like that, you know? Of course you do. In any case, I\'m just glad I wasn\'t there.', 'NPC');
	dialogueOptions.push(new DialogueChoice('Why weren\'t you?', 'left'));
	dialogueOptions.push(new DialogueChoice('How\'s the rig?', 'right'));
}
function ninthDialogue(){
	prepareDialogue('farmer');
	
	currentDialogue = 9;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Brady! Good to see ya, lad! Remember me?', 'NPC');
	dialogueOptions.push(new DialogueChoice('Uh, sure?', 'left'));
	dialogueOptions.push(new DialogueChoice('I\'m terrible with faces. And names. People in general, really.', 'right'));
}
function tenthDialogue(){
	prepareDialogue('farmer');
	
	currentDialogue = 10;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Well, I\'ll be damned! Brady!', 'NPC');
	dialogueOptions.push(new DialogueChoice('Have we met?', 'left'));
	dialogueOptions.push(new DialogueChoice('Yes . . . and you are?', 'right'));
}
function eleventhDialogue(){
	prepareDialogue('police');
	
	currentDialogue = 11;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Brady! Good to see ya!', 'NPC');
	dialogueOptions.push(new DialogueChoice('Well, if it isn’t old officer Tar-n-Feathers!', 'left'));
	dialogueOptions.push(new DialogueChoice('I hope I can say the same, depending on why you’re here . . .', 'right'));
}
function twelfthDialogue(){
	prepareDialogue('kkkMan');
	
	currentDialogue = 12;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Well, if it isn\'t Brady! I\'m always happy to talk to another true white American!', 'NPC');
	dialogueOptions.push(new DialogueChoice('Yessir. What can I do for you?', 'left'));
	dialogueOptions.push(new DialogueChoice('In a manner of speaking. What do you want?', 'right'));
}
function thirteenthDialogue(){
	prepareDialogue('richMan');
	
	currentDialogue = 13;
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('. . . . . . . wow. You, uh, you sure do get around, don\'t ya, partner?', 'NPC');
	dialogueOptions.push(new DialogueChoice('This place is the worst and I want to go home.', 'left'));
	dialogueOptions.push(new DialogueChoice('I made a lot of money and would like to receive praise for it now.', 'right'));
}
function prepareDialogue(character){
	//ZA WARUDO! TOKI WO TOMARE!
	pause = true;
	
	//stop the buildings from interacting
	stopInteracting();
	
	//semi-transparency!
	semiTransparent = game.add.sprite(500, 500, 'semitransparent');
	semiTransparent.anchor.set(0.5)
	semiTransparent.scale.setTo(3000, 3000);
	
	//sprite of the guy what's doin the talkin!
	npc = game.add.sprite(500, 500, character);
	npc.scale.setTo(0.7, 0.7);
	npc.anchor.set(0.5);
	npc.fixedToCamera = true;
}