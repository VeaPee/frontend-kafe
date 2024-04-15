FROM node:21.6.1-alpine

# Install Python and update npm
RUN apk add --no-cache python3 \
    && npm install -g npm@latest

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install dependencies
RUN npm install --production && mv node_modules ../
COPY . .

# Set ownership and user
RUN chown -R node /usr/src/app
USER node

CMD ["npm", "start"]
