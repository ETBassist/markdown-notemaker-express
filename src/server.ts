import { App } from './app';
import { WelcomeController } from './controllers';

const app = new App(
  [new WelcomeController],
  3001
);

app.listen();
