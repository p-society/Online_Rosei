import * as express from "express";
import jwt = require("jsonwebtoken");
import {model} from "mongoose";
import {IUser} from "../interfaces";
import {Response} from "../models";
import {UserSchema} from "../schemas";
import {Config} from "../shared";

const UserModel: any = model("User", UserSchema);
// Assign router to the express.Router() instance
const router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    // Reply with a hello world when no name param is provided
  res.send("Hello, World!");
});

router.post("/", (req: express.Request, res: express.Response) => {
  const promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
    console.log(req.body);
    if (req.body.email === undefined || req.body.password === undefined ||
        req.body.email === null || req.body.password === null ||
        req.body.email === "" || req.body.password === "") {
      res.json({
        success: false,
        message: "Email and password required",
      });
    } else if (req.body.password ===  undefined) {
      res.json({
        success: false,
        message: "Email and password required",
      });
    } else {
      const newUser: any = new UserModel({
        email: req.body.email,
      });

      newUser.password = newUser.generateHash(req.body.password);

      newUser.save().then((user: IUser) => {

                // create a token
        const token = jwt.sign({id: user._id}, Config.secretKeys.jwtSecret, {
          expiresIn: 86400,
        });

        res.json({
          success: true,
          user,
          token,
        });
      }).catch((error) => res.json({
        success: false,
        message: "Some error occured please try again later",
      }));
    }
  });
});

export const UserRoutes: express.Router = router;
