import express from 'express'

import { createIsoTest, getLastUserTest, getUserTestAccessLevel, setUserTestAccessLevel } from '../controllers/tests'
import { authenticateToken } from '../middlewares/handleBearer';

const router = express.Router()

router.post('/isotest/create', authenticateToken, createIsoTest)

router.get('/isotest/lastTest/:userId', authenticateToken, getLastUserTest)

router.put('/isotest/testAccessLevel', authenticateToken, setUserTestAccessLevel);

router.get('/isotest/testAccessLevel/:id', authenticateToken, getUserTestAccessLevel)

export default router