#!/usr/bin/env bash
set -ex

source scripts/common.sh

# Build image with current revision, caching from latest
docker pull -q ${BOT_RUNNER_DOCKER_IMAGE_CACHE}
docker build \
  --cache-from ${BOT_RUNNER_DOCKER_IMAGE_CACHE} \
  -t ${BOT_RUNNER_DOCKER_IMAGE_REV} \
  .

docker push -q ${BOT_RUNNER_DOCKER_IMAGE_REV}

if [ "$GITHUB_BASE_REF" == "master" ]
then
    docker tag ${BOT_RUNNER_DOCKER_IMAGE_REV} ${BOT_RUNNER_DOCKER_IMAGE_CACHE}
    docker push -q ${BOT_RUNNER_DOCKER_IMAGE_CACHE}
fi
