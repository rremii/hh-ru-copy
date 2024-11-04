import { UserRole } from "./../../user/user.interface"
import { Test, TestingModule } from "@nestjs/testing"
import * as request from "supertest"
import { INestApplication, ValidationPipe } from "@nestjs/common"
import { AuthController } from "../auth.controller"
import { AuthService } from "../auth.service"
import { RegisterEmployerDto } from "../dto/register-employer.dto"
import { LoginUserDto } from "../dto/login-user.dto"
import { RegisterEmployeeDto } from "../dto/register-employee.dto"
import { TokenService } from "./../../token/token.service"

describe("AuthController", () => {
  let app: INestApplication
  const authService = {
    registerEmployer: jest.fn(),
    registerEmployee: jest.fn(),
    loginUser: jest.fn(),
    logoutUser: jest.fn(),
  }
  const tokenService = {
    refreshTokens: jest.fn(),
  }

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: TokenService, useValue: tokenService },
      ],
    }).compile()

    app = module.createNestApplication()
    app.useGlobalPipes(new ValidationPipe())
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  it("should register an employer", async () => {
    const registerDto: RegisterEmployerDto = {
      about: "about",
      name: "name",
      email: "email@email.com",
      password: "password",
      role: UserRole.EMPLOYER,
    }
    authService.registerEmployer.mockResolvedValue({
      accessToken: "access_token",
      refreshToken: "refresh_token",
    })

    const response = await request(app.getHttpServer())
      .post("/auth/register/employer")
      .send(registerDto)

    expect(response.status).toBe(201)
    expect(response.body).toEqual({ accessToken: "access_token" })
    expect(response.headers["set-cookie"]).toBeDefined()
  })

  it("should register an employee", async () => {
    const registerDto: RegisterEmployeeDto = {
      name: "name",
      email: "email@email.com",
      password: "password",
      role: UserRole.EMPLOYEE,
    }
    authService.registerEmployee.mockResolvedValue({
      accessToken: "access_token",
      refreshToken: "refresh_token",
    })

    const response = await request(app.getHttpServer())
      .post("/auth/register/employee")
      .send(registerDto)

    expect(response.status).toBe(201)
    expect(response.body).toEqual({ accessToken: "access_token" })
    expect(response.headers["set-cookie"]).toBeDefined()
  })

  it("should login user", async () => {
    const loginDto: LoginUserDto = {
      email: "email@email.com",
      password: "password",
    }
    authService.loginUser.mockResolvedValue({
      accessToken: "access_token",
      refreshToken: "refresh_token",
    })

    const response = await request(app.getHttpServer())
      .post("/auth/login")
      .send(loginDto)

    expect(response.status).toBe(201)
    expect(response.body).toEqual({ accessToken: "access_token" })
    expect(response.headers["set-cookie"]).toBeDefined()
  })
})
