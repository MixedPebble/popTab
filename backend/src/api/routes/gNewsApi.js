import { Router, Request, Response } from 'express';
import gNewsService from '../../services/gNewsService';
const route = Router();

export default app => {
  console.log('api/routes/gNews.js');

  app.use('/gNews', route);

  route.get('/', async (req, res, next) => {
    console.log('api/routes/gNews/root');
    const movies = await gNewsService.getContent();
    return res.json(movies).status(200);
  });
};
