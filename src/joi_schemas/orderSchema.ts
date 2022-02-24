import Joi, { Schema } from 'joi';

const schema: Schema = Joi.object({
  products: Joi.array().min(1).items(Joi.number()).required()
    .messages({
      'any.required': 'Products is required',
      'array.base': 'Products must be an array of numbers',
      'array.min': 'Products can\'t be empty',
      'number.base': 'Products must be an array of numbers',
    }),
});

export default schema;
