const TelegramBot = require('node-telegram-bot-api');
const token = '7231037333:AAHjaVgDGhJ9nKG9_OniRpHxsH6con_71LI';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});
// test