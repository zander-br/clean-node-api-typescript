export class SignUpController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handle(httpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error('Missing param: name'),
    };
  }
}
