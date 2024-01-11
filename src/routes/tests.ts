import express from 'express'

import { createIsoTest } from '../controllers/tests'
import { authenticateToken } from '../middlewares/handleBearer';

const router = express.Router()

router.post('/isotest/create', authenticateToken, createIsoTest)

export default router