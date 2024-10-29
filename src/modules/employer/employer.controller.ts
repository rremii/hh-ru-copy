import { CreateResumeApplicationDto } from "./../resume-application/dto/create-resumeApplication.dto"
import { AccessTokenGuard } from "./../../guards/access-token.guard"
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
import { RoleGuard } from "./../../guards/role.guard"
import { UserRole } from "../user/entities/user.entity"
import { CurrentUser } from "./../../decorators/current-user"
import { IUser } from "../user/user.interface"
import { UpdateEmployerDto } from "./dto/update-employer.dto"
import { EmployerService } from "./employer.service"
import { CreateJobPostDto } from "../job-post/dto/create-jobPost"
import { UpdateJobPostDto } from "../job-post/dto/update-jobPost"
import { DefaultFieldPipe } from "./../../pipes/DefaultField.pipe"

@UseGuards(AccessTokenGuard)
@Controller("employer/")
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Get(":id")
  async getById(@Param("id", ParseIntPipe) id: number) {
    return this.employerService.getById(id)
  }

  @Get("job-post")
  async getJobPosts() {
    return this.employerService.getPostJobs()
  }

  @Get("job-post/:id")
  async getPostJobById(@Param("id", ParseIntPipe) id: number) {
    return this.employerService.getPostJobById(id)
  }

  @Get("me")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
  getMe(@CurrentUser() user: IUser) {
    return user
  }

  @Put("me")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
  async updateMe(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("id", -1))
    updateDto: UpdateEmployerDto,
  ) {
    return this.employerService.update({ ...updateDto, id: user.id })
  }

  @Get("me/job-post")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
  async getJobPostsByEmployer(@CurrentUser() user: IUser) {
    return this.employerService.getJobPostsByEmployerId(user?.id)
  }

  @Post("me/job-post")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
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

  @Put("me/job-post")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
  async updateJobPost(@Body(ValidationPipe) updateDto: UpdateJobPostDto) {
    return this.employerService.updateJobPost(updateDto)
  }

  @Get("me/job-post/:jobPostId/job-application")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
  async getJobApplications(@Param("jobPostId") jobPostId: number) {
    return this.employerService.getJobApplications(jobPostId)
  }

  @Delete("me/job-post/:id")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
  async deleteJobPost(@Param("id", ParseIntPipe) id: number) {
    return this.employerService.deleteJobPost(id)
  }

  @Post("me/resume-application")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
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

  @Get("me/resume-application")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
  async getResumeApplication(@CurrentUser() user: IUser) {
    return this.employerService.getResumeApplications(user.id)
  }

  @Get("me/employer-reviews")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(RoleGuard)
  async getEmployerReviews(@CurrentUser() user: IUser) {
    return this.employerService.getEmployerReviews(user.id)
  }
}
