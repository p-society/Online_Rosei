import * as express from "express";
import jwt = require("jsonwebtoken");
import {model} from "mongoose";
import {BaseRoutes} from "../classes";
import {IUser} from "../interfaces";
import {isAdminOrUser} from "../middleware";
import {Response} from "../models";
import {UserSchema} from "../schemas";
import {Config} from "../shared";

const User = model("User", UserSchema);

export class AdminRoutes extends BaseRoutes {
  private UserModel = model("User", UserSchema);

  protected initRoutes() {
    this.router.route("/").post((req, res) => this.postAdmin(req, res));
    this.router.route("/:id").get(isAdminOrUser, (req, res) => this.getAdmin(req, res));
    this.router.route("/:id/dashboard").get(isAdminOrUser, (req, res) => this.getUsers(req, res));
  }

  private getAdmin(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      User.findOne({_id: req.params.id}).then((user) => {
        resolve(new Response(200, "Successful response", {
          success: true,
          user,
        }));
      }).catch((error) => reject(new Response(500, "Unable to get user", {
        error: error.toString(),
      })));
    });

    this.completeRequest(promise, res);
  }

  private postAdmin(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {

      if (!req.body.email && !req.body.password) {
        console.log(req.body);
        resolve(new Response(200, "email and password required", {
          success: false,
        }));
      } else {
        const newAdmin: any = new this.UserModel({
          email: req.body.email,
          userType: "admin",
        });

        newAdmin.password = newAdmin.generateHash(req.body.password);

        newAdmin.save().then((user: any) => {

                    // create a token
          const token = jwt.sign({id: user._id}, Config.secretKeys.jwtSecret, {
            expiresIn: 86400,
          });

          resolve(new Response(201, "Successful response", {
            success: true,
            user,
            token,
          }));
        }).catch((error) => reject(new Response(500, "Unable to save new admin", {
          error: error.toString(),
        })));
      }
    });

    this.completeRequest(promise, res);
  }

  private getUsers(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      User.find().then((users: any) => {
        resolve(new Response(200, "Successful response", {
          success: true,
          users,
        }));
      }).catch((error) => reject(new Response(500, "Unable to get users", {
        error: error.toString(),
      })));
    });

    this.completeRequest(promise, res);
  }

}
