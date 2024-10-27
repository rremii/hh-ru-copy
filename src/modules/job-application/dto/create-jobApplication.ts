import { IsNumber, IsString } from "class-validator"

export class CreateJobApplication {
  @IsString()
  coverLetter: string
  @IsNumber()
  jobPostId: number
  @IsNumber()
  employeeId: number
}
