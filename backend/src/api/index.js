import { Router } from 'express';
// import movies from './routes/movies';

export default () => {
  console.log('loading routes');
  const app = Router();
  // movies(app);
  return app;
};
