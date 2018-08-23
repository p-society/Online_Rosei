import * as express from "express";
import jwt = require("jsonwebtoken");
import {model} from "mongoose";
import {BaseRoutes} from "../classes";
import {IAdmin, ICoupon, IUser, MessElement} from "../interfaces";
import {isAdminOrUser, god} from "../middleware";
import {Response} from "../models";
import {AdminSchema, CouponSchema, UserSchema} from "../schemas";
import {Config} from "../shared";

const Admin = model("Admin", AdminSchema);
const User = model("User", UserSchema);
const Coupon = model("Coupon", CouponSchema);

export class AdminRoutes extends BaseRoutes {
  private AdminModel = model("Admin", AdminSchema);
  private UserModel = model("User", UserSchema);
  private CouponModel = model("Coupon", CouponSchema);

  protected initRoutes() {
    this.router.route("/login").post((req, res) => this.loginAdmin(req, res));
    this.router.route("/mess1/all/:id").get(isAdminOrUser, (req, res) => this.getUsersForGroundMess(req, res));
    this.router.route("/mess2/all/:id").get(isAdminOrUser, (req, res) => this.getUsersForUpperMess(req, res));
    this.router.route("/god/:id").post((req, res) => this.dropCollection(req, res));
  }

  private loginAdmin(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {

      Admin.findOne({ email: escape(req.body.email) }).select("password userType").then((user: any) => {
        if (!user) {
          resolve(new Response(200, "No Admin user exist", {
            success: false,
          }));
        } else {
          if (!user.validPassword(escape(req.body.password))) {
            resolve(new Response(200, "Incorrect Password", {
              success: false,
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

  private getUsersForGroundMess(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      Admin.findOne({_id: req.user._id}).then((admin: any) => {
        Coupon.find().select("couponDownMess").sort({gender: "ascending"}).then((users: any) => {
          resolve(new Response(200, "Successful response", {
            success: true,
            users,
          }));
        });
      }).catch((error) => reject(new Response(500, "Unable to get users", {
        error: error.toString(),
      })));
    });

    this.completeRequest(promise, res);
  }

  private getUsersForUpperMess(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      Admin.findOne({_id: req.user._id}).then((admin: any) => {
        Coupon.find().select("couponUpMess").sort({gender: "ascending"}).then((users: any) => {
          resolve(new Response(200, "Successful response", {
            success: true,
            users,
          }));
        });
      }).catch((error) => reject(new Response(500, "Unable to get users", {
        error: error.toString(),
      })));
    });

    this.completeRequest(promise, res);
  }

  private dropCollection(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      Admin.findOne({_id: req.params.id}).then((admin: any) => {
        if (admin.messType !== "god") {
          resolve(new Response(200, "Sorry you cannot act god", {
            success: false,
          }));
        } else if (String(req.params.id) !== String(admin._id)) {
          resolve(new Response(200, "Sorry you cannot act god, don't act smart", {
            success: false,
          }));
        } else {
          Coupon.collection.drop();
          resolve(new Response(200, "Deleled database", {
            success: true,
          }));
        }
      }).catch((error) => reject(new Response(500, "Some error occured", {
        error: error.toString(),
      })));
    });

    this.completeRequest(promise, res);
  }

}
