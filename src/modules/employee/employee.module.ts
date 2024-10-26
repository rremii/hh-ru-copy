import { Module } from "@nestjs/common"
import { EmployeeService } from "./employee.service"
import { EmployeeController } from "./employee.controller"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [UnitOfWorkModule],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService],
})
export class EmployeeModule {}
