FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

VOLUME /node_modules

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y make python3

COPY package.json .

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]

CMD ["./start.sh"]
