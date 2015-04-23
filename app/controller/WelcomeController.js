/************************************************************
						WelcomeController.js
Welcome landing page viewcontroller

Created by Shachar cocoecco@yahoo.com
*************************************************************/

var t1,t2,t3 = false;

var WelcomeController = function(model) {
	this.model = model;


	this.aboutClicked = function() {
		alert("about clicked");
	}

	this.showNextView = function() {
		var word1 = document.getElementById("textfield1").value;
		var word2 = document.getElementById("textfield2").value;
		var word3 = document.getElementById("textfield3").value;

		BOO.sharedDB.setIdea(word1,word2,word3);

		var controllerView = document.getElementById("controller");
		BOO.appDelegate.presentNextView(controllerView, "OtherWords");
	}

	this.textChanged = function(e) {
		var textFieldID = e.id;
		if (textFieldID == "textfield1") {
			if (e.value.length > 1) {
				document.getElementById("wordChk1").style.visibility = "visible";
				t1 = true;
			}
			else {
				document.getElementById("wordChk1").style.visibility = "hidden";
				t1 = false;
			}
		}
		else if (textFieldID == "textfield2") {
			if (e.value.length > 1) {
				document.getElementById("wordChk2").style.visibility = "visible";
				t2 = true;
			}
			else {
				document.getElementById("wordChk2").style.visibility = "hidden";
				t2 = false;
			}
		}
		else if (textFieldID == "textfield3") {
			if (e.value.length > 1) {
				document.getElementById("wordChk3").style.visibility = "visible";
				t3 = true;
			}
			else {
				document.getElementById("wordChk3").style.visibility = "hidden";
				t3 = false;
			}
		}

		if (t1 && t2 && t3) {
			document.getElementById("nextBtn").style.display = "block";
		}
		else {
			document.getElementById("nextBtn").style.display = "none";
		}
		
	}



	function init() {
		console.log('WelcomeController object created');

	}

}