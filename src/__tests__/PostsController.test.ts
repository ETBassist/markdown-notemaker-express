import request, { Response } from 'supertest';
import { App } from '../app';
import { PostsController } from '../controllers';
//import knex from 'knex'

describe('PostsController', () => {
//  beforeAll(() => {
//    knex('users').insert({
//      id: 1,
//      firstName: 'Test',
//      lastName: 'User'
//    })
//
//    knex('posts').insert({
//      id: 1,
//      user_id: 1,
//      content: 'Some post content'
//    })
//  })
//
//  afterAll(() => {
//    knex('users').select().del();
//    knex('posts').select().del();
//  })

  it('should return a post by id', async () => {
    const postsController = new PostsController();
    const { app } = new App(
      [postsController],
      3000
    );

    const response: Response = await request(app).get(`/api/v1/posts/1`)

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({id: 1})
  });
});
