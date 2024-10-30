import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { Transport } from "@nestjs/microservices"
import { AllExceptionsFilter } from "./exception-filters/exception.filter"

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.BROKER_URL],
      queue: process.env.EMAIL_SERVICE_QUEUE,
      queueOptions: { durable: false },
    },
  })

  app.useGlobalFilters(new AllExceptionsFilter())

  await app.listen()

  console.log("Email service is listening")
}
bootstrap()
