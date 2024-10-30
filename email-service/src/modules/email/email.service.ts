import { Inject, Injectable } from "@nestjs/common"
import { SendMailDto } from "./dto/send-mail.dto"
import { MailerService } from "@nestjs-modules/mailer"

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail({ email, payload }: SendMailDto): Promise<string> {
    await this.mailerService.sendMail({
      to: email,
      from: "remi mail sender",
      subject: "confirm email",
      text: "please confirm your email",
      html: `<div>${payload}</div>`,
    })

    return "email was sent"
  }
}
