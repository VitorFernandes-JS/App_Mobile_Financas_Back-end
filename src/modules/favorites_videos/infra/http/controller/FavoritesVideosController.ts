import { Request, Response } from 'express'
import { container } from 'tsyringe'

class CommentariesController {
  async create(request: Request, response: Response): Promise<void> {
    // const { id } = request.user
    const { video_id } = request.params

    // const createFavoriteVideoService = container.resolve()

    const favoriteVideo = createFavoriteVideoService.execute({
      video_id,
    })

    response.status(201).json(favoriteVideo)
  }
}

export { CommentariesController }