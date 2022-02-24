import jwt, { Secret, SignOptions, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import APIError from './errorClass';

dotenv.config();

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  throw new APIError('JWT Secret must be defined', 'serverError');
}

const secret: Secret = JWT_SECRET;

const sign = (payload: JwtPayload) => {
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
