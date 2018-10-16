
let HUD=function() {
    this.year = 1898;
    this.month = 0;
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.moneyInfo = game.add.text(2000, 15, 'Money: 0', { font: "48px Attica", fill: '#ffffff' , strokeThickness: 6});
    this.PopuInfo = game.add.text(2000, 65, 'Population: 0', { font: "48px Attica", fill: '#ffffff' , strokeThickness: 6});
    this.timeInfo = game.add.text(1000, 15, '0', { font: "96px Baskerville", fill: '#ffffff', strokeThickness: 9, boundsAlignH: "right", boundsAlignV: 'middle' }
    );
    this.timeInfo.setShadow(3, 3, 'rgba(0,0,0,0.5)', 16);
    this.moneyInfo.fixedToCamera = true;
    this.PopuInfo.fixedToCamera = true;
    this.timeInfo.fixedToCamera = true;
};
HUD.prototype.updateTime=function(){
    this.timeInfo.text=String(this.months[this.month] + " " + this.year);
    this.month++;
    if(this.month ==12){
        this.month = 0;
        this.year ++;
    }
	if(this.month == 1){
		//load up the next dialogue scene
		loadDialogue(this.year);
	}
}
HUD.prototype.updateHud=function(money,population,Tpopulation){
    this.moneyInfo.text='Money: '+String(money);
    this.PopuInfo.text='Population: '+String(Tpopulation-population)+"/"+String(Tpopulation);
};
