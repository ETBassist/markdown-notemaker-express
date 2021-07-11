import request from 'supertest';
import { App } from '../app';
import { WelcomeController } from '../controllers';

describe('WelcomeController', () => {
  it('should respond with hello world', async () => {
    const welcomeController = new WelcomeController();
    const app = new App(
      [ welcomeController ],
      3000
    );

    const response: request.Response = await request(app.app).get('/api/v1/hello')

    expect(response.text).toEqual('Hello, world!')
  });
});
