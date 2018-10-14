let Building = function(X,Y,type,lv=0){
    this.x=X;
    this.y=Y;
    this.type=type;
    this.sprite=game.add.sprite(X, Y, type);
    this.sprite.scale.setTo(3, 3);
    this.score = 0;
    this.money = 0;
    this.s_inc = 0;
    this.m_inc = 0;
    let name=type;
    if(lv!=0){
        name+=lv;
    }
    this.sprite=game.add.sprite(X, Y, name);
    this.sprite.inputEnabled = true;
    this.lv=lv;
    switch (type) {
        case "hotel":
            this.setScore(0);
            this.setMoney(0);
            X-=150;
            Y-=140;
            this.s_inc = 0;
            this.m_inc = 0;
            break;
        case "oil":
            this.setScore(0);
            this.setMoney(0);
            this.s_inc = 0;
            this.m_inc = 0;
            break;
        case "house":
            this.setScore(0);
            this.setMoney(0);
            this.s_inc = 0;
            this.m_inc = 0;
            break;
        default:
            break;
    }
};


Building.prototype.getMoney=function(){
    return this.money;
};

Building.prototype.getScore=function(){
    return this.score;
};

Building.prototype.setMoney=function(x){
    return this.money = x;
};

Building.prototype.setScore=function(x){
    return this.score = x;
};

Building.prototype.upgrade=function(){
    this.score += this.s_inc;
    this.money += this.m_inc;
    this.level++;
    this.sprite = game.add.sprite(this.X, this.Y, this.type+this.level); //ex hotel2, hotel3, etc.
};

Building.prototype.upgradable=function(){
    return this.lv>0 && this.lv<3;
};