FROM nginx:mainline-alpine as base

COPY .docker/nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www/html

RUN chown -R nginx:nginx /var/www/html && chmod -R 755 /var/www/html && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid

EXPOSE 8080



FROM base

COPY ./.docker/nginx/site.conf /etc/nginx/conf.d/default.conf

RUN chmod 777 /etc/nginx/conf.d/default.conf && mkdir -p /var/www/html && chown -R nginx:nginx /var/www/html

COPY ./.docker/nginx/entrypoint.sh /docker-entrypoint.d/entrypoint.sh

RUN chmod +x /docker-entrypoint.d/entrypoint.sh && chown -R nginx:nginx /docker-entrypoint.d/entrypoint.sh



USER nginx

COPY ./html /var/www/html