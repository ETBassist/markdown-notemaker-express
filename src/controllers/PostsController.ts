import { Router, Request, Response } from 'express';
import { Controller } from '../interfaces';
import { db } from '../db'

export class PostsController implements Controller {
  public router = Router();
  public path = '/posts'

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:postId`, this.getPostById);
  }

  private getPostById(request: Request, response: Response) {
    const { postId } = request.params
    const database = db();
    database('posts').where('id', postId).select()
    .then(posts => {
      if (posts.length) {
        response.status(200).send(posts[0])
      } else {
        response.status(404).send('Not found')
      }
    })
    .catch(err => {
      response.status(500).json({message: err})
    });
  }
}
