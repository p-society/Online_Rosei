import bcrypt = require("bcrypt-nodejs");
import * as express from "express";
import jwt = require("jsonwebtoken");
import {model} from "mongoose";
import queryString = require("query-string");
import {BaseRoutes, SendGridContent, SendGridEmail, SendGridMail, SendGridService} from "../classes";
import {IUser} from "../interfaces";
import {isAuthenticated} from "../middleware";
import {Response} from "../models";
import {UserSchema} from "../schemas";
import {Config} from "../shared";

const User = model("User", UserSchema);

export interface AuthenticatedUser extends express.Request {
  user;
}

export class UserRoutes extends BaseRoutes {
  public sendgrid: any = SendGridService;
  private UserModel = model("User", UserSchema);
  private GridService = new this.sendgrid(process.env.SENDGRIDSERVICE);
  protected initRoutes() {
    this.router.route("/register").post((req, res) => this.registerUser(req, res));
    this.router.route("/activate").post((req, res) => this.activateUser(req, res));
    this.router.route("/profile").get(isAuthenticated, (req: AuthenticatedUser , res) => this.profileUser(req, res));
    this.router.route("/setting/:id").post(isAuthenticated, (req, res) => this.settingUser(req, res));
    this.router.route("/sendActivation").post((req, res) => this.sendActivation(req, res));
    this.router.route("/forgotPassword").post((req, res) => this.forgotPassword(req, res));
  }

  private registerUser(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      const collegeNumbers = req.body.collegeId.substr(1);
      const isnum = /^\d+$/.test(collegeNumbers);
      if ((req.body.collegeId === undefined || req.body.password === undefined || req.body.sex === undefined || req.body.name === undefined)
        || (req.body.collegeId === null || req.body.password === null || req.body.sex === null || req.body.name === null) ||
        (req.body.collegeId === "" || req.body.password === "" || req.body.sex === "" || req.body.name === "") ) {
        resolve(new Response(200, "Please fill all fields", {
          success: false,
        }));
      } else if (req.body.collegeId.length !== 7) {
        resolve(new Response(200, "Please don't try to act smart and enter your college Id only", {
          success: false,
        }));
      } else if (!isnum) {
        resolve(new Response(200, "Please don't try to act smart and enter your college Id only", {
          success: false,
        }));
      } else {
        const email = (escape(req.body.collegeId) + "@iiit-bh.ac.in").toLowerCase();
        User.findOne({collegeId: req.body.collegeId}).then((user: any) => {
          if (user !== null) {
            resolve(new Response(200, "collegeId already in use", {
              success: false,
            }));
          } else {
            const tokenEmailToSend = jwt.sign({data: email}, Config.secretKeys.jwtSecret, {
              expiresIn: "1h",
            });

            const query = {
              tokenEmailToSend,
              email,
            };
            const queryies = queryString.stringify(query);
            const urlActivation = process.env.HOSTEDURL;
            const emailVerification = `${urlActivation}/?${queryies}`;
            const mail = new SendGridMail(
            new SendGridEmail("verify@iiit_rosie.com"),
            "Please verfiy your email",
            new SendGridEmail(email),
            new SendGridContent("text/html", `
            <div style="background-color:#2E4053;color:#F1948A;font-style:
                italic;width:800px;font-size:24px;padding:20px;">
                To book coupon online you have to verify your email
                : <a href="${emailVerification}"
                style="color:#FAE5D3">Click to verify</a>
                <br/><br/>
                Please verify in 1 hour before it expires.
                <br/><br/>
                Thank you for your patience
                </div>`));
            const newUser: any = new this.UserModel({
              email,
              verificationEmailToSend: emailVerification,
              name: req.body.name,
              sex: escape(req.body.sex),
              collegeId: escape(req.body.collegeId).toLowerCase(),
              tokenEmailToSend,
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

      }
    });
    this.completeRequest(promise, res);
  }

  private activateUser(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      try {
        const URLEmail = escape(req.body.email);
        const URLToken = escape(req.body.tokenEmailToSend);
        User.findOne({email: URLEmail}, {active: true}).select("tokenEmailToSend").then((user: any) => {
          if (user === null) {
            resolve(new Response(200, "Sorry cannot verify email as no user found", {
              success: false,
            }));
          } else if (URLToken !== user.tokenEmailToSend) {
            resolve(new Response(200, "Sorry cannot verify email as you are trying to act smart", {
              success: false,
            }));
          } else if (user.active === true) {
            resolve(new Response(200, "Don't try to be smart your account is already active", {
              success: false,
            }));
          } else {
            if (URLToken === user.tokenEmailToSend) {
              User.update({email: user.email}, {$set: { active: true }}).then((user: any) => {
                resolve(new Response(200, "Account activated enjoy booking coupon", {
                  success: true,
                }));
              });
            }
          }
        });
      } catch (err) {
        resolve(new Response(200, "Sorry cannot verify email", {
          success: false,
        }));
      }
    });

    this.completeRequest(promise, res);
  }

  private profileUser(req: AuthenticatedUser, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      this.UserModel.findOne({_id: req.user._id}).then((user) => {
        if (user === null) {
          resolve(new Response(200, "Sorry no user found", {
            success: false,
          }));
        } else {
          resolve(new Response(200, "Successful response", {
            success: true,
            user,
          }));
        }
      }).catch((error) => reject(new Response(500, "Unable to get user", {
        error: error.toString(),
      })));
    });

