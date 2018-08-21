import bcrypt = require("bcrypt-nodejs");
import * as express from "express";
import jwt = require("jsonwebtoken");
import moment = require("moment");
import {model} from "mongoose";
import queryString = require("query-string");
import {BaseRoutes} from "../classes";
import {ICoupon, IUser, MessElement} from "../interfaces";
import {isAuthenticated} from "../middleware";
import {Response} from "../models";
import {CouponSchema, UserSchema} from "../schemas";
import {Config} from "../shared";

const User = model("User", UserSchema);
const Coupon = model("Coupon", CouponSchema);

export class CouponRoutes extends BaseRoutes {
  private UserModel = model("User", UserSchema);
  private CouponModel = model("Coupon", CouponSchema);

  protected initRoutes() {
    this.router.route("/bookCoupon/:id").post(isAuthenticated, (req, res) => this.bookCoupon(req, res));
    this.router.route("/getCoupon").get(isAuthenticated, (req, res) => this.getCoupon(req, res));
  }

  private bookCoupon(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>(async (resolve, reject) => {
      const couponSorted = await this.couponCheck(req.body);
      const coupon = new this.CouponModel({
        userId: req.user._id,
        gender: req.user.sex,
        name: req.user.name,
        collegeId: req.user.collegeId,
        timestamp: moment().format("DD-MM-YYYY"),
        couponDownMess: [{
          createdAt: moment().format("DD-MM-YYYY"),
          messdown: couponSorted.mess1,
        }],
        couponUpMess: [{
          createdAt: moment().format("DD-MM-YYYY"),
          messup: couponSorted.mess2,
        }],
      });
      try {
        await coupon.save();
        resolve(new Response(200, "Successfully booked coupon", {
          success: true,
        }));
      } catch (err) {
        resolve(new Response(200, "Unable to book coupon please try again later", {
          success: false,
        }));
      }
    });
    this.completeRequest(promise, res);
  }

