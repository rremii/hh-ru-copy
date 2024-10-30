import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsNumber()
  id: number
}
