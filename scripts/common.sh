#!/usr/bin/env bash

ECR_PATH=325398057325.dkr.ecr.us-east-1.amazonaws.com
BOT_RUNNER_DOCKER_IMAGE=${ECR_PATH}/slack-bot
BOT_RUNNER_DOCKER_IMAGE_CACHE=${BOT_RUNNER_DOCKER_IMAGE}:latest
BOT_RUNNER_DOCKER_IMAGE_REV=${BOT_RUNNER_DOCKER_IMAGE}:${GITHUB_SHA}
