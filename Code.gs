var SCRIPT_NAME = 'Promotion_Request_Responses_Bound_Script'
var SCRIPT_VERSION = 'v1.2'

function onOpen() {
  
  SpreadsheetApp
    .getUi()
    .createMenu('CloudFire')
    .addItem('Sync  to Master - single event', 'syncRowToMaster')
    .addItem('Sync  to Master - all marked rows', 'syncAllToMaster')  
    .addSeparator()
    .addItem('Format Incoming_Data Sheet', 'formatIncomingDataSheet') 
    .addToUi();
}

// Menu Options
function syncRowToMaster()         {PRR.syncRowToMaster()}
function syncAllToMaster()         {PRR.syncAllToMaster()}
function formatIncomingDataSheet() {PRR.formatIncomingDataSheet()}
