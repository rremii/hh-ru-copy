import { Module } from "@nestjs/common"
import { EmployerService } from "./employer.service"
import { EmployerController } from "./employer.controller"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [UnitOfWorkModule],
  providers: [EmployerService],
  controllers: [EmployerController],
  exports: [EmployerService],
})
export class EmployerModule {}
