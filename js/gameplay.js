// gameplayState constructor

var popText;
let popTextGrp;
var counter = 0;
var image; 
let gameplayState = function(){
	
};

gameplayState.prototype.create = function(){
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	image= game.add.sprite(game.world.centerX, game.world.centerY, "star");
	image.anchor.set(0.5);
	image.scale.setTo(3, 3);
    image.inputEnabled = true;
	image.events.onInputDown.add(listener, this);

	popTextGrp=game.add.group();
	for (var d=0; d<50; d++) {
		popText = this.add.text(0, 0, '1', {
			font: '30px Arial Black',
			fill: '#fff',
			strokeThickness: 4
		});
		// start out not existing, so we don't draw it yet
		popText.exists = false;
		popText.tween = game.add.tween(popText)
			.to({
				alpha: 0,
				y: image.top-100,
				x: image.right-15
			}, 1000, Phaser.Easing.Cubic.Out);
	
			popText.tween.onComplete.add(function(text, tween) {
			text.kill();
		});
		popTextGrp.add(popText);
	}
};

gameplayState.prototype.update = function(){
	
};

function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}
function listener () {

    counter++;


    var popText = popTextGrp.getFirstExists(false);
	if (popText) {
		popText.text = 1;
		popText.reset(image.right-15, image.top-10);
		popText.alpha = 1;
		popText.tween.start();
	}


}