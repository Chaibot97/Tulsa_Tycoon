let ClickableV2 = function(X,Y){
    this.x=X;
    this.y=Y;
	this.type = "empty";
    this.sprite=game.add.sprite(X, Y, "empty");
    this.sprite.scale.setTo(0.5, 0.5);
    this.sprite.anchor.set(0.5);
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(openMenu, this);
	this.sprite.events.onInputDown.add(closeAllMenus, this);
	this.sprite.events.onInputDown.add(generateResources, this);
	
	this.menuOpen = false;
	this.menuButtons = Array();

	function openMenu(){
		
		if (!this.menuOpen){
			this.menuOpen = true;
			
			myHouseButton = new HouseButton(this.x+200, this.y, this);
			myHotelButton = new HotelButton(this.x+200, this.y+70, this);
			myOilButton = new OilButton(this.x+200, this.y+140, this);
			
			this.menuButtons.push(myHouseButton);
			this.menuButtons.push(myHotelButton);
			this.menuButtons.push(myOilButton);
		}
		
	}

	function closeAllMenus(){
	
		for(let i=0; i<buildings.length; i++){
			buildings[i].closeMenu();
		}
	
	}
	
	function generateResources(){
		
		switch(this.type){
			case "empty":
				break;
			case "house":
				population += 30;
				break;
			case "hotel":
				population += 10;
				money += 10;
				break;
			case "oil":
				//probably an if statement here about population mod 10 being greater than numOils or whatever but this is for testing purposes
				money += 30;
		}
		
	}
};
	
	ClickableV2.prototype.closeMenu = function(){
		
		if (this.menuOpen){
			for (let i=0; i<this.menuButtons.length; i++){
				this.menuButtons[i].kill();	//aight so apparently this isn't the keyword to get rid of an object????	//also don't forget you use this line twice
				this.menuOpen = false;
			}
		}
		
	}
	
	ClickableV2.prototype.selectBuildingType = function(buildingType){
	
		switch(buildingType){
			case "house":
				this.sprite.destroy();
				this.sprite=game.add.sprite(this.x, this.y, "house");
				this.sprite.scale.setTo(0.5, 0.5);
				this.sprite.anchor.set(0.5);
				this.type = "house";
				break;
			case "hotel":
				this.sprite.destroy();
				this.sprite=game.add.sprite(this.x, this.y, "hotel");
				this.sprite.scale.setTo(0.5, 0.5);
				this.sprite.anchor.set(0.5);
				this.type = "hotel";
				break;
			case "oil":
				this.sprite.destroy();
				this.sprite=game.add.sprite(this.x, this.y, "oil");
				this.sprite.scale.setTo(0.5, 0.5);
				this.sprite.anchor.set(0.5);
				this.type = "oil";
		}
		
		for (let i=0; i<this.menuButtons.length; i++){
				this.menuButtons[i].kill();	//change this once you figure out how to actually do this
		}
	
	}