import { Router } from 'express';

export default () => {
  console.log('loading routes');
  const app = Router();
  return app;
};
