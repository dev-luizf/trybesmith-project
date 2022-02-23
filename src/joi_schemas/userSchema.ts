import Joi, { Schema } from 'joi';

const schema: Schema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': 'Username is required',
    'string.base': 'Username must be a string',
    'string.min': 'Username must be longer than 2 characters',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Password is required',
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 7 characters',
  }),
  level: Joi.number().strict().required().min(1)
    .messages({
      'any.required': 'Level is required',
      'number.base': 'Level must be a number',
      'number.min': 'Level must be greater than 0',
    }),
  classe: Joi.string().required().min(3).messages({
    'any.required': 'Classe is required',
    'string.base': 'Classe must be a string',
    'string.min': 'Classe must be longer than 2 characters',
  }),
});

export default schema;
