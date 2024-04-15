FROM node:21.6.1-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Update npm to a specific version
RUN npm install -g npm@10.5.2

# Install dependencies
RUN npm install --production --silent && mv node_modules ../
COPY . .

# Set ownership and user
RUN chown -R node /usr/src/app
USER node

CMD ["npm", "start"]
