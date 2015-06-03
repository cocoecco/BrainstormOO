# BrainstormOO

<h1>Experimental Project - Web Framework<h1>
<h4>Web Development Framework | JavaScript | MVC</h4>

<p>
This is my attempt to build a web development framework and enhance my JavaScript skills.
While the project is not complete, it contains some useful functions.
</p>
<p>
the framework treats HTML Div's as Views and allows manipulation in a similar way to mobile apps development.
</p>
<p>
Example: Creating a new view:<br>
</p>
```javascript
var tbView = new BView('toolbar', {x:'0px',y:'0px',width:'100%',height:'20%'});
tbView.setCSSElement('fontSize', '20px');
tbView.setCSSElement('fontColor', 'yellow');
tbView.setCSSElement('backgroundColor', '#2c3e50');
homeView.addSubview(tbView.renderView());
```
<p>The framework is MVC based, each View has a Controller and DataModel Attached.</p>
<p>Example: View Controller</p>
```javascript
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
```
<p>The framework contains classes that are being used to manipulate Views, such as the Animator class.</p>
<p>Example - Use of Animator Class</p>
```javascript
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
	```
