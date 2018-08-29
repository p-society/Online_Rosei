import * as express from "express";
import jwt = require("jsonwebtoken");
import {model} from "mongoose";
import {BaseRoutes} from "../classes";
import {IUser} from "../interfaces";
import {Response} from "../models";
import {UserSchema} from "../schemas";
import {Config} from "../shared";

const User = model("User", UserSchema);

export class AuthRoutes extends BaseRoutes {

  private UserModel = model("User", UserSchema);

  protected initRoutes() {
    this.router.route("/login").post((req, res) => this.loginUser(req, res));
  }

  private loginUser(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      const email = (escape(req.body.collegeId) + "@iiit-bh.ac.in").toLowerCase();
      User.findOne({ email: email }).select("password userType").then((user: any) => {
        if (!user) {
          resolve(new Response(200, "No user exist", {
            success: false,
          }));
        } else {
          if (!user.validPassword(req.body.password)) {
            resolve(new Response(200, "Incorrect Password", {
              success: false,
            }));
          }
          if (user.userType !== "admin" && user.active === false) {
            resolve(new Response(200, "Please activate your account first", {
              success: false,
              active: false,
              user,
            }));
          } else {
            const token = jwt.sign({ id: user._id }, Config.secretKeys.jwtSecret, {
              expiresIn: 86400 * 7,
            });

            resolve(new Response(200, "Successful response", {
              success: true,
              user,
              token,
            }));
          }
        }
      }).catch((err) => {
        reject(new Response(500, "Unable to login", {
          error: err.toString(),
        }));
      });
    });

    this.completeRequest(promise, res);
  }
}
