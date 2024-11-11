import { BaseParams, Validator } from "./types"

interface Params extends BaseParams {
  value: string
}

export const isNotEmpty: Validator<Params> = ({
  value,
  msg = "Field is required",
  cb,
}: Params): boolean => {
  const isValid = !(value === undefined || value === null || value === "")

  if (!isValid) cb(msg)
  return isValid
}
