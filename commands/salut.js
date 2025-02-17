module.exports = {
        config: {
                        name: "salut",
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
        if (event.body && event.body.toLowerCase() == "salut") return message.reply("salut, plus d'informations visites le site :https://social-service-12-dun.vercel.app/ ");
}
};
