export type BaseParams = {
  msg?: string
  cb: (msg: string) => void
}

export type Validator<Param extends BaseParams> = (params: Param) => boolean
