/************************************************************
						Welcome.js
App Landing Page

Created by Shachar cocoecco@yahoo.com
*************************************************************/

//var view = "";


var Welcome = function(controller) {

	this.view = null;
   	this.toolbarView = null;
   	this.centerView = null;
   	this.footerView = null;
   	this.controller = controller || new WelcomeController();

    function attachCSS(htmlString) {
    	//Find a way to attach a css to string
    }

	this.welcomeViewPage = function() {
		//This function generate a view represented in a string
		//Along with its css and javascript
		var html = this.view.renderView();
		return html;
	}



	function createToolbar(aboutClicked) {
		var tbView = new BView('toolbar', {x:'0px',y:'0px',width:'100%',height:'20%'});
		tbView.setCSSElement('fontSize', '20px');
		tbView.setCSSElement('fontColor', 'yellow');
		tbView.setCSSElement('backgroundColor', '#2c3e50');

		var midTB = new BView('midTB', {x:'0px',y:'20%',width:'100%',height:'50%'});
		midTB.setCSSElement('backgroundColor', 'transparent');
		midTB.setCSSElement('position', 'relative');
		
		var titleLabel = new BLabel('headerTitle', {x:'5%',y:'5%',width:'80%',height:'70%'});
		titleLabel.setCSSElement('backgroundColor', 'transparent');
		titleLabel.setCSSElement('fontSize', '8vh');
		titleLabel.setCSSElement('fontColor', '#ecf0f1');
		titleLabel.setCSSElement('position', 'relative');
		titleLabel.setText('BrainstormOO');

		midTB.addSubview(titleLabel.renderView());
		tbView.addSubview(midTB.renderView());

		var botTB = new BView('botTB', {x:'0px',y:'70%',width:'100%',height:'30%'});
		botTB.setCSSElement('backgroundColor', '#e67e22');
		botTB.setCSSElement('position', 'absolute');

		var aboutBtn = new BButton('aboutBtn',{x:'5%',y:'7px',width:'7vw',height:'4vh'})
		aboutBtn.setCSSElement('backgroundColor', '#ecf0f1');
		aboutBtn.setCSSElement('position', 'absolute');
		aboutBtn.setCSSElement('cornerRadius', '4px');
		aboutBtn.setCSSElement('textAlign', 'center');
		aboutBtn.setCSSElement('lineHeight', '4.5vh');
		aboutBtn.setCSSElement('fontSize', '2.5vh');
		aboutBtn.setCSSElement('textColor', '#34495e');
		aboutBtn.setTitle('About');
		aboutBtn.setHandler(aboutClicked);
		botTB.addSubview(aboutBtn.renderView());

		tbView.addSubview(botTB.renderView());
		return tbView.renderView();
	}

	function createCenterSection(textChanged, showNextView) {
		var cenView = new BView('center', {x:'0px',y:'20%',width:'100%',height:'70%'});
		cenView.setCSSElement('backgroundColor', 'transparent'); 
		cenView.setCSSElement('fontColor', '#2980b9');
	
		var topImage = new BImageView('topImage', {x:'10%',y:'5%',width:'80%',height:'auto'})
		topImage.setImage('http://www.gamearch.com/wp-content/uploads//2013/07/header.png');
		topImage.setCSSElement('position', 'relative');
		cenView.addSubview(topImage.renderView());

		var centerLabel = new BLabel('centerTitle', {x:'10%',y:'5%',width:'80%',height:'10%'});
		centerLabel.setCSSElement('backgroundColor', 'transparent');
		centerLabel.setCSSElement('fontSize', '3.5vh');
		centerLabel.setCSSElement('fontColor', '#7f8c8d');
		centerLabel.setCSSElement('lineHeight', '8vh');
		centerLabel.setCSSElement('position', 'relative');
		var text = "Welcome, Type your idea in three words:";
		centerLabel.setText(text);
		cenView.addSubview(centerLabel.renderView());

		var textfield1 = new BTextField('textfield1', {x:'10%',y:'5%',width:'10%',height:'3%'});
		textfield1.setCSSElement('backgroundColor', '#fff');
		textfield1.setCSSElement('fontSize', '2.5vh');
		textfield1.setCSSElement('fontColor', '#7f8c8d');
		textfield1.setCSSElement('lineHeight', '8vh');
		textfield1.setCSSElement('position', 'relative');
		textfield1.setTextChanged(textChanged);
		textfield1.setPlaceholderText("First");
		cenView.addSubview(textfield1.renderView());

		var textfield2 = new BTextField('textfield2', {x:'10%',y:'5%',width:'10%',height:'3%'});
		textfield2.setCSSElement('backgroundColor', '#fff');
		textfield2.setCSSElement('fontSize', '2.5vh');
		textfield2.setCSSElement('fontColor', '#7f8c8d');
		textfield2.setCSSElement('lineHeight', '4vh');
		textfield2.setCSSElement('position', 'relative');
		textfield2.setTextChanged(textChanged);
		textfield2.setPlaceholderText("Second");
		cenView.addSubview(textfield2.renderView());

		var textfield3 = new BTextField('textfield3', {x:'10%',y:'5%',width:'10%',height:'3%'});
		textfield3.setCSSElement('backgroundColor', '#fff');
		textfield3.setCSSElement('fontSize', '2.5vh');
		textfield3.setCSSElement('fontColor', '#7f8c8d');
		textfield3.setCSSElement('lineHeight', '4vh');
		textfield3.setCSSElement('position', 'relative');
		textfield3.setTextChanged(textChanged);
		textfield3.setPlaceholderText("Third");
		cenView.addSubview(textfield3.renderView());

		var wordChk1 = new BImageView('wordChk1', {x:'10%',y:'61%',width:'4vw',height:'auto'})
		wordChk1.setImage('resources/img/checkmark.png');
		wordChk1.setCSSElement('position', 'fixed');
		wordChk1.setCSSElement('visibility', 'hidden');
		cenView.addSubview(wordChk1.renderView());

		var wordChk2 = new BImageView('wordChk2', {x:'21.5%',y:'61%',width:'4vw',height:'auto'})
		wordChk2.setImage('resources/img/checkmark.png');
		wordChk2.setCSSElement('position', 'fixed');
		wordChk2.setCSSElement('visibility', 'hidden');
		cenView.addSubview(wordChk2.renderView());

		var wordChk3 = new BImageView('wordChk3', {x:'33.1%',y:'61%',width:'4vw',height:'auto'})
		wordChk3.setImage('resources/img/checkmark.png');
		wordChk3.setCSSElement('position', 'fixed');
		wordChk3.setCSSElement('visibility', 'hidden');
		cenView.addSubview(wordChk3.renderView());
		
		var nextBtn = new BButton('nextBtn',{x:'50%',y:'0px',width:'7vw',height:'7vw'})
		nextBtn.setCSSElement('backgroundColor', '#2ecc71');
		nextBtn.setCSSElement('position', 'relative');
		nextBtn.setCSSElement('cornerRadius', '7vw');
		nextBtn.setCSSElement('textAlign', 'center');
		nextBtn.setCSSElement('lineHeight', '7vw');
		nextBtn.setCSSElement('fontSize', '2vw');
		nextBtn.setCSSElement('textColor', '#ecf0f1');
		nextBtn.setCSSElement('display', 'none');
		nextBtn.setTitle('Next');
		nextBtn.setHandler(showNextView);
		cenView.addSubview(nextBtn.renderView());

		return cenView.renderView();
	}

	function createFooter() {
		var footerView = new BView('footer', {x:'0px',y:'90%',width:'100%',height:'10%'});
		footerView.setCSSElement('fontSize', '20px');
		footerView.setCSSElement('fontColor', 'green');
		footerView.setCSSElement('backgroundColor', '#2c3e50');
		
		var footerLabel = new BLabel('footerTitle', {x:'5%',y:'40%',width:'80%',height:'70%'});
		footerLabel.setCSSElement('backgroundColor', 'transparent');
		footerLabel.setCSSElement('fontSize', '2vh');
		footerLabel.setCSSElement('fontColor', '#ecf0f1');

		footerLabel.setCSSElement('position', 'relative');
		footerLabel.setText('2015 CocoEcco, Open Source Brainstorming Tool, Javascript OO');

		footerView.addSubview(footerLabel.renderView());


		return footerView.renderView();
	}

	this.init = function() {
		//New View Object Created, initiate settings
		this.view = new BView('controller', {x:0,y:0,width:'100%',height:'100%'});
		this.view.setCSSElement('fontSize', '50px');
		this.view.setCSSElement('fontColor', '#fff');
		this.view.setCSSElement('backgroundColor', '#ecf0f1'); 

		//Just to make things more readable
		var ac = this.controller.aboutClicked;
		var textChanged = this.controller.textChanged;
		var snv = this.controller.showNextView;

		this.toolbarView = createToolbar(ac); //Pass function when clicking on about
		this.centerView = createCenterSection(textChanged, snv);
		this.footerView = createFooter();

		this.view.addSubview(this.toolbarView);
		this.view.addSubview(this.centerView);
		this.view.addSubview(this.footerView);

		console.log('Welcome View created');

	}
	this.init();
}















