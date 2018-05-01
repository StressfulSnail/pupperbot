const { Client } = require('discord.js');
const GiphyClient = require('giphy-js-sdk-core');
const discordClient = new Client();
const giphyClient = new GiphyClient(process.env.GIPHY_KEY);

function getPupperGif() {
  return giphyClient.random('gifs', { tag: 'puppy' })
    .then(response => response.data.url);
}

discordClient.on('ready', () => {
  console.log('Pupper Bot - ACTIVATED');
});

discordClient.on('message', message => {
  if (message.content === '!pupper') {
    getPupperGif()
      .then(url => message.reply('here is your pupper! ' + url))
  }
});

discordClient.login(process.env.DISCORD_KEY);
