import express from 'express';
import rescue from 'express-rescue';
import { loginController } from '../controllers';

const router = express.Router();

router.post('/', rescue(loginController));

export default router;
