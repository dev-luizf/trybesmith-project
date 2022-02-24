import { ProductModel } from '../models';
import OrderModel from '../models/OrderModel';
import APIError from '../utils/errorClass';

const create = async (userId: number, products: number[]) => {
  const checkIfProductExists = products.map(async (id) => {
    const product = await ProductModel.getById(id);
    if (!product) {
      throw new APIError(`Product with ${id} doesn't exist`, 'badRequest');
    }
  });

  await Promise.all(checkIfProductExists);

  const order = await OrderModel.create(userId, products);
  return order;
};

export default {
  create,
};