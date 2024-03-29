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

async function getLastUserTest(req: Request, res: Response) {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(401).json({message: 'User not authenticated'});
    }
    const user = await users.findById(userId).populate('tests').exec();
    
    if(!user) {
      handleHttpError(res, 'User not found', 404);
      return
    }
    
    const lastTest = user.tests[user.tests.length -1 ];

    if (!lastTest) {
      return res.status(404).json({message: 'no tests found for this user'})
    }

    res.status(200).json(lastTest);
  } catch (error) {
    handleHttpError(res, 'error retrieving user tests', 500)
  }
}

async function setUserTestAccessLevel(req: Request, res: Response) {
  try {
    const userId = req.body.id;
    const { testAccessLevel } = req.body;
    if (!userId) {
      return res.status(401).json({message: 'user not authenticated'});
    }

    if (!['viewTest', 'downloadAndViewTest', 'downloadTemplate'].includes(testAccessLevel)) {
      return res.status(400).json({message: 'invalid test access level'});
    }

    const user = await users.findByIdAndUpdate(userId, {testAccessLevel}, {new: true});
    
    if (!user) {
      handleHttpError(res, 'user not found', 404);
      return;
    }
    res.status(200).json({message: 'test access level updated', user})
  } catch (error) {
    handleHttpError(res, 'error updating test access level', 500)
  }
}

async function getUserTestAccessLevel (req: Request, res: Response) {
  try {
    const userId = req.params.id;

    if(!userId) {
      return res.status(400).json({message: 'user id is required'});
    }

    const user = await users.findById(userId).select('testAccessLevel').exec();

    if (!user) {
      handleHttpError(res, 'user not found', 404);
      return;
    }
    res.status(200).json({testAccessLevel: user.testAccessLevel || 'not found user election'});
  } catch (error) {
    handleHttpError(res, 'error retreiving test access level', 500)
  }
}

export { createIsoTest, getLastUserTest, setUserTestAccessLevel, getUserTestAccessLevel }