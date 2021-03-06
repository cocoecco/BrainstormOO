/************************************************************
						Welcome.js
App Landing Page

Created by Shachar cocoecco@yahoo.com
*************************************************************/



var OtherWords = function(controller) {

	this.view = null;
   	this.controller = controller || new OtherWordsController();
   	this.toolbarView = null;

    function attachCSS(htmlString) {
    	//Find a way to attach a css to string
    }

	this.otherWordsPage = function() {
		//This function generate a view represented in a string
		//Along with its css and javascript
		var html = this.view.renderView();
		return html;
	}

	this.init = function() {
		//New View Object Created, initiate settings
		this.view = new BView('controller', {x:0,y:0,width:'100%',height:'100%'});
		this.view.setCSSElement('fontSize', '50px');
		this.view.setCSSElement('fontColor', '#fff');
		this.view.setCSSElement('backgroundColor', '#ecf0f1'); 

		//Just to make things more readable
		var ac = this.controller.aboutClicked;
		var cs = this.controller.amountClick;

		this.toolbarView = createToolbar(ac); //Pass function when clicking on about
		this.centerView = createCenterSection(cs);
		this.footerView = createFooter();

		this.view.addSubview(this.toolbarView);
		this.view.addSubview(this.centerView);
		this.view.addSubview(this.footerView);


		console.log('OtherWords View created');
	}
	this.init();





	//Build View Functions

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

	function createCenterSection(countSelected) {
		var cenView = new BView('center', {x:'0px',y:'20%',width:'100%',height:'70%'});
		cenView.setCSSElement('backgroundColor', 'transparent'); 
		cenView.setCSSElement('fontColor', '#2980b9');
	
		var centerLabel = new BLabel('centerTitle', {x:'10%',y:'5%',width:'80%',height:'10%'});
		centerLabel.setCSSElement('backgroundColor', 'transparent');
		centerLabel.setCSSElement('fontSize', '3.5vh');
		centerLabel.setCSSElement('fontColor', '#7f8c8d');
		centerLabel.setCSSElement('lineHeight', '8vh');
		centerLabel.setCSSElement('position', 'relative');
		var text = "How many other words can you think of that relates to your idea?";
		centerLabel.setText(text);
		cenView.addSubview(centerLabel.renderView());

		var w1 = new BButton('w1',{x:'11%',y:'40%',width:'14vh',height:'14vh'})
		w1.setCSSElement('backgroundColor', '#2ecc71');
		w1.setCSSElement('position', 'absolute');
		w1.setCSSElement('cornerRadius', '4px');
		w1.setCSSElement('textAlign', 'center');
		w1.setCSSElement('lineHeight', '14vh');
		w1.setCSSElement('fontSize', '2.5vh');
		w1.setCSSElement('textColor', '#34495e');
		w1.setTitle('10 Words');
		w1.setHandler(countSelected);
		cenView.addSubview(w1.renderView());

		var w2 = new BButton('w2',{x:'31%',y:'40%',width:'14vh',height:'14vh'})
		w2.setCSSElement('backgroundColor', '#2ecc71');
		w2.setCSSElement('position', 'absolute');
		w2.setCSSElement('cornerRadius', '4px');
		w2.setCSSElement('textAlign', 'center');
		w2.setCSSElement('lineHeight', '14vh');
		w2.setCSSElement('fontSize', '2.5vh');
		w2.setCSSElement('textColor', '#34495e');
		w2.setTitle('20 Words');
		w2.setHandler(countSelected);
		cenView.addSubview(w2.renderView());

		var w3 = new BButton('w3',{x:'51%',y:'40%',width:'14vh',height:'14vh'})
		w3.setCSSElement('backgroundColor', '#2ecc71');
		w3.setCSSElement('position', 'absolute');
		w3.setCSSElement('cornerRadius', '4px');
		w3.setCSSElement('textAlign', 'center');
		w3.setCSSElement('lineHeight', '14vh');
		w3.setCSSElement('fontSize', '2.5vh');
		w3.setCSSElement('textColor', '#34495e');
		w3.setTitle('30 Words');
		w3.setHandler(countSelected);
		cenView.addSubview(w3.renderView());


		return cenView.renderView();
	}
}















