import { Document } from "mongoose";

export interface ICoupontypeup {
  createdAt: string;
  createdTill: string;
  messup: string;
}

export interface ICoupontypedown {
  createdAt: string;
  createdTill: string;
  messdown: string;
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
  couponDownMess: ICoupontypedown[];
  couponUpMess: ICoupontypeup[];
  gender: string;
  collegeId: string;
  name: string;

  _id: string;
}
