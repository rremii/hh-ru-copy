import { Module } from "@nestjs/common"
import { EmployerReviewService } from "./employer-review.service"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [UnitOfWorkModule],
  controllers: [],
  providers: [EmployerReviewService],
  exports: [EmployerReviewService],
})
export class EmployerReviewsModule {}
