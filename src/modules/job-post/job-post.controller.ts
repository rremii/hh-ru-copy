import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common"
import { JobPostService } from "./job-post.service"
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { DefaultFieldPipe } from "src/pipes/DefaultField.pipe"
import { CreateJobPostDto } from "./dto/create-jobPost"
import { CurrentUser } from "src/decorators/current-user"
import { IUser } from "../user/user.interface"

@Controller("job-post")
@UseGuards(AccessTokenGuard)
export class JobPostController {
  constructor(private readonly jobPostService: JobPostService) {}

  @Get("")
  async getAll() {
    return this.jobPostService.getAll()
  }

  @Get("/:id")
  async get(@Param("id", ParseIntPipe) id: number) {
    return this.jobPostService.getById(id)
  }
}
