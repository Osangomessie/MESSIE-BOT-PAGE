 module.exports = {
        config: {
                        name: "bonjour",
                        version: "1.0",
                        author: "messie OSANGO",
                        countDown: 5,
                        role: 0,
                        shortDescription: "sarcasm",
                        longDescription: "sarcasm",
                        category: "reply",
        },
onStart: async function(){}, 
onChat: async function({
        event,
        message,
        getLang
}) {
        if (event.body && event.body.toLowerCase() == "bonjour") return message.reply("bonjour, je suis le bot page de messie osango");
}
};
