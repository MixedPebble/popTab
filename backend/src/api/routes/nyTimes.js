import { Router, Request, Response } from 'express';
import NyTimesService from '../../services/nyTimesService';
const route = Router();

export default app => {
  console.log('api/routes/nyTimes.js');

  app.use('/nyTimes', route);

  route.get('/', async (req, res, next) => {
    console.log('api/routes/nyTimes/root');
    const movies = await NyTimesService.getContent();
    return res.json(movies).status(200);
  });
};
