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
	
	function animationEnded() {
		console.log("Animation Ended");
		var typingViewAnimation = {
			bview: 'typingView',
			type: 'move',
			duration: 0.4,
			delay: 0.0,
			newRect : {x: '0%', y: '25%', width: '100%', height: '15%'}
		};
				var animator = BOO.getNewAnimator();

		animator.addAnimation(typingViewAnimation);


		setTimeout(function() {
			animator.startAnimationStack(null);
		},20);
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