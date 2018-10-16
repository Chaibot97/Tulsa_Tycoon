let DialogueBig = function(State){
	
	let X = 1000;
	let Y = 200;
	let myAlign = 'left';
	
	Dialogue.call(this, X, Y, State, myAlign);
	
	this.sprite.scale.setTo(this.myXScale * 1.5, (Math.max(Math.ceil(State.length / 20) + 1, 3) * 1.5));
	this.text.cameraOffset.setTo(X+30, Y+20);
};

DialogueBig.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;