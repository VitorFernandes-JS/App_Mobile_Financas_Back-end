import { inject, injectable } from "tsyringe";
import { ICreateCommentaryDTO } from "../dtos/ICreateCommentaryDTO";
import { ICommentaryRepository } from "../repositories/ICommentaryRepository";

interface IRequest {
  user_id: string;
  video_id: string;
  description: string;
}

@injectable()
class CreateCommentaryService {
  constructor(
    @inject("CommentaryRepository")
    private commentaryRepository: ICommentaryRepository
  ) { }

  async execute({ user_id, video_id, description }: IRequest): Promise<ICreateCommentaryDTO> {
    // TODO: verificar se usuário existe
    // TODO: verificar se video existe
    const commentary = await this.commentaryRepository.create({ user_id, video_id, description })

    return commentary
  }
}

export { CreateCommentaryService }