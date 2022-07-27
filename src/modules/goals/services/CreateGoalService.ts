import { inject } from "tsyringe";
import { IUsersRepository } from "../../users/repositories/IUsersRepository";
import { ICreateGoalDTO } from "../dtos/ICreateGoalDTO";
import { IGoalsRepository } from "../repositories/IGoalsRepository";

interface IRequest {
  name: string;
  amount: number;
  user_id?: string;
}

class CreateGoalService {
  constructor(
    @inject("GoalsRepository")
    private goalsRepository: IGoalsRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ name, amount, user_id }: IRequest): Promise<ICreateGoalDTO> {
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error("User not found");
    }

    const goal = await this.goalsRepository.create({ name, amount, user_id })

    return goal
  }
}

export { CreateGoalService }