import { Router, Request, Response } from 'express';
import newsApiService from '../../services/newsApiService';
const route = Router();

export default app => {
  console.log('api/routes/newsApi.js');

  app.use('/newsApi', route);

  route.get('/', async (req, res, next) => {
    console.log('api/routes/newsApi/root');
    const content = await newsApiService.getContent();
    return res.json(content).status(200);
  });
};
