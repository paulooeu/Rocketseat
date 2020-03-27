import express from 'express';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.rota;
  }

  middlewares() {
    this.server.use(express.json());
  }

  rota() {
    this.server.use(routes);
  }
}
export default new App().server;
