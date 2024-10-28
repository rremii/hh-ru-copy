import { Module } from "@nestjs/common"
import { JobApplicationService } from "./job-application.service"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [UnitOfWorkModule],
  providers: [JobApplicationService],
  controllers: [],
  exports: [JobApplicationService],
})
export class JobApplicationModule {}
