import express from 'express';

import {
  getUsers,
  getUser,
} from '../controllers/users';
import { authenticateToken } from '../middlewares/handleBearer';

const router = express.Router();

router.get('/users', getUsers);

router.get('/users/profile', authenticateToken, getUser);

export default router;
