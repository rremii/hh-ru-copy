import { IsArray, IsNumber, IsString } from "class-validator"

export class UpdateResumeDto {
  @IsNumber()
  id: number

  title?: string

  experience?: string

  skills?: string[]

  education?: string
}
