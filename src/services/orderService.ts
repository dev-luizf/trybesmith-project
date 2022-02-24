import { ProductModel, OrderModel } from '../models';
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

const getById = async (id: number) => {
  const order = await OrderModel.getById(id);

  if (!order) {
    throw new APIError('Order not found', 'notFound');
  }

  return order;
};

const getAll = async () => {
  const orders = await OrderModel.getAll();
  return orders;
};

export default {
  create,
  getById,
  getAll,
};