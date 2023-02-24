import { RTMClient } from '@slack/rtm-api';
import { SLACK_OAUTH_TOKEN } from './constants';
import { WebClient } from '@slack/web-api';

const rtm = new RTMClient(SLACK_OAUTH_TOKEN);
const web = new WebClient(SLACK_OAUTH_TOKEN);
rtm.start().catch(console.error);
rtm.on('ready', async () => {
  console.log('bot started');
  sendMessage('#general', 'Bot online');
});
async function sendMessage(channel, text) {
  await web.chat.postMessage({
    channel,
    text,
  });
}
