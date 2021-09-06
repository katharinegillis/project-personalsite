FROM node:14-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package.json /home/node/app/package.json
COPY --chown=node:node yarn.lock /home/node/app/yarn.lock

USER node

RUN yarn install

COPY --chown=node:node public public
COPY --chown=node:node src src

CMD [ "node", "src/index.js" ]

