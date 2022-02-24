import { RequestHandler } from 'express';
import { CreatedProduct, Product } from '../interfaces';
import { productSchema } from '../joi_schemas';
import { ProductModel } from '../models';
import validateWithJoi from '../utils/joiValidation';

const create: RequestHandler = async (req, res) => {
  validateWithJoi(productSchema, req.body);

  const product: Product = req.body;
  const newProduct = await ProductModel.create(product);
  res.status(201).json(newProduct);
};

const getAll: RequestHandler = async (_req, res) => {
  const products: CreatedProduct[] = await ProductModel.getAll();
  res.status(200).json(products);
};

export default {
  create,
  getAll,
};
