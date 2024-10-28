import { Body, Controller, Get, Put, UseGuards } from "@nestjs/common"
import { CurrentUser } from "src/decorators/current-user"
import { IUser } from "../user/user.interface"
import { AccessTokenGuard } from "src/guards/access-token.guard"
import { Roles } from "src/decorators/roles"
import { UserRole } from "../user/entities/user.entity"
import { RoleGuard } from "src/guards/role.guard"
import { UpdateUserDto } from "../user/dto/update-user.dto"
import { UpdateEmployeeDto } from "./dto/update-employee.dto"
import { EmployeeService } from "./employee.service"

@Controller("employee")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get("/me")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(AccessTokenGuard, RoleGuard)
  getMe(@CurrentUser() user: IUser) {
    return user
  }

  @Put("/me")
  @Roles(UserRole.EMPLOYEE)
  @UseGuards(AccessTokenGuard, RoleGuard)
  async updateMe(
    @CurrentUser() user: IUser,
    @Body() updateDto: Omit<UpdateEmployeeDto, "id">,
  ) {
    return this.employeeService.update({ ...updateDto, id: user.id })
  }
}
