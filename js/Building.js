let Building = function(X,Y,type,lv=0){
    if(type=="hotel"){
        X-=150; 
        Y-=140;
    }
    this.x=X;
    this.y=Y;
    this.type=type;
    let name=type;
    if(lv!=0){
        name+=lv;
    }
    this.sprite=game.add.sprite(X, Y, name);
    this.sprite.inputEnabled = true;
    this.lv=lv;
    // this.sprite.scale.setTo();
};
Building.prototype.upgradable=function(){
    return this.lv>0 && this.lv<3;
}
