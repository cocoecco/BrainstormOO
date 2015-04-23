/************************************************************
						WelcomeController.js
Second page - 'OtherWords' viewcontroller

Created by Shachar cocoecco@yahoo.com
*************************************************************/


var OtherWordsController = function(model) {
	this.model = model;


	this.aboutClicked = function() {
		alert("about clicked OtherWords");
	}
	
	this.amountClick = function(e) {
		var wordsCount = 20;
		if (e.id == "w1") wordsCount = 10;
		if (e.id == "w2") wordsCount = 20;
		if (e.id == "w3") wordsCount = 30;

		BOO.sharedDB.setWordsCount(wordsCount);

		var controllerView = document.getElementById("controller");
		BOO.appDelegate.presentNextView(controllerView, "TypeWords");
	}

	function init() {
		console.log('OtherWordsController object created');

	}

}