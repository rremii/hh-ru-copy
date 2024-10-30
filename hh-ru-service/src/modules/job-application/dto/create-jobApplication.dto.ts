import { IsNumber, IsString } from "class-validator"

export class CreateJobApplicationDto {
  @IsString()
  coverLetter: string
  @IsNumber()
  jobPostId: number
  @IsNumber()
  employeeId: number
}
