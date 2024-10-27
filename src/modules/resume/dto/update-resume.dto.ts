import { IsArray, IsNumber, IsString } from "class-validator"

export class CreateResumeDto {
  @IsNumber()
  id: number

  title?: string

  experience?: string

  skills?: string[]

  education?: string
}
