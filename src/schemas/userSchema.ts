import bcrypt = require("bcrypt-nodejs");
import {Schema} from "mongoose";
import mongoose = require("mongoose");

mongoose.Promise = global.Promise;

export const UserSchema = new Schema({
  collegeId: {
    type: String,
    trim: true,
    unique: true,
    select: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    select: true,
  },
  password: {
    type: String,
    select: false,
  },
  name: {
    type: String,
    select: true,
  },
  userType: {
    type: String,
    select: true,
    default: "user",
  },
  tokenEmailToSend: {
    type: String,
    select: false,
  },
  active: {
    type: Boolean,
    select: true,
    default: false,
  },
}, {
  timestamps: {},
});

UserSchema.methods.generateHash = function(password): boolean {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password): boolean {
  return bcrypt.compareSync(password, this.password);
};
