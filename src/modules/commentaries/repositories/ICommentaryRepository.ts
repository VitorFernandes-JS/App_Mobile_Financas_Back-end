import { ICreateCommentaryDTO } from "../dtos/ICreateCommentaryDTO";


interface ICommentaryRepository {
  create({ video_id, description }: ICreateCommentaryDTO): Promise<ICreateCommentaryDTO>
}

export { ICommentaryRepository }