import { IsNumber, IsString } from "class-validator"

export class CreateResumeApplication {
  @IsString()
  coverLetter: string

  @IsNumber()
  resumeId: number

  @IsNumber()
  employerId: number
}
