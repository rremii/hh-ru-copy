import { JobApplicationModule } from "./../job-application/job-application.module"
import { Module } from "@nestjs/common"
import { EmployeeService } from "./employee.service"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"
import { EmployeeController } from "./employee.controller"
import { TokenModule } from "../token/token.module"
import { UserModule } from "../user/user.module"
import { ResumeModule } from "../resume/resume.module"
import { EmployerReviewsModule } from "../employer-review/employer-review.module"

@Module({
  imports: [
    UnitOfWorkModule,
    TokenModule,
    UserModule,
    ResumeModule,
    JobApplicationModule,
    EmployerReviewsModule,
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService],
})
export class EmployeeModule {}
