import { Controller, Get, Param, UseGuards } from "@nestjs/common"
import { UserService } from "./user.service"
import { AccessTokenGuard } from "src/guards/access-token.guard"

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/:id")
  @UseGuards(AccessTokenGuard)
  getById(@Param("id") id: number) {
    return this.userService.getById(id)
  }
}
