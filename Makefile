include .env

docker:
	docker build -t slack-bot:v0.1.0 -f Dockerfile .
run:	
	docker run -d -p 3000:3000 -e SLACK_OAUTH_TOKEN=${SLACK_OAUTH_TOKEN} slack-bot:v0.1.0 