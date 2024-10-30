import { Module } from "@nestjs/common"
import { EmployerService } from "./employer.service"
import { EmployerController } from "./employer.controller"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"
import { TokenModule } from "../token/token.module"
import { JobPostModule } from "../job-post/job-post.module"
import { ResumeApplicationModule } from "../resume-application/resume-application.module"

@Module({
  imports: [
    UnitOfWorkModule,
    TokenModule,
    JobPostModule,
    ResumeApplicationModule,
  ],
  providers: [EmployerService],
  controllers: [EmployerController],
  exports: [EmployerService],
})
export class EmployerModule {}