    this.completeRequest(promise, res);
  }

  private settingUser(req: express.Request , res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      const password = escape(req.body.password);
      const confirmPassword = escape(req.body.confirmPassword);
      if (password !== confirmPassword) {
        resolve(new Response(200, "Your passwords do not match", {
          success: false,
        }));
      }

      if (password === "undefined" || confirmPassword === "undefined") {
        resolve(new Response(200, "Please enter password", {
          success: false,
        }));
      }
      if (password.length < 6) {
        resolve(new Response(200, "Password should be minimum 6 characters long", {
          success: false,
        }));
      }
      this.UserModel.findOne({_id: req.params.id}).then((user: any) => {
        if (user === null) {
          resolve(new Response(200, "Sorry no user found", {
            success: false,
          }));
        } else {
          User.update({email: user.email}, {$set: {
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)}})
            .then((user: any) => {
              resolve(new Response(200, "Successfully changed settings", {
                success: true,
              }));
            });
        }
      }).catch((error) => reject(new Response(500, "Unable to get user", {
        error: error.toString(),
      })));
    });

    this.completeRequest(promise, res);
  }

  private sendActivation(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      if (Object.keys(req.body).length === 0) {
        resolve(new Response(200, "Please don't try to act smart", {
          success: false,
        }));
      } else {
        this.UserModel.findOne({collegeId: req.body.collegeId}).select("verificationEmailToSend").then((user: any) => {
          if (user === null) {
            resolve(new Response(200, "Sorry no user found", {
              success: false,
            }));
          } else {
            const email = (escape(req.body.collegeId) + "@iiit-bh.ac.in").toLowerCase();
            const emailVerification = user.verificationEmailToSend;
            const mail = new SendGridMail(
            new SendGridEmail("verify@iiit_rosie.com"),
            "Please verfiy your email",
            new SendGridEmail(email),
            new SendGridContent("text/html", `
            <div style="background-color:#2E4053;color:#F1948A;font-style:
                italic;width:800px;font-size:24px;padding:20px;">
                To book coupon online you have to verify your email
                : <a href="${emailVerification}"
                style="color:#FAE5D3">Click to verify</a>
                <br/><br/>
                Please verify in 1 hour before it expires.
                <br/><br/>
                Thank you for your patience
                </div>`));
            this.GridService.send(mail).then((val) => {
              console.log("sent email");
              resolve(new Response(200, "Succesfully sent email, Please check your college email", {
                success: true,
              }));
            });
          }
        }).catch((error) => reject(new Response(500, "Unable to get user", {
          error: error.toString(),
        })));
      }
    });

    this.completeRequest(promise, res);
  }

  private forgotPassword(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
      if (Object.keys(req.body).length === 0) {
        resolve(new Response(200, "Please don't try to act smart", {
          success: false,
        }));
      } else {
        this.UserModel.findOne({collegeId: req.body.collegeId}).select("verificationEmailToSend password").then((user: any) => {

          if (user === null) {
            resolve(new Response(200, "Sorry no user found", {
              success: false,
            }));
          } else {
            const email = (escape(req.body.collegeId) + "@iiit-bh.ac.in").toLowerCase();
            const name = user.name;
            const pass = this.makeid();
            user.password = bcrypt.hashSync(pass, bcrypt.genSaltSync(8), null);
            const mail = new SendGridMail(
            new SendGridEmail("verify@iiit_rosie.com"),
            "Temporary Password for rosei",
            new SendGridEmail(email),
            new SendGridContent("text/html", `
            <div style="background-color:#2E4053;color:#48C9B0;padding:20px;font-style:italic;width:700px;font-size:24px;">
            Hello ` + name + `
            <br/><br/>
            Your tempory Password is : <b style="color:#FAE5D3">` + pass + `</b>
            <br/><br/>
            Please change it once you login.
            <br/><br/>
            enjoy
            </div>
            `));
            user.save().then(() => {
              this.GridService.send(mail).then((val) => {
                console.log("sent email");
                resolve(new Response(200, "Succesfully sent email, Please check your college email", {
                  success: true,
                }));
              });
            });
          }
        }).catch((error) => reject(new Response(500, "Unable to get user", {
          error: error.toString(),
        })));
      }
    });

    this.completeRequest(promise, res);
  }

  private makeid() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)); }

    return text;
  }
}
