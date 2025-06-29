# 📧 Gmail Auto-Responder (Google Apps Script)

This Google Apps Script automatically replies to unread Gmail threads using flexible, configurable filters you define in a Google Sheet.  

It supports dynamic criteria like label, sender address, subject keywords, and maximum thread limits—all controlled via a Settings sheet without touching the code.

---

## 🚀 Features
✅ Automatically replies to unread Gmail threads  
✅ Filters by label, sender, and subject dynamically  
✅ Reads configuration from Google Sheets for easy updates  
✅ Marks threads as read after replying  
✅ Removes label after processing (if used)

---

## ⚙️ How It Works
- You specify filter criteria in a **Settings** sheet:
  - Label to search
  - Sender address
  - Subject keywords
  - Max threads to process
- The script fetches Gmail threads matching these criteria
- Sends a pre-defined auto-reply
- Marks threads as read and removes the label (if applicable)

---

## 🗂️ 📌 Example Google Sheet

Create a **Settings** tab with this structure:

| Parameter       | Value                    |
|------------------|-------------------------|
| LabelName        | AutoRespond             |
| FromAddress      | sender@example.com      |
| SubjectContains  | Invoice                 |
| MaxThreads       | 10                      |

✅ **Flexible:**  
- Leave any field blank to skip that filter.  
- Use any combination of filters.

---

## 🛠️ Setup Instructions

1️⃣ Create a Google Sheet and add a tab called **Settings**.  
2️⃣ Fill in the table above with your desired values.  
3️⃣ In Google Apps Script Editor:  
   - Link the script to this Google Sheet.  
   - Paste the code from `Code.gs`.  
4️⃣ Run the `autoResponder` function **manually once** to authorize.  
5️⃣ *(Optional)* Set up a time-based trigger to run automatically (e.g., every 15 minutes).

---

## 💌 Example Use Cases
✅ Auto-reply to customer service emails with a specific label  
✅ Auto-reply only to emails from a specific sender  
✅ Auto-reply to emails with specific subject keywords  
✅ Combine filters for precise targeting

---

## 💻 Code
See [Code.gs](Code.gs) for the full script.  

---

## ⚡ Advanced Ideas
- Customize the email body in the script  
- Use additional Settings fields for the reply message  
- Log processed emails in another sheet  

---

## 🪪 License
MIT License

---

## ❤️ Author
[Your Name or GitHub Profile Link]

