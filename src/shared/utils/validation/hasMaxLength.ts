import { BaseParams, Validator } from "./types"

interface Params extends BaseParams {
  maxLength: number
  value: string
}

export const hasMaxLength: Validator<Params> = ({
  value,
  maxLength,
  msg = "too long",
  cb,
}: Params): boolean => {
  const isValid = value.length <= maxLength

  if (!isValid) cb(msg)
  return isValid
}
