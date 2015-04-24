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

function MoveCycle(steps, origRect, view, finalRect, callback) {
	this.running = false;
	this.steps = steps;
	this.curRect = origRect;
	this.timer = null;
	this.maxSteps = 0;
	this.currentStep = 0;
	this.view = view;
	this.finalRect = finalRect;
	this.callback = callback;

	this.startAnimation = function(duration, delay) {
		this.running = true;
		this.maxSteps = duration; //TODO: Change this to dynamic value, stops the animation
		if (delay > 0) {
			window.setTimeout(this.animateStep(duration),delay);
		}
		else {
			this.animateStep(duration);
		}
	}

	this.step = function() {
		var stepX = this.steps["x"];
		var stepY = this.steps["y"];
		var stepWidth = this.steps["width"];
		var stepHeight = this.steps["height"];

		//Moving Selectors
		//----------------
		var stopSides = false, stopUpDown = false;
		var newLeft; //Moving Left/Right ----0---------
		if (stepX >= 0) {
			//moving right
			newLeft = this.view.offsetLeft + stepX;
			if (this.finalRect["x"] <= newLeft) {
				//arrived to the edge
				newLeft = this.finalRect["x"];
				stopSides = true;
			}
		}
		else {
			//moving left
			newLeft = this.view.offsetLeft + stepX;
			if (this.finalRect["x"] >= newLeft) {
				//arrived to the edge
				newLeft = this.finalRect["x"];
				stopSides = true;
			}
		}
		this.view.style.left = newLeft + "px";
		
		//----------------------------------------------
		var newTop; //Moving Up/Down

		if (stepY >= 0) {
			//moving up
			newTop = this.view.offsetTop + stepY;
			if (this.finalRect["y"] <= stepY) {
				newTop = this.finalRect["y"];
				stopUpDown = true;
			}
		}
		else {
			//moving down
			newTop = this.view.offsetTop + stepY;
			if (this.finalRect["y"] >= newTop) {
				newTop = this.finalRect["y"];
				stopUpDown = true;
			}
		}
		this.view.style.top = newTop + "px";
		//----------------------------------------------

		if (stopSides == true && stopUpDown == true) {
			stopAnimation(this.timer, this.callback);
		}
	}

	function stopAnimation(timer,callback) {
		clearInterval(timer);
		console.log("animation stopped");
		if (callback != null) callback();
	}

	this.animateStep = function(duration) {
		var owner = this;
		this.maxSteps = duration;
		this.currentStep = 0;

		this.timer = setInterval(function(){owner.step();}, this.maxSteps/1000)
	}
}

var Animator = function() {
	this.stack = new AnimationStack();
	this.callback = null;

	this.startAnimationStack = function(callback) {
		this.callback = callback;
		if (this.stack.count() == 0) {
			console.log("No views to animate");
		}
		else {
			for (var i=0;i<this.stack.count();i++) {
				directAnimation(this.stack.pop(), this.callback);
			}
			this.stack.removeAllItems();
		}
	}

	this.addAnimation = function(animation) {
		this.stack.push(animation);
	}


	function directAnimation(animation, callback) {
		var type = animation["type"];
		if (type == "move") {
			animateMove(animation, callback);
		}
	}

	function dummyDivRect(newRect, container) {
		var containerRect = container.getBoundingClientRect();
		var width = containerRect.width;
		var height = containerRect.height;

		var xP = newRect.x;
		var yP = newRect.y;
		var widthP = newRect.width;
		var heightP = newRect.height;

		var perX = xP.substring(0, xP.length - 1);
		var perY = yP.substring(0, yP.length - 1);
		var perW = widthP.substring(0, widthP.length - 1);
		var perH = heightP.substring(0, heightP.length - 1);

		var pxX = (perX / 100) * width;
		var pxY = (perY / 100) * height;
		var pxW = (perW / 100) * width;
		var pxH = (perH / 100) * height;

		return {x: pxX, y: pxY, width: pxW, height: pxH};
	}

	function abso(num) {
		return (num>0) ? num : num*-1;
	}

	function movementRect(existingRect, rawRect, container) {
		var newRect = dummyDivRect(rawRect, container);
		
		var dX = newRect.x - existingRect.x;
		var dY = newRect.y - existingRect.y;
		var dW = newRect.width - existingRect.width;
		var dH = newRect.height - existingRect.height;
		return {x: dX, y: dY, width: dW, height: dH};
	}

	function animateMove(animation, callback) {
		var bviewID = animation["bview"];
		var view = document.getElementById(bviewID);
		var dur = animation["duration"],
		delay = animation["delay"],
		newRect = animation["newRect"],
		boundingRect = view.getBoundingClientRect(),
		oldRect = {x: boundingRect.left, y: boundingRect.top, width: boundingRect.width, height: boundingRect.height};

		var mr = movementRect(oldRect, newRect, view.parentNode); //Movement Rect
		var finalRect = dummyDivRect(newRect, view.parentNode);

		var stepX = mr["x"] / (dur*200);
		var stepY = mr["y"] / (dur*200);
		var stepW = mr["width"] / (dur*200);
		var stepH = mr["height"] / (dur*200);
		var steps = {x: stepX, y: stepY, width: stepW, height: stepH}

		var viewAnimate = new MoveCycle(steps, oldRect, view, finalRect, callback);
		viewAnimate.startAnimation(dur*1000, delay);
	}


	function init() {
		console.log('Animator object created');

	}
	init();
}











