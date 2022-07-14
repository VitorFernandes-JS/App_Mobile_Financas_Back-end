import { Repository } from "typeorm"
import { AppDataSource } from "../../../../../data-source"
import { ICreateCommentaryDTO } from "../../../dtos/ICreateCommentaryDTO"
import { ICommentaryRepository } from "../../../repositories/ICommentaryRepository"
import { Commentary } from "../entities/Commentary"

class CommentaryRepository implements ICommentaryRepository {
  private repository: Repository<Commentary>

  constructor() {
    this.repository = AppDataSource.getRepository(Commentary)
  }

  async create({ user_id, video_id, description }: ICreateCommentaryDTO): Promise<Commentary> {
    const commentary = this.repository.create({ user_id, video_id, description })

    await this.repository.save(commentary)

    return commentary
  }
}

export { CommentaryRepository }