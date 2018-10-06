
let HUD=function(){
    this.moneyInfo = game.add.text(2000, 40, 'Money: 0', { fill: '#ffffff' });
    this.PopuInfo = game.add.text(2000, 65, 'Population: 0', { fill: '#ffffff' });
    this.timeInfo = game.add.text(2000, 15, 'Time: 0', { fill: '#ffffff' });
};

HUD.prototype.updateHud=function(m,p){
    this.moneyInfo.text='Money: '+String(m);
    this.PopuInfo.text='Population: '+String(p);
};
