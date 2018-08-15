FROM node:8

# Create app directory
WORKDIR /usr/src

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . /usr/src

EXPOSE 8080
CMD [ "npm", "start" ]
