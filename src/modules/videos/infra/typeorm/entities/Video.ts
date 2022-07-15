import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

export enum CategoryType {
  RENDA_FIXA = "Renda Fixa",
  ACOES = "Ações",
  FIIS = "FIIS",
  APLICATIVO = "Aplicativo",
  CRIPTOMOEDA = "Criptomoeda",
  ECONOMIA = "Economia"
}

@Entity("videos")
class Video {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column({
    type: "enum",
    enum: CategoryType,
    default: CategoryType.ECONOMIA
  })
  category: CategoryType;

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

export { Video }