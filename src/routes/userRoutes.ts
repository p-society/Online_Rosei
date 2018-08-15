import * as express from "express";
import jwt = require("jsonwebtoken");
import {model} from "mongoose";
import {BaseRoutes, SendGridContent, SendGridEmail, SendGridMail, SendGridService} from "../classes";
import {IUser} from "../interfaces";
import {Response} from "../models";
import {UserSchema} from "../schemas";
import {Config} from "../shared";

export class UserRoutes extends BaseRoutes {
  private UserModel = model("User", UserSchema);
  private GridService = new SendGridService(process.env.SENDGRID_API_KEY);
  protected initRoutes() {
    this.router.route("/").post((req, res) => this.registerUser(req, res));
  }

  private registerUser(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {

      if (req.body.collegeId === undefined || req.body.password === undefined ||
        req.body.collegeId === null || req.body.password === null ||
        req.body.collegeId === "" || req.body.password === "") {
        resolve(new Response(200, "collegeId and password required", {
          success: false,
        }));
      } else {
        const email = escape(req.body.collegeId) + "@iiit-bh.ac.in";
        const mail = new SendGridMail(
        new SendGridEmail("verify@iiit_rosie.com"),
        "Please verfiy your email",
        new SendGridEmail(email),
        new SendGridContent("text/html", `
        <div style="background-color:#2E4053;color:#F1948A;font-style:italic;width:800px;font-size:24px;padding:20px;">
            Click to verify your email :
            <br/><br/>
            Please verify in 1 hour before it expires.
            <br/><br/>
            Thank you for your patience
            </div>`));
        const newUser: any = new this.UserModel({
          email,
          collegeId: escape(req.body.collegeId),
        });

        newUser.password = newUser.generateHash(req.body.password);

        newUser.save().then((user: IUser) => {
          this.GridService.send(mail);
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
