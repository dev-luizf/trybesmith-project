import { RequestHandler } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { RequestAuth } from '../interfaces';
import { orderSchema } from '../joi_schemas';
import { orderService } from '../services';
import validateWithJoi from '../utils/joiValidation';

const create: RequestHandler = async (req: RequestAuth, res) => {
  validateWithJoi(orderSchema, req.body);
    
  const userData = req.user as JwtPayload;
  const { id } = userData;
  const { products } = req.body;
  const order = await orderService.create(id, products);
  res.status(201).json({ order });
};

export default {
  create,
};
