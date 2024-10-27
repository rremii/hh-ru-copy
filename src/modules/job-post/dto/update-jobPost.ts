import { IsArray, IsNumber, IsString } from "class-validator"

export class UpdateJobPostDto {
  @IsNumber()
  id: number

  title?: string

  description?: string

  salary?: number

  requirements?: string[]
}
