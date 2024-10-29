import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { message: "invalid email" })
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string
}
