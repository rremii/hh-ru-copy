import { Module } from "@nestjs/common"
import { ResumeService } from "./resume.service"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [UnitOfWorkModule],
  providers: [ResumeService],
  controllers: [],
  exports: [ResumeService],
})
export class ResumeModule {}
