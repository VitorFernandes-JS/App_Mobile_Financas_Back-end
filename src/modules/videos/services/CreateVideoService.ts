import { inject, injectable } from "tsyringe";
import { ICreateVideoDTO } from "../dtos/ICreateVideoDTO";
import { IVideosRepository } from "../repositories/IVideosRepository";

interface IRequest {
  url: string;
  category: string;
}

@injectable()
class CreateVideoService {
  constructor(
    @inject("VideosRepository")
    private videosRepository: IVideosRepository
  ) { }

  async execute({ url, category }: IRequest): Promise<ICreateVideoDTO> {
    const video = await this.videosRepository.create({ url, category });

    return video
  }
}

export { CreateVideoService }