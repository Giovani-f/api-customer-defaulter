FROM node:latest

WORKDIR /api
COPY package.json package-lock.json ./

RUN npm i
COPY . .

CMD npm run seed-db && npm start
