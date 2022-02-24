import { RequestHandler } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { RequestAuth } from '../../interfaces';
import { verify } from '../../utils/jwtHelper';

const auth: RequestHandler = (req: RequestAuth, res, next) => {
  const token: string | undefined = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const data = verify(token) as JwtPayload;
    req.user = { id: data.id, username: data.username };
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: 'Invalid token' });
  }

  next();
};

export default auth;