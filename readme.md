# IIIT Rosei

### What is this repository for?

* This repository contains code for online mess system for IIIT_BBSR students.
* This is backend for online mess.

### TO-DO

- [x] Add docker configuration with mongodb
- [x] Add server
- [x] Add database
- [ ] Add routes
- [ ] Add login, signup pages
- [ ] Show profile page
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
