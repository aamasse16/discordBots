import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Player } from "discord-player"
import { Command } from "src/Command";

export const Play: Command = {
  name: 'play',
  description: 'Plays a song',
  type: ApplicationCommandType.ChatInput,
  run: async (clinet: Client, interaction: CommandInteraction) => {
    const player = new Player(clinet)
    const channel = interaction.channelId
    if (!channel) return interaction.reply('You are not in a voice channel. Please join one and try again.')
    const query = interaction.options.getString('query', true)

    await interaction.deferReply();

    try {
      const { track } = await player.play(channel, query, {
        nodeOptions: {
          metadata: interaction
        }
      })
    }
  }
}
