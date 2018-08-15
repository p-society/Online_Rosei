import * as express from "express";
import {Response} from "../models";

export class BaseRoutes {
  protected router: express.Router = express.Router();

  public constructor() {
    this.initRoutes();
  }

  public getRoutes(): express.Router {
    return this.router;
  }

  protected initRoutes() {
    throw new Error("Not Implemented");
  }

  protected completeRequest(promise: Promise<Response>, res: express.Response): void {
    promise.then((response) => {
      res.status(response.code).send(response);
    }).catch((errorResponse) => {
      res.status(!Number.isNaN(errorResponse.code) ? errorResponse.code : 500).send(errorResponse);
    });
  }
}
