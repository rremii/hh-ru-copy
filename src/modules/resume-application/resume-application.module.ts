import { Module } from "@nestjs/common"
import { ResumeApplicationService } from "./resume-application.service"

@Module({
  providers: [ResumeApplicationService],
  controllers: [],
})
export class ResumeApplicationModule {}
