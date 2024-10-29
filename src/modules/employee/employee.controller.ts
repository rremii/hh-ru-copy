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
import { CurrentUser } from "src/decorators/current-user"
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { Roles } from "src/decorators/roles"
import { RoleGuard } from "src/guards/role.guard"
import { UserRole } from "src/modules/user/entities/user.entity"
import { IUser } from "src/modules/user/user.interface"
import { EmployeeService } from "./employee.service"
import { UpdateEmployeeDto } from "./dto/update-employee.dto"
import { CreateResumeDto } from "../resume/dto/create-resume.dto"
import { UpdateResumeDto } from "../resume/dto/update-resume.dto"
import { CreateJobApplicationDto } from "../job-application/dto/create-jobApplication.dto"
import { CreateEmployerReviewDto } from "../employer-review/dto/create-employerReview.dto"
import { DefaultFieldPipe } from "src/pipes/DefaultField.pipe"

@UseGuards(AccessTokenGuard)
@Controller("employee/")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get("resume")
  async getResumes() {
    return this.employeeService.getResumes()
  }

  @Get("resume/:id")
  async getResumeById(@Param("id", ParseIntPipe) id: number) {
    return this.employeeService.getResumeById(id)
  }

  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  @Get("me")
  getMe(@CurrentUser() user: IUser) {
    return user
  }

  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  @Put("me")
  async updateMe(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("id", -1), ValidationPipe)
    updateDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update({ ...updateDto, id: user.id })
  }

  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  @Get("me/resume")
  async getResume(@CurrentUser() user: IUser) {
    return this.employeeService.getResume(user?.id)
  }

  @Post("me/resume")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  async createResume(
    @Body(new DefaultFieldPipe("employeeId", -1), ValidationPipe)
    createDto: CreateResumeDto,
    @CurrentUser() user: IUser,
  ) {
    return this.employeeService.createResume({
      ...createDto,
      employeeId: user.id,
    })
  }

  @Put("me/resume")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  async updateResume(@Body() updateDto: UpdateResumeDto) {
    return this.employeeService.updateResume(updateDto)
  }

  @Delete("me/resume/:id")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  async deleteResume(@Param("id", ParseIntPipe) id: number) {
    return this.employeeService.deleteResume(id)
  }

  @Get("me/resume/resume-application")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  async getResumeApplications(@CurrentUser() user: IUser) {
    return this.employeeService.getResumeApplications(user.id)
  }

  @Post("me/job-application")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  async createJobApplication(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("employeeId", -1), ValidationPipe)
    createDto: CreateJobApplicationDto,
  ) {
    return this.employeeService.createJobApplication({
      ...createDto,
      employeeId: user.id,
    })
  }

  @Get("me/job-application")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  async getJobApplications(@CurrentUser() user: IUser) {
    return this.employeeService.getJobApplications(user.id)
  }

  @Post("me/employer-reviews")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  async createEmployerReview(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("employeeId", -1), ValidationPipe)
    createDto: CreateEmployerReviewDto,
  ) {
    return this.employeeService.createEmployerReview({
      ...createDto,
      employeeId: user.id,
    })
  }

  @Get("me/employer-reviews")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(RoleGuard)
  async getEmployerReviewsByEmployee(@CurrentUser() user: IUser) {
    return this.employeeService.getEmployerReviewsByEmployee(user.id)
  }
}
