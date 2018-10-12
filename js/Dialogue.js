let Dialogue = function(X, Y, State, numLines){
	let width = 3;
	let lineHeight = 3;
	let style = { font: "32px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: width, align: "center", backgroundColor: "#000000" };

	this.x = X;
	this.y = Y;
	
	this.state = State;
	
	this.sprite = game.add.sprite(X, Y, 'star')
    this.sprite.scale.setTo(width, numLines * lineHeight);
    this.sprite.anchor.set(0.5);
	
	this.text = game.add.text(X, Y, State, style)
};