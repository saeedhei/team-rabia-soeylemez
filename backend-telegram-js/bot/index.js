require('dotenv').config()

const { BOT_TOKEN } = process.env;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(BOT_TOKEN, {polling: true});
const userLanguages = {};
const StartKeyboard = [
  ['🇩🇪 German', '🇺🇸 English']
];
const messages = {
  en: {
    welcome: "Welcome to our Telegram bot! ❤️❤️❤️\nPlease select a menu:",
    selected_language: "You have selected English 🇺🇸",
    response: "Hello! How can I help you?",
  },
  de: {
    welcome: "Willkommen bei unserem Telegram-Bot! ❤️❤️❤️\nBitte wähle ein Menü:",
    selected_language: "Du hast Deutsch 🇩🇪 ausgewählt",
    response: "Hallo! Wie kann ich dir helfen?",
  },
};

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // bot.sendMessage(chatId, 'Received your message');
});

bot.onText(/^[/]start$/, async (msg) => { 
  const opts = {
    reply_markup: JSON.stringify({
      keyboard: StartKeyboard,
      resize_keyboard: true,
      one_time_keyboard: true,
    }),
  };
  await bot.sendMessage(msg.chat.id, `Hi ${msg.from.first_name} 😊\n\nWelcome to our Telegram bot! ❤️❤️❤️\nPlease select a menu:`, opts);
 });

 bot.onText('🇩🇪 German', async (msg)=>{
  userLanguages[chatId] = 'de'; // Speichere Sprache als Deutsch
  await bot.sendMessage(msg.chat.id, messages.userLanguages[chatId].selected_languages);
 })
 bot.onText('🇺🇸 English', async (msg)=>{
  userLanguages[chatId] = 'en'; // Speichere Sprache als Englisch
  await bot.sendMessage(msg.chat.id, `Hello, what do you want to ask me?`);
 })

