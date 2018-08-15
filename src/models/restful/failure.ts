import {Response} from "./response";

export class FailureResponse extends Response {
  public code: number = 500;
  public message: string = "Internal Server Error";
}
