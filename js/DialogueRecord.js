let DialogueRecord = function(State, mySpeaker){
	
	let X;
	let Y;
	let myAlign;
	let numLines;
	
	switch(mySpeaker){
		case 'Brady':
			X = 800;
			Y = 200;
			myAlign = 'right';
			break;
		case 'NPC':
			X = 400;
			Y = 200;
			myAlign = 'left';
	}
	
	Dialogue.call(this, X, Y, State, myAlign);

};

DialogueRecord.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;

DialogueRecord.prototype.MoveUp = function(height){

	this.y -= height;

}