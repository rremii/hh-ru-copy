import { UpdateUserDto } from "./../../user/dto/update-user.dto"

export class UpdateEmployerDto extends UpdateUserDto {
  about?: string
}
