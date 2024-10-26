import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { ICode } from "../code.interface"

// @Unique(["code"])
@Entity({ name: "codes" })
export class Code extends BaseEntity implements ICode {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  code: string

  @Column()
  expTime: Date
}
