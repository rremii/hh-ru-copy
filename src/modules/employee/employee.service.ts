import { Injectable } from "@nestjs/common"
import { Employee } from "./entities/employee.entity"
import { UnitOfWorkService } from "../unit-of-work/unit-of-work.service"
import { CreateEmployeeDto } from "./dto/create-employee.dto"
import { UpdateEmployeeDto } from "./dto/update-employee.dto"
import { CreateEmployerReviewDto } from "../employer-review/dto/create-employerReview.dto"
import { CreateJobApplicationDto } from "../job-application/dto/create-jobApplication.dto"
import { UpdateResumeDto } from "../resume/dto/update-resume.dto"
import { CreateResumeDto } from "../resume/dto/create-resume.dto"

@Injectable()
export class EmployeeService {
  constructor(private readonly uowService: UnitOfWorkService) {}

  async create({ id }: CreateEmployeeDto): Promise<Employee> {
    const employee = new Employee()
    employee.id = id

    return this.uowService.employeeRepository.save(employee)
  }

  update(updateDto: UpdateEmployeeDto) {}

  getResume(employeeId: number) {}

  createResume(createDto: CreateResumeDto) {}

  updateResume(updateDto: UpdateResumeDto) {}

  deleteResume(employeeId: number) {}

  getResumeApplications(employeeId: number) {}

  createJobApplication(createDto: CreateJobApplicationDto) {}

  getJobApplication(employeeId: number) {}

  createEmployerReview(createDto: CreateEmployerReviewDto) {}

  getEmployerReviews(employerId: number) {}
}
