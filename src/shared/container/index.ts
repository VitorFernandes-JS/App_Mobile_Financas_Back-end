import { container } from "tsyringe";
import { CommentaryRepository } from "../../modules/commentaries/infra/typeorm/repositories/CommentaryRepository";
import { ICommentaryRepository } from "../../modules/commentaries/repositories/ICommentaryRepository";

container.registerSingleton<ICommentaryRepository>(
  "CommentaryRepository",
  CommentaryRepository
);