import { ConfigService } from "@nestjs/config"
import { User } from "../modules/user/entities/user.entity"
import { Code } from "../modules/code/entities/code.entity"
import { Employee } from "src/modules/employee/entities/employee.entity"
import { Employer } from "src/modules/employer/entities/employer.entity"
import { Resume } from "src/modules/resume/entities/resume.entity"
import { ResumeApplication } from "src/modules/resume-application/entities/resume-application.entity"
import { EmployerReview } from "src/modules/employer-review/entities/employer-review.entity"
import { JobPost } from "src/modules/job-post/entities/job-post.entity"
import { JobApplication } from "src/modules/job-application/entities/job-application.entity"
import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const getOrmConfig = async (
  config: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  return {
    type: "postgres",

    host: config.get("db_host"),
    port: config.get("db_port"),
    username: config.get("db_user_name"),
    password: config.get("db_password"),
    database: config.get("db_name"),
    synchronize: true,
    logging: true,
    entities: [
      User,
      Code,
      Employee,
      Employer,
      Resume,
      ResumeApplication,
      EmployerReview,
      JobPost,
      JobApplication,
    ],

    // ssl: true,
    // extra: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
  }
}
