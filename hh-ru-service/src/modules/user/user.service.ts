import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { BadRequestException, Injectable } from "@nestjs/common"
import { TokenService } from "../token/token.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { HashData } from "./../../common/helpers/hashData"
import { ApiError } from "./../../common/constants/errors"
import { UpdateUserDto } from "./dto/update-user.dto"
import { User } from "./entities/user.entity"
import { UserInfoDto } from "./dto/user-info.dto"

@Injectable()
export class UserService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly uowService: UnitOfWorkService,
  ) {}

  async create({ email, password, name, role }: CreateUserDto): Promise<User> {
    const existUser = await this.getByEmail(email)
    if (existUser) throw new BadRequestException(ApiError.USER_EXIST)

    const user = new User()
    user.email = email
    user.name = name
    user.role = role
    user.password = await HashData(password)

    return this.uowService.userRepository.save(user)
  }

  async update({ id, name }: UpdateUserDto) {
    const user = await this.uowService.userRepository.findOneBy({ id })
    if (!user) throw new BadRequestException(ApiError.USER_NOT_FOUND)

    if (name) user.name = name

    return this.uowService.userRepository.save(user)
  }

  async getByToken(authToken: string): Promise<UserInfoDto> {
    const decodedUser = await this.tokenService.decodeToken(authToken)
    if (!decodedUser) throw new BadRequestException(ApiError.USER_NOT_FOUND)

    const user = this.uowService.userRepository.findOne({
      where: { id: decodedUser.id },
      select: ["id", "email", "name"],
    })

    if (!user) throw new BadRequestException(ApiError.USER_NOT_FOUND)
    return user
  }
  async getByEmail(email: string): Promise<User> {
    return this.uowService.userRepository.findOneBy({ email })
  }
  async getById(id: number): Promise<User> {
    return this.uowService.userRepository.findOneBy({ id })
  }
}
