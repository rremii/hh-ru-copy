import { IsNumber, IsString } from "class-validator"

export class CreateEmployerReview {
  @IsString()
  comment: string
  @IsNumber()
  employeeId: number
  @IsNumber()
  employerId: number
}
