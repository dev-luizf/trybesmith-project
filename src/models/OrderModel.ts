import { prisma } from './connection';

const create = async (userId: number, products: number[]) => {
  const completedOrder = await prisma.$transaction(async (t) => {
    const order = await t.orders.create({ data: { userId } });

    const insertProductsIntoOrder = products.map(async (id) => t.products.update({
      where: { id },
      data: { orderId: order.id },
    }));
    
    await Promise.all(insertProductsIntoOrder);
    return {
      userId,
      products,
    };
  });
  return completedOrder;
};

const getById = async (id: number) => {
  const order = await prisma.orders.findUnique({ 
    where: { id },
    include: {
      products: {},
    },
  });

  if (!order) return null;

  const products = order.products.map((product) => product.id);
  return {
    ...order,
    products,
  };
};

const getAll = async () => {
  const orders = await prisma.orders.findMany({
    include: { products: {} },
  });

  const result = orders.map((order) => ({
    ...order,
    products: order.products.map((p) => p.id),
  }));
  
  return result;
};

export default {
  create,
  getById,
  getAll,
};
