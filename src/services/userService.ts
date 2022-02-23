import { User } from '../interfaces/userInterface';
import { UserModel } from '../models';
import DomainError from '../utils/DomainError';
import { sign } from '../utils/jwtHelper';

const create = async (user: User): Promise<string> => {
  const userExists = await UserModel.getByUsername(user.username);
  
  if (userExists) {
    const error = new DomainError('User already exists', 'alreadyExists');
    throw error;
  }

  const newUser = await UserModel.create(user);
  const payload = {
    id: newUser.id,
    username: newUser.username,
  };

  const token = sign(payload);
  return token;
};

export default {
  create,
};