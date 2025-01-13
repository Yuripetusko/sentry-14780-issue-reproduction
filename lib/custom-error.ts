export class CustomError extends Error {
  name = 'CustomError'

  constructor(message: string, cause?: unknown) {
    super(message, { cause })
  }
}
