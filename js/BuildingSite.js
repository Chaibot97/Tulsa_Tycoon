let popMenuUp=false;
let BuildingSite = function(X,Y){
    this.x=X;
    this.y=Y;
    this.building=new Building(X,Y,"empty");
    this.building.sprite.events.onInputDown.add(toggleMenu, this);
}


BuildingSite.prototype.build=function(type){
    this.building.sprite.kill();
    this.building=new Building(this.x,this.y,type,1);
    if(this.building.upgradable()){
        this.building.sprite.events.onInputDown.add(toggleUpgMenu, this);
    }
    toggleMenu();
}
BuildingSite.prototype.upgrade=function(){
    if(!this.building.upgradable())return;
    this.building.sprite.kill();
    this.building=new Building(this.x,this.y,this.building.type,this.building.lv+1);
    if(this.building.upgradable()){
        this.building.sprite.events.onInputDown.add(toggleUpgMenu, this);
    }
    toggleMenu();
}

function toggleMenu () {
    if(!popMenuUp){
        popMenu.show(this.x,this.y,this);
        map.inputEnabled = true;
    }else{
        popMenu.hide();
        map.inputEnabled = false;
    }
    popMenuUp=!popMenuUp;
}
function toggleUpgMenu () {
    if(!popMenuUp){
        popMenu.lv = this.building.lv;
        popMenu.type = this.building.type;
        popMenu.upgrade(this.x,this.y,this);
        map.inputEnabled = true;

    }else{
        popMenu.hide();
        map.inputEnabled = false;
    }
    popMenuUp=!popMenuUp;
}