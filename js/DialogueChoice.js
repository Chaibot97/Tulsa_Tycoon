let DialogueChoice = function(State, myPosition){

	let X;
	let Y;
	let myAlign;
	switch(myPosition){
		case 'left':
			X = 1100 - 300;
			Y = 1000;
			myAlign = 'left';
			break;
		case 'right':
			X = 1100 + 300;
			Y = 1000;
			myAlign = 'right';
	}
	
	Dialogue.call(this, X, Y, State, myAlign);
	
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(spawnMoreDialogue, this);
	
	function spawnMoreDialogue(){
		
		//destroy stuff
		for (let i=0; i<dialogueOptions.length; i++){
			bigDialogue.sprite.kill(); bigDialogue.text.kill();
			dialogueOptions[i].sprite.destroy();
			dialogueOptions[i].text.destroy();
		}
		switch(this.state){
			case 'despa-neato':
				bigDialogue = new DialogueBig('was that a meme?');
				dialogueOptions.push(new DialogueChoice('*dabs', 'left'));
				dialogueOptions.push(new DialogueChoice('indeedilly-do', 'right'));
				break;
			case 'nice':
				bigDialogue = new DialogueBig('so how you');
				dialogueOptions.push(new DialogueChoice('doin well', 'left'));
				dialogueOptions.push(new DialogueChoice('taking Data Structures and yearning for death', 'right'));
				break;
			case '*dabs':
				bigDialogue = new DialogueBig('please stop');
				dialogueOptions.push(new DialogueChoice('no', 'left'));
				dialogueOptions.push(new DialogueChoice('fine', 'right'));
				break;
			case 'indeedilly-do':
				bigDialogue = new DialogueBig('why tho');
				dialogueOptions.push(new DialogueChoice('Lorem ipsum', 'left'));
				dialogueOptions.push(new DialogueChoice('because memes are fun also i have to test my lineNumber function', 'right'));
				break;
			case 'doin well':
				bigDialogue = new DialogueBig('same');
				dialogueOptions.push(new DialogueChoice('cool', 'left'));
				dialogueOptions.push(new DialogueChoice('hows the fam', 'right'));
				break;
			case 'taking Data Structures and yearning for death':
				bigDialogue = new DialogueBig('ah');
				dialogueOptions.push(new DialogueChoice('yeet', 'left'));
				dialogueOptions.push(new DialogueChoice('y3333333t', 'right'));
				break;
			case 'no':
				bigDialogue = new DialogueBig('aight bye *leaves*');
				new DialogueDone();
				break;
			case 'fine':
				bigDialogue = new DialogueBig('cool thx');
				new DialogueDone();
				break;
			case 'Lorem ipsum':
				bigDialogue = new DialogueBig('cool thx');
				new DialogueDone();
				break;
			case 'because memes are fun also i have to test my lineNumber function':
				bigDialogue = new DialogueBig('understandable');
				new DialogueDone();
				break;
			case 'cool':
				bigDialogue = new DialogueBig('understandable');
				new DialogueDone();
				break;
			case 'hows the fam':
				bigDialogue = new DialogueBig('i dont have one im not real.');
				new DialogueDone();
				break;
			case 'yeet':
				bigDialogue = new DialogueBig('yoot');
				new DialogueDone();
				break;
			case 'y3333333t':
				bigDialogue = new DialogueBig('y0000000t');
				new DialogueDone();
		}

	}

};

DialogueChoice.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;