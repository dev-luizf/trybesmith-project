import { RequestHandler } from 'express';
import Login from '../interfaces/loginInterface';
import { loginService } from '../services';
import validateWithJoi from '../utils/joiValidation';
import { loginSchema } from '../joi_schemas';

const login: RequestHandler = async (req, res) => {
  validateWithJoi(loginSchema, req.body);

  const data: Login = req.body;
  const token = await loginService(data);
  res.status(200).json({ token });
};

export default login;
