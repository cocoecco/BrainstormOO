/************************************************************
						Welcome.js
Type Words Page

Created by Shachar cocoecco@yahoo.com
*************************************************************/



var TypeWords = function(controller) {

	this.view = null;
   	this.controller = controller || new TypeWordsController();
   	this.toolbarView = null;

    function attachCSS(htmlString) {
    	//Find a way to attach a css to string
    }

	this.typeWordsPage = function() {
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
		var tc = this.controller.textChanged;
		var nc = this.controller.nextClicked;

		this.toolbarView = createToolbar(ac); //Pass function when clicking on about
		this.centerView = createCenterSection(tc,nc);
		this.footerView = createFooter();

		this.view.addSubview(this.toolbarView);
		this.view.addSubview(this.centerView);
		this.view.addSubview(this.footerView);


		console.log('TypeWords View created');
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

	function createCenterSection(textChanged, nextClicked) {
		var cenView = new BView('center', {x:'0px',y:'20%',width:'100%',height:'70%'});
		cenView.setCSSElement('backgroundColor', 'transparent'); 
		cenView.setCSSElement('fontColor', '#2980b9');

		var wordsLabel = new BLabel('wordsLabel', {x:'10%',y:'10%',width:'80%',height:'60%'});
		wordsLabel.setCSSElement('backgroundColor', 'transparent');
		wordsLabel.setCSSElement('fontSize', '4vh');
		wordsLabel.setCSSElement('fontColor', '#2c3e50');
		wordsLabel.setCSSElement('position', 'relative');
		wordsLabel.setText('');
		cenView.addSubview(wordsLabel.renderView());

		var typeingView = new BView('typingView', {x:'100%',y:'85%',width:'100%',height:'15%'});
		typeingView.setCSSElement('fontSize', '20px');
		typeingView.setCSSElement('fontColor', 'green');
		typeingView.setCSSElement('position', 'absolute'); 
		typeingView.setCSSElement('backgroundColor', '#2c3e50');

		var typeLabel = new BLabel('typeLabel', {x:'5%',y:'50%',width:'40%',height:'4vh%'});
		typeLabel.setCSSElement('backgroundColor', 'transparent');
		typeLabel.setCSSElement('fontSize', '4vh');
		typeLabel.setCSSElement('fontColor', '#ecf0f1');
		typeLabel.setCSSElement('position', 'relative');
		typeLabel.setText('Type Words about your idea (1/' + BOO.sharedDB.getWordsCount() + ')');
		typeingView.addSubview(typeLabel.renderView());

		var inputTextField = new BTextField('inpTextField', {x:'38%',y:'0%',width:'15%',height:'20px'});
		inputTextField.setCSSElement('backgroundColor', '#fff');
		inputTextField.setCSSElement('fontSize', '16px');
		inputTextField.setCSSElement('fontColor', '#7f8c8d');
		inputTextField.setCSSElement('lineHeight', '10px');
		inputTextField.setCSSElement('position', 'relative');
		inputTextField.setTextChanged(textChanged);
		inputTextField.setPlaceholderText("Word");
		typeingView.addSubview(inputTextField.renderView());

		var nextBtn = new BButton('nextBtn',{x:'60%',y:'40%',width:'7vw',height:'5vh'})
		nextBtn.setCSSElement('backgroundColor', '#ecf0f1');
		nextBtn.setCSSElement('position', 'absolute');
		nextBtn.setCSSElement('cornerRadius', '4px');
		nextBtn.setCSSElement('textAlign', 'center');
		nextBtn.setCSSElement('lineHeight', '4.5vh');
		nextBtn.setCSSElement('fontSize', '2.5vh');
		nextBtn.setCSSElement('textColor', '#34495e');
		nextBtn.setTitle('Next');
		nextBtn.setHandler(nextClicked);
		typeingView.addSubview(nextBtn.renderView());

		cenView.addSubview(typeingView.renderView());

		return cenView.renderView();
	}

}















