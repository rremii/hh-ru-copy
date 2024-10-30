import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common"
import { EmailService } from "./email.service"
import { MessagePattern, Payload } from "@nestjs/microservices"
import { SendMailDto } from "./dto/send-mail.dto"

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern("send_email")
  async sendEmail(@Payload() data: SendMailDto) {
    return this.emailService.sendEmail(data)
  }
}
