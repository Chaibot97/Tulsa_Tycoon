// gameplayState constructor
let money = 0;
let population=0;
let time;
let c;

let buildings=Array();

let image;
//let this.hud;
let popMenu;
let map;
let gameplayState = function(){
};

gameplayState.prototype.create = function(){
	map=game.add.tileSprite(0, 0,  3654, 2250, 'background');
	map.events.onInputDown.add(toggleMenu,this);
    game.world.setBounds(0, 0, 3654, 2250);
    game.camera.x = 0;
	game.camera.y = 2250-1125;
    this.moneyInfo = null;
    this.PopuInfo = null;
    this.timeInfo = null;
	let coords= game.cache.getJSON('buildingCoords');
	for(let i=0;i<coords.length;i++){
		buildings.push(new BuildingSite(coords[i][0], coords[i][1]));
	}
	this.newHUD();
	popMenu=new PopMenu();

    //c= new Clickable(500,500,"star");
};

gameplayState.prototype.update = function(){
    this.updateHUD();
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
	money++;
};



gameplayState.prototype.newHUD = function(){
    this.moneyInfo = game.add.text(1000, 40, 'Money: 0', { font: "32px Arial", fill: '#ffffff' });
    this.PopuInfo = game.add.text(1000, 65, 'Population: 0', { font: "32px Arial", fill: '#ffffff' });
    this.timeInfo = game.add.text(1000, 15, 'Time: 0', { font: "32px Arial", fill: '#ffffff' });
    this.moneyInfo.fixedToCamera = true;
    this.PopuInfo.fixedToCamera = true;
    this.timeInfo.fixedToCamera = true;
};

gameplayState.prototype.updateHUD = function(){
    this.moneyInfo.text='Money: '+String(money);
    this.PopuInfo.text='Population: '+String(population);
}