FROM node:18-alpine

WORKDIR /app

VOLUME /node_modules

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
