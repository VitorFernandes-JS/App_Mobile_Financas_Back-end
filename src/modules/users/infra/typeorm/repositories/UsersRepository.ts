import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../data-source";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";


class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }

  async create({ email, name }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ email, name })

    await this.repository.save(user)

    return user
  }

  async findByEmail(email: string): Promise<ICreateUserDTO> {
    const user = await this.repository.findOneBy({ email })

    return user
  }

  async findById(id: string): Promise<ICreateUserDTO> {
    const user = await this.repository.findOneBy({ id })

    return user
  }
}

export { UsersRepository }