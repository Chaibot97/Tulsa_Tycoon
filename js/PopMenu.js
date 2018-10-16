let PopMenu= function(){
    this.parent=null;
    this.houseButton = new Button( "houseButton");
	this.hotelButton = new Button("hotelButton");
    this.oilButton = new Button("oilButton");
    this.upgradeButton= new Button("upgradeButton");
    this.lv = 0;
    this.type = 0;
    this.x=0;
    this.y=0;
    this.popText = game.add.text(0, 0, '0', {
        font: '55px Arial Black',
        fill: '#fff',
        strokeThickness: 20
    });
    this.popText.exists = false;
    
};
PopMenu.prototype.show=function(x,y,parent){
    this.x=x;
    this.y=y;
    this.houseButton.show(x+400,y);
	this.hotelButton.show(x+400,y+70);
    this.oilButton.show(x+400,y+140);
    this.upgradeButton.hide();
    this.parent=parent;
    this.houseButton.addListener(clkHouseButton,this.parent);
    this.hotelButton.addListener(clkHotelButton,this.parent);
    this.oilButton.addListener(clkOilButton,this.parent);
    
};

PopMenu.prototype.upgrade=function(x,y, parent){
    this.x=x;
    this.y=y;
    this.houseButton.hide();
	this.hotelButton.hide();
    this.oilButton.hide();
    let price=0;
    let pop=0;
    let rpop=0;
    switch(this.type){
        case "house":
            if(this.lv == 1){
                this.upgradeButton.sprite=game.add.sprite(0,0,"upgradeHouse2");
                price=700;
                pop=15;
            }
            else if(this.lv == 2){
                this.upgradeButton.sprite=game.add.sprite(0,0,"upgradeHouse3");
                price=900;
                pop=20;
            }
            break;
        case "hotel":
            if(this.lv == 1){
                this.upgradeButton.sprite=game.add.sprite(0,0,"upgradeHotel2");
                price=2000;
                pop=13;

            }
            else if(this.lv == 2){
                this.upgradeButton.sprite=game.add.sprite(0,0,"upgradeHotel3");
                price=2500;
                pop=17;

            }
            break;
        case "oil":
            if(this.lv == 1){
                this.upgradeButton.sprite=game.add.sprite(0,0,"upgradeOil2");
                price=3000;
                rpop=80;
            }
            else if(this.lv == 2){
                this.upgradeButton.sprite=game.add.sprite(0,0,"upgradeOil3");
                price=4000;
                rpop=120;
            }
            break;
    }
    this.upgradeButton.sprite.scale.setTo(.5);
    this.upgradeButton.sprite.anchor.set(0.5);
    this.upgradeButton.show(x+400,y+70);
    this.parent=parent;
    this.parent.building.price=price;
    this.parent.building.pop=pop;
    this.parent.building.rpop=rpop;
    this.upgradeButton.addListener(clkUpgButton, this.parent);

    
}
PopMenu.prototype.hide=function(){
    this.parent=null;
    this.houseButton.hide();
	this.hotelButton.hide();
    this.oilButton.hide();
    this.upgradeButton.hide();
};
function clkHouseButton(){
    if(money>=500){
        money-=500;
        Tpopulation+=10;
        this.build("house");
    }else{
        popMenu.popUpText("insufficient funds");
    }
};
function clkHotelButton(){
    if(money>=1500){
        money-=1500;
        Tpopulation+=10;
        this.build("hotel");
    }else{
        popMenu.popUpText("insufficient funds");
    }
};
function clkOilButton(){
    if(money<2000){
        popMenu.popUpText("insufficient funds");
    }else if(Tpopulation<population+40){
        popMenu.popUpText("insufficient Population");
    }else{
        population+=40;
        money-=2000;
        this.build("oil");
    }
};
function clkUpgButton(){
    if(money<this.building.price){
        popMenu.popUpText("insufficient funds");
    }else if(Tpopulation<population+this.building.rpop){
        popMenu.popUpText("insufficient Population");
    }else{
        Tpopulation+=this.building.pop;
        population+=this.building.rpop;
        money-=this.building.price;
        this.upgrade();
    }
};

PopMenu.prototype.popUpText=function(t){
    game.world.bringToTop(this.popText);
    this.popText.text = t;
    this.popText.tween = game.add.tween(this.popText).to({
        alpha: 0,
        y: game.camera.y+300,
        x: game.camera.x+1000
    }, 2500, Phaser.Easing.Cubic.Out);
    this.popText.reset(game.camera.x+1000, game.camera.y+400);
    this.popText.alpha = 1;
    this.popText.tween.start();
    
};