import { Module } from "@nestjs/common"
import { ResumeService } from "./resume.service"
import { ResumeController } from "./resume.controller"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [UnitOfWorkModule],
  providers: [ResumeService],
  controllers: [ResumeController],
  exports: [ResumeService],
})
export class ResumeModule {}
