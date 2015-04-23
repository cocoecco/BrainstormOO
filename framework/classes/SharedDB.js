/************************************************************
						SharedDB.js
Singelton, manage storage database

Created by Shachar cocoecco@yahoo.com
*************************************************************/

var SharedDB = function() {

	this.idea = {};

	this.setWordsCount = function(wc) {
		this.idea["wc"] = wc;
	}

	this.setIdea = function(w1,w2,w3) {
		this.idea['word1'] = w1;
		this.idea['word2'] = w2;
		this.idea['work3'] = w3;
	}

	function init() {
		//New Shared DB Object Created, initiate settings
		console.log('SharedDB object created');
	}
	init();
}