export class SignUpController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handle(httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name'),
      };
    }

    return {
      statusCode: 400,
      body: new Error('Missing param: email'),
    };
  }
}
