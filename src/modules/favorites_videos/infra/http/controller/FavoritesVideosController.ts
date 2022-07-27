import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateFavoriteVideoService } from '../../../services/CreateFavoriteVideoService'

class FavoritesVideosController {
  async create(request: Request, response: Response): Promise<void> {
    // const { id } = request.user
    const { video_id } = request.params

    const createFavoriteVideoService = container.resolve(CreateFavoriteVideoService)

    const favoriteVideo = await createFavoriteVideoService.execute({
      user_id: 'pegarAtravesDeMiddlewares',
      video_id,
    })

    response.status(201).json(favoriteVideo)
  }
}

export { FavoritesVideosController }