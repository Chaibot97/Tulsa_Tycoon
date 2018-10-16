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

let semiTransparent;
let npc;
//YAY!!!

let hud;
let timer1;
let timer2;
let gameplayState = function(){
};

gameplayState.prototype.create = function(){
	map=game.add.tileSprite(0, 0,  3654, 2250, 'background');
	map.events.onInputDown.add(toggleMenu,this);
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
    hud.updateTime(time);
    hud.updateHud(money,population,Tpopulation);

	popMenu=new PopMenu();

    //c= new Clickable(500,500,"star");
	
	firstDialogue();
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
			seventhDialogue();
			break;
		case 1905:
			eigthDialogue();
			break;
		case 1906:
			ninthDialogue();
			break;
		case 1906:
			tenthDialogue();
			break;
		case 1907:
			eleventhDialogue();
	}
}
function firstDialogue(){
	//prepare the dialogue!
	prepareDialogue('richMan');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the first example dialogue and oh man oh geez its arbitrarily large eyyyyyyy words words words');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function secondDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function thirdDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function fourthDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function fifthDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function sixthDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function seventhDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function eigthDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function ninthDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function tenthDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
}
function eleventhDialogue(){
	prepareDialogue('bellhop');
	
	//Dialogue!!!
	bigDialogue = new DialogueBig('Hello. This is the second example dialogue', 'NPC');
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));
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