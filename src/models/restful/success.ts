import {Response} from "./response";

export class SuccessResponse extends Response {
  public code: number = 200;
  public message: string = "Success";
}
