import { Controller, Get, Param } from "@nestjs/common"
import { JobApplicationService } from "./job-application.service"

@Controller("job-application")
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  @Get("/:jobPostId")
  async getJobApplications(@Param("jobPostId") jobPostId: number) {
    return this.jobApplicationService.getByJobPostId(jobPostId)
  }
}
