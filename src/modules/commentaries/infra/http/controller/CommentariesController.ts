import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCommentaryService } from '../../../services/CreateCommentaryService'

class CommentariesController {
  async create(request: Request, response: Response): Promise<void> {
    // const { id } = request.user
    const { video_id } = request.params
    const { description } = request.body

    const createCommentaryService = container.resolve(CreateCommentaryService)

    const commentary = createCommentaryService.execute({
      user_id: "pegarIdAtravesDosMiddlewares",
      video_id,
      description
    })

    response.status(201).json(commentary)
  }
}

export { CommentariesController }