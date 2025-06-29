/**
 * 📌 Get parameter value from 'Settings' sheet
 */
function getSetting(param) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Settings');
  if (!sheet) throw new Error("Settings sheet not found.");

  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === param) {
      return data[i][1];
    }
  }
  return ""; // Default if not found
}

/**
 * 📌 Gmail Auto-Responder
 * Dynamically filters by Label, From, and Subject from Settings
 */
function autoResponder() {
  const labelName = getSetting("LabelName").trim();
  const fromAddress = getSetting("FromAddress").trim().toLowerCase();
  const subjectKeyword = getSetting("SubjectContains").trim().toLowerCase();
  const maxThreads = parseInt(getSetting("MaxThreads") || "10");

  Logger.log(`Settings: Label=${labelName}, From=${fromAddress}, Subject=${subjectKeyword}, Max=${maxThreads}`);

  // Get threads by Label if specified, else all inbox
  let threads = [];
  if (labelName) {
    const label = GmailApp.getUserLabelByName(labelName);
    if (!label) {
      Logger.log(`Label '${labelName}' does not exist.`);
      return;
    }
    threads = label.getThreads(0, maxThreads * 2); // Get more to filter later
  } else {
    threads = GmailApp.search('is:unread in:inbox');
  }

  Logger.log(`Initial fetched threads: ${threads.length}`);

  let processed = 0;
  for (const thread of threads) {
    if (processed >= maxThreads) break;
    if (!thread.isUnread()) continue;

    const message = thread.getMessages()[0];

    // Check FromAddress filter
    if (fromAddress && !message.getFrom().toLowerCase().includes(fromAddress)) {
      continue;
    }

    // Check Subject filter
    if (subjectKeyword && !message.getSubject().toLowerCase().includes(subjectKeyword)) {
      continue;
    }

    // Compose reply
    const recipient = message.getFrom();
    const subject = "Re: " + message.getSubject();
    const body = `
Hello,

Thank you for your email. This is an automated response to let you know we've received your message.

We'll get back to you as soon as possible.

Best regards,
Your Name
    `;

    // Send email
    GmailApp.sendEmail(recipient, subject, body);
    thread.markRead();

    if (labelName) {
      thread.removeLabel(GmailApp.getUserLabelByName(labelName));
    }

    processed++;
    Logger.log(`Auto-replied to: ${recipient}`);
  }

  Logger.log(`Processed ${processed} threads.`);
}

