#!/bin/bash

tar -czf deploy.tar.gz \
  deploy.sh \
  switch.sh \
  .docker \
  docker-compose.prod.yml \
  docker-compose.yml \
  docker-compose.prod-ssl.yml