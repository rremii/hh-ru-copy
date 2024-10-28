import { Injectable } from "@nestjs/common"
import { Employee } from "./entities/employee.entity"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { CreateEmployeeDto } from "./dto/create-employee.dto"
import { UpdateEmployeeDto } from "./dto/update-employee.dto"

@Injectable()
export class EmployeeService {
  constructor(private readonly uowService: UnitOfWorkService) {}

  async create({ id }: CreateEmployeeDto): Promise<Employee> {
    const employee = new Employee()
    employee.id = id

    return this.uowService.employeeRepository.save(employee)
  }

  update(updateDto: UpdateEmployeeDto) {}
}
