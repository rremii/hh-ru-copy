import { Module, NestModule } from "@nestjs/common"
import { CodeService } from "./code.service"
import { CodeController } from "./code.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Code } from "./entities/code.entity"
import { User } from "../user/entities/user.entity"
import { UserModule } from "../user/user.module"
import { ClientsModule } from "@nestjs/microservices"
import { emailServiceConfig } from "src/configurations/email-service.config"

@Module({
  imports: [
    TypeOrmModule.forFeature([Code, User]),
    UserModule,
    ClientsModule.registerAsync([emailServiceConfig]),
  ],
  exports: [CodeService],
  providers: [CodeService],
  controllers: [CodeController],
})
export class CodeModule implements NestModule {
  configure() {}
}
