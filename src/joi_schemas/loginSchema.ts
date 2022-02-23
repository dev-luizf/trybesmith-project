import Joi, { Schema } from 'joi';

const schema: Schema = Joi.object({
  username: Joi.required().messages({
    'any.required': 'Username is required',
  }),
  password: Joi.required().messages({
    'any.required': 'Password is required',
  }),
});

export default schema;
