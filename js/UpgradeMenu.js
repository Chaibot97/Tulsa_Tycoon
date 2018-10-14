let UpgradeMenu= function(){
    this.parent=null;
    this.upgradeButton = new Button( "houseButton");

};
PopMenu.prototype.show=function(x,y,parent){
    this.upgradeButton.show(x+400,y);
    this.parent=parent;
    this.upgradeButton.addListener(clkUpgradeButton,this.parent);

    
};
PopMenu.prototype.hide=function(){
    this.parent=null;
    this.houseButton.hide();
	this.hotelButton.hide();
    this.oilButton.hide();
};
function clkUpgradeButton(){
    this.build(this.parent.type+"1");
};

	