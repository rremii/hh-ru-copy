import { Module, NestModule } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { TokenModule } from "../token/token.module"
import { UserService } from "./user.service"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"

@Module({
  imports: [TokenModule, UnitOfWorkModule],
  exports: [UserService],
  providers: [UserService],
  controllers: [],
})
export class UserModule implements NestModule {
  configure() {}
}
