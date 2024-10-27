import { IsNotEmpty, IsString } from "class-validator"
import { UpdateUserDto } from "src/modules/user/dto/update-user.dto"

export class UpdateEmployerDto extends UpdateUserDto {
  about?: string
}
