FROM node:18.14.1-alpine3.17

RUN adduser -D tvgni
WORKDIR /home/tvgni/app

COPY package.json package-lock.json ./

RUN npm install

VOLUME /home/tvgni/app/node_modules

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]


