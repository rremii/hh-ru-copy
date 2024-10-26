import { Module, NestModule } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { TokenModule } from "../token/token.module"
import { UserService } from "./user.service"
import { UserController } from "./user.controller"
import { ConfigModule } from "@nestjs/config"
import { EmployeeModule } from "../employee/employee.module"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [TokenModule, ConfigModule, UnitOfWorkModule, EmployeeModule],
  exports: [UserService],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure() {}
}
