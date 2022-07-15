import { ICreateFavoritesVideosDTO } from "../dtos/ICreateFavoritesVideosDTO";

interface IFavoritesVideosRepository {
  create(video_id: string): Promise<ICreateFavoritesVideosDTO>
}