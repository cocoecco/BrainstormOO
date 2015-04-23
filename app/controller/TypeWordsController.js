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
	

	function addAnimations() {
		var typingViewAnimation = {
			bview: 'typingView',
			type: 'move',
			duration: 3.0,
			delay: 0.0,
			newRect : {x: '0', y: '80%', width: '100%', height: '15%'}
		};
		BOO.animator.addAnimation(typingViewAnimation);


		setTimeout(function() {
			BOO.animator.startAnimationStack();
		},20);
	}

	function init() {
		addAnimations();
		console.log('TypeWordsController object created');
	}
	init();
}