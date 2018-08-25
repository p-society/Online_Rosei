"use strict";
require("dotenv").config();
import {IIITService} from "./server";

const iiitservice: IIITService = new IIITService();
iiitservice.startServer();
