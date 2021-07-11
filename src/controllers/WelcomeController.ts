import express from 'express';
import { Controller } from '../interfaces';

export class WelcomeController implements Controller {
  public path = '/hello'
  public router = express.Router();
  
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.sayHello);
  }

  private sayHello(request: express.Request, response: express.Response) {
    response.send('Hello, world!');
  }
}


