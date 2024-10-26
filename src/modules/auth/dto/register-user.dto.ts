import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"
import { UserRole } from "src/modules/user/entities/user.entity"

export class RegisterUserDto {
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
