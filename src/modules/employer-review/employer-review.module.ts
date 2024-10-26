import { Module } from "@nestjs/common"
import { EmployerReviewsController } from "./employer-review.controller"
import { EmployerReviewsService } from "./employer-review.service"

@Module({
  controllers: [EmployerReviewsController],
  providers: [EmployerReviewsService],
})
export class EmployerReviewsModule {}
