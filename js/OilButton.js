let OilButton = function(X,Y,ParentBuilding){
	this.x=X;
    this.y=Y;
	this.parentBuilding=ParentBuilding;
    this.sprite=game.add.sprite(X, Y, "oilButton");
    this.sprite.scale.setTo(0.3, 0.3);
    this.sprite.anchor.set(0.5);
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(sendMessageToParent, this);
	
	function sendMessageToParent(){
		
		this.parentBuilding.selectBuildingType("oil");

	}
};
	
	OilButton.prototype.destroyMe = function(){
		
		kill;
		
	}