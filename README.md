<h1 align="center">SLACK B0T

<img height="50px"  src="https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2016-07-11/58539791104_bb5db9cc3e40aaf182ff_512.png" /></h1>

<p align="center">

<img height="50px"  src="https://a.slack-edge.com/80588/img/slack_api_logo_vogue.png" />

<img height="50px"  src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png" />

<img height="50px"  src="https://sysdig.es/wp-content/uploads/logo-amazon-ecr-885x240-1.png" />

</p>

## About this Repo:

This is an example of how to create a simiple Slack bot using Slack API, then using Github action (CI) to build and push the latest docker image to AWS ECR.

### Why is this prepo usefull:

We can using this bot to simple tigger a GitHub action workflow via Slack.

### How it works:

Works by triggering a dispatch workflow on GitHub when a certain command is triggered on Slack, It will then wait poll for until the workflow is finished and send response back to slack.

## Prerequisite

1. rename `.env.example` file to `.env`

2. Create a classic app - https://api.slack.com/apps?new_classic_app=1

3. Once app is created, Retrive the OAUTH token and add it to `.env` file

4. Create a Github token -> settings -> developer settings -> personal access tokens

5. Add your github token, username and respo name to env variable

6. Must have a repo to trigger the test on, see my [example](https://github.com/pirasanthan-jesugeevegan/amt-cypress-cucumber/blob/master/.github/workflows/run.yml) Repo must have docker image on ERC with the workflow to trigger

## Install

1. Clone the repo

2. `npm install`

## Run locally

**CLI** - Run CLI

```

node .

```

you should see status `bot started` in your terminal if succesful

**Docker** - Run on Docker

Build Image

```

make docker

```

Run Image

```

make run

```

## Run locally

Once its running, headover to to slack and add the bot in to the channel if its not added already. You should see that the bot is online, type in `!qa run-cypress` command to trigger the run.

## Technology used:

- Slack API

- Docker

- AWS

- Github Action (CI)
