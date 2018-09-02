import { Schema } from "mongoose";
import mongoose = require("mongoose");

mongoose.Promise = global.Promise;

export const CouponSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    select: true,
    required: true,
  },
  collegeId: {
    type: String,
    select: true,
    required: true,
  },
  gender: {
    type: String,
    select: true,
    required: true,
  },
  couponDownMess: {
    type: [{
      createdAt: String,
      createdTill: String,
      messdown: Array,
    }],
    default: [],
    select: false,
  },
  couponUpMess: {
    type: [{
      createdAt: String,
      createdTill: String,
      messup: Array,
    }],
    default: [],
    select: false,
  },
}, {
  timestamps: {},
});
