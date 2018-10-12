let popMenuUp=false;
let BuildingSite = function(X,Y){
    this.x=X;
    this.y=Y;
    this.building=new Building(X,Y,"empty");
    this.building.sprite.events.onInputDown.add(toggleMenu, this);
}


BuildingSite.prototype.build=function(type){
    this.building.sprite.kill();
    this.building=new Building(this.x,this.y,type);
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