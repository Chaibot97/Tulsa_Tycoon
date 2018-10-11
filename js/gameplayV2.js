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
	hud=new HUD();
	
	for (let i=0; i<=2; i++){
		for (let j=0; j<=2; j++){
			let myBuilding = new ClickableV2(250+(250*i), 250+(250*j));
			buildings.push(myBuilding);
		}
	}
	
};

gameplayState.prototype.update = function(){
	hud.updateHud(money,population);
};