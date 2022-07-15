import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../data-source";
import { ICreateFavoritesVideosDTO } from "../../../dtos/ICreateFavoritesVideosDTO";
import { IFavoritesVideosRepository } from "../../../repositories/IFavoritesVideosRepository";
import { FavoriteVideo } from "../entities/FavoriteVideo";


class FavoritesVideosRepository implements IFavoritesVideosRepository {
  private repository: Repository<FavoriteVideo>

  constructor() {
    this.repository = AppDataSource.getRepository(FavoriteVideo)
  }

  async create({ user_id, video_id }: ICreateFavoritesVideosDTO): Promise<ICreateFavoritesVideosDTO> {
    const favoriteVideo = this.repository.create({ user_id, video_id })

    this.repository.save(favoriteVideo)

    return favoriteVideo
  }
}

export { FavoritesVideosRepository }