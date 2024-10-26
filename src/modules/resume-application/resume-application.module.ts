import { Module } from '@nestjs/common';
import { ResumeApplicationService } from './resume-application.service';
import { ResumeApplicationController } from './resume-application.controller';

@Module({
  providers: [ResumeApplicationService],
  controllers: [ResumeApplicationController]
})
export class ResumeApplicationModule {}
