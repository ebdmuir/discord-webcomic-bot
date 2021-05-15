const xkcd = require('xkcd');
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.includes('xkcd')) {
    xkcd(function (data) {
			console.log(data);
			const embed = new Discord.MessageEmbed()
						.setTitle(data.title)
						.setImage(data.img)
						.setDescription(data.alt)
					// Send the embed to the same channel as the message
			msg.channel.send(embed);
		});
  }
});


client.login(process.env.DISCORD_TOKEN);