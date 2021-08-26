import request, { Response } from 'supertest';
import { App } from '../app';
import { PostsController } from '../controllers';
import { db } from '../db'

describe('PostsController', () => {
  const database = db();
  beforeAll( async () => {
    await database('users').insert({
      id: 1,
      firstName: 'Test',
      lastName: 'User'
    })

    await database('posts').insert({
      id: 1,
      user_id: 1,
      content: 'Some post content',
      created_at: "2019-01-01T00:00:00.000Z",
      updated_at: "2019-01-01T00:00:00.000Z"
    })
  })

  afterAll( async () => {
    await database('posts').del()
    await database('users').del()
    .then(() => {
      database.destroy();
    })
  })

  it('should return a post by id', async () => {
    const postsController = new PostsController();
    const { app } = new App(
      [postsController],
      3000
    );

    const response: Response = await request(app).get(`/api/v1/posts/1`)

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      id: 1,
      user_id: '1',
      content: 'Some post content',
      created_at: "2019-01-01T00:00:00.000Z",
      updated_at: "2019-01-01T00:00:00.000Z"
    })
  });
});
