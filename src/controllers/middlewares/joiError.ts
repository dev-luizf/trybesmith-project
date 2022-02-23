import Joi from 'joi';
import { ErrorRequestHandler } from 'express';

const joiError: ErrorRequestHandler = (err, _req, res, next) => {
  if (!Joi.isError(err)) return next(err);
  let code: number;
  
  const errorType = err.details[0].type;
  
  switch (errorType) {
    case 'any.required':
      code = 400;
      break;
    default:
      code = 422;
  }

  return res.status(code).json({ error: err.message });
};

export default joiError;
