import { Request, Response, NextFunction } from 'express';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const userRepository = new UserRepository();
  const user = await userRepository.findById(id);

  if (!user.admin) {
    throw new AppError("User isn't admin!");
  }

  return next();
}
