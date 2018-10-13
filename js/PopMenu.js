let PopMenu= function(){
    this.parent=null;
    this.houseButton = new Button( "houseButton");
	this.hotelButton = new Button("hotelButton");
    this.oilButton = new Button("oilButton");
    this.upgradeButton= new Button("upgradeButton")
    
};
PopMenu.prototype.show=function(x,y,parent){
    this.houseButton.show(x+400,y);
	this.hotelButton.show(x+400,y+70);
    this.oilButton.show(x+400,y+140);
    this.upgradeButton.hide();
    this.parent=parent;
    this.houseButton.addListener(clkHouseButton,this.parent);
    this.hotelButton.addListener(clkHotelButton,this.parent);
    this.oilButton.addListener(clkOilButton,this.parent);
    
};

PopMenu.prototype.upgrade=function(x,y,parent){
    this.houseButton.hide();
	this.hotelButton.hide();
    this.oilButton.hide();
    this.upgradeButton.show(x+400,y+70);
    this.parent=parent;
    this.upgradeButton.addListener(clkUpgButton,this.parent);
}
PopMenu.prototype.hide=function(){
    this.parent=null;
    this.houseButton.hide();
	this.hotelButton.hide();
    this.oilButton.hide();
    this.upgradeButton.hide();
};
function clkHouseButton(){
    this.build("house");
};
function clkHotelButton(){
    this.build("hotel");
};
function clkOilButton(){
    this.build("oil");
};
function clkUpgButton(){
    this.upgrade();
};