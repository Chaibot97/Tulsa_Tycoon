let Building = function(X,Y,type){
    if(type=="hotel"){
        X-=150; 
        Y-=140;
    }
    this.x=X;
    this.y=Y;
    
    this.type=type;
    this.sprite=game.add.sprite(X, Y, type);
    this.sprite.inputEnabled = true;
    // this.sprite.scale.setTo();
};
