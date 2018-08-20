import {Document} from "mongoose";

export interface ICoupontype {
  createdAt: string;
  messdown: string;
  messup: string;
}

export interface MessElement {
  day: string;
  breakfast: any;
  lunch: any;
  dinner: any;
  cost: any;
}

export interface ICoupon extends Document {
  userId: string;
  coupon: ICoupontype[];

  _id: string;
}
