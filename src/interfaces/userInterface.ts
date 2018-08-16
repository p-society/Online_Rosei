
import {Document} from "mongoose";

export interface IUser extends Document {
  collegeId: string;
  email: string;
  password: string;
  tokenEmailToSend: string;
  name?: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
