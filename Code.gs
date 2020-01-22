var SCRIPT_NAME = 'Promotion_Request_Responses_Bound_Script'
var SCRIPT_VERSION = 'v1.0.dev_cdb'

function onOpen() {
  
  SpreadsheetApp.getUi().createMenu('CloudFire')
    .addItem('Sync  to Master - single event', 'syncRowToMaster')
   // .addItem('Sync  to Master - all marked rows', 'syncAllToMaster')
    .addSeparator()
    .addItem('Format Incoming_Data Sheet', 'formatIncomingDataSheet')
//      
//      .addItem("Update Events Promotion Calendar for Matching Events - TEST", 'updateEventsPromotionCalendarMatchingEvents_TEST')
//      .addItem("Update Events Promotion Calendar for Matching Events", 'updateEventsPromotionCalendarMatchingEvents')
//      .addItem("Matching Events Instructions", 'showInstructions_MatchEvent')
//      .addSeparator()
//      
//      .addSubMenu(
//        SpreadsheetApp.getUi().createMenu('Tools')
//        .addItem('Enable Automation', 'setupAutomation')//note: do NOT run this from the library, use a proxy function
//        .addItem('Disable Automation', 'disableAutomation')//note: do NOT run this from the library, use a proxy function
//      )
//      
//    //dev options - remove on golive
//      .addSeparator()
//      .addItem('Refresh Custom Menu','makeMenu_promo')
  
  .addToUi();
  
}

// Menu Options
function syncRowToMaster()                                   {PRR.syncRowToMaster()}

//function syncAllToMaster()                                   {PRR.syncAllToMaster()}
//function updateEventsPromotionCalendarMatchingEvents_TEST()  {PRR.updateEventsPromotionCalendarMatchingEvents_TEST()}
//function updateEventsPromotionCalendarMatchingEvents()       {PRR.updateEventsPromotionCalendarMatchingEvents()}
//function showInstructions_MatchEvent(arg1)                   {PRR.showInstructions_MatchEvent(arg1)}
//function setupAutomation()                                   {PRR.setupAutomation()}
//function disableAutomation()                                 {PRR.disableAutomation()}
