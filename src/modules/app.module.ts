import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import configurations from "../configurations"
import { getOrmConfig } from "../configurations/orm.config"
import { MailerModule } from "@nestjs-modules/mailer"
import { getMailConfig } from "../configurations/mail.config"
import { CodeModule } from "./code/code.module"
import { AuthModule } from "./auth/auth.module"
import { UserModule } from "./user/user.module"
import { EmployeeModule } from "./employee/employee.module"
import { EmployerModule } from "./employer/employer.module"
import { UnitOfWorkModule } from "./unit-of-work/unit-of-work.module"
import { ResumeModule } from "./resume/resume.module"
import { ResumeApplicationModule } from "./resume-application/resume-application.module"
import { EmployerReviewsModule } from "./employer-review/employer-review.module"
import { JobApplicationModule } from './job-application/job-application.module';
import { JobPostModule } from './job-post/job-post.module';

@Module({
  imports: [
    CodeModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
      envFilePath: [".development.env", ".env", ".production.env"],
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMailConfig,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getOrmConfig,
      inject: [ConfigService],
    }),
    UnitOfWorkModule,
    EmployeeModule,
    EmployerModule,
    ResumeModule,
    ResumeApplicationModule,
    EmployerReviewsModule,
    JobApplicationModule,
    JobPostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
