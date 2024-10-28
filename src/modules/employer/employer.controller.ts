import { AccessTokenGuard } from "src/guards/access-token.guard"
import { Roles } from "./../../decorators/roles"
import { Body, Controller, Get, Put, UseGuards } from "@nestjs/common"
import { RoleGuard } from "src/guards/role.guard"
import { UserRole } from "../user/entities/user.entity"
import { CurrentUser } from "src/decorators/current-user"
import { IUser } from "../user/user.interface"
import { UpdateEmployerDto } from "./dto/update-employer.dto"
import { EmployerService } from "./employer.service"

@Controller("employer")
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Get("/me")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(AccessTokenGuard, RoleGuard)
  getMe(@CurrentUser() user: IUser) {
    return user
  }

  @Put("/me")
  @Roles(UserRole.EMPLOYER)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async updateMe(
    @CurrentUser() user: IUser,
    @Body() updateDto: Omit<UpdateEmployerDto, "id">,
  ) {
    return this.employerService.update({ ...updateDto, id: user.id })
  }
}
