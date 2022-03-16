sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast", 
	"sap/ui/unified/DateRange"
		], function(Controller, History, MessageToast, DateRange){
	"use strict";
	
	return Controller.extend("fiori.demo.util.BaseController", {
		
		onInit: function(){
			
		},

		getRouter : function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		onBack: function(){
			var oHistory, sPreviousHash;
			oHistory = History.getInstance(); 
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else{
				this.getRouter().navTo("firstPage", {}, true /*no history*/ );
			}
		}
		
		
	});
	


	
});