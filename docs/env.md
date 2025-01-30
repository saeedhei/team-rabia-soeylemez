

---

### **1. Install `dotenv` package**
First, install the `dotenv` package, which allows Node.js to read environment variables from a `.env` file.

```sh
npm install dotenv
```

---

### **2. Create a `.env` file**
In your project's root directory, create a file named `.env` and add your **Telegram bot token**:

```
BOT_TOKEN=your_telegram_bot_token
CHAT_ID=your_chat_id
```

> 🚨 **Important:** Never commit your `.env` file to Git. Add it to your `.gitignore`:
```
.env
```

---

### **3. Load `.env` variables in your Node.js code**
In your JavaScript file (e.g., `bot.js`), add the following code at the **top** to load environment variables:

```javascript
require('dotenv').config(); // Load variables from .env

const { BOT_TOKEN, CHAT_ID } = process.env;

console.log("Your bot token:", BOT_TOKEN); // Test if it loads correctly
console.log("Your chat ID:", CHAT_ID);
```

---

### **4. Use the token in a Telegram bot**
Here’s an example of a simple bot using `node-telegram-bot-api`:

```javascript
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}!`);
});
```

---

### **5. Running Your Bot**
Run your bot normally with:
```sh
node bot.js
```

---

