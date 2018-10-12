// gameplayState constructor
let money = 0;
let population=0;
let time;
let c;

let buildings=Array();

let image; 
let hud;
let popMenu;
let map;
let gameplayState = function(){
	
};

gameplayState.prototype.create = function(){
	
	
	// let tmpb = new Building(250,250,"star");
	// buildings.push(tmpb);
	hud=new HUD();

	map=game.add.tileSprite(0, 0,  3654, 2250, 'background');
	map.events.onInputDown.add(toggleMenu,this);
    game.world.setBounds(0, 0, 3654, 2250);
    game.camera.x = 0;
	game.camera.y = 2250-1125;

	buildings.push(new BuildingSite(435, 925));
	buildings.push(new BuildingSite(910, 1330));
	buildings.push(new BuildingSite(1400, 925))
	// for (let i=0; i<=2; i++){
	// 	for (let j=0; j<=2; j++){
	// 		let myBuilding = new BuildingSite(1000+(250*i), 400+(250*j));
	// 		buildings.push(myBuilding);
	// 	}
	// }
	popMenu=new PopMenu();

	
    //c= new Clickable(500,500,"star");
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
};



