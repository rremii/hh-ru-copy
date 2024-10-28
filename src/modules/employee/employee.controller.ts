import {
  ArgumentMetadata,
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
  PipeTransform,
  Post,
  Put,
  UseGuards,
  UsePipes,
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

//todo if endpoint can exist without domain entity better not to join it

//если экнпоинт напрямую зависит от доменной сущ то связываем если нет то нет
//например получение всех своих откликов на вокансии
// и получение всех откликов на вакансии

//типо если общий эндпоинт то не надо связывать
@Roles(UserRole.EMPLOYEE)
@UseGuards(AccessTokenGuard, RoleGuard)
@Controller("employee/me/")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get("")
  getMe(@CurrentUser() user: IUser) {
    return user
  }

  @Put("")
  async updateMe(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("id", -1), ValidationPipe)
    updateDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update({ ...updateDto, id: user.id })
  }

  @Get("resume")
  async getResume(@CurrentUser() user: IUser) {
    return this.employeeService.getResume(user?.id)
  }

  @Post("resume")
  @UsePipes()
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

  @Put("resume")
  async updateResume(@Body() updateDto: UpdateResumeDto) {
    return this.employeeService.updateResume(updateDto)
  }

  @Delete("resume/:id")
  async deleteResume(@Param("id", ParseIntPipe) id: number) {
    return this.employeeService.deleteResume(id)
  }

  @Get("resume/resume-application")
  async getResumeApplications(@CurrentUser() user: IUser) {
    return this.employeeService.getResumeApplications(user.id)
  }

  @Post("job-application")
  async createJobApplication(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("employeeId", -1), ValidationPipe)
    createDto: Omit<CreateJobApplicationDto, "employeeId">,
  ) {
    return this.employeeService.createJobApplication({
      ...createDto,
      employeeId: user.id,
    })
  }

  @Get("job-application")
  async getJobApplications(@CurrentUser() user: IUser) {
    return this.employeeService.getJobApplications(user.id)
  }

  @Post("employer-reviews")
  async createEmployerReview(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("employeeId", -1), ValidationPipe)
    createDto: Omit<CreateEmployerReviewDto, "employeeId">,
  ) {
    return this.employeeService.createEmployerReview({
      ...createDto,
      employeeId: user.id,
    })
  }

  @Get("employer-reviews")
  async getEmployerReviews(@CurrentUser() user: IUser) {
    return this.employeeService.getEmployerReviews(user.id)
  }
}
