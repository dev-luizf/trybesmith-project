import { RequestHandler } from 'express';
import { User } from '../interfaces/userInterface';
import { userService } from '../services';
import validateWithJoi from '../utils/joiValidation';
import { userSchema } from '../joi_schemas';

const create: RequestHandler = async (req, res) => {  
  validateWithJoi(userSchema, req.body);
  
  const user: User = req.body;
  const token = await userService.create(user);
  res.status(201).json({ token });
};

export default {
  create,
};