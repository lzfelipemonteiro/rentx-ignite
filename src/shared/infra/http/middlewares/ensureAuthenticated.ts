import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(
      token,
      '68ed38dc744a3eaa8efd5dfb2848b6e0'
    ) as IPayload;

    const usersRepository = new UserRepository();
    const user = usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User does not exist', 401);
    }

    request.user = { id: userId };

    next();
  } catch (error) {
    throw new AppError('Invalid token', 401);
  }
}
