import { Injectable, PipeTransform } from "@nestjs/common"

type Value = Record<string, unknown>

@Injectable()
export class DefaultFieldPipe implements PipeTransform<Value, Value> {
  constructor(
    private readonly field: string,
    private readonly defaultValue: unknown,
  ) {}

  transform(value: Value): Value {
    console.log(value)
    return { ...value, [this.field]: this.defaultValue } as Value
  }
}
