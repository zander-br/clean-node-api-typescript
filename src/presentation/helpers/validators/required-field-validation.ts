import { Validation } from '../../protocols/validation';
import { MissingParamError } from '../../errors';

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }

    return null;
  }
}
