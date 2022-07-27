import { ICreateGoalDTO } from "../dtos/ICreateGoalDTO";

interface IGoalsRepository {
  create({ name, amount, user_id }: ICreateGoalDTO): Promise<ICreateGoalDTO>
}

export { IGoalsRepository }