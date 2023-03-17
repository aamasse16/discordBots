import { Client, CommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { QueryType, Player } from "discord-player";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("plays a song")
    .addStringOption(option => option
      .setName("string")
      .setDescription("query")
      .setRequired(true))
    .addStringOption(option => option
      .setName("247")
      .setDescription("24/7")
      .addChoices(
        { name: "yes", value: "false" },
        { name: "no", value: "true" }
      )
    ),
  async execute(interaction: CommandInteraction) {
    try {
      if (!interaction.isChatInputCommand()) return;
      const stri = interaction.options.getString("247")
      const check = interaction.options.getString("string")

      const result = await interaction.client.player.search(check, {
        requestBy: interaction.user,
        searchEngine: QueryType.AUTO
      })
      const results = new EmbedBuilder()
        .setTitle('No results')
        .setColor('Blue')
        .setTimestamp()

      if (!results.hasTracks()) {
        return interaction.reply({ embeds: [results] })
      }

      await interaction.deferReply()
      await interaction.editReply({ content: `Loading a: ${result.playlist ? 'playlist' : 'track'}` })
    }
  }
}
