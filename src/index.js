const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token)
})();

client.once("ready", (client) => {
    console.log(`${client.user.displayAvatarURL()}`)
});

client.on("messageCreate", async (message) => {
    if(message.author.bot) return

    if(message.content.toLowerCase() === "milan"){
        try {
            await message.member.timeout(5000)
        return message.reply({content:'Zo heet hij niet meer hij heet nu Mohammed Wahid want hij is bekeerd! alhamdoulillah.'})
        } catch (error) {
            
        }
        
    }

})
