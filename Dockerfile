Hi FROM node:14-alpine

WORKDIR /app Coconnex.com

COPY . /app

RUN npm install asd

EXPOSE 3000

ENV NAME project5

CMD ["npm", "start"]

Docker Nopde Js Program
