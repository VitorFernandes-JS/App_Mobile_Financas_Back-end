import { inject, injectable } from "tsyringe";
import { ICreateFavoritesVideosDTO } from "../dtos/ICreateFavoritesVideosDTO";
import { IFavoritesVideosRepository } from "../repositories/IFavoritesVideosRepository";

interface IRequest {
  user_id: string;
  video_id: string;
}

@injectable()
class CreateFavoriteVideoService {

  constructor(
    @inject("FavoritesVideosRepository")
    private favoritesVideosRepository: IFavoritesVideosRepository
  ) { }

  async execute({ user_id, video_id }: IRequest): Promise<ICreateFavoritesVideosDTO> {
    // TODO: verificar ser user existe
    // TODO: verificar se video existe
    // TODO: verificar se o user_id passado ja possui um favoriteVideo com o video_id passado, se existir lançar um erro
    const favoriteVideo = this.favoritesVideosRepository.create({ user_id, video_id })

    return favoriteVideo
  }
}

export { CreateFavoriteVideoService }