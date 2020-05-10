import { Validation } from './validation';
import { InvalidParamError } from '../../errors';

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string;
  private readonly fieldToCompareName: string;

  constructor(fieldName: string, fieldToCompareName) {
    this.fieldName = fieldName;
    this.fieldToCompareName = fieldToCompareName;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(input: any): Error {
    if (!input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName);
    }

    return null;
  }
}
