import { RegisterUserDto } from "./dto/register-user.dto"
import { CreateEmployerDto } from "./../employer/dto/create-employer.dto"
import { CreateEmployeeDto } from "./../employee/dto/create-employee.dto"
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { User, UserRole } from "../user/entities/user.entity"
import { Auth, Repository } from "typeorm"
import { CreateUserDto } from "../user/dto/create-user.dto"
import { ApiError } from "../../common/constants/errors"
import { LoginUserDto } from "./dto/login-user.dto"
import * as bcrypt from "bcrypt"
import { TokenService } from "../token/token.service"
import { TokenResponse } from "./response/token.response"
import { TokenPayload } from "../token/types"
import { JwtService } from "@nestjs/jwt"
import { UserService } from "../user/user.service"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { EmployeeService } from "../employee/employee.service"
import { EmployerService } from "../employer/employer.service"
import { RegisterEmployeeDto } from "./dto/register-employee.dto"
import { RegisterEmployerDto } from "./dto/register-employer.dto"

@Injectable()
export class AuthService {
  constructor(
    private readonly uowService: UnitOfWorkService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly employeeService: EmployeeService,
    private readonly employerService: EmployerService,
  ) {}

  private async updateTokens(user: User) {
    const tokens = await this.tokenService.getTokens(user)
    await this.tokenService.updateRefreshToken(user.id, tokens.refreshToken)
    return tokens
  }

  async registerEmployee(
    registerDto: RegisterEmployeeDto,
  ): Promise<TokenResponse> {
    return this.uowService.makeTransactional(async () => {
      const newUser = await this.userService.create(registerDto)

      await this.employeeService.create({ id: newUser.id })

      return await this.updateTokens(newUser)
    })
  }

  async registerEmployer(
    registerDto: RegisterEmployerDto,
  ): Promise<TokenResponse> {
    return this.uowService.makeTransactional(async () => {
      const newUser = await this.userService.create(registerDto)

      await this.employerService.create({
        id: newUser.id,
        about: registerDto.about,
      })

      return await this.updateTokens(newUser)
    })
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<TokenResponse> {
    const existUser = await this.userService.getByEmail(loginUserDto.email)
    if (!existUser || !existUser.password)
      throw new BadRequestException(ApiError.WRONG_DATA)

    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      existUser.password,
    )
    if (!isPasswordValid) throw new BadRequestException(ApiError.WRONG_DATA)

    const tokens = await this.tokenService.getTokens(existUser)
    await this.tokenService.updateRefreshToken(
      existUser.id,
      tokens.refreshToken,
    )
    return tokens
  }

  async logoutUser(refreshToken: string) {
    const decodedUser = this.jwtService.decode(refreshToken) as TokenPayload
    if (!decodedUser) throw new ForbiddenException("Access Denied")

    const user = await this.uowService.userRepository.update(
      { id: decodedUser.id },
      { refreshToken: null },
    )

    if (!user) throw new ForbiddenException("Access Denied")

    return user
  }
}
