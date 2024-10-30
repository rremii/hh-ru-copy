import { IsNumber, IsString } from "class-validator"

export class CreateResumeApplicationDto {
  @IsString()
  coverLetter: string

  @IsNumber()
  resumeId: number

  @IsNumber()
  employerId: number
}
