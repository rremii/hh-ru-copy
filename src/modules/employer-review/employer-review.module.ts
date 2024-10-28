import { Module } from "@nestjs/common"
import { EmployerReviewsService } from "./employer-review.service"

@Module({
  controllers: [],
  providers: [EmployerReviewsService],
})
export class EmployerReviewsModule {}
