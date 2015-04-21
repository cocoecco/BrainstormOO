/************************************************************
						app.js
Controls index.html
Main app handler, get's direct calls from the user, 
sends request to the right view constuctor,
wait for response in html form and update the right container

Created by Shachar cocoecco@yahoo.com
*************************************************************/


//Global Objects
var BOO = BOO || {}; //Main app
var sharedDB = new SharedDB();
var pages = new Pages();



function renderView(view) {
	//view is a full html+javascript+css string that represents a view
	//a view is being added to the document body and use full screen
	//internal objects work together to constuct a view
	var appContainer = document.getElementById("appContainer");
	appContainer.innerHTML = view;
}

function loadView(viewName) {
	pages.presentViewWithClassName(viewName, 'session', sharedDB, renderView);
	
}

function appInit() {
	//First function to be called on the App
	//Checks for session status, DB status, Model Status
	//Directs to the right view (if user closed the page and returned the session and DB will have values)

	//TODO: check if session exist and whats the currentIndex OR start new Welcome view with currentIndex=0
	//TODO: check if db exists, if the data match the session currentIndex OR start new Welcome view with currentIndex=0 and init shared db



	loadView('Welcome');
}

window.onload = function() {
	//Called on landing page index.html
	appInit();
}


