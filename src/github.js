const axios = require('axios');

export async function run(command) {
  if (!command) {
    throw new Error('Command run-cypress required');
  }

  let payload = {
    event_type: '',
    client_payload: {
      command: '',
    },
  };

  const {
    REPO_OWNER: owner,
    REPO_NAME: repo,
    GITHUB_TOKEN: token,
  } = process.env;

  console.log(`Received ${command || 'No'} command`);
  switch (command) {
    case 'run-cypress':
      payload.event_type = 'run-cypress';
      payload.client_payload.command = 'cypress:run';
      break;
    default:
      throw new Error('Command not supported');
  }

  if (!owner || !repo || !token) {
    throw new Error('Owner and repo required');
  }

  const dispatchUrl = `https://api.github.com/repos/${owner}/${repo}/dispatches`;

  console.log(`Dispatching ${dispatchUrl} with paylaod`, payload);
  const res = await axios.post(dispatchUrl, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });
  return res.status;
}
