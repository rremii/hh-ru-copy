import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Req,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common"
import { UserService } from "./user.service"
import { AccessTokenGuard } from "src/guards/access-token.guard"

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get("/test")
  // @Roles(UserRole.EMPLOYER)
  // @UseGuards(AccessTokenGuard, RoleGuard)
  // test(@CurrentUser() user: IUser) {
  //   console.log(user)
  //   return "passed"
  // }

  @Get("/me")
  @UseGuards(AccessTokenGuard)
  getMe(@Req() request: Request) {
    if (!("authorization" in request.headers)) throw new UnauthorizedException()
    const authHeader = request.headers.authorization as string

    const authToken = authHeader.split(" ")[1]

    return this.userService.getByToken(authToken)
  }

  // @Put("/me")
  // @UseGuards(AccessTokenGuard)
  // updateMe(@Body() updateDto: UpdateUserDto) {
  //   return this.userService.update(updateDto)
  // }

  @Get("/:id")
  @UseGuards(AccessTokenGuard)
  getById(@Param("id") id: number) {
    return this.userService.getById(id)
  }
}
