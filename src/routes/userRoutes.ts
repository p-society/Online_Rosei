import * as express from "express";
import jwt = require("jsonwebtoken");
import {model} from "mongoose";
import {BaseRoutes} from "../classes";
import {IUser} from "../interfaces";
import {Response} from "../models";
import {UserSchema} from "../schemas";
import {Config} from "../shared";

export class UserRoutes extends BaseRoutes {
  private UserModel = model("User", UserSchema);

  protected initRoutes() {
    this.router.route("/").post((req, res) => this.registerUser(req, res));
  }

  private registerUser(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {

      if (req.body.email === undefined || req.body.password === undefined ||
        req.body.email === null || req.body.password === null ||
        req.body.email === "" || req.body.password === "") {
        resolve(new Response(200, "email and password required", {
          success: false,
        }));
      } else {
        const newUser: any = new this.UserModel({
          email: req.body.email,
        });

        newUser.password = newUser.generateHash(req.body.password);

        newUser.save().then((user: IUser) => {

          const token = jwt.sign({id: user._id}, Config.secretKeys.jwtSecret, {
            expiresIn: 86400,
          });

          resolve(new Response(201, "Successful response", {
            success: true,
            user,
            token,
          }));
        }).catch((error) => reject(new Response(500, "Unable to save new user", {
          error: error.toString(),
        })));
      }
    });
    this.completeRequest(promise, res);
  }
}
