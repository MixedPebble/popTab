import { Router } from 'express';
import * as Routes from './routes';

export default () => {
  console.log('loading routes');
  const app = Router();

  Object.keys(Routes).forEach(route => Routes[route](app));

  return app;
};
