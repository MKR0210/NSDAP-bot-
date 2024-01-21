const { SlashCommandBuilder } = require('@discordjs/builders');
const { Embedbuilder, PermissionsBitField } = require('discord.js')

module.exports = {
 data: new SlashCommandBuilder()
.setName('kick')
.setDescription('This command kicks the adressed person out of the discord server')
.addUserOption(option => option.setName('target').setDescription('The user you would like to kick').setRequire(true))
.addStringOption(option => option.setName('reason').setDescription('the reason for kicking this user')),
async execute (interaction, client) {
    
    const kickUser = interaction.option.getUser('target');
    const kickMember = await interaction.guild.members.fetch(kickUser.id);
    const channel = interaction.channel;
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await interaction.reply({ content: " You must have the Kick Members permission to use this command "})
    if (!kickMember) return await interaction.reply({ content: 'The user mentioned is no longer within the server', ephemeral: true});
    if (!kickMember.kickable) return await interaction.reply ({content: "I cannot kick this user because they have roles above me or you", ephemeral: true});

    let reason = interaction.options.getString('reason');
    if (!reason) reason = "No reason given.";

    const dmEmbed = new  Embedbuilder()
    .setColor("Blue")
    .setDescription(':white_check_mark: You have been kicked from **${interaction.guild.name} ${reason}')

    const embed = new Embedbuilder()
    .setColor("Blue")
    .setDescription(':white_check_mark:  ${kickUser.tag} has been **kicked**  ${reason}')

    awaitkickMember.send({ embeds: [dmEmbed] }).catch(err => {
        return;
    });

    await kickMember.kick({ reason: reason}).catch(err => {
        interaction.reply({ content: "There was a error", ephemeral: true});
    });

    await interaction.reply({ embeds: [embed] });
}
}
