import { App } from './app';
import { WelcomeController, PostsController } from './controllers';

const app = new App(
  [
    new WelcomeController,
    new PostsController
  ],
  3001
);

app.listen();
