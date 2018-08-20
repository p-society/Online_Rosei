import {Schema} from "mongoose";
import mongoose = require("mongoose");

mongoose.Promise = global.Promise;

export const CouponSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  coupon: {
    type: [{
      createdAt: String,
      messup: Array,
      messdown: Array,
    }],
    default: [],
    select: true,
  },
}, {
  timestamps: {},
});
