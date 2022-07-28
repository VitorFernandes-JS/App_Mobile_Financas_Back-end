import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import auth from '../../../../configs/auth'
import { UsersRepository } from '../../../../modules/users/infra/typeorm/repositories/UsersRepository'

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeaders = request.headers.authorization

  const usersRepository = new UsersRepository()

  if (!authHeaders) {
    throw new Error("Token missing")
  }

  const [, token] = authHeaders.split(" ")

  try {
    const { sub: user_id } = verify(
      token,
      auth.secret_token
    ) as IPayload

    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new Error("User does not exists")
    }

    request.user = {
      id: user_id
    }

    next()
  } catch (error) {
    throw new Error("Invalid token")
  }
}

export { ensureAuthenticated }