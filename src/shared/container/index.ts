import { container } from "tsyringe";
import { CommentaryRepository } from "../../modules/commentaries/infra/typeorm/repositories/CommentaryRepository";
import { ICommentaryRepository } from "../../modules/commentaries/repositories/ICommentaryRepository";
import { FavoritesVideosRepository } from "../../modules/favorites_videos/infra/typeorm/repositories/FavoritesVideosRepository";
import { IFavoritesVideosRepository } from "../../modules/favorites_videos/repositories/IFavoritesVideosRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { VideosRepository } from "../../modules/videos/infra/typeorm/repositories/VideosRepository";
import { IVideosRepository } from "../../modules/videos/repositories/IVideosRepository";

container.registerSingleton<ICommentaryRepository>(
  "CommentaryRepository",
  CommentaryRepository
);

container.registerSingleton<IVideosRepository>(
  "VideosRepository",
  VideosRepository
);

container.registerSingleton<IFavoritesVideosRepository>(
  "FavoritesVideosRepository",
  FavoritesVideosRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)