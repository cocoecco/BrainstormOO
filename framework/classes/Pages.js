/************************************************************
						Pages.js
Singelton, manage and constuct view controllers, views and data(model)

Created by Shachar cocoecco@yahoo.com
*************************************************************/

viewIndex = 0; //Welcome page
viewName = "";

var Pages = function() {


	function startWithNewSession(sharedSession, initSharedDB, renderView) {
		//TODO: 
		//sharedSession.startNewSession();
		//initSharedDB.setNewSharedDB();
		var welcome = new Welcome();
		renderView(welcome.welcomeViewPage());
	}

	this.presentNextView = function(exitingViewObj, incomingViewName, initSharedDB, renderView) {
		if (incomingViewName == "OtherWords") {
			var otherWords = new OtherWords();
			renderView(otherWords.otherWordsPage());
		}
		else if (incomingViewName == "TypeWords") {
			var typeWords = new TypeWords();
			renderView(typeWords.typeWordsPage());
		}
	}

	this.presentViewWithClassName = function(initViewName, sharedSession, initSharedDB, renderView) {
		if (initViewName == "Welcome") {
			//Ladning Page: Welcome.js
			viewIndex = 0;
			viewName = initViewName;
			startWithNewSession(sharedSession, initSharedDB, renderView);
		}
		else{
			//Other views
			//Validating initViewName with current db state
			
			//TODO: implement these functions
			//this.viewIndex = initSharedDB.viewIndexByDBState();
			//this.viewName = initSharedDB.nameByViewIndex;
		}
	}

	function init() {
		//New Pages Object Created, initiate settings
		console.log('Pages object created');
	}
	init();
}