import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";
import { cpf } from "cpf-cnpj-validator";

@ValidatorConstraint({ name: "isCpf", async: false })
export class IsCpfValidator implements ValidatorConstraintInterface {
  validate(text: string, _: ValidationArguments) {
    return cpf.isValid(text);
  }

  defaultMessage(args: ValidationArguments) {
    return `Text ${args.value} is not a valid CPF!`;
  }
}
