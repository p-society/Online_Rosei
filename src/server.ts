"use strict";
/*
  Import Routes
*/
import bodyParser = require("body-parser");
import cors = require("cors");
import express = require("express");
import mongoose = require("mongoose");
import {Config} from "./shared";

global.Promise = require("bluebird");
mongoose.Promise = global.Promise;

export class IIITService {
    private app: any; // express server

    constructor(private hasDb = true) {
        if (hasDb) {
            let infoString: string;
            if (Config.dbSettings.authEnabled) {
                infoString = "mongodb://"  + Config.dbSettings.username + ":" + Config.dbSettings.password + "@"
                    + Config.dbSettings.connectionString + "/" + Config.dbSettings.database;
            } else {
                infoString = "mongodb://" + Config.dbSettings.connectionString + "/" + Config.dbSettings.database;
            }

      // connect to mongodb
            mongoose.connect(infoString).then(() => {
                console.log("Mongo Connected!");
            }).catch((error) => {
                throw error;
            });
        }
    }

    // Main function to start the server

    public startServer () {
      this.initExpress();
    }

    private initExpress () {
      // create Express
      this.app = express();
      this.app.use(cors());
      //make express use the bodyParser for json middleware
      this.app.use(bodyParser.json({}));
      this.app.listen(Config.apiSettings.port);
      console.log('Server started at port: ' + Config.apiSettings.port)
    }
}
