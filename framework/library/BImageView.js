var BImageView = function(id, rect) {
	this.type = 'blabel'
	this.id = id,
	this.css = baseCSS(),
	this.text = "";

	this.setImage = function(url) {
		this.css['image'] = url;
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
			image: ''
		};
		return css;
	}

	this.setCSSElement = function(key,value) {
		this.css[key] = value;
	}

	function init() {
		console.log('BLabel object created')
	}


	this.renderView = function() {
		var view = "";
		view += injectCSS(this.css, this.id);
		view += injectHTML(this.id, this.type, this.css['image']);
		console.log(this.css);
		return view;
	}


	function init() {
		console.log('BImageView object created');
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

	function injectHTML(objId, objType, image) {
		//inject divs into the target
		var html = "<img id='" + objId + "'"+ " class=" + "'" + objType + "' + src='" + image + "'>";
		html += "</img>";
		return html;
	}

	init();

}