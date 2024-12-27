sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], 
function (Controller, JSONModel, MessageToast, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("mining.controller.welcome", {

        // Initialization of the controller
        onInit: function () {
            // Create a new JSON model
            // var oModel = new JSONModel();
            
            // Load the data from the "model/mining.json" file
            // oModel.loadData("model/mining.json");  // Ensure that the file path is correct

            // Set the model to the view
            // this.getView().setModel(oModel, "mining");  // Set model as "mining"
            // console.log('Hi this is a welcome page controller');
            
            // console.log(this.getView().getModel("mining").oData);  // For debugging, check the model
        },

        // Search function to filter table data based on user input
        onSearch: function (oEvent) {
            // Get the search query from the event parameters
            var searchString = oEvent.getParameter("query");

            // Use 'newValue' for liveChange event if 'query' is undefined
            if (!searchString) {
                searchString = oEvent.getParameter("newValue");
            }
        
            // Define filters for the columns you want to search (LocationId and LocationDescr)
            var filterLocationId = new Filter({
                path: "LocationId",  // Property name for LocationId
                operator: FilterOperator.Contains,  // Filter operator
                value1: searchString  // Value to search for
            });
        
            var filterLocationDescr = new Filter({
                path: "LocationDescr",  // Property name for Location Description
                operator: FilterOperator.Contains,  // Filter operator
                value1: searchString  // Value to search for
            });
        
            // Combine the filters using OR logic (either LocationId or LocationDescr matches)
            var aFilters = [filterLocationId, filterLocationDescr];
            var oFilter = new Filter({
                filters: aFilters,
                and: false  // 'false' means OR logic
            });
        
            // Get the table and its binding
            var oTable = this.byId("uiTable");  // Reference to your table
            var oBinding = oTable.getBinding("rows");  // Get the binding of the rows
            oBinding.filter(oFilter);  // Apply the filter
        },

        // Function to handle row selection in the table
        onSelect: function (oEvent) {
            // Get the selected row context
            var oSelectedRow = oEvent.getParameter("rowContext");

            // Ensure a row is selected
            if (oSelectedRow) {
                // Retrieve the data from the selected row context
                var selectedData = oSelectedRow.getObject();

                // Display the selected row data in the console for debugging
                console.log("Selected row data:", selectedData);

                // Set the selected data model to the view to display it on the UI
                var oSelectedDataModel = new JSONModel(selectedData);
                this.getView().setModel(oSelectedDataModel, "selectedData");

                // Optional: Show a MessageToast with the Location Id
                MessageToast.show("Location Id: " + selectedData.LocationId);

                // Navigate to another page (details page) and pass the selected data
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo('Routedetail', {
                    'obj': JSON.stringify(selectedData)  // Pass data as a string
                });
            }
        }
    });
});
