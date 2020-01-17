var SCRIPT_NAME = 'Promotion_Request_Responses_Bound_Script'
var SCRIPT_VERSION = 'v1.1'

function onOpen() {
  
  SpreadsheetApp.getUi().createMenu('CloudFire')
    .addItem('Sync  to Master - single event', 'syncRowToMaster')
    .addItem('Sync  to Master - all marked rows', 'syncAllToMaster')
.addToUi();

}

// Menu Options
function syncRowToMaster()                                   {PRR.syncRowToMaster()}
function syncAllToMaster()                                   {PRR.syncAllToMaster()}
