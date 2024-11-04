// export interface ApiError {
//   message: string
//   name: string
//   options: object
//   response: { statusCode: number; message: string; error: string }
//   status: number
// }

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
