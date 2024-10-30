import { IsString } from "class-validator"
import { IsEmail } from "class-validator"
export class SendMailDto {
  @IsEmail()
  email: string

  @IsString()
  payload: string
}
