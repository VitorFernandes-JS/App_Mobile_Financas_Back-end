import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
class FavoriteVideo {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string; // TODO: verificar no OAUTH se o id do usuário é uma string ou number. Criar relacionamento

  @Column()
  video_id: string; // TODO: Criar relacionamento

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { FavoriteVideo }