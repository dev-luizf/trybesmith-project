import { CreatedProduct, Product } from '../interfaces';
import { ProductModel } from '../models';

const create = async (product: Product): Promise<{ item: CreatedProduct }> => {
  const newProduct = await ProductModel.create(product);
  return newProduct;
};

const getAll = async (): Promise<CreatedProduct[]> => {
  const products = await ProductModel.getAll();
  return products;
};

export {
  create,
  getAll,
};
