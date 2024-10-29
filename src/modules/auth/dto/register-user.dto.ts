import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"
import { UserRole } from "src/modules/user/entities/user.entity"

export class RegisterUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { message: "invalid email" })
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole
}
