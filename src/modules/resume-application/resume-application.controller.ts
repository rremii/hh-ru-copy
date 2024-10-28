import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common"
import { Roles } from "src/decorators/roles"
import { UserRole } from "../user/entities/user.entity"
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { RoleGuard } from "src/guards/role.guard"
import { CreateResumeApplicationDto } from "./dto/create-resumeApplication.dto"
import { ResumeApplicationService } from "./resume-application.service"

@Controller("resume-application")
export class ResumeApplicationController {
  constructor(
    private readonly resumeApplicationService: ResumeApplicationService,
  ) {}

  @Post("")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async create(@Body() createDto: CreateResumeApplicationDto) {
    return this.resumeApplicationService.create(createDto)
  }

  @Get("/employer/:id")
  @UseGuards(AccessTokenGuard)
  async getAllByEmployerId() {
    return this.resumeApplicationService.getAllByEmployerId()
  }

  @Get("/employee/:id")
  @UseGuards(AccessTokenGuard)
  async getAllByEmployeeId() {
    return this.resumeApplicationService.getAllByEmployeeId()
  }
}
