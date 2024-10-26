import { Module } from "@nestjs/common"
import { UnitOfWorkService } from "./unit-of-work.service"

@Module({
  imports: [],
  controllers: [],
  providers: [UnitOfWorkService],
  exports: [UnitOfWorkService],
})
export class UnitOfWorkModule {}
