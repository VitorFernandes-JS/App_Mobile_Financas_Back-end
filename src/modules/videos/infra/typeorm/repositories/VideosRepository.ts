import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../data-source";
import { ICreateVideoDTO } from "../../../dtos/ICreateVideoDTO";
import { IVideosRepository } from "../../../repositories/IVideosRepository";
import { Video } from "../entities/Video";

class VideosRepository implements IVideosRepository {
  private repository: Repository<Video>;

  constructor() {
    this.repository = AppDataSource.getRepository(Video);
  }

  async create({ url, category }: ICreateVideoDTO): Promise<ICreateVideoDTO> {
    const video = this.repository.create({ url, category })

    this.repository.save(video);

    return video
  }
}

export { VideosRepository }