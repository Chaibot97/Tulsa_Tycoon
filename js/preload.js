// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){

	game.load.image("background", "assets/map.png",)
	game.load.image("empty", "assets/empty2.png");
	game.load.image("house", "assets/houseLv2-01.png");
	game.load.image("hotel", "assets/hotelSprite.png");
	game.load.image("oil", "assets/oilRigSprite.png");
	game.load.image("houseButton", "assets/houseButton.png");
	game.load.image("hotelButton", "assets/hotelButton.png");
	game.load.image("oilButton", "assets/oilButton.png");
};

preloadState.prototype.create = function(){
	game.state.start("PreGame");
	
	
};

preloadState.prototype.update = function(){

};