FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./src ./src

CMD ["npm", "start"]
