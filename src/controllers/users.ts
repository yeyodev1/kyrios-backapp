import { Request, Response } from 'express';

import handleHttpError from '../utils/handleErrors';
import models from '../models/index';

async function getUsers(_req: Request, res: Response) {
  try {
    const users = await models.users.find({});
    res.send(users);
  } catch (error) {
    handleHttpError(res, 'Cannot get users');
  }
}


async function getUser(req: Request, res: Response) {
  try {
    const id = req.body.id;
    const user = await models.users.findById(id).populate('tests');

    if (!user) {
      handleHttpError(res, 'Usuario no existe');
      return;
    }

    const data = {
      name: user?.name,
      lastname: user?.lastname,
      id: user?._id,
      email: user.email,
      tests: user.tests
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'Cannot login');
  }
}

export { getUsers, getUser };
