#!/bin/bash

cd /docker/personalsite

export COMPOSE_PROJECT_NAME=personalsite

docker-compose -f docker-compose.yml -f docker-compose.prod.yml pull
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --remove-orphans
