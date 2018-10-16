let DialogueRecord = function(State, mySpeaker){
	
	let X;
	let Y;
	let myAlign;
	
	switch(mySpeaker){
		case 'Brady':
			X = 1100 + 200;
			Y = 500 - 100;
			myAlign = 'right';
			break;
		case 'NPC':
			X = 1100 - 200;
			Y = 500 - 100;
			myAlign = 'left';
	}
	
	Dialogue.call(this, X, Y, State, myAlign);

};

DialogueRecord.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;

DialogueRecord.prototype.MoveUp = function(height){
	
	//this.sprite.y -= height;
	//this.text.y -= height;
	this.myY -= height;
	this.sprite.cameraOffset.setTo(this.myX, this.myY);
	this.text.cameraOffset.setTo(this.myX+10, this.myY);

}