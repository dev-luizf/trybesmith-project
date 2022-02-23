import express from 'express';
import { errorHandler, joiError } from './controllers/middlewares';
import { userRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use(joiError);
app.use(errorHandler);

export default app;
