# IIIT Rosei

### What is this repository for?

* This repository contains **backend** code for online mess system for IIIT_BBSR students.
* Front End code can he found [here](https://github.com/p-society/Online_Rosie_FrontEnd)

### TO-DO

- [x] Add docker configuration with mongodb
- [x] Add server
- [x] Add database
- [x] Add login, signup pages
- [x] Show profile page
- [x] Add all routes
- [ ] Add menu
- [ ] Add forgot password option
- [ ] Add tests


### Tech Stack ###

* Docker used to contain dependencies and tooling
* `node` >= 8.9.0
* `npm` >= 5.5.1
* `TypeScript` >= 3.0.1

### How to use (using docker)

```
clone repository
cd docker
chmod 777 dockerCompose.sh
./dockerCompose.sh

Now docker image is created, run your docker image by command below

docker-compose up
```

### How to use  (without docker)

If you don't know docker and don't want to learn but contribute follow bellow steps:-

```
clone repository
git checkout local-server
npm i
mongod // any command that start your mongo server
npm start

// Now your server is running on local host
```

### Contributing

If you want to contribute follow the above installation and then choose an [open issues](https://github.com/p-society/Online_Rosei/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)

**Important**:- This repo follow strict *PR guidelines* so please refer to [our guidelines](https://github.com/p-society/meta) before making a PR.

:fire: happy coding.
