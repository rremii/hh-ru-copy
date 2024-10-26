import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { User } from "src/modules/user/entities/user.entity"
import { IEmployer } from "../employer.interface"

@Entity({ name: "employers" })
export class Employer implements IEmployer {
  @PrimaryColumn()
  @OneToOne(() => User, undefined, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id", referencedColumnName: "id" })
  id: number

  @Column()
  about: string
}
