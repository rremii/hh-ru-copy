import { Injectable, Logger, NestMiddleware } from "@nestjs/common"
import { Request, Response, NextFunction } from "express"

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(`HTTP`)
  use(req: Request, res: Response, next: NextFunction) {
    const endpoint = req.originalUrl
    const method = req.method
    const body = req.body
    const query = req.query

    this.logger.log(
      `${method} ${endpoint} body: ${JSON.stringify(body)} query: ${JSON.stringify(query)}`,
    )

    next()
  }
}
