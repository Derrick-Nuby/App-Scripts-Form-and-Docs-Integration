function onFormSubmit(e) {
  // Get the active spreadsheet and the sheet with form responses
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const formResponsesSheet = ss.getSheetByName('Form Responses 1'); // Adjust this name if needed
  
  // Get the last row of data from the form responses sheet
  const lastRow = formResponsesSheet.getLastRow();
  const formResponse = formResponsesSheet.getRange(lastRow, 1, 1, formResponsesSheet.getLastColumn()).getValues()[0];
  
  // Extract email from the form response (adjust the index if needed)
  const email = formResponse[1]; // Assuming email is in the second column
  
  // Try to get the sheet for the email, or create a new one if it doesn't exist
  let sheet = ss.getSheetByName(email);
  
  if (!sheet) {
    // Create a new sheet for the email
    sheet = ss.insertSheet(email);
    
    // Add headers to the new sheet
    const headers = ['Week', 'Date', 'TimeStamp','Email Address', 'Name', 'Task/Project', 'Status', 'Progress', 'Challenges/Roadblocks', 'Next Steps', 'Comments', 'Task/Project', 'Priority', 'Due Date', 'Status', 'Notes', 'Comments'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  
  // Prepare the data to be inserted
  const timestamp = new Date(formResponse[0]); // Assuming timestamp is in the first column
  const weekNumber = getWeekNumber(timestamp);
  const formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "yyyy-MM-dd");
  
  const rowData = [weekNumber, formattedDate].concat(formResponse);
  
  // Insert the new row after the header (row 1)
  sheet.insertRowAfter(1);
  sheet.getRange(2, 1, 1, rowData.length).setValues([rowData]);
}

// Helper function to get the week number
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
