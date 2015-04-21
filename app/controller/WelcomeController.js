/************************************************************
						WelcomeController.js
Welcome landing page viewcontroller

Created by Shachar cocoecco@yahoo.com
*************************************************************/

var WelcomeController = function(model) {
	this.model = model;


	this.aboutClicked = function() {
		alert("about clicked");
	}

	function init() {
		console.log('WelcomeController object created');

	}

}