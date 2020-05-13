import { Validation } from '../../protocols/validation';
import { InvalidParamError } from '../../errors';
import { EmailValidator } from '../../protocols/email-validator';

export class EmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator,
  ) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fieldName]);
    if (!isValid) {
      return new InvalidParamError(this.fieldName);
    }

    return null;
  }
}
