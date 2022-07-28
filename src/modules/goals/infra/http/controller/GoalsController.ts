import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateGoalService } from '../../../services/CreateGoalService'

class GoalsController {

  async create(request: Request, response: Response): Promise<void> {
    const { id: user_id } = request.user
    const { name, amount } = request.body

    const createGoalsService = container.resolve(CreateGoalService)

    const goal = await createGoalsService.execute({ name, amount, user_id })

    response.status(201).json(goal)
  }
}

export { GoalsController }