import { PrismaClient } from '@prisma/client';
import { User, CreatedUser } from '../interfaces';

const prisma = new PrismaClient();

const create = async (user: User): Promise<CreatedUser> => {
  const newUser = await prisma.users.create({ data: user });
  return newUser;
};

const getById = async (id: number): Promise<CreatedUser | null> => {
  const user = await prisma.users.findUnique({ where: { id } });
  return user;
};

const getByUsername = async (username: string): Promise<CreatedUser | null> => {
  const user = await prisma.users.findFirst({ where: { username } });
  return user;
};

export default {
  create,
  getById,
  getByUsername,
};
