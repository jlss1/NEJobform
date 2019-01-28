$(function() {

    var jobtypes = [
        { Type: "", Id: 0 },
        { Type: "Window install", Id: 1 },
        { Type: "Slider door install", Id: 2 }
       
    ];

    

    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 20,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete job?",
        controller: {
            loadData: function(filter) {
                return $.ajax({
                    type: "GET",
                    url: "/clients",
                    data: filter
                });
            },
            insertItem: function(item) {
                return $.ajax({
                    type: "POST",
                    url: "/clients",
                    data: item
                });
            },
            updateItem: function(item) {
                return $.ajax({
                    type: "PUT",
                    url: "/clients",
                    data: item
                });
            },
            deleteItem: function(item) {
                return $.ajax({
                    type: "DELETE",
                    url: "/clients",
                    data: item
                });
            }
        },
        fields: [
            { name: "Client", type: "text", width: 150,  },
            { name: "ClientPhoneNumber", type: "number", width: 100, title: "Client Phone"  },
            { name: "jobSite", type: "text", width: 200, title: "Job site" },
            { name: "JobType", type: "select", items: jobtypes, valueField: "Id", textField: "Type", title: "Job type" },
            { name: "AtSite", type: "checkbox", title: "At Site?", sorting: false },
            { type: "control" }
        ]
    });
    
});


