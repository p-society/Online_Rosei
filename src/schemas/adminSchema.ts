import bcrypt = require("bcrypt-nodejs");
import {Schema} from "mongoose";
import mongoose = require("mongoose");

mongoose.Promise = global.Promise;

export const AdminSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    select: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  userType: {
    type: String,
    select: true,
    default: "admin",
  },
  messType: {
    type: String,
    select: true,
    required: true,
  },
}, {
  timestamps: {},
});

AdminSchema.methods.generateHash = function(password): boolean {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

AdminSchema.methods.validPassword = function(password): boolean {
  return bcrypt.compareSync(password, this.password);
};
