import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  email: string;
  name: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ email, name }: IRequest): Promise<ICreateUserDTO> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const user = await this.usersRepository.create({ email, name })

    return user
  }
}

export { CreateUserService }