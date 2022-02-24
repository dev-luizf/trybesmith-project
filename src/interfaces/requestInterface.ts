import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

interface RequestAuth extends Request {
  user?: JwtPayload,
}

export default RequestAuth;
