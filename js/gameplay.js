// gameplayState constructor
let money = 0;
let population=0;
let time;
let c;

let buildings=Array();

//DIALOGUE!!!
let dialogueRecords = Array();
let dialogueOptions = Array();
//YAY!!!

let image; 
let hud;
let gameplayState = function(){
	
};

gameplayState.prototype.create = function(){
	
	hud = new HUD();
	
	game.add.tileSprite(0, 0, 2436, 1125, 'background');
    game.world.setBounds(0, 0, 2436, 1125);
    game.camera.x = 2436/2;
    game.camera.y = 1125/2;
	
	//the dialogue scene starts after 10 seconds
	game.time.events.add(Phaser.Timer.SECOND * 10, DialogueScene, this);
	
};

function DialogueScene(){
	
	//ZA WARUDO! TOKI WO TOMARE!
	//flip some flag to false
		//it'd be some sort of flag that all the interactable elements have to check before doing anything when they get interacted on
	
	//semi-transparency!
	let semiTransparent = game.add.sprite(500, 500, 'semitransparent');
	semiTransparent.anchor.set(0.5)
	semiTransparent.scale.setTo(3000, 3000);
	
	//Dialogue!!!
	dialogueRecords.push(new DialogueRecord('Hello. This is example dialogue', 'NPC'));
	dialogueOptions.push(new DialogueChoice('despa-neato', 'left'));
	dialogueOptions.push(new DialogueChoice('nice', 'right'));

}

gameplayState.prototype.update = function(){
	hud.updateHud(money,population);
    if (this.game.input.activePointer.isDown) {
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