import { Module } from "@nestjs/common"
import { JobPostService } from "./job-post.service"
import { JobPostController } from "./job-post.controller"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [UnitOfWorkModule],
  providers: [JobPostService],
  controllers: [JobPostController],
  exports: [JobPostService],
})
export class JobPostModule {}
