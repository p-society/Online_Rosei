import * as express from "express";
import jwt = require("jsonwebtoken");
import {model} from "mongoose";
import {BaseRoutes} from "../classes";
import {IAdmin, ICoupon, IUser, MessElement} from "../interfaces";
import {isAdminOrUser} from "../middleware";
import {Response} from "../models";
import {AdminSchema, UserSchema, CouponSchema} from "../schemas";
import {Config} from "../shared";

const Admin = model("Admin", AdminSchema);
const User = model("User", UserSchema);
const Coupon = model("Coupon", CouponSchema);

export class AdminRoutes extends BaseRoutes {
  private AdminModel = model("Admin", AdminSchema);
  private UserModel = model("User", UserSchema);
  private CouponModel = model("Coupon", CouponSchema);

  protected initRoutes() {
    this.router.route("/register").post((req, res) => this.postAdmin(req, res));
    this.router.route("/mess1/all/:id").get(isAdminOrUser, (req, res) => this.getUsersForGroundMess(req, res));
    this.router.route("/mess2/all/:id").get(isAdminOrUser, (req, res) => this.getUsersForUpperMess(req, res));
  }

  private getUsersForUpperMess(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      Admin.findOne({_id: req.params.id}).then((admin) => {
        resolve(new Response(200, "Successful response", {
          success: true,
          admin,
        }));
      }).catch((error) => reject(new Response(500, "Unable to get admin", {
        error: error.toString(),
      })));
    });

    this.completeRequest(promise, res);
  }

  private postAdmin(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {

      if ((req.body.messType === undefined || req.body.password === undefined || req.body.email === undefined)
        || (req.body.messType === null || req.body.password === null || req.body.email === null) ||
        (req.body.messType === "" || req.body.password === "" || req.body.email === "")) {
        resolve(new Response(200, "Please fill all fields", {
          success: false,
        }));
      } else {
        const newAdmin: any = new this.AdminModel({
          email: escape(req.body.email),
          messType: escape(req.body.messType),
          password: escape(req.body.password),
        });

        newAdmin.password = newAdmin.generateHash(req.body.password);

        newAdmin.save().then((admin: any) => {

                    // create a token
          const token = jwt.sign({id: admin._id}, Config.secretKeys.jwtSecret, {
            expiresIn: 86400,
          });

          resolve(new Response(201, "Successful response", {
            success: true,
            admin,
            token,
          }));
        }).catch((error) => reject(new Response(500, "Unable to save new admin", {
          error: error.toString(),
        })));
      }
    });

    this.completeRequest(promise, res);
  }

  private getUsersForGroundMess(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      Admin.findOne({_id: req.user._id}).then((admin: any) => {
        Coupon.find().select("couponDownMess").then((users: any)=>{
          resolve(new Response(200, "Successful response", {
            success: true,
            admin,
            users
          }));
        });
      }).catch((error) => reject(new Response(500, "Unable to get users", {
        error: error.toString(),
      })));
    });

    this.completeRequest(promise, res);
  }

}
