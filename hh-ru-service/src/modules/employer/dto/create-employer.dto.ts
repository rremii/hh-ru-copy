import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateEmployerDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  about: string
}
