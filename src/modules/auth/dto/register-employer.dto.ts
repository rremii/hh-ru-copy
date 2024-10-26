import { RegisterUserDto } from "./register-user.dto"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class RegisterEmployerDto extends RegisterUserDto {
  // @IsNotEmpty()
  // @IsNumber()
  // id: number

  @IsNotEmpty()
  @IsString()
  about: string
}
