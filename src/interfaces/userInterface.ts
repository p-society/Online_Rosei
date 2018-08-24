
import {Document} from "mongoose";

export interface IUser extends Document {
  collegeId: string;
  email: string;
  password: string;
  sex: string;
  tokenEmailToSend: string;
  verificationEmailToSend: string;
  name?: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
