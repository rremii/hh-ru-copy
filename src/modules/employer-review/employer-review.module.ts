import { Module } from "@nestjs/common"
import { EmployerReviewService } from "./employer-review.service"

@Module({
  controllers: [],
  providers: [EmployerReviewService],
})
export class EmployerReviewsModule {}
