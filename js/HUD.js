
let HUD=function() {
    this.moneyInfo = game.add.text(2000, 15, 'Money: 0', { font: "48px Arial", fill: '#ffffff' });
    this.PopuInfo = game.add.text(2000, 65, 'Population: 0', { font: "48px Arial", fill: '#ffffff' });
    this.timeInfo = game.add.text(1100, 15, '0', { font: "96px Arial", fill: '#ffffff' });
    this.moneyInfo.fixedToCamera = true;
    this.PopuInfo.fixedToCamera = true;
    this.timeInfo.fixedToCamera = true;
};
HUD.prototype.updateTime=function(time){
    this.timeInfo.text=String(Math.floor(time/60))+":"+String(time%60).padStart(2, '0');
}
HUD.prototype.updateHud=function(money,population){
    this.moneyInfo.text='Money: '+String(money);
    this.PopuInfo.text='Population: '+String(population);
};
