import jwt from 'jsonwebtoken';

import { UserLoginToken } from '../types/AuthTypes';

const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

export async function tokenSign(user: UserLoginToken) {

  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not set');
  }

  const sign = await jwt.sign(
    {
      _id: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: '365d'
    }
  );

  return sign;
}

export function getUserIdFromToken(token: string): string | null {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not set');
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as { _id: string };
    return decodedToken._id;
  } catch (error) {
    return null;
  }
}
