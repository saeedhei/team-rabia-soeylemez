require('dotenv').config()

const { BOT_TOKEN } = process.env;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(BOT_TOKEN, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});

bot.onText(/^[/]start$/, async (msg) => { 
  await bot.sendMessage(msg.chat.id, `Hi.`);
 });