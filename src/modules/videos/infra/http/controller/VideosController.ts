import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateVideoService } from '../../../services/CreateVideoService'

class VideosController {
  async create(request: Request, response: Response) {
    const { url, category } = request.body

    const createVideoService = container.resolve(CreateVideoService)

    const video = await createVideoService.execute({ url, category })

    response.status(201).json(video)

  }
}

export { VideosController }