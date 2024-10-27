import { IsArray, IsNumber, IsString } from "class-validator"

export class CreateResumeDto {
  @IsNumber()
  title: string

  @IsString()
  experience: string

  @IsArray()
  skills: string[]

  @IsString()
  education: string

  @IsNumber()
  employeeId: number
}
