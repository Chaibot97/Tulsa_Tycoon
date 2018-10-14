// gameplayState constructor
let money = 0;
let score = 0;
let population=0;
let time;
let c;

let buildings=Array();

let image; 
let hud;
let gameplayState = function(){
	
};

gameplayState.prototype.create = function(){
	
	let tmpb = new Building(250,250,"star");
	buildings.push(tmpb);
	hud=new HUD();
	map=game.add.tileSprite(0, 0,  3654, 2250, 'background');
	map.events.onInputDown.add(toggleMenu,this);
    game.world.setBounds(0, 0, 3654, 2250);
    game.camera.x = 0;
	game.camera.y = 2250-1125;

	let coords= game.cache.getJSON('buildingCoords');
	for(let i=0;i<coords.length;i++){
		buildings.push(new BuildingSite(coords[i][0], coords[i][1]));
	}

	popMenu=new PopMenu();

};

gameplayState.prototype.update = function(){
	hud.updateHud(money,population);
    if (this.game.input.activePointer.isDown) {
        if (this.game.origDragPoint) {		// move the camera by the amount the mouse has moved since last update
            game.camera.x += this.game.origDragPoint.x - this.game.input.activePointer.position.x;
            game.camera.y += this.game.origDragPoint.y - this.game.input.activePointer.position.y;
        }
        // set new drag origin to current position
		this.game.origDragPoint = this.game.input.activePointer.position.clone();
    }
    else {
		this.game.origDragPoint = null;
	}
    for(let i = 0; i < buildings.length; i++){
        money += buildings[i].getMoney();
        score += buildings[i].getScore();
    }
};



