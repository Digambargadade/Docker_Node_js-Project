FROM node:14-alpine

WORK DIR /app

COPY . /app

RUN npm install asd

EXPOSE 3000

ENV NAME project5

CMD ["npm", "start"]

Docker Nopde Js Program
