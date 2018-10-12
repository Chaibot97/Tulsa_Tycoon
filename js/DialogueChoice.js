let DialogueChoice = function(X, Y, State, numLines){

	Dialogue.call(this, X, Y, State, numLines);
	
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(spawnMoreDialogue, this);
	
	function spawnMoreDialogue(){
		switch(this.state){
			case 'hi':
				new DialogueRecord(X, Y-200, 'sup', 1);
				new DialogueChoice(X, Y, 'not much', 1);
				new DialogueChoice(X+200, Y, 'ya know', 1);
				break;
			case 'jazz?':
				new DialogueRecord(X, Y-200, 'indeed', 1);
				new DialogueChoice(X, Y, 'jazz!', 1);
				new DialogueChoice(X-200, Y, 'jazzzzzzz!', 1);
				break;
			case 'not much':
				new DialogueRecord(X, Y-200, 'dank', 1);
				break;
			case 'ya know':
				new DialogueRecord(X, Y-200, 'noice', 1);
				break;
			case 'jazz!':
				new DialogueRecord(X, Y-200, 'JAZZ!', 1);
				break;
			case 'jazzzzzzz!':
				new DialogueRecord(X, Y-200, 'JAZZZZZZZ!', 1);
		}

	}

};

DialogueChoice.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;