let Dialogue = function(X, Y, State, myAlign){
	
	this.myX = X;
	this.myY = Y;
	
	this.state = State;
	
	this.myXScale = 5;
	this.sprite = game.add.sprite(X, Y, 'bubble');
	this.sprite.fixedToCamera = true;
	this.sprite.cameraOffset.setTo(X, Y);
    this.sprite.scale.setTo(this.myXScale, Math.max(Math.ceil(State.length / 20) + 1, 3));
    this.sprite.anchor.set(0);
	
	this.text = game.add.text(X, Y, State);
	this.text.fixedToCamera = true;
	this.text.cameraOffset.setTo(X+10, Y);
	this.text.font = 'Attica';	//Bastion?
	this.text.fill = '#65390D';
	this.text.fontSize = 32;
	this.text.wordWrap = true;
	this.text.wordWrapWidth = this.text.fontSize * this.myXScale * 2;
	this.text.align = myAlign;

};