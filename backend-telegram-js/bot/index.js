require('dotenv').config()

const { BOT_TOKEN } = process.env;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(BOT_TOKEN, {polling: true});

const StartKeyboard = [
  ['🇩🇪 German', '🇺🇸 English']
];

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
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