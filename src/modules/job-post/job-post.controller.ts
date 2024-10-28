import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common"
import { JobPostService } from "./job-post.service"
import { AccessTokenGuard } from "src/guards/access-token.guard"

@Controller("job-post")
@UseGuards(AccessTokenGuard)
export class JobPostController {
  constructor(private readonly jobPostService: JobPostService) {}

  @Get("")
  async getAll() {
    return this.jobPostService.getAll()
  }

  @Get("/:id")
  async get(@Param("id", ParseIntPipe) id: number) {
    return this.jobPostService.getById(id)
  }
}
