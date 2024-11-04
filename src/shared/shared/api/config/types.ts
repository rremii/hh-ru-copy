export class ApiError extends Error {
  constructor(
    public readonly message: string,
    public readonly name: string,
    public readonly options: unknown = {},
    public readonly response: {
      statusCode: number
      message: string
      error: string
    },
    public readonly status: number
  ) {
    super(message)
  }
}

export interface DefaultResponse {
  message: string
}
