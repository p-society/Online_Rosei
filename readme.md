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
- [ ] Add all routes
- [ ] Add forgot password option
- [ ] Add menu
- [ ] Add tests


### Tech Stack ###

* Docker used to contain dependencies and tooling
* `node` >= 8.9.0
* `npm` >= 5.5.1
* `TypeScript` >= 3.0.1

### How to use(using docker)

```
clone repository
cd docker
chmod 777 dockerCompose.sh
./dockerCompose.sh

Now docker image is created, run your docker image by command below

docker-compose up
```
