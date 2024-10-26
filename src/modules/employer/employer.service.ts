import { Injectable } from "@nestjs/common"
import { CreateEmployerDto } from "./dto/create-employer.dto"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { Employer } from "./entities/employer.entity"

@Injectable()
export class EmployerService {
  constructor(private readonly uowService: UnitOfWorkService) {}

  create({ about, id }: CreateEmployerDto): Promise<Employer> {
    const employer = new Employer()
    employer.id = id
    employer.about = about

    return this.uowService.employerRepository.save(employer)
  }
}
