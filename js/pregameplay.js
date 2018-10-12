// gameplayState constructor
let pregameplayState = function(){
	
};

pregameplayState.prototype.create = function(){
	let title = game.add.text(650, 200,"Tulsa Tycon", { fill: '#ffffff',fontSize:100 });
	let button = game.add.button(700, 600, 'button', play, this, 2, 1, 0);
	
};

function play () {

    game.state.start("Game");

}

