sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("smartcontrol.controller.form", {
        onInit() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this._onMatched,this);
        },
        _onMatched: function(oEvent){
            var obj = oEvent.getParameter("arguments").obj;
            // console.log(obj);
            var entity = '/Products('+obj+')';
            console.log(entity);
            
            this.getView().bindElement('/Products('+obj+')');
        },
        onNavButtonPress:function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo('Routeproduct');
        }
    });
  });