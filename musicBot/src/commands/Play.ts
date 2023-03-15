import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "src/Command";

export const Play: Command = {
  name: 'play',
  description: 'Plays a song',
  type: ApplicationCommandType.ChatInput,
  run: async (clinet: Client, interaction: CommandInteraction)
}
