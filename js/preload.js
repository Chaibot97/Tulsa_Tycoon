// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
	game.load.json('buildingCoords', 'assets/buildingCoords.json');
	game.load.image("title", "assets/titleScreen.png");
	game.load.spritesheet("titlehouse", "assets/titleAnime.png", 427.7, 493,7);
	game.load.image("startbutton", "assets/start.png");
	game.load.image("background", "assets/map.png",)
	game.load.image("empty", "assets/empty2.png");
	game.load.image("house1", "assets/houseSprite.png");
	game.load.image("house2", "assets/houseLv2-01.png");
	game.load.image("house3", "assets/houseLv3-01.png");
	game.load.image("hotel1", "assets/hotelSprite.png");
	game.load.image("hotel2", "assets/hotelLv2.png");
	game.load.image("hotel3", "assets/hotelLv3.png");
	game.load.image("oil1", "assets/oilRigSprite.png");
	game.load.image("oil2", "assets/oilRigSprite.png");
	game.load.image("oil3", "assets/oilRigSprite.png");
	game.load.image("houseButton", "assets/houseButton.png");
	game.load.image("hotelButton", "assets/hotelButton.png");
	game.load.image("oilButton", "assets/oilButton.png");
	game.load.image("upgradeButton", "assets/houseButton.png");
};

preloadState.prototype.create = function(){
	game.state.start("PreGame");
	
	
};

preloadState.prototype.update = function(){

};