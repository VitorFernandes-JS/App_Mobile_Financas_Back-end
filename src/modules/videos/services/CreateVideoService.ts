import { inject, injectable } from "tsyringe";
import { ICreateVideoDTO } from "../dtos/ICreateVideoDTO";
import { CategoryType } from "../infra/typeorm/entities/Video";
import { IVideosRepository } from "../repositories/IVideosRepository";

interface IRequest {
  url: string;
  category: CategoryType;
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