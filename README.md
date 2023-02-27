<h1 align="center">SLACK B0T
 <img height="50px" src="https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2016-07-11/58539791104_bb5db9cc3e40aaf182ff_512.png" /></h1>

 <p align="center">
 <img height="50px" src="https://a.slack-edge.com/80588/img/slack_api_logo_vogue.png" />
  <img height="50px" src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png" />  
  <img height="50px" src="https://sysdig.es/wp-content/uploads/logo-amazon-ecr-885x240-1.png" />
  
 </p>

This is an example of how to create a simiple Slack bot with Slack API. Additonally we will be using Github action (CI) to build and push the latest docker image to AWS ECR

## Prerequisite

1. rename `.env.example` file to `.env`
2. Create a classic app - https://api.slack.com/apps?new_classic_app=1
3. Once app is created, Retrive the OAUTH token and add it to `.env` file

## Install

1.  Clone the repo
2.  `npm install`

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

## Technology used:

- Slack API
- Docker
- AWS
- Github Action (CI)
