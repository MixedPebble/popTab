import expressLoader from './express';
import mongooseLoader from './mongooseLoader';

export default async ({ expressApp }) => {
  console.log('loaders/index.js');
  await mongooseLoader();

  await expressLoader({ app: expressApp });
};
