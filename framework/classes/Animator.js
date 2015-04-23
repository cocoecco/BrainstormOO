/************************************************************
						Animator.js
Animation class for BView's

Created by Shachar cocoecco@yahoo.com
*************************************************************/

function AnimationStack() {
	this.stack = new Array();
	
	this.pop = function() {
		return this.stack.pop();
	}
	this.push = function(item) {
		this.stack.push(item);
	}
	this.count = function() {
		return this.stack.length;
	}
	this.removeAllItems = function() {
		this.stack = null;
		this.stack = new AnimationStack();
	}
}

var Animator = function() {
	this.stack = new AnimationStack();

	this.startAnimationStack = function() {
		if (this.stack.count() == 0) {
			console.log("No views to animate");
		}
		else {
			for (var i=0;i<this.stack.count();i++) {
				directAnimation(this.stack.pop());
			}
			this.stack.removeAllItems();
		}
	}

	this.addAnimation = function(animation) {
		this.stack.push(animation);
	}


	function directAnimation(animation) {
		var type = animation["type"];
		if (type == "move") {
			animateMove(animation);
		}
	}

	function animateMove(animation) {
		var bviewID = animation["bview"];
		var view = document.getElementById(bviewID);
		var dur = animation["duration"],
		delay = animation["delay"],
		rect = animation["newRect"];
		



		view.style.left = "0px";
	}


	function init() {
		console.log('Animator object created');

	}
	init();
}











