/************************************************************
						BView.js
UI View Object, represented as JSON

Created by Shachar cocoecco@yahoo.com
*************************************************************/


var BView = function(id, rect) {

	this.type = 'bview',
	this.id = id,
	this.css = baseCSS(),
	this.subViews = [];

	function baseCSS() {
		var css = {
			rect : rect,
			cornerRadius : '0px',
			zIndex : 0,
			backgroundColor : '#000',
			position: 'fixed',
			fontSize: '12px',
			fontColor: '#000'
		};
		return css;
	}



	/*
		View Methods
	*/

	this.getId = function() {
		return this.id;
	}

	this.setCSSElement = function(key,value) {
		this.css[key] = value;
	}

	this.addSubview = function(subview) {
		this.subViews.push(subview);
	}

	this.removeSubview = function(subviewId) {
		var len = this.subViews.length-1;

		for (var i=len;i>-1;i--) { //Looping backward to prevent re-indexing array on removal of object
			var subview = this.subViews[i];
			if (subview.getId() == subviewId) {
				subViews.splice(i,1);
			}
		}
	}


	this.renderView = function() {
		var view = "";
		view += injectCSS(this.css, this.id);
		view += injectHTML(this.id, this.type, this.subViews);
		return view;
	}


	function init() {
		console.log('BView object created');
	}


//add padding

	function cssKeyValue(key, value) {
		return key + ':' + value + ';';
	}

	function injectCSS(cssObj, objId) {
		//inject view css data
		var cssTags = "";
		cssTags += cssKeyValue('background-color', cssObj.backgroundColor);
		cssTags += cssKeyValue('border-radius', cssObj.cornerRadius);
		cssTags += cssKeyValue('zIndex', cssObj.zIndex);

		cssTags += cssKeyValue('position', cssObj.position);
		cssTags += cssKeyValue('left', cssObj.rect.x);
		cssTags += cssKeyValue('top', cssObj.rect.y);
		cssTags += cssKeyValue('width', cssObj.rect.width);
		cssTags += cssKeyValue('height', cssObj.rect.height);

		cssTags += cssKeyValue('font-size', cssObj.fontSize);
		cssTags += cssKeyValue('color', cssObj.fontColor);

		return "<style>#" + objId + '{' + cssTags + '}</style>';
	}

	function injectHTML(objId, objType, objSubviews) {
		//inject divs into the target
		var html = "<div id='" + objId + "'"+ " class=" + "'" + objType + "'>";

		for (var i=0;i<objSubviews.length;i++) {
			html += objSubviews[i];
		}

		html += "</div>";
		return html;
	}
	init();
}


/*

var BView = {
	type: bview,
	subViews: [],
	css: {
		backgroundColor: '#fff',
		cornerRadius: '0px',
		zIndex: 0,
		rect: rect,
		position: fixed,
		fontSize: 12px,
		fontColor: '#000'
	}
}
*/



