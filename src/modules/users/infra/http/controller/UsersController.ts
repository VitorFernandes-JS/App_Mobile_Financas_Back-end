import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserService } from '../../../services/AuthenticateUserService';
import { CreateUserService } from '../../../services/CreateUserService';

class UsersController {

  async create(request: Request, response: Response): Promise<void> {
    const { email, name } = request.body

    const createUserService = container.resolve(CreateUserService)

    const user = await createUserService.execute({ email, name })

    response.status(201).json(user)
  }

  async authenticate(request: Request, response: Response): Promise<void> {
    const { email } = request.body

    const authenticateUserService = container.resolve(AuthenticateUserService)

    const token = await authenticateUserService.execute(email)

    response.status(200).json(token)
  }
}

export { UsersController }