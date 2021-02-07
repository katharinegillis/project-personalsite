#!/bin/bash

# Recreate the .env file
echo ${SITE_URL}
echo ${DEPLOY_PATH}
exit 1
rm .env
touch .env
echo SITE_URL=${SITE_URL} >> .env

# Determine which colour is staging
if grep -q 'proxy_pass http://green-backend;' .docker/ingress/ingress-staging.conf
then
    STAGING="green"
else
    STAGING="blue"
fi

# Update staging
if [ $STAGING = "green" ];
then
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml pull \
    green-backend
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml up -d \
    green-backend
else
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml pull \
    blue-backend
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml up -d \
    blue-backend
fi