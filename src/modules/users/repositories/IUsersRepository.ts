import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create({ email, name }: ICreateUserDTO): Promise<ICreateUserDTO>
  findByEmail(email: string): Promise<ICreateUserDTO>
  findById(id: string): Promise<ICreateUserDTO>
}

export { IUsersRepository }