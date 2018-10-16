// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
	game.load.json('buildingCoords', 'assets/buildingCoords.json');
	game.load.image("title", "assets/titleScreen.png");
	game.load.spritesheet("titlehouse", "assets/titleAnime.png", 427.7, 493,7);
	game.load.image("startbutton", "assets/start.png");
	game.load.image("background", "assets/map.png",)
	game.load.image("empty", "assets/buildable.png");
	game.load.image("house1", "assets/houseSprite.png");
	game.load.image("house2", "assets/houseLv2-01.png");
	game.load.image("house3", "assets/houseLv3-01.png");
    game.load.image("upgradeHouse2", "assets/house_upgrade_2.png");
    game.load.image("upgradeHouse3", "assets/house_upgrade_3.png");
	game.load.image("hotel1", "assets/hotelSprite.png");
	game.load.image("hotel2", "assets/hotelLv2.png");
	game.load.image("hotel3", "assets/hotelLv3.png");
    game.load.image("upgradeHotel2", "assets/hotel_upgrade_2.png");
    game.load.image("upgradeHotel3", "assets/hotel_upgrade_3.png");
    game.load.image("oil1", "assets/oilRigSprite.png");
	game.load.image("oil2", "assets/oilRigLv2-01.png");
	game.load.image("oil3", "assets/oilRigLv3-01.png");
	game.load.image("upgradeOil2", "assets/oil_upgrade_2.png");
    game.load.image("upgradeOil3", "assets/oil_upgrade_3.png");
	game.load.image("houseButton", "assets/house_button_bordered.png");
	game.load.image("hotelButton", "assets/hotel_button_bordered.png");
	game.load.image("oilButton", "assets/oil_button_bordered.png");
	game.load.image("upgradeButton", "assets/houseButton.png");
	game.load.image("background", "assets/grid.png");
	game.load.image("bubble", "assets/DialogueBubble.png");
	game.load.image("money_icon", "assets/stax.png");
	game.load.image("semitransparent", "assets/semitransparent.png");
	game.load.image("pop_icon", "assets/shadow_pop_icon.png");

	game.load.audio('start_audio', 'assets/audio/start.mp3');
	game.load.audio('click_audio', 'assets/audio/click.mp3');
	game.load.audio('alert_audio', 'assets/audio/alert.mp3');
	game.load.audio('building_audio', 'assets/audio/new_building.mp3');
	game.load.audio('levelup2_audio', 'assets/audio/final_levelup.mp3');
	game.load.audio('levelup1_audio', 'assets/audio/first_levelup.mp3');
	game.load.audio('dialogue_audio', 'assets/audio/dialogue.mp3');
	game.load.audio('dialogue_bad_audio', 'assets/audio/dialogue_bad.mp3');
	game.load.audio('dialogue_good_audio', 'assets/audio/dialogue_good.mp3');
	game.load.audio('dialogue_bad_audio', 'assets/audio/dialogue_bad.mp3');
	game.load.audio('main_audio', 'assets/audio/Tulsa_Tycoon_music.mp3');
	game.load.audio('pre_audio', 'assets/audio/Tulsa_Tycoon_novocals.mp3');
	
	game.load.image("bellhop", "assets/bellhop.png");
	game.load.image("farmer", "assets/farmer.png");
	game.load.image("kkkMan", "assets/kkk_man.png");
	game.load.image("oilWorker", "assets/oil_worker.png");
	game.load.image("police", "assets/police.png");
	game.load.image("popIcon", "assets/pop_icon.png");
	game.load.image("richMan", "assets/rich_man.png");
	game.load.image("shadowPopIcon", "assets/shadow_pop_icon.png");
};

preloadState.prototype.create = function(){
	game.state.start("PreGame");
	
	
};

preloadState.prototype.update = function(){

};