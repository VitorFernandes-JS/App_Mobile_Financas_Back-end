import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";


@Entity('commentaries')
class Commentary {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  video_id: string; // TODO: Criar relacionamento

  @Column()
  user_id: string;  // TODO: verificar no OAUTH se o id do usuário é uma string ou number. Criar relacionamento

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

export { Commentary }