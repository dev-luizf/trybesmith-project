import express from 'express';
import { errorHandler, joiError } from './controllers/middlewares';
import { loginRouter, orderRouter, productRouter, userRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.use(joiError);
app.use(errorHandler);

export default app;
