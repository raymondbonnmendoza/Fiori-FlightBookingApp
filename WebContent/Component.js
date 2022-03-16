sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";
	
	return UIComponent.extend("fiori.demo.Component", {
		metadata : {
			manifest: "json"
		},
		
		init : function() {
			//call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
			//additional initialization can be done here
			this.getRouter().initialize();
		}
	});
});