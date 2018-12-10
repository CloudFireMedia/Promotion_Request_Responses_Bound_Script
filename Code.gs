var documentConfig = {
  changeLog : {
    watchSheets : ['Change Log']
  },
};//leave blank (or commentout) to disable changelog

PL.updateConfig({responseForm:documentConfig});//push config options to library

//local functions passed to library functions
function onOpen()            {PL.onOpen() }
function onEdit(e)           {PL.onEdit(e)}//disable while debugging ot you'll only see this in the execution transcript
function onEdit_Triggered(e) {PL.onEdit_responseForm_Triggered(e)}

//======================================================================================================================

function onAddRow() {
  formattingFolders('1QCL3GW2vT7P9JxFmtHDecQeWcBJ427SL'); //Original
}

function moveFolder(source, target) {
  var currents = source.getParents();

  while (currents.hasNext()) {
    var folder = currents.next();

    folder.removeFolder(source);
  }

  target.addFolder(source);
}

function copyFolders(folders, target) {
  while (folders.hasNext()) {
    var folder = folders.next();

    target.addFolder(folder);
  }
}

function getMatchStringsPct(source, target) {
  var source = source.split(''),
      res = 0;

  for (var i = 0; i < target.length; i++) {
    if (target[i] == source[i]) {
      source[i] = ' ';
      res++;
    }
  }

  return ((res / source.length) * 100);
}

function formattingFolders(folderId) {
  var TZ = Session.getScriptTimeZone(),
      eventsFolder = DriveApp.getFolderById(folderId),
      graphicsFolder = DriveApp.getFolderById('1Ib_66zv1qwUFkLiaxPf9W7w9xiANbHVJ'), //Original
      tplFolder = DriveApp.getFolderById('1mmgw9NHhkcVypUpLL_ycBSKyq6hvfjLS'), //Original
      ss = SpreadsheetApp.openById('1JEqPQJSiBliliqw1y-wrrdP6ikU11DPuIF72l-rN84g'),
      sheet = ss.getSheetByName('Incoming_Data'),
      values = sheet.getRange('J3:I').getValues();

  for (var i=0; i < values.length; i++) {
    var folders = eventsFolder.getFolders(),
        date = values[i][0],
        title = values[i][1];

    while (folders.hasNext()) {
      var folder = folders.next(),
          folderName = folder.getName(),
          folderTitle = folderName.substring(15),
          comparisonPct = getMatchStringsPct(title.toLowerCase(), folderTitle.toLowerCase());

      if (comparisonPct > 25) {
        var prefix = Utilities.formatDate(date, TZ, '[ yyyy.MM.dd ] ');

        folder.setName(prefix + folderTitle);
        
        moveFolder(folder, graphicsFolder);
      }
    }
  }

  copyFolders(eventsFolder.getFolders(), tplFolder);
}