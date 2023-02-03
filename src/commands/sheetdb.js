const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("sheetdb")
    .setDescription(`bot database`),
  async execute(interaction) {
    await interaction.reply({ content: "This is working", ephermal: true });

    axios.post("https://sheetdb.io/api/v1/ur4dnpmxetsdy", {
      data: {
        name: "name test",
        age: "age test",
        email: "email test",
      },
    });
  },
};
