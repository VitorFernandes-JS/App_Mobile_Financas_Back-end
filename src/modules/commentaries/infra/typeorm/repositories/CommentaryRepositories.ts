import { getRepository, Repository } from "typeorm"
import { Commentary } from "../entities/Commentary"


class CommentaryRepositories {
  private repository: Repository<Commentary>

  constructor() {
    this.repository = getRepository(Commentary)
  }
}

export { CommentaryRepositories }