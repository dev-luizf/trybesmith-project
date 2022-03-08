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

const getById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const orderId = Number(id);
  
  if(!orderId) {
    return res.status(400).json({ error: 'Id must be a number'});
  }
  
  const order = await orderService.getById(orderId);
  res.status(200).json(order);
};

const getAll: RequestHandler = async (req, res) => {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
};

export default {
  create,
  getById,
  getAll,
};
