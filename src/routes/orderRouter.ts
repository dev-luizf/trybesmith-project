import express from 'express';
import rescue from 'express-rescue';
import { orderController } from '../controllers';
import { auth } from '../controllers/middlewares';

const { create, getAll, getById } = orderController;

const router = express.Router();

router.use(auth);

router.post('/', rescue(create));
router.get('/', rescue(getAll));
router.get('/:id', rescue(getById));

export default router;
