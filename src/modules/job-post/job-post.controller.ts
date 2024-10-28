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
} from "@nestjs/common"
import { JobPostService } from "./job-post.service"
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { Roles } from "src/decorators/roles"
import { UserRole } from "../user/entities/user.entity"
import { RoleGuard } from "src/guards/role.guard"
import { CreateJobPostDto } from "./dto/create-jobPost"
import { UpdateJobPostDto } from "./dto/update-jobPost"

@Controller("job-post")
export class JobPostController {
  constructor(private readonly jobPostService: JobPostService) {}

  @Get("")
  @UseGuards(AccessTokenGuard)
  async getAll() {
    return this.jobPostService.getAll()
  }

  @Get("/:id")
  @UseGuards(AccessTokenGuard)
  async get(@Param("id", ParseIntPipe) id: number) {
    return this.jobPostService.getById(id)
  }

  @Post("")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async create(@Body() createDto: CreateJobPostDto) {
    return this.jobPostService.create(createDto)
  }

  @Put("")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async update(@Body() updateDto: UpdateJobPostDto) {
    return this.jobPostService.update(updateDto)
  }

  @Delete("/:id")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.jobPostService.delete(id)
  }
}
