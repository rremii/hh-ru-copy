import { ConfigService } from "@nestjs/config"
import { Transport } from "@nestjs/microservices"

export const hhRuServiceConfig = (configService: ConfigService) => ({
  transport: Transport.RMQ,
  options: {
    urls: configService.get("broker_url"),
    queue: configService.get("hh_ru_service_queue"),
    queueOptions: { durable: false },
  },
})
