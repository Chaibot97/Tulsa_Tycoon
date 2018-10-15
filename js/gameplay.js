// gameplayState constructor
let money = 0;
let population=0;
let time=300;
let c;

let buildings=Array();

let image;
//let this.hud;
let popMenu;
let map;
let hud;
let timer1;
let timer2;
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
    let timer1=game.time.create(false);
    let timer2=game.time.create(false);
    timer1.loop(1000, counteTime, this);
    timer2.loop(2500, sumYields, this);
    timer1.start();
    timer2.start();
    hud=new HUD();
    hud.updateTime(time);
	popMenu=new PopMenu();

    //c= new Clickable(500,500,"star");
};

gameplayState.prototype.update = function(){
    
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

function counteTime(){
    time--;

    hud.updateTime(300-time);
}

function sumYields(){
    buildings.forEach(function(e) {
        if(e.building)
            e.building.yieldMoney();
    });
    hud.updateHud(money,population);
}