import { Module } from "@nestjs/common"
import { EmployerService } from "./employer.service"
import { EmployerController } from "./employer.controller"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"
import { TokenModule } from "../token/token.module"

@Module({
  imports: [UnitOfWorkModule, TokenModule],
  providers: [EmployerService],
  controllers: [EmployerController],
  exports: [EmployerService],
})
export class EmployerModule {}
