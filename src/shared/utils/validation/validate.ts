import { BaseParams, Validator } from "./types"

export const validate = (validatorResults: boolean[]): boolean => {
  return validatorResults.every((validatorResult) => validatorResult)
}
