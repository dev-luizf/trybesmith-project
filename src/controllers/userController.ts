import { RequestHandler } from 'express';
import { userService } from '../services';
import { validateWithJoi } from '../utils/joiValidation';
import userSchema from './joi_schemas/userSchema';

const create: RequestHandler = async (req, res) => {  
  validateWithJoi(userSchema, req.body);
  const token = await userService.create(req.body);
  res.status(201).json({ token });
};

export default {
  create,
};