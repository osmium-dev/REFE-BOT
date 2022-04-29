

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('pour le dev'),
    async execute(interaction, client) {
        const channel = client.channels.cache.find(channel => channel.name === "bot-testing")
        const embed = {
            "title": `Jouer de la musique! 🎶`,
            "description": `Si vous souhaitez jouer de la musique,\n1. entrer dans un chat vocale;\n2. enter \`.play[lien]\` pour commencer la musique.\n\nPour arreter, enter \`.stop\``,
            "color": 0x00FFFF,
            "thumbnail": {
                "url": `https://i.ibb.co/nznpD5Q/1062-disco-ball-lineal-1.gif`,
            }
        }
        channel.send({embeds: [embed]});
    }
};