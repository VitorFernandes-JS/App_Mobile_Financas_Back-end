import * as express from 'express';
import { router } from './routes';
import { AppDataSource } from '../../../data-source';

import "reflect-metadata"
import "../../container"

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  }).catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = express();

app.use(express.json())
app.use(router)

export { app }