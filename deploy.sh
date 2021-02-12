#!/bin/bash

# Recreate the .env file
rm .env
touch .env
{
  echo SITE_URL="${SITE_URL}"
  echo SMTP_FROM_EMAIL="${SMTP_FROM_EMAIL}"
  echo SMTP_HOST="${SMTP_HOST}"
  echo SMTP_USER="${SMTP_USER}"
  echo SMTP_PASSWORD="${SMTP_PASSWORD}"
  echo CONTACT_EMAIL="${CONTACT_EMAIL}"
} >> .env

# Determine which colour is staging
if grep -q 'proxy_pass http://green-backend:8080;' .docker/ingress/ingress-staging.conf
then
    STAGING="green"
else
    STAGING="blue"
fi

# Update staging
if [ $STAGING = "green" ];
then
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml pull \
    green-backend \
    green-phpfpm
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml up -d \
    green-backend \
    green-phpfpm
else
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml pull \
    blue-backend \
    blue-phpfpm
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml up -d \
    blue-backend \
    blue-phpfpm
fi