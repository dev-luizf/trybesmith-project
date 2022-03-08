type httpCode = 'alreadyExists' | 'notFound' | 'badRequest' | 'unauthorized';

class APIError {
  private code: httpCode;
  private message: string;

  constructor(message: string, code: httpCode) {
    this.code = code;
    this.message = message;
  }
}

export default APIError;
