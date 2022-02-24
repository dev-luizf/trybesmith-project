import { prisma } from '../models/connection';

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

export default {
  create,
};
