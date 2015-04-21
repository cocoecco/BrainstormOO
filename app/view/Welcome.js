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
		aboutBtn.setCSSElement('textColor', '#ecf0f1');
		aboutBtn.setTitle('About');
		aboutBtn.setHandler(aboutClicked);

		botTB.addSubview(aboutBtn.renderView());
		tbView.addSubview(botTB.renderView());
		return tbView.renderView();
	}

	function createCenterSection() {
		var cenView = new BView('center', {x:'0px',y:'20%',width:'100%',height:'70%'});
		cenView.setCSSElement('backgroundColor', 'transparent'); 
		cenView.setCSSElement('fontColor', '#2980b9');
		
		var titleLabel = new BLabel('centerTitle', {x:'5%',y:'5%',width:'80%',height:'30%'});
		titleLabel.setCSSElement('backgroundColor', 'transparent');
		titleLabel.setCSSElement('fontSize', '3vh');
		titleLabel.setCSSElement('fontColor', '#2c3e50');
		titleLabel.setCSSElement('position', 'relative');
		titleLabel.setText('Parts of your idea.');
		cenView.addSubview(titleLabel.renderView());

		return cenView.renderView();
	}

	function createFooter() {
		var footerView = new BView('footer', {x:'0px',y:'90%',width:'100%',height:'10%'});
		footerView.setCSSElement('fontSize', '20px');
		footerView.setCSSElement('fontColor', 'green');
		footerView.setCSSElement('backgroundColor', '#2c3e50');
		
		var footeLabel = new BLabel('footerTitle', {x:'5%',y:'40%',width:'80%',height:'70%'});
		footeLabel.setCSSElement('backgroundColor', 'transparent');
		footeLabel.setCSSElement('fontSize', '2vh');
		footeLabel.setCSSElement('fontColor', '#ecf0f1');

		footeLabel.setCSSElement('position', 'relative');
		footeLabel.setText('2015 CocoEcco, Open Source Brainstorm Tool, Javascript OO');

		footerView.addSubview(footeLabel.renderView());


		return footerView.renderView();
	}

	this.init = function() {
		//New View Object Created, initiate settings
		this.view = new BView('controller', {x:0,y:0,width:'100%',height:'100%'});
		this.view.setCSSElement('fontSize', '50px');
		this.view.setCSSElement('fontColor', '#fff');
		this.view.setCSSElement('backgroundColor', '#ecf0f1'); 

		this.toolbarView = createToolbar(this.controller.aboutClicked); //Pass function when clicking on about
		this.centerView = createCenterSection();
		this.footerView = createFooter();

		this.view.addSubview(this.toolbarView);
		this.view.addSubview(this.centerView);
		this.view.addSubview(this.footerView);

		console.log('Welcome View created');
	}
	this.init();
}















