import { Type } from "class-transformer"
import { IsArray, IsNumber, IsString, ValidateNested } from "class-validator"

export class CreateResumeDto {
  @IsString()
  title: string

  @IsString()
  experience: string

  @IsArray()
  @IsString({ each: true })
  skills: string[]

  @IsString()
  education: string

  @IsNumber()
  employeeId: number
}
