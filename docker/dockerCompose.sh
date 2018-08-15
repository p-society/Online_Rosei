#!/usr/bin/env bash

cd ..

docker build -t is/iiit-bbsr-rosie -f  Dockerfile .

docker-compose up -d
