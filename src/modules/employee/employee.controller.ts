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

// по сути наши эндпоинты отражают как мы ходим между сущностями в бд

// таблицы многие ко многим являються границами областей доступа каждой из сущностей, а вся цепь которая идет к ним как один ко дному или один ко многим входит в ее зону доступа

// алгоритм
// определяем доменные сущности,(главные, они будут концами наших зависимостей и все будет к ним сводиться)
// делим весь грав на зоны доступа
// расписываем логику для каждого домена
// а если доспута домену не хватает до делаем общий эндпоинт

//вопросы
//  будучи работником получить все отзыва о компании
//  будучи работником получить всех работодателей
//  будучи работником получить все вакансии конкретной компании
// к домену компании нету доступа у работника!!!
// сделать открытый доступ к домену employers
// но закрытый к employers/me

// все завязанно на доменные сущности,начиная от нее можем найти любую ей доступнуюю и наоборот

@Roles(UserRole.EMPLOYEE)
@UseGuards(AccessTokenGuard, RoleGuard)
@Controller("employee/")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get("me")
  getMe(@CurrentUser() user: IUser) {
    return user
  }

  @Put("me")
  async updateMe(
    @CurrentUser() user: IUser,
    @Body(new DefaultFieldPipe("id", -1), ValidationPipe)
    updateDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update({ ...updateDto, id: user.id })
  }

  @Get("me/resume")
  async getResume(@CurrentUser() user: IUser) {
    return this.employeeService.getResume(user?.id)
  }

  @Post("me/resume")
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

  @Put("me/resume")
  async updateResume(@Body() updateDto: UpdateResumeDto) {
    return this.employeeService.updateResume(updateDto)
  }

  @Delete("me/resume/:id")
  async deleteResume(@Param("id", ParseIntPipe) id: number) {
    return this.employeeService.deleteResume(id)
  }

  @Get("me/resume/resume-application")
  async getResumeApplications(@CurrentUser() user: IUser) {
    return this.employeeService.getResumeApplications(user.id)
  }

  @Post("me/job-application")
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
  async getJobApplications(@CurrentUser() user: IUser) {
    return this.employeeService.getJobApplications(user.id)
  }

  @Post("me/employer-reviews")
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
  async getEmployerReviewsByEmployee(@CurrentUser() user: IUser) {
    return this.employeeService.getEmployerReviewsByEmployee(user.id)
  }

  @Get("employer-reviews/employer/:employerId")
  async getEmployerReviewsByEmployer(
    @Param("employerId", ParseIntPipe) employerId: number,
  ) {
    return this.employeeService.getEmployerReviewsByEmployer(employerId)
  }
}
