FROM node:16.17.0

RUN mkdir -p  /usr/src/app
WORKDIR /usr/src/app


COPY . /usr/src/app
RUN npm install
RUN npm install nodemon -g

EXPOSE 3000

CMD ["nodemon", "index.js"]
