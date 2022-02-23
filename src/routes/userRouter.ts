import express from 'express';
import rescue from 'express-rescue';
import { userController } from '../controllers';

const { create } = userController;

const router = express.Router();

router.post('/', rescue(create));

export default router;