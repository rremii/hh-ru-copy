import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
import { ApiBody, ApiOperation, ApiResponse } from "@nestjs/swagger"
import { TokenResponse } from "./response/token.response"
import { UserRole } from "../user/user.interface"

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  @ApiOperation({ summary: "Register Employer" })
  @ApiBody({ type: RegisterEmployerDto })
  @ApiResponse({
    status: 200,
    description: "Successfully registered",
    type: TokenResponse,
  })
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

  @ApiOperation({ summary: "Register Employee" })
  @ApiBody({ type: RegisterEmployeeDto })
  @ApiResponse({
    status: 200,
    description: "Successfully registered",
    type: TokenResponse,
  })
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

  @ApiOperation({ summary: "Refresh tokens" })
  @ApiResponse({
    status: 200,
    description: "Successfully refreshed",
    type: TokenResponse,
  })
  @Get("refresh/:role")
  async refreshTokens(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
    @Param("role") role: UserRole,
  ) {
    const { refreshToken } = request.cookies
    const { accessToken, refreshToken: newRefreshToken } =
      await this.tokenService.refreshTokens(refreshToken, role)
    response.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,

      maxAge: GetCookieExpTime(),
    })
    return { accessToken }
  }

  @ApiOperation({ summary: "Login user" })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 200,
    description: "Successfully registered",
    type: TokenResponse,
  })
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

  @ApiOperation({ summary: "Log out user" })
  @ApiResponse({
    status: 200,
    description: "Successfully logout",
  })
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
