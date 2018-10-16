let Effect = function(State){

	this.text = game.add.text(1000, 400, State);
	this.text.fixedToCamera = true;
	this.text.cameraOffset.setTo(1000, 200);
	this.text.font = 'Baskerville';	//Bastion?
	this.text.fill = '#65390D';
	this.text.fontSize = 64;

}