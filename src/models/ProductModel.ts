import { Product, CreatedProduct, UpdateProduct } from '../interfaces';
import { prisma } from './connection';

const create = async (product: Product): Promise<{ item: CreatedProduct }> => {
  const newProduct: CreatedProduct = await prisma.products.create({ data: product });
  return {
    item: newProduct,
  };
};

const update = async (id: number, product: UpdateProduct) => {
  const updatedProduct = await prisma.products.update({
    data: product,
    where: { id },
  });
  return updatedProduct;
};

const getById = async (id: number): Promise<CreatedProduct | null> => {
  const product = await prisma.products.findUnique({ where: { id } });
  return product;
};

const getAll = async (): Promise<CreatedProduct[]> => {
  const products = await prisma.products.findMany();
  return products;
};

export default {
  create,
  getById,
  getAll,
  update,
};
