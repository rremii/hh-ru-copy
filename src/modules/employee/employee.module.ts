import { Module } from "@nestjs/common"
import { EmployeeService } from "./employee.service"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"
import { EmployeeController } from "./employee.controller"
import { TokenModule } from "../token/token.module"

@Module({
  imports: [UnitOfWorkModule, TokenModule],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService],
})
export class EmployeeModule {}
