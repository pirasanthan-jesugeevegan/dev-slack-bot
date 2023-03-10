import { RTMClient } from '@slack/rtm-api';
import { SLACK_OAUTH_TOKEN, BOT_SPAM_CHANNEL } from './constants';
import { WebClient } from '@slack/web-api';
const packageJson = require('../package.json');
import { run } from './github';

const rtm = new RTMClient(SLACK_OAUTH_TOKEN);
const web = new WebClient(SLACK_OAUTH_TOKEN);

rtm.start().catch(console.error);

rtm.on('ready', async () => {
  console.log('bot started');
  sendMessage(
    BOT_SPAM_CHANNEL,
    `Bot version ${packageJson.version} is online.`
  );
});

rtm.on('slack_event', async (eventType, event) => {
  if (event && event.type === 'message') {
    if (event.text.includes('!qa')) {
      if (!event.text.split('!qa ', 2)[1]) {
        sendMessage(
          event.channel,
          `<@${event.user}> Command ${event.text} not valid`
        );
      }

      run(event.text.split('!qa ', 2)[1])
        .then(() =>
          sendMessage(
            event.channel,
            `<@${event.user}> Completed running command`
          )
        )
        .catch((e) => {
          sendMessage(event.channel, `<@${event.user}> Error - ${e.message}`);
        });
    }
  }
});

async function sendMessage(channel, message) {
  await web.chat.postMessage({
    channel: channel,
    text: message,
  });
}
