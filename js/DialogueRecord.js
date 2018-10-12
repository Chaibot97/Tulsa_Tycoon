let DialogueRecord = function(X, Y, State, numLines){

	Dialogue.call(this, X, Y, State, numLines);

};

DialogueRecord.prototype = Object.create(Dialogue.prototype);
Dialogue.prototype.constructor = Dialogue;