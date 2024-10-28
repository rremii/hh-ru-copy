import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common"
import { Roles } from "src/decorators/roles"
import { UserRole } from "../user/entities/user.entity"
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { RoleGuard } from "src/guards/role.guard"
import { EmployerReviewsService } from "./employer-review.service"
import { CreateEmployerReviewDto } from "./dto/create-employerReview.dto"

@Controller("employer-reviews")
export class EmployerReviewsController {
  constructor(
    private readonly employerReviewsService: EmployerReviewsService,
  ) {}

  @Post("")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async create(@Body() createDto: CreateEmployerReviewDto) {
    return this.employerReviewsService.create(createDto)
  }

  @Get("")
  @UseGuards(AccessTokenGuard)
  async getAll() {
    return this.employerReviewsService.getAll()
  }
}
