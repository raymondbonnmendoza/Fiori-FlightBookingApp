sap.ui.define([
	
	"fiori/demo/util/BaseController",
	"sap/m/MessageToast",
	"sap/ui/unified/DateRange"
		], function(BaseController, MessageToast, DateRange){
	
	"use strict";
	
	
	var CalendarSingleDaySelectionController = BaseController.extend("fiori.demo.controller.firstPage", {
		oFormatYyyymmdd: null,

		onInit: function() {
			this.oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({pattern: "yyyy-MM-dd", calendarType: sap.ui.core.CalendarType.Gregorian});
			
			var sUrl = jQuery.sap.getModulePath("fiori.demo") + "/model/mockdata.json";
			var oJsonModel = new sap.ui.model.json.JSONModel();
			oJsonModel.loadData(sUrl, {}, false, "GET", false, true);
			this.getView().setModel(oJsonModel, "local");
			
			console.log(this.getView().getModel("local").getProperty("/Flights"));
			
		},
		
		onBeforeRendering: function(){
			this.getView().getModel().read("/Flights", {
				success: jQuery.proxy(function(oEvent){
					console.log(oEvent);
				}),
				error: jQuery.proxy(function(oEvent){
					
				})
			});
		},
		
		
		onItemPress: function(oEvent){
			this.getRouter().navTo("secondPage", {carrid: oEvent.getSource().getTitle()});
		},
		
		onSelectDeparture: function(oEvent){
			var navCon = this.getView().byId("navCon");
			var target = oEvent.getSource().data("target");
			if (target) {
				//var animation = this.getView().byId("animationSelect").getSelectedKey();
				navCon.to(this.getView().byId(target), "slide");
			} else {
				navCon.back();
			}
		},

		handleCalendarSelect: function(oEvent) {
			var oCalendar = oEvent.getSource();
			this._updateText(oCalendar);
		},

		_updateText: function(oCalendar) {
			var oText = this.byId("selectedDate");
			var aSelectedDates = oCalendar.getSelectedDates();
			var oDate;
			oDate = aSelectedDates[0].getStartDate();
			oText.setText(this.oFormatYyyymmdd.format(oDate));
		},

		handleSelectToday: function(oEvent) {
			var oCalendar = this.byId("calendar1");
			oCalendar.removeAllSelectedDates();
			oCalendar.addSelectedDate(new DateRange({startDate: new Date()}));
			this._updateText(oCalendar);
		},
		
		
		handleCalendarSelect1: function(oEvent) {
			var oCalendar = oEvent.getSource();
			this._updateText1(oCalendar);
		},

		_updateText1: function(oCalendar) {
			var oText = this.byId("selectedDate1");
			var aSelectedDates = oCalendar.getSelectedDates();
			var oDate;
			oDate = aSelectedDates[0].getStartDate();
			oText.setText(this.oFormatYyyymmdd.format(oDate));
		},
		
		handleSelectToday1: function(oEvent) {
			var oCalendar1 = this.byId("calendar2");
			oCalendar1.removeAllSelectedDates();
			oCalendar1.addSelectedDate(new DateRange({startDate: new Date()}));
			this._updateText1(oCalendar1);
		},
		
		onRadio1Press: function(oEvent){
			var cSelect = oEvent.getSource().getSelected();
			this.getView().byId("ReturnID").setVisible(false);
		},

		onRadio2Press: function(oEvent){
			var cSelect = oEvent.getSource().getSelected();
			this.getView().byId("ReturnID").setVisible(true);	
		}
	});

	return CalendarSingleDaySelectionController;
	
	
	
});