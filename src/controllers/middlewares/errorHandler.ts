import { ErrorRequestHandler } from 'express';
import APIError from '../../utils/errorClass';

const errorHandler: ErrorRequestHandler = (err: APIError, _req, res, _next) => {
  interface Map {
    [key: string]: number | undefined,
  }

  // unexpected error
  if (!err.code) {
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }

  const errorMap: Map = {
    alreadyExists: 409,
    notFound: 404,
    badRequest: 400,
    unauthorized: 401,
  };

  const code: number = errorMap[err.code] || 500;

  // domain error
  res.status(code).json({ error: err.message });
};

export default errorHandler;
