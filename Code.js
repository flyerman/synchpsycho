function synchPsychos() {

    // Retreive the names
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var names = [];
    for (var i = 0; i < data.length; i++) {
        names.push(data[i][0]);
    } 

    // Set the names in the form
    var form = FormApp.openById('1q0Cm5tntXxignq47RlgN2FKZ_uTRNLCQu4O8DQbAn14');
    var formItems = form.getItems();
    for (var i = 0, j = 0; i < formItems.length; i++) {
        var formItem = formItems[i];
        if (formItem.getType() == FormApp.ItemType.LIST && formItem.getTitle() == 'Psycho') {
            var listItem = formItem.asListItem();
            listItem.setChoiceValues(names);
        }
    }
}
