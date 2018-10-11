let Button = function(type){
    this.sprite=game.add.sprite(0,0,type);
    this.sprite.scale.setTo(.5);
    this.sprite.anchor.set(0.5);
    this.sprite.inputEnabled = false;
    this.sprite.exists=false;
}

Button.prototype.addListener=function(funct,obj){
    this.sprite.events.onInputDown.removeAll();
    this.sprite.events.onInputDown.add(funct, obj);
}

Button.prototype.show=function(x,y){
    this.sprite.x=x;
    this.sprite.y=y;
    this.sprite.exists=true;
    this.sprite.inputEnabled = true;
    game.world.bringToTop(this.sprite);

}
Button.prototype.hide=function(){
    this.sprite.exists=false;
    this.sprite.inputEnabled = false;

}