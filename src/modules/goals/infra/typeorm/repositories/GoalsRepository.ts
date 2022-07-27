import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../data-source";
import { ICreateGoalDTO } from "../../../dtos/ICreateGoalDTO";
import { IGoalsRepository } from "../../../repositories/IGoalsRepository";
import { Goal } from "../entities/Goal";


class GoalsRepository implements IGoalsRepository {
  private repository: Repository<Goal>

  constructor() {
    this.repository = AppDataSource.getRepository(Goal)
  }

  async create({ name, amount, user_id }: ICreateGoalDTO): Promise<Goal> {
    const goal = this.repository.create({ name, amount, user_id })

    await this.repository.save(goal)

    return goal
  }
}

export { GoalsRepository }