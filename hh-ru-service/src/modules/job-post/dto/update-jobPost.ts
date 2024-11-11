import {
  IsArray,
  IsEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  ValidateIf,
} from "class-validator"

export class UpdateJobPostDto {
  @IsNumber()
  id: number

  title?: string

  description?: string

  salary?: number | string

  requirements?: string[]
}
