import { Router } from 'express';
import Usuario from './app/models/Usuario';

const routes = new Router();

routes.get('/', async (req, res) => {
  // const usuarioInstance = await Usuario.create({
  // nome: 'paulo',
  //email: 'ps',
  // password_hash: '123',
  //});
  return res.json('oi');
});
routes.post('/usuario', (req, res) => {
  return res.json('oi');
});
export default routes;
