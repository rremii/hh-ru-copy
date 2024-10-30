import { ConfigModule } from "@nestjs/config"
import { ConfigService } from "@nestjs/config"
import { Module } from "@nestjs/common"
import { EmailController } from "./modules/email/email.controller"
import { EmailService } from "./modules/email/email.service"
import { MailerModule } from "@nestjs-modules/mailer"
import { getMailConfig } from "./configurations/mail.config"
import configurations from "./configurations"

@Module({
  imports: [
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
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class AppModule {}
