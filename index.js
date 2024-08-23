function autoFillGoogleDocFromForm(e) {
    //e.values is an array of form values
    var timestamp = e.values[0];
    var question1 = e.values[1];
    var question2 = e.values[2];
    var question3 = e.values[3];
    var question4 = e.values[4];
    var names = e.values[5];
    var question5 = e.values[6];
    var email = e.values[7];

    //file is the template file, and you get it by ID
    var file = DriveApp.getFileById('folder');

    //We can make a copy of the template, name it, and optionally tell it what folder to live in
    //file.makeCopy will return a Google Drive file object
    var folder = DriveApp.getFolderById('folder');
    var copy = file.makeCopy(names + ',' + email, folder);

    //Once we've got the new file created, we need to open it as a document by using its ID
    var doc = DocumentApp.openById(copy.getId());

    //Since everything we need to change is in the body, we need to get that
    var body = doc.getBody();

    //Then we call all of our replaceText methods
    body.replaceText('{{date}}', timestamp);
    body.replaceText('{{names}}', names);
    body.replaceText('{{email}}', email);
    body.replaceText('{{question1}}', question1);
    body.replaceText('{{question2}}', question2);
    body.replaceText('{{question3}}', question3);
    body.replaceText('{{question4}}', question4);
    body.replaceText('{{question5}}', question4);

    //Lastly we save and close the document to persist our changes
    doc.saveAndClose();
}
