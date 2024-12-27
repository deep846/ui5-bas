sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("smartcontrol.controller.product", {
        onInit() {
        },
        onselect : function(oEvent){
            var oSelectedItem = oEvent.getParameter("listItem");
            var oContext = oSelectedItem.getBindingContext();
            var oSelectedObject = oContext.getObject();
            // console.log(oSelectedObject.ProductID);
            

            // oSelectedObject

            var oRouter = this.getOwnerComponent().getRouter()

            oRouter.navTo("Routeform",{
                "obj":oSelectedObject.ProductID
            })
            
            
        }
    });
});