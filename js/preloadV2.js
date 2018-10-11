// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
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