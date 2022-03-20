import { Router } from 'express';
import nyTimes from './routes/nyTimes';
import newsApi from './routes/newsApi';

export default () => {
  console.log('loading routes');
  const app = Router();
  nyTimes(app);
  newsApi(app);
  return app;
};
