FROM node:8

RUN npm install -g gulp pm2

# Create app directory
RUN mkdir -p /usr/src

WORKDIR /usr/src

# Install app dependencies
COPY package.json /usr/src/

RUN npm install

# Bundle app source
COPY . /usr/src

RUN gulp

RUN rm -r src docker

WORKDIR /usr/src/dist

EXPOSE 4895
EXPOSE 5858
CMD ["pm2-docker", "process.yml"]
