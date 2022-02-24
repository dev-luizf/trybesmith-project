import express from 'express';
import rescue from 'express-rescue';
import { productController } from '../controllers';
import { auth } from '../controllers/middlewares';

const { create, getAll } = productController;

const router = express.Router();

router.use(auth);

router.post('/', rescue(create));
router.get('/', rescue(getAll));

export default router;
