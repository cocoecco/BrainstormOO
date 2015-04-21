var BButton = function(id,rect) {
	
	this.type = 'bbutton'
	this.id = id,
	this.css = baseCSS(),
	this.title = "button";
	this.handler = null;

	this.setTitle = function(text) {
		this.title = text;
	}

	function baseCSS() {
		var css = {
			rect : rect,
			cornerRadius : '0px',
			zIndex : 0,
			backgroundColor : '#000',
			position: 'fixed',
			fontSize: '12px',
			fontColor: '#000',
			cursor : 'pointer'
		};
		return css;
	}

	this.setHandler = function(callBack) {
		this.handler = callBack;
	}


	this.setCSSElement = function(key,value) {
		this.css[key] = value;
	}

	function init() {
		console.log('BButton object created')
	}

	this.renderView = function() {
		var view = "";
		view += injectCSS(this.css, this.id);
		view += injectHTML(this.id, this.type, this.title, this.handler);
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
		cssTags += cssKeyValue('text-align', cssObj.textAlign);
		cssTags += cssKeyValue('line-height', cssObj.lineHeight);
		
		cssTags += cssKeyValue('cursor', cssObj.cursor);

		return "<style>#" + objId + '{' + cssTags + '}</style>';
	}

	function injectHTML(objId, objType, title, handler) {
		//inject divs into the target

		var html = "<a href='#' onclick='return " + handler + "();'><div id='" + objId + "'"+ " class=" + "'" + objType + "'>";
		html += title;
		html += "</div></a>";
		return html;
	}

	init();


}
