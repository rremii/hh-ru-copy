import { Module } from "@nestjs/common"
import { JobApplicationService } from "./job-application.service"

@Module({
  providers: [JobApplicationService],
  controllers: [],
})
export class JobApplicationModule {}
