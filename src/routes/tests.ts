import express from 'express'

import { createIsoTest, getLastUserTest } from '../controllers/tests'
import { authenticateToken } from '../middlewares/handleBearer';

const router = express.Router()

router.post('/isotest/create', authenticateToken, createIsoTest)

router.get('/isotest/lastTest/:userId', authenticateToken, getLastUserTest)

export default router