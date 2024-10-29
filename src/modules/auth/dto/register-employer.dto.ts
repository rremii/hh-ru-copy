import { ApiProperty } from "@nestjs/swagger"
import { RegisterUserDto } from "./register-user.dto"
import { IsNotEmpty, IsString } from "class-validator"

export class RegisterEmployerDto extends RegisterUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  about: string
}
