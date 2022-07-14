import * as express from 'express';
import { router } from './routes';
import { AppDataSource } from '../../../data-source';

import "reflect-metadata"

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  }).catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = express();

app.use(router)

export { app }