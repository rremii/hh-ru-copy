import { Module } from "@nestjs/common"
import { JobPostService } from "./job-post.service"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [UnitOfWorkModule],
  providers: [JobPostService],
  controllers: [],
  exports: [JobPostService],
})
export class JobPostModule {}
