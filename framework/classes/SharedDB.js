/************************************************************
						SharedDB.js
Singelton, manage storage database

Created by Shachar cocoecco@yahoo.com
*************************************************************/

var Storage = function() {
	this.start = null;
	this.end = null;
	this.count = 0;


	this.lastNode = function() {
		return this.end.data || null;
	}

	this.add = function(data) {
		if (this.start == null) {
			this.start = Storage.makeNode();
			this.end = this.start;
		}
		else {
			this.end.next = Storage.makeNode();
			this.end = this.end.next;
		}
		this.end.data = data;
		this.count++;
	}

	Storage.makeNode = function () {
		return {data: null, next: null};
	}

	this.countWords = function() {
		return this.count;
	}

}


var SharedDB = function() {

	this.storage = new Storage();
	this.idea = {};

	this.getLast = function() {
		return this.storage.lastNode();
	}

	this.getStorageCount = function () {
		return this.storage.countWords();
	}

	this.getWordsCount = function() {
		return this.idea["wc"];
	}

	this.setWord = function(word) {
		this.storage.add(word);
	}

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