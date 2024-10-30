import { ConfigModule, ConfigService } from "@nestjs/config"
import { IoCTypes } from "./../../IoC"
import { ClientsProviderAsyncOptions, Transport } from "@nestjs/microservices"

export const emailServiceConfig: ClientsProviderAsyncOptions = {
  name: IoCTypes.EMAIL_SERVICE,
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    transport: Transport.RMQ,
    options: {
      urls: [String(configService.get("broker_url"))],
      queue: String(configService.get("email_service_queue")),
      queueOptions: {
        durable: false,
      },
    },
  }),
  inject: [ConfigService],
}
