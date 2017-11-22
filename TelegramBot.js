const TelegramBot = require('node-telegram-bot-api');
var respList = ["dale tua ideia", "🤘", "que é carai", "oi porra!", "bora um café?", "que é mizera??!"]
var botName = "@vncbot"

module.exports = function(){
    // replace the value below with the Telegram token you receive from @BotFather
    const token = '474753823:AAHwNcO0o3kLFMHDXZhf125mnnyB-PkqITE';
    
    // Create a bot that uses 'polling' to fetch new updates
    const bot = new TelegramBot(token, {polling: true});
    
    bot.on('message', (msg) => {
        console.log(msg.text)
        if (msg.from.username == 'tonysilva'){
            bot.sendMessage(msg.chat.id, "toninho arruma uma nega!")    
        }else if (msg.text.toLowerCase().includes(botName)){
            bot.sendMessage(msg.chat.id, getRandonAnswer())
        }
    });
    
    function getRandonAnswer(){
        return respList[randomInt(0, respList.length)]
    }
    
    function randomInt (low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    }
}
