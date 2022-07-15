import { ICreateFavoritesVideosDTO } from "../dtos/ICreateFavoritesVideosDTO";

interface IFavoritesVideosRepository {
  create({ user_id, video_id }: ICreateFavoritesVideosDTO): Promise<ICreateFavoritesVideosDTO>
}

export { IFavoritesVideosRepository }