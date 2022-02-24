import express from 'express';
import rescue from 'express-rescue';
import { orderController } from '../controllers';
import { auth } from '../controllers/middlewares';

const { create } = orderController;

const router = express.Router();

router.use(auth);

router.post('/', rescue(create));

export default router;
