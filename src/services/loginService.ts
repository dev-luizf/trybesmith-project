import Login from '../interfaces/loginInterface';
import { UserModel } from '../models';
import APIError from '../utils/errorClass';
import { sign } from '../utils/jwtHelper';

const login = async (data: Login): Promise<string> => {
  const { username, password } = data;
  const user = await UserModel.getByUsername(username);
  const error = new APIError('Username or password invalid', 'unauthorized');

  if (!user) {
    throw error;
  }

  if (password !== user.password) {
    throw error;
  }

  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = sign(payload);
  return token;
};

export default login;