import { container } from "tsyringe";
import { CommentaryRepository } from "../../modules/commentaries/infra/typeorm/repositories/CommentaryRepository";
import { ICommentaryRepository } from "../../modules/commentaries/repositories/ICommentaryRepository";
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