FROM php:8.0-fpm as base

USER www-data



FROM base

RUN mkdir -p /var/www/html
COPY ./html /var/www/html