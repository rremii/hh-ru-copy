import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateJobPostDto {
  @IsString()
  title: string

  @IsString()
  description: string

  @IsString()
  salary: number

  @IsArray()
  requirements: string[]

  @IsNumber()
  employerId: number
}
