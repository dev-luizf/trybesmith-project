import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET as Secret;

const sign = (payload: object) => {
  const options: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '1h',
  };

  const token = jwt.sign(payload, secret, options);
  return token;
};

const verify = (token: string) => jwt.verify(token, secret, { algorithms: ['HS256'] });

export {
  sign,
  verify,
};
