# 📧 Gmail Auto-Responder (Google Apps Script)

A simple Google Apps Script that automatically replies to unread Gmail threads with a predefined template. The label to search and other settings are configurable in a Google Sheet.

---

## 🚀 Features
✅ Reads Gmail threads with a configurable label  
✅ Sends an automatic reply with a customizable message  
✅ Marks threads as read  
✅ Removes the label after processing  
✅ Settings stored in Google Sheets

---

## ⚙️ Setup Instructions

1️⃣ Create a Google Sheet named anything you want. Add a tab called **Settings** with this structure:

| Parameter   | Value         |
|-------------|---------------|
| LabelName   | AutoRespond   |
| MaxThreads  | 10            |

2️⃣ In Gmail, create a label named `AutoRespond` (or any value you set in the sheet). Add it to any email you want the script to auto-reply to.

3️⃣ In the Apps Script Editor:
- Copy the code from `Code.gs`.
- Link it to the Google Sheet with the **Settings** tab.

4️⃣ Run the `autoResponder` function manually once to authorize.

5️⃣ Optional: Set a time-based trigger to run automatically (e.g., every 15 minutes).

---

## 💻 Code
See [Code.gs](Code.gs) for the full script.

---

## 🪪 License
MIT
