
import {Document} from "mongoose";

export interface IAdmin extends Document {
  email: string;
  password: string;
  messType: string;

  _id: string;
  createdAt: string;
  updatedAt: string;
}
