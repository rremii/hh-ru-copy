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
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { ResumeService } from "./resume.service"
import { Roles } from "src/decorators/roles"
import { UserRole } from "../user/entities/user.entity"
import { RoleGuard } from "src/guards/role.guard"
import { CreateResumeDto } from "./dto/create-resume.dto"
import { UpdateResumeDto } from "./dto/update-resume.dto"

@Controller("resume")
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}
  @Get("")
  @UseGuards(AccessTokenGuard)
  async getAll() {
    return this.resumeService.getAll()
  }

  @Get("/:id")
  @UseGuards(AccessTokenGuard)
  async get(@Param("id", ParseIntPipe) id: number) {
    return this.resumeService.getById(id)
  }

  @Post("")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async create(@Body() createDto: CreateResumeDto) {
    return this.resumeService.create(createDto)
  }

  @Put("")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async update(@Body() updateDto: UpdateResumeDto) {
    return this.resumeService.update(updateDto)
  }

  @Delete("/:id")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.resumeService.delete(id)
  }
}
