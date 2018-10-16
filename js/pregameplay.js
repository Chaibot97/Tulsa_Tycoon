// gameplayState constructor
let pregameplayState = function(){
	
};

pregameplayState.prototype.create = function(){
	let title=game.add.sprite(0,0,"title");
	title.width=2436;
	title.height= 1125;
	let titleHouses = game.add.sprite(1686, 84, 'titlehouse');
    titleHouses.animations.add('buildhouse');
    titleHouses.animations.play('buildhouse', 3, true);
	// let title = game.add.text(650, 200,"Tulsa Tycon", { fill: '#ffffff',fontSize:100 });
	let startbutton = game.add.button(1670, 780, 'startbutton', play, this);
	startbutton.width=500;
	startbutton.height=180;
	
};

function play () {

    game.state.start("Game");

}

