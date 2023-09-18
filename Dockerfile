FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

VOLUME /node_modules

COPY package.json .

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]

CMD ["./start.sh"]
