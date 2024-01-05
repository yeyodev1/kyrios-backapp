import { Application } from "express";
import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

import dbConnect from './config/mongo'
import routerApi from './routes'

async function main () {
  await dbConnect();

  dotenv.config();

  const whiteList: string[] = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://kyriosweb.netlify.app'
    // TODO: add app sandbox domain
  ];

  const app: Application = express();

  app.use(cors({ origin: whiteList }));

  app.use(express.json());

  const port: number | string = process.env.PORT || 3000; // Fallback port value, change it to your preferred port

  routerApi(app);

  app.get('/', (_req, res) => {
    res.send('kyrios is aliveeee! (╯°□°）╯');
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

main()