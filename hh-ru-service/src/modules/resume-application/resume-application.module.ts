import { Module } from "@nestjs/common"
import { ResumeApplicationService } from "./resume-application.service"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [UnitOfWorkModule],
  providers: [ResumeApplicationService],
  exports: [ResumeApplicationService],
  controllers: [],
})
export class ResumeApplicationModule {}
