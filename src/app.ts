import express from 'express';
import bodyParser from 'body-parser';
import { Controller } from './interfaces';

export class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Array<Controller>, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddleware();
    this.initalizeControllers(controllers);
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
  }

  private initalizeControllers(controllers: Array<Controller>) {
    controllers.forEach((controller) => {
      this.app.use('/api/v1', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}
