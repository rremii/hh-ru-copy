import { IsNotEmpty } from "class-validator"

export class UpdateUserDto {
  @IsNotEmpty()
  id: number

  name?: string
}
