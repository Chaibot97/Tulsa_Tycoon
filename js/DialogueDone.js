let DialogueDone = function(){
	
	let X = 500;
	let Y = 1000;
	let myAlign = 'center';
	let State = 'Done'
	
	Dialogue.call(this, X, Y, State, myAlign);
	
	this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(finishScene, this);

	function finishScene(){
		
		semiTransparent.destroy();
		for (let i=0; i<dialogueOptions.length; i++){
		
			dialogueOptions[i].sprite.destroy();
			dialogueOptions[i].text.destroy();
		
		}
		for (let i=0; i<dialogueRecords.length; i++){
		
			dialogueRecords[i].sprite.destroy();
			dialogueRecords[i].text.destroy();
		
		}
		
		game.time.events.add(Phaser.Timer.SECOND * 10, DialogueScene, this);
		
		this.sprite.destroy();
		this.text.destroy();
		
	}
	
};

DialogueDone.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;