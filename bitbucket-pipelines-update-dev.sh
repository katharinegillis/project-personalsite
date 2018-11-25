#!/bin/bash

cd /docker/personalsite

export COMPOSE_PROJECT_NAME=personalsite-dev

docker-compose -f docker-compose.yml -f docker-compose.dev.yml pull
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --remove-orphans
