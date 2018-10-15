let DialogueChoice = function(State, myPosition){

	let X;
	let Y;
	let myAlign;
	switch(myPosition){
		case 'left':
			X = 50;
			Y = 500;
			myAlign = 'left';
			break;
		case 'right':
			X = 1300;
			Y = 500;
			myAlign = 'right';
	}
	
	Dialogue.call(this, X, Y, State, myAlign);
	
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(spawnMoreDialogue, this);
	
	function spawnMoreDialogue(){
		
		//move stuff up
		for (let i=0; i<dialogueRecords.length; i++){
			
			dialogueRecords[i].MoveUp(this.state.length);
			
		}
		//delete stuff
		switch(this.state){
			case 'despa-neato':
				dialogueRecords.push(new DialogueRecord('despa-neato', 'Brady'));
				dialogueRecords.push(new DialogueRecord('was that a meme', 'NPC'));
				dialogueOptions.push(new DialogueChoice('*dabs', 'left'));
				dialogueOptions.push(new DialogueChoice('indeedilly-do', 'right'));
				break;
			case 'nice':
				dialogueRecords.push(new DialogueRecord('nice', 'Brady'));
				dialogueRecords.push(new DialogueRecord('so how u', 'NPC'));
				dialogueOptions.push(new DialogueChoice('doin well', 'left'));
				dialogueOptions.push(new DialogueChoice('taking Data Structures and yearning for death', 'right'));
				break;
			case '*dabs':
				dialogueRecords.push(new DialogueRecord('*dabs', 'Brady'));
				dialogueRecords.push(new DialogueRecord('please stop', 'NPC'));
				dialogueOptions.push(new DialogueChoice('no', 'left'));
				dialogueOptions.push(new DialogueChoice('fine', 'right'));
				break;
			case 'indeedilly-do':
				dialogueRecords.push(new DialogueRecord('indeedilly-do', 'Brady'));
				dialogueRecords.push(new DialogueRecord('why tho', 'NPC'));
				dialogueOptions.push(new DialogueChoice('Lorem ipsum', 'left'));
				dialogueOptions.push(new DialogueChoice('because memes are fun also i have to test my lineNumber function', 'right'));
				break;
			case 'doin well':
				dialogueRecords.push(new DialogueRecord('doin well', 'Brady'));
				dialogueRecords.push(new DialogueRecord('same', 'NPC'));
				dialogueOptions.push(new DialogueChoice('cool', 'left'));
				dialogueOptions.push(new DialogueChoice('how\'s the fam', 'right'));
				break;
			case 'taking Data Structures and yearning for death':
				dialogueRecords.push(new DialogueRecord('taking Data Structures and yearning for death', 'Brady'));
				dialogueRecords.push(new DialogueRecord('ah', 'NPC'));
				dialogueOptions.push(new DialogueChoice('yeet', 'left'));
				dialogueOptions.push(new DialogueChoice('y3333333t', 'right'));
				break;
			case 'no':
				dialogueRecords.push(new DialogueRecord('no', 'Brady'));
				dialogueRecords.push(new DialogueRecord('aight bye', 'NPC'));
				break;
			case 'fine':
				dialogueRecords.push(new DialogueRecord('fine', 'Brady'));
				dialogueRecords.push(new DialogueRecord('cool thx', 'NPC'));
				break;
			case 'Lorem ipsum':
				dialogueRecords.push(new DialogueRecord('Lorem ipsum', 'Brady'));
				dialogueRecords.push(new DialogueRecord('stop', 'NPC'));
				break;
			case 'because memes are fun also i have to test my lineNumber function':
				dialogueRecords.push(new DialogueRecord('because memes are fun also i have to test my lineNumber function', 'Brady'));
				dialogueRecords.push(new DialogueRecord('understandable', 'NPC'));
				break;
			case 'cool':
				dialogueRecords.push(new DialogueRecord('cool', 'Brady'));
				dialogueRecords.push(new DialogueRecord('dank', 'NPC'));
				break;
			case 'how\s the fam':
				dialogueRecords.push(new DialogueRecord('how\s the fam', 'Brady'));
				dialogueRecords.push(new DialogueRecord('I don\'t have one. I\'m not real.', 'NPC'));
				break;
			case 'yeet':
				dialogueRecords.push(new DialogueRecord('yeet', 'Brady'));
				dialogueRecords.push(new DialogueRecord('yoot', 'NPC'));
				break;
			case 'y3333333t':
				dialogueRecords.push(new DialogueRecord('y3333333t', 'Brady'));
				dialogueRecords.push(new DialogueRecord('y0000000t', 'NPC'));
		}

	}

};

DialogueChoice.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;