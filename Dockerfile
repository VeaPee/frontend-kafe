FROM node:21.6.1-alpine

# Install Python and update npm
RUN apk add --no-cache python3 && \
    npm install -g npm@latest

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install --production

COPY . .

# Set ownership and user
RUN chown -R node /usr/src/app
USER node

# Run tests
RUN npm run test

CMD ["npm", "start"]
