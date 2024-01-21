const { SlashCommandBuilder } = require('@discordjs/builders');
const { Embedbuilder, PermissionsBitField } = require('discord.js')

module.exports = {
 data: new SlashCommandBuilder()
.setName('ban')
.setDescription('This command bans the adressed person out of your discord server')
.addUserOption(option => option.setName('target').setDescription('The user you would like to ban').setRequire(true))
.addStringOption(option => option.setName('reason').setDescription('the reason for banning this user')),
async execute (interaction, client) {
    
const banUser = interaction.option.getUser('target');
const banMember = await interaction.guild.members.fetch(banUserUser.id);
const channel = interaction.channel;
if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await interaction.reply({ content: " You must have the Ban Members permission to use this command "})
if (!banMemberMember) return await interaction.reply({ content: 'The user mentioned is no longer within the server', ephemeral: true});
if (!banMemberMember.bannable) return await interaction.reply ({content: "I cannot Ban this user because they have roles above me or you", ephemeral: true});
}
}
let reason = interaction.options.getString('reason');
    if (!reason) reason = "No reason given.";

    const dmEmbed = new  Embedbuilder()
    .setColor("Blue")
    .setDescription(':white_check_mark: You have been Banned from **${interaction.guild.name} ${reason}')

    const embed = new Embedbuilder()
    .setColor("Blue")
    .setDescription(':white_check_mark:  ${banUser.tag} has been **banned**  ${reason}')

    awaitbanMember.send({ embeds: [dmEmbed] }).catch(err => {
        return;
    });

    await banMemberMember.ban({ reason: reason}).catch(err => {
        interaction.reply({ content: "There was a error", ephemeral: true});
    });

    await interaction.reply({ embeds: [embed] });

