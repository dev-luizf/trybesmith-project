import { Request } from 'express';
import TokenPayload from './payloadInterface';

interface RequestAuth extends Request {
  user?: TokenPayload,
}

export default RequestAuth;
