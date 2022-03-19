import { Router } from 'express';
import nyTimes from './routes/nyTimes';

export default () => {
  console.log('loading routes');
  const app = Router();
  nyTimes(app);
  return app;
};
