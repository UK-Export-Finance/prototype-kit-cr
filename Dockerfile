FROM node:18-alpine
# FROM node:18-alpine3.17

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci
RUN npm install

# Copy the application source code
COPY . .

# Start the application
 CMD ["npm", "run", "start"]
