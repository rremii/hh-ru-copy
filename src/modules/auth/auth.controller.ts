import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common"
import { AuthService } from "./auth.service"
import { LoginUserDto } from "./dto/login-user.dto"
import { TokenService } from "../token/token.service"
import { Request, Response } from "express"
import { GetCookieExpTime } from "../../common/helpers/getCookieExpTime"
import { RegisterEmployerDto } from "./dto/register-employer.dto"
import { RegisterEmployeeDto } from "./dto/register-employee.dto"

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  @Post("register/employer")
  @UsePipes(new ValidationPipe())
  async registerEmployer(
    @Body() registerDto: RegisterEmployerDto,
    @Res() response: Response,
  ) {
    const { accessToken, refreshToken } =
      await this.authService.registerEmployer(registerDto)
    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: false,
      secure: true,
      maxAge: GetCookieExpTime(),
    })
    response.json({ accessToken })
  }

  @Post("register/employee")
  @UsePipes(new ValidationPipe())
  async registerEmployee(
    @Body() registerDto: RegisterEmployeeDto,
    @Res() response: Response,
  ) {
    const { accessToken, refreshToken } =
      await this.authService.registerEmployee(registerDto)
    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: false,
      secure: true,
      maxAge: GetCookieExpTime(),
    })
    response.json({ accessToken })
  }

  @Get("refresh")
  async refreshTokens(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { refreshToken } = request.cookies
    const { accessToken, refreshToken: newRefreshToken } =
      await this.tokenService.refreshTokens(refreshToken)
    response.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,

      maxAge: GetCookieExpTime(),
    })
    return { accessToken }
  }

  @UsePipes(ValidationPipe)
  @Post("login")
  async login(
    @Body() userLoginData: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { accessToken, refreshToken } =
      await this.authService.loginUser(userLoginData)
    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: GetCookieExpTime(),
    })
    return { accessToken }
  }

  @Delete("logout")
  async logout(@Req() request: Request, @Res() response: Response) {
    const { refreshToken } = request.cookies

    await this.authService.logoutUser(refreshToken)

    response.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: GetCookieExpTime(),
    })
    response.json({ message: "you are logged out" })
  }
}
