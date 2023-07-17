// deno-lint-ignore-file no-prototype-builtins
import {
  type ArgsClienteFisico,
} from '@clienteFisico'
import { ExceptionsMessages, OutputThrowObject } from "@globalEntitys"


const hasPropertyID = async (args: ArgsClienteFisico) => {
  if (await args.hasOwnProperty('ID')) {
    OutputThrowObject(ExceptionsMessages.feedbackExistID())
  }
}

export { hasPropertyID }