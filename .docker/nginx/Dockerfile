FROM node:12 as build

RUN mkdir -p /app/html
WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install

COPY src /app/src
COPY webpack.config.js /app/webpack.config.js
COPY .eslintrc /app/.eslintrc

RUN yarn run encore production



FROM nginx:1.15.0-alpine as image

COPY ../../html /usr/share/nginx/html

COPY --from=build /app/html/assets /usr/share/nginx/html/assets

RUN mv /usr/share/nginx/html/index_prod.html /usr/share/nginx/html/index.html