let DialogueBig = function(State){
	
	let X = 1000;
	let Y = 180;
	let myAlign = 'left';
	
	Dialogue.call(this, X, Y, State, myAlign);
	
	this.sprite.scale.setTo(this.myXScale * 2.5, (Math.max(Math.ceil(State.length / 80) + 1, 3) * 1.5));
	this.text.cameraOffset.setTo(X+60, Y+20);
	this.text.wordWrapWidth = this.text.fontSize * this.myXScale * 4 - 5;
};

DialogueBig.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;