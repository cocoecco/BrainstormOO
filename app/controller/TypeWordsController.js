/************************************************************
						WelcomeController.js
Third page - 'TypeWords' viewcontroller

Created by Shachar cocoecco@yahoo.com
*************************************************************/



var TypeWordsController = function(model) {
	this.model = model;


	this.aboutClicked = function() {
		alert("about clicked TypeWords");
	}

	this.nextClicked = function() {
		var inpField = BOO.getElement("inpTextField");
		if (inpField.value.length == 0) {
			BOO.tools.textfieldEmptyBlink(inpField);
			return;
		}
		BOO.sharedDB.setWord(inpField.value);
		progresNextWord();
	}

	progresNextWord = function() {
		var inpField = BOO.getElement("inpTextField"),
			typeLabel = BOO.getElement("typeLabel"),
			storageCount = BOO.sharedDB.getStorageCount();

		if (storageCount == BOO.sharedDB.getWordsCount()) {
			//User added all the words needed
			return;
		}

		insertWordDisplay(BOO.sharedDB.getLast());
		typeLabel.innerHTML = "Type Words about your idea (" + (storageCount+1) + "/" + BOO.sharedDB.getWordsCount() + ")";
		inpField.value = "";
	}

	insertWordDisplay = function (word) {
		var wordBox = BOO.tools.createWordBox(BOO.sharedDB.getLast());
		BOO.getElement("wordsLabel").innerHTML += wordBox;
	}

	
	function animationEnded() {

	}

	this.textChanged = function(e) {
	}

	function addAnimations() {
		var typingViewAnimation = {
			bview: 'typingView',
			type: 'move',
			duration: 0.4,
			delay: 0.0,
			newRect : {x: '0%', y: '85%', width: '100%', height: '15%'}
		};
		var animator = BOO.getNewAnimator();
		animator.addAnimation(typingViewAnimation);


		setTimeout(function() {
			animator.startAnimationStack(animationEnded);
		},20);
	}

	function init() {
		addAnimations();
		console.log('TypeWordsController object created');
	}
	init();
}