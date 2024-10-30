import { Module } from "@nestjs/common"
import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service"
import { TokenModule } from "../token/token.module"
import { AccessTokenStrategy } from "../../strategy/access-token.strategy"
import { RefreshTokenStrategy } from "../../strategy/refresh-token.strategy"
import { ConfigService } from "@nestjs/config"
import { JwtModule } from "@nestjs/jwt"
import { UserModule } from "../user/user.module"
import { UnitOfWorkModule } from "../unit-of-work/unit-of-work.module"
import { EmployeeModule } from "../employee/employee.module"
import { EmployerModule } from "../employer/employer.module"

@Module({
  imports: [
    UserModule,
    JwtModule,
    TokenModule,
    UnitOfWorkModule,
    EmployeeModule,
    EmployerModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    ConfigService,
  ],
})
export class AuthModule {}
