#!/bin/bash

# Recreate the .env file
envsubst < .env.dist > .env

PARENT_PWD=${PWD%/*}

echo "COMPOSE_PROJECT_NAME=${PARENT_PWD##*/}-staging" >> .env

# Update instance
docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.ssl.yml pull
docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.ssl.yml up -d --remove-orphans

# Clean up old networks and images
docker network prune -f
docker image prune -f