
let HUD=function() {
    this.year = 1898;
    this.month = 0;
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.fakeText = game.add.text(2090,15, '               \n               ', { font: "64px Baskerville", alpha: 20, fill: '#ffffff', strokeThickness: 9, stroke: '6f330c', backgroundColor: '#c0945550' });
    this.moneyInfo = game.add.text(2200, 15, '0', { font: "64px Baskerville", fill: '#ffffff', strokeThickness: 9, align: 'center'});
    //this.PopuInfo = game.add.text(2200, 80, '0', { font: "64px Baskerville", fill: '#ffffff', strokeThickness: 9});
    this.timeInfo = game.add.text(1000, 15, '0', { font: "96px Bodoni 72 Oldstyle", fill: '#e2c188', strokeThickness: 9, stroke: '#6f330c', boundsAlignH: "right", boundsAlignV: 'middle' });
    //this.timeInfo.setShadow(3, 3, 'rgba(0,0,0,0.5)', 16);
    this.moneyInfo.fixedToCamera = true;
    //this.PopuInfo.fixedToCamera = true;
    this.timeInfo.fixedToCamera = true;
    //this.fakeText.fixedToCamera = true;
    this.pop_sprite=game.add.sprite(2100, 105, "pop_icon")
    this.money_sprite=game.add.sprite(2100, 25, "money_icon");
    this.pop_sprite.fixedToCamera = true;
    this.money_sprite.fixedToCamera = true;
    this.pop_sprite.width = 70;
    this.pop_sprite.height = 70;
    this.money_sprite.width = 70;
    this.money_sprite.height = 70;
};
HUD.prototype.updateTime=function(){
    this.timeInfo.text=String(this.months[this.month] + " " + this.year);
    this.month++;
    if(this.month ==12){
        this.month = 0;
        this.year ++;
    }
}
HUD.prototype.updateHud=function(money,population,Tpopulation){
    game.world.bringToTop(this.pop_sprite);
    game.world.bringToTop(this.moneyInfo);
    game.world.bringToTop(this.timeInfo);
    this.moneyInfo.text= String(money) + "\n" + String(Tpopulation-population)+"/"+String(Tpopulation);
};
