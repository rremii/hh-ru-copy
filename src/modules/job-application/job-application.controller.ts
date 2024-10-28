import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common"
import { Roles } from "src/decorators/roles"
import { UserRole } from "../user/entities/user.entity"
import { RoleGuard } from "src/guards/role.guard"
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { CreateJobApplicationDto } from "./dto/create-jobApplication.dto"
import { JobApplicationService } from "./job-application.service"

@Controller("job-application")
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  @Post("")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async create(@Body() createDto: CreateJobApplicationDto) {
    return this.jobApplicationService.create(createDto)
  }

  @Get("")
  @UseGuards(AccessTokenGuard)
  async getAll() {
    return this.jobApplicationService.getAll()
  }
}
