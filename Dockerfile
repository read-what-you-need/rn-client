FROM node:alpine

RUN apk add g++ make py3-pip

WORKDIR "/usr/app"

COPY package.json .
RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

CMD ["npm", "run", "start"]