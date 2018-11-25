FROM nginx:1.15.0-alpine

COPY ./html /usr/share/nginx/html

RUN mv /usr/share/nginx/html/index_prod.html /usr/share/nginx/html/index.html

EXPOSE 80