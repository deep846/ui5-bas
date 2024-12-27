sap.ui.define([
    "sap/ui/core/UIComponent",
    "mining/model/models",
    "sap/ui/model/json/JSONModel",
], (UIComponent, models,JSONModel) => {
    "use strict";

    return UIComponent.extend("mining.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            var oModel = new JSONModel('./model/mining.json')
            this.setModel(oModel, "mining");
            // enable routing
            this.getRouter().initialize();
        }
    });
});