import { RequestHandler } from 'express';
import { RequestAuth } from '../../interfaces';
import TokenPayload from '../../interfaces/payloadInterface';
import { verify } from '../../utils/jwtHelper';

const auth: RequestHandler = (req: RequestAuth, res, next) => {
  const token: string | undefined = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const data = verify(token) as TokenPayload;
    req.user = { ...data };
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: 'Invalid token' });
  }

  next();
};

export default auth;