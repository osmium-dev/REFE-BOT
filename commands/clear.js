const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Suprime tout les chats recent dans ce channels.'),
    permission: 969022753535578152,
    async execute(interaction, client) {

        const userRoles = interaction.member._roles;

        const hasPermission = userRoles.findIndex((v) => v == '969022753535578152' || v=='969022489244090368') !== -1;
        if(!hasPermission) {
            interaction.reply({ content: 'Tu ne possede pas les permissions requise.', ephemeral: true });
            return;
        }

        const channel_id = interaction.channelId;

        const channel = client.channels.cache.find(channel => channel.id === channel_id)
        
        const clooned_channel = await channel.clone();
        channel.delete();
        
        interaction.reply("Channel Cleared")

    }
};