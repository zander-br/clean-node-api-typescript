import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { badRequest } from '../../helpers/http-helper';
import { MissingParamError } from '../../errors';

export class LoginController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line consistent-return
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return new Promise((resolve) => resolve(
        badRequest(new MissingParamError('email')),
      ));
    }

    if (!httpRequest.body.password) {
      return new Promise((resolve) => resolve(
        badRequest(new MissingParamError('password')),
      ));
    }
  }
}
