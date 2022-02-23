import { ErrorRequestHandler } from 'express';
import DomainError from '../../utils/DomainError';

const errorHandler: ErrorRequestHandler = (err: DomainError, _req, res, _next) => {
  interface Map {
    [key: string]: number | undefined,
  }

  const errorMap: Map = {
    alreadyExists: 409,
    notFound: 404,
    badRequest: 400,
    unauthorized: 401,
  };

  const status = errorMap[err.code];

  if (!status) {
    return res.status(500).json({ error: err.code });
  }

  res.status(status).json({ error: err.code });
};

export default errorHandler;
