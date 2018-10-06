// gameplayState constructor
let money = 0;
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

	c= new Clickable(500,500,"star");
};

gameplayState.prototype.update = function(){
	hud.updateHud(money,population);
};



