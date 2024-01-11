import { Request, Response } from 'express';

import handleHttpError from '../utils/handleErrors';
import isoTest from '../models/tests';
import users from '../models/users';


async function createIsoTest(req: Request, res: Response) {
  try {
    const userId = req.body.id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const user = await users.findById(userId);
    if (!user) {
      handleHttpError(res, 'User not found', 404);
      return;
    }

    const newTest = new isoTest(req.body);
    const savedTest = await newTest.save();

    user.tests.push(savedTest._id);
    await user.save();

    res.status(201).json(savedTest);
  } catch (error) {
    handleHttpError(res, 'Error creating ISO test');
  }
}

export { createIsoTest }