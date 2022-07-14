import { ICreateVideoDTO } from "../dtos/ICreateVideoDTO";

interface IVideosRepository {
  create({ url, category }: ICreateVideoDTO): Promise<ICreateVideoDTO>
}

export { IVideosRepository }