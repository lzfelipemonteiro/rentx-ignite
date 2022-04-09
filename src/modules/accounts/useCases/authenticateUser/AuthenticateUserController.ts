import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticatedUserUseCase = container.resolve(AuthenticateUserUseCase);

    const authenticatedInfo = await authenticatedUserUseCase.execute({
      email,
      password,
    });

    return response.status(200).json(authenticatedInfo);
  }
}

export { AuthenticateUserController };
