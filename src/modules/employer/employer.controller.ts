import { CreateResumeApplicationDto } from "./../resume-application/dto/create-resumeApplication.dto"
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { Roles } from "./../../decorators/roles"
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common"
import { RoleGuard } from "src/guards/role.guard"
import { UserRole } from "../user/entities/user.entity"
import { CurrentUser } from "src/decorators/current-user"
import { IUser } from "../user/user.interface"
import { UpdateEmployerDto } from "./dto/update-employer.dto"
import { EmployerService } from "./employer.service"
import { CreateJobPostDto } from "../job-post/dto/create-jobPost"
import { UpdateJobPostDto } from "../job-post/dto/update-jobPost"
import { DefaultFieldPipe } from "src/pipes/DefaultField.pipe"

@Roles(UserRole.EMPLOYER)
@UseGuards(AccessTokenGuard, RoleGuard)
@Controller("employer/me/")
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Get("")
  getMe(@CurrentUser() user: IUser) {
    return user
  }

  @Put("")
  async updateMe(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("id", -1))
    updateDto: UpdateEmployerDto,
  ) {
    return this.employerService.update({ ...updateDto, id: user.id })
  }

  @Get("job-post")
  async getJobPosts(@CurrentUser() user: IUser) {
    return this.employerService.getJobPosts(user?.id)
  }

  @Post("job-post")
  async createJobPost(
    @Body(new DefaultFieldPipe("employerId", -1), ValidationPipe)
    createDto: CreateJobPostDto,
    @CurrentUser() user: IUser,
  ) {
    return this.employerService.createJobPost({
      ...createDto,
      employerId: user.id,
    })
  }

  @Put("job-post")
  async updateJobPost(@Body(ValidationPipe) updateDto: UpdateJobPostDto) {
    return this.employerService.updateJobPost(updateDto)
  }

  @Get("job-post/:jobPostId/job-application")
  async getJobApplications(@Param("jobPostId") jobPostId: number) {
    return this.employerService.getJobApplications(jobPostId)
  }

  @Delete("job-post/:id")
  async deleteJobPost(@Param("id", ParseIntPipe) id: number) {
    return this.employerService.deleteJobPost(id)
  }

  @Post("resume-application")
  async createResumeApplication(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("employerId", -1), ValidationPipe)
    createDto: CreateResumeApplicationDto,
  ) {
    return this.employerService.createResumeApplication({
      ...createDto,
      employerId: user.id,
    })
  }

  @Get("resume-application")
  async getResumeApplication(@CurrentUser() user: IUser) {
    return this.employerService.getResumeApplications(user.id)
  }

  @Get("reviews")
  async getEmployerReviews(@CurrentUser() user: IUser) {
    return this.employerService.getEmployerReviews(user.id)
  }
}
