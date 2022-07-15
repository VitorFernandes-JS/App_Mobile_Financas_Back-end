export interface ICreateFavoritesVideosDTO {
  id?: string;
  user_id: string;
  video_id: string;
  created_at?: Date;
  updated_at?: Date;
}