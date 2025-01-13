import { runModule1 } from './module1'
import { CustomError } from "./custom-error";

export function runModule2() {
  try {
    runModule1()
  } catch (error: unknown) {
    throw new CustomError('Custom Error from module 2', error)
  }
}
