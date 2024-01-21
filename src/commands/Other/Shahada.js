const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("shahada")
    .setDescription("Mashallah the shahada my brothers"), 
    async execute(interaction, client) {
        const Embed = new EmbedBuilder()
        .setTitle("Shahada")
        .setColor("Green")
        .setImage("https://i.pinimg.com/736x/1c/80/be/1c80be586c7f3d349c501fd17844a6e6.jpg")

        interaction.reply({ embeds: [Embed] })
    }}