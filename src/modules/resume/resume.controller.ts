import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common"
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { ResumeService } from "./resume.service"

@Controller("resume")
@UseGuards(AccessTokenGuard)
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}
  @Get("")
  async getAll() {
    return this.resumeService.getAll()
  }

  @Get("/:id")
  async get(@Param("id", ParseIntPipe) id: number) {
    return this.resumeService.getById(id)
  }
}
