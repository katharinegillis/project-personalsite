#!/bin/bash

# Determine which colour is live
if grep -q 'proxy_pass http://green-backend:8080;' .docker/ingress/conf.d/default.conf
then
    CURRENT_BACKEND="green-backend"
    NEW_BACKEND="blue-backend"
else
    CURRENT_BACKEND="blue-backend"
    NEW_BACKEND="green-backend"
fi

# Switch which environment is live, and which is staging
echo "Change ingress configs"
cp .docker/ingress/conf.d/default.conf .docker/ingress/default.conf.back
sed -i "s|proxy_pass http://.*;|proxy_pass http://$NEW_BACKEND:8080;|g" .docker/ingress/conf.d/default.conf

cp .docker/ingress/conf.d/default-staging.conf .docker/ingress/default-staging.conf.back
sed -i "s|proxy_pass http://.*;|proxy_pass http://$CURRENT_BACKEND:8080;|g" .docker/ingress/conf.d/default-staging.conf

echo "Check ingress configs are correct"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml exec -T ingress nginx -g 'daemon off; master_process on;' -t
rv=$?
if [ $rv -eq 0 ]; then
    echo "New ingress nginx config is valid"
else
    echo "New ingress nginx config is not valid"
    echo "Aborting..."
    cp .docker/ingress/default.conf.back .docker/ingress/conf.d/default.conf
    cp .docker/ingress/default-staging.conf.back .docker/ingress/conf.d/default-staging.conf
    exit 1
fi

echo "Reload ingress configs"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.prod-ssl.yml exec -T ingress nginx -g 'daemon off; master_process on;' -s reload
rv=$?
if [ $rv -eq 0 ]; then
    echo "Ingress reloaded"
else
    echo "Ingress reloading is failed"
    echo "Aborting..."
    cp .docker/ingress/default.conf.back .docker/ingress/conf.d/default.conf
    cp .docker/ingress/default-staging.conf.back .docker/ingress/conf.d/default-staging.conf
    exit 1
fi