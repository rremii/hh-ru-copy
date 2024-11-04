import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"
import { UserRole } from "../user.interface"

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
