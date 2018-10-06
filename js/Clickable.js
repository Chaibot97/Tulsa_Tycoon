
let Clickable = function(X,Y,type){
    this.x=X;
    this.y=Y;
    this.type=type;
    this.sprite=game.add.sprite(X, Y, type);
    this.sprite.scale.setTo(5, 5);
    this.sprite.anchor.set(0.5);
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(listener, this);
    
	this.popTextGrp=game.add.group();
	for (var d=0; d<50; d++) {
		let popText = game.add.text(0, 0, '1', {
			font: '30px Arial Black',
			fill: '#fff',
			strokeThickness: 4
		});
		// start out not existing, so we don't draw it yet
		popText.exists = false;
		popText.tween = game.add.tween(popText)
			.to({
				alpha: 0,
				y: this.sprite.top-100,
				x: this.sprite.right-15
			}, 1000, Phaser.Easing.Cubic.Out);
	
			popText.tween.onComplete.add(function(text, tween) {
			text.kill();
		});
		this.popTextGrp.add(popText);
    }
};

function listener () {
    let popText = this.popTextGrp.getFirstExists(false);
    if (popText) {
        popText.text = 1;
        popText.reset(this.sprite.right-15, this.sprite.top-10);
        popText.alpha = 1;
        popText.tween.start();
    }
    money++;
}