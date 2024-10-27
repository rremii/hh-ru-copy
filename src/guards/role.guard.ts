import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { Observable } from "rxjs"
import { ROLE_KEY } from "src/decorators/roles"
import { TokenService } from "src/modules/token/token.service"
import { UserRole } from "src/modules/user/entities/user.entity"

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private tokenService: TokenService,
  ) {}

  canActivate(context: ExecutionContext): boolean | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLE_KEY,
      [context.getHandler(), context.getClass()],
    )

    const request = context.switchToHttp().getRequest()
    const token = request.headers.authorization.split(" ")[1] as string

    const decodedToken = this.tokenService.decodeToken(token)

    if (requiredRoles && requiredRoles.length > 0)
      return requiredRoles.includes(decodedToken?.role)
    return true
  }
}
