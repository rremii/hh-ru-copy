import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"
import { UserRole } from "../entities/user.entity"

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail({}, { message: "invalid email" })
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole
}
