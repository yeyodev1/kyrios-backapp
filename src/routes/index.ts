import express, { Application } from 'express';
import Auth from './auth';
import Users from './users';
import Tests from './tests'

function routerApi(app: Application) {
  const router = express.Router();
  app.use('/api', router);
  router.use(Users);
  router.use(Auth);
  router.use(Tests)
}

export default routerApi