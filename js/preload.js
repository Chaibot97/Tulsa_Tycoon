// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
	game.load.image("sky", "assets/sky.png");
	game.load.image("platform", "assets/platform.png");
	game.load.image("star", "assets/star.png");
	game.load.image("background", "assets/grid.png",)
	game.load.spritesheet("murph", "assets/character.png", 32, 48);
	game.load.image("empty", "assets/empty.png");
	game.load.image("house", "assets/house.png");
	game.load.image("hotel", "assets/hotel.png");
	game.load.image("oil", "assets/oil.png");
	game.load.image("houseButton", "assets/houseButton.png");
	game.load.image("hotelButton", "assets/hotelButton.png");
	game.load.image("oilButton", "assets/oilButton.png");
};

preloadState.prototype.create = function(){
	game.state.start("Game");
	
	
};

preloadState.prototype.update = function(){

};