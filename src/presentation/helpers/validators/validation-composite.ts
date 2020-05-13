/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import { Validation } from '../../protocols/validation';

export class ValidationComposite implements Validation {
  constructor(private readonly validations: Validation[]) {}

  validate(input: any): Error {
    for (const validation of this.validations) {
      const error = validation.validate(input);

      if (error) {
        return error;
      }
    }

    return null;
  }
}
