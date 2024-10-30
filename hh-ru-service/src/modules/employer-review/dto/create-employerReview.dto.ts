import { IsNumber, IsString } from "class-validator"

export class CreateEmployerReviewDto {
  @IsString()
  comment: string
  @IsNumber()
  employeeId: number
  @IsNumber()
  employerId: number
}
