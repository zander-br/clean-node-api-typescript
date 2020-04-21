import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { badRequest, serverError } from '../../helpers/http-helper';
import { MissingParamError, InvalidParamError } from '../../errors';
import { EmailValidator } from '../../protocols/email-validator';
import { Authentication } from '../../../domain/usecases/authentication';

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator;
  private readonly authentication: Authentication;

  constructor(emailValidator: EmailValidator, authentication: Authentication) {
    this.emailValidator = emailValidator;
    this.authentication = authentication;
  }

  // eslint-disable-next-line consistent-return
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body;

      if (!email) {
        return new Promise((resolve) => resolve(
          badRequest(new MissingParamError('email')),
        ));
      }

      if (!password) {
        return new Promise((resolve) => resolve(
          badRequest(new MissingParamError('password')),
        ));
      }

      const isValid = this.emailValidator.isValid(email);
      if (!isValid) {
        return new Promise((resolve) => resolve(
          badRequest(new InvalidParamError('email')),
        ));
      }

      await this.authentication.auth(email, password);
    } catch (error) {
      return serverError(error);
    }
  }
}
