import express from 'express';

import {
  authValidatorRegister,
  authValidatorlogin,
} from '../validators/auth';

import {
  createAuthRegisterController,
  authLoginController,
} from '../controllers/auth';


const router = express.Router();

router.post(
  '/auth/register',
  authValidatorRegister,
  createAuthRegisterController
);

router.post('/auth/login', authValidatorlogin, authLoginController);

export default router;