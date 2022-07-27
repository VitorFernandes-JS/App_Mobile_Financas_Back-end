import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import auth from '../../../configs/auth'

@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  async execute(email: string): Promise<string> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (!userAlreadyExists) {
      throw new Error("User not found")
    }

    const token = sign({}, auth.secret_token, {
      subject: userAlreadyExists.id,
      expiresIn: auth.expires_in_token
    })

    return token
  }
}

export { AuthenticateUserService }