  private couponCheck(data) {

    const ELEMENT_DATA1: MessElement[] = [
      { day: "Monday",
        breakfast: data.mess1.breakfastMess1.Monday ? data.mess1.breakfastMess1.Monday.val : "N/A",
        lunch: data.mess1.lunchMess1.Monday ? data.mess1.lunchMess1.Monday.val : "N/A",
        dinner: data.mess1.dinnerMess1.Monday ? data.mess1.dinnerMess1.Monday.val : "N/A",
        cost: checkCost(data.mess1.breakfastMess1.Monday, data.mess1.lunchMess1.Monday, data.mess1.dinnerMess1.Monday),
      },
      { day: "Tuesday",
        breakfast: data.mess1.breakfastMess1.Tuesday ? data.mess1.breakfastMess1.Tuesday.val : "N/A",
        lunch: data.mess1.lunchMess1.Tuesday ? data.mess1.lunchMess1.Tuesday.val : "N/A",
        dinner: data.mess1.dinnerMess1.Tuesday ? data.mess1.dinnerMess1.Tuesday.val : "N/A",
        cost: checkCost(data.mess1.breakfastMess1.Tuesday, data.mess1.lunchMess1.Tuesday, data.mess1.dinnerMess1.Tuesday),
      },
      { day: "Wednesday",
        breakfast: data.mess1.breakfastMess1.Wednesday ? data.mess1.breakfastMess1.Wednesday.val : "N/A",
        lunch: data.mess1.lunchMess1.Wednesday ? data.mess1.lunchMess1.Wednesday.val : "N/A",
        dinner: data.mess1.dinnerMess1.Wednesday ? data.mess1.dinnerMess1.Wednesday.val : "N/A",
        cost: checkCost(data.mess1.breakfastMess1.Wednesday, data.mess1.lunchMess1.Wednesday, data.mess1.dinnerMess1.Wednesday),
      },
      { day: "Thursday",
        breakfast: data.mess1.breakfastMess1.Thursday ? data.mess1.breakfastMess1.Thursday.val : "N/A",
        lunch: data.mess1.lunchMess1.Thursday ? data.mess1.lunchMess1.Thursday.val : "N/A",
        dinner: data.mess1.dinnerMess1.Thursday ? data.mess1.dinnerMess1.Thursday.val : "N/A",
        cost: checkCost(data.mess1.breakfastMess1.Thursday, data.mess1.lunchMess1.Thursday, data.mess1.dinnerMess1.Thursday),
      },
      { day: "Friday",
        breakfast: data.mess1.breakfastMess1.Friday ? data.mess1.breakfastMess1.Friday.val : "N/A",
        lunch: data.mess1.lunchMess1.Friday ? data.mess1.lunchMess1.Friday.val : "N/A",
        dinner: data.mess1.dinnerMess1.Friday ? data.mess1.dinnerMess1.Friday.val : "N/A",
        cost: checkCost(data.mess1.breakfastMess1.Friday, data.mess1.lunchMess1.Friday, data.mess1.dinnerMess1.Friday),
      },
      { day: "Saturday",
        breakfast: data.mess1.breakfastMess1.Saturday ? data.mess1.breakfastMess1.Saturday.val : "N/A",
        lunch: data.mess1.lunchMess1.Saturday ? data.mess1.lunchMess1.Saturday.val : "N/A",
        dinner: data.mess1.dinnerMess1.Saturday ? data.mess1.dinnerMess1.Saturday.val : "N/A",
        cost: checkCost(data.mess1.breakfastMess1.Saturday, data.mess1.lunchMess1.Saturday, data.mess1.dinnerMess1.Saturday),
      },
      { day: "Sunday",
        breakfast: data.mess1.breakfastMess1.Sunday ? data.mess1.breakfastMess1.Sunday.val : "N/A",
        lunch: data.mess1.lunchMess1.Sunday ? data.mess1.lunchMess1.Sunday.val : "N/A",
        dinner: data.mess1.dinnerMess1.Sunday ? data.mess1.dinnerMess1.Sunday.val : "N/A",
        cost: checkCost(data.mess1.breakfastMess1.Sunday, data.mess1.lunchMess1.Sunday, data.mess1.dinnerMess1.Sunday),
      },
    ];

    // MESS 2 DATA
    const ELEMENT_DATA2: MessElement[] = [
      { day: "Monday",
        breakfast: data.mess2.breakfastMess2.Monday ? data.mess2.breakfastMess2.Monday.val : "N/A",
        lunch: data.mess2.lunchMess2.Monday ? data.mess2.lunchMess2.Monday.val : "N/A",
        dinner: data.mess2.dinnerMess2.Monday ? data.mess2.dinnerMess2.Monday.val : "N/A",
        cost: checkCost(data.mess2.breakfastMess2.Monday, data.mess2.lunchMess2.Monday, data.mess2.dinnerMess2.Monday),
      },
      { day: "Tuesday",
        breakfast: data.mess2.breakfastMess2.Tuesday ? data.mess2.breakfastMess2.Tuesday.val : "N/A",
        lunch: data.mess2.lunchMess2.Tuesday ? data.mess2.lunchMess2.Tuesday.val : "N/A",
        dinner: data.mess2.dinnerMess2.Tuesday ? data.mess2.dinnerMess2.Tuesday.val : "N/A",
        cost: checkCost(data.mess2.breakfastMess2.Tuesday, data.mess2.lunchMess2.Tuesday, data.mess2.dinnerMess2.Tuesday),
      },
      { day: "Wednesday",
        breakfast: data.mess2.breakfastMess2.Wednesday ? data.mess2.breakfastMess2.Wednesday.val : "N/A",
        lunch: data.mess2.lunchMess2.Wednesday ? data.mess2.lunchMess2.Wednesday.val : "N/A",
        dinner: data.mess2.dinnerMess2.Wednesday ? data.mess2.dinnerMess2.Wednesday.val : "N/A",
        cost: checkCost(data.mess2.breakfastMess2.Wednesday, data.mess2.lunchMess2.Wednesday, data.mess2.dinnerMess2.Wednesday),
      },
      { day: "Thursday",
        breakfast: data.mess2.breakfastMess2.Thursday ? data.mess2.breakfastMess2.Thursday.val : "N/A",
        lunch: data.mess2.lunchMess2.Thursday ? data.mess2.lunchMess2.Thursday.val : "N/A",
        dinner: data.mess2.dinnerMess2.Thursday ? data.mess2.dinnerMess2.Thursday.val : "N/A",
        cost: checkCost(data.mess2.breakfastMess2.Thursday, data.mess2.lunchMess2.Thursday, data.mess2.dinnerMess2.Thursday),
      },
      { day: "Friday",
        breakfast: data.mess2.breakfastMess2.Friday ? data.mess2.breakfastMess2.Friday.val : "N/A",
        lunch: data.mess2.lunchMess2.Friday ? data.mess2.lunchMess2.Friday.val : "N/A",
        dinner: data.mess2.dinnerMess2.Friday ? data.mess2.dinnerMess2.Friday.val : "N/A",
        cost: checkCost(data.mess2.breakfastMess2.Friday, data.mess2.lunchMess2.Friday, data.mess2.dinnerMess2.Friday),
      },
      { day: "Saturday",
        breakfast: data.mess2.breakfastMess2.Saturday ? data.mess2.breakfastMess2.Saturday.val : "N/A",
        lunch: data.mess2.lunchMess2.Saturday ? data.mess2.lunchMess2.Saturday.val : "N/A",
        dinner: data.mess2.dinnerMess2.Saturday ? data.mess2.dinnerMess2.Saturday.val : "N/A",
        cost: checkCost(data.mess2.breakfastMess2.Saturday, data.mess2.lunchMess2.Saturday, data.mess2.dinnerMess2.Saturday),
      },
      { day: "Sunday",
        breakfast: data.mess2.breakfastMess2.Sunday ? data.mess2.breakfastMess2.Sunday.val : "N/A",
        lunch: data.mess2.lunchMess2.Sunday ? data.mess2.lunchMess2.Sunday.val : "N/A",
        dinner: data.mess2.dinnerMess2.Sunday ? data.mess2.dinnerMess2.Sunday.val : "N/A",
        cost: checkCost(data.mess2.breakfastMess2.Sunday, data.mess2.lunchMess2.Sunday, data.mess2.dinnerMess2.Sunday),
      },
    ];

    function checkCost(val1, val2, val3) {
      if (val1 === undefined && val2 === undefined && val3 === undefined) {
        return 0;
      } else if (val1 === undefined && val2 === undefined) {
        return val3.cost;
      } else if (val2 === undefined && val3 === undefined) {
        return val1.cost;
      } else if (val3 === undefined && val1 === undefined) {
        return val2.cost;
      } else if (val1 === undefined) {
        return val2.cost + val3.cost;
      } else if (val2 === undefined) {
        return val1.cost + val3.cost;
      } else if (val3 === undefined) {
        return val1.cost + val2.cost;
      } else {
        return val1.cost + val2.cost + val3.cost;
      }
    }

    function getTotalCostMess1() {
      return this.ELEMENT_DATA1.map((t) => t.cost).reduce((acc, value) => acc + value, 0);
    }

    function getTotalCostMess2() {
      return this.ELEMENT_DATA2.map((t) => t.cost).reduce((acc, value) => acc + value, 0);
    }

    return {
      mess1: ELEMENT_DATA1,
      mess2: ELEMENT_DATA2,
    };
  }

  private getCoupon(req: express.Request, res: express.Response) {
    const promise: Promise<Response> = new Promise<Response>(async (resolve, reject) => {
      this.CouponModel.findOne({userId: req.user._id}).select("couponUpMess couponDownMess").sort({createdAt: "descending"}).then((coupon: any) => {
        if (coupon === null) {
          resolve(new Response(200, "No coupon booked", {
            success: false,
          }));
        } else {
          const bookedCouponDown = coupon.couponDownMess[0];
          const bookedCouponUp = coupon.couponUpMess[0];
          resolve(new Response(200, "These are your latest coupons for this week", {
            success: true,
            bookedCouponDown,
            bookedCouponUp
          }));
        }
      }).catch((error) => reject(new Response(500, "Unable to get coupon", {
        error: error.toString(),
      })));
    });
    this.completeRequest(promise, res);
  }

}
