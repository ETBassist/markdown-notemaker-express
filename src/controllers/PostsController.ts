import express from 'express';
import knex from 'knex';
import { Controller } from '../interfaces';

export class PostsController implements Controller {
  public router = express.Router();
  public path = '/posts'

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:postId`, this.getPostById);
  }

  private getPostById(request: express.Request, response: express.Response) {
    let { postId } = request.params
    response.json({id: 1})
  }
}
