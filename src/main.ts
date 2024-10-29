import { NestFactory } from "@nestjs/core"
import { AppModule } from "./modules/app.module"
import { ConfigService } from "@nestjs/config"
import * as cookieParser from "cookie-parser"
import { AllExceptionsFilter } from "./exception-filters/exception.filter"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new AllExceptionsFilter())

  const configService = app.get(ConfigService)

  app.use(cookieParser())

  const options = new DocumentBuilder()
    .setTitle("HH-RU API")
    .setDescription("HH-RU API description")
    .setVersion("1.0")
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup("api", app, document)

  app.enableCors({
    origin: [configService.get("client_origin"), "*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })

  await app.listen(+configService.get("port") || 5000)
}

bootstrap()
