import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modules/product/product.route';
import orderRouter from './app/modules/order/order.route';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import { StatusCodes } from 'http-status-codes';
import userRouter from './app/modules/user/user.route';
import authRouter from './app/modules/auth/auth.route';

const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());

// ========================== Application Routes Start ===================

// User
app.use('/api/auth', authRouter);

// User
app.use('/api/users', userRouter);

// Products
app.use('/api/products', productRouter);

// Order
app.use('/api/orders', orderRouter);

// ========================== Application Routes End ===================
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Crafted Canvas Corner Server is Live⚡',
  });
});

// Global Error Handler
app.use(globalErrorHandler);

// not found route
app.use('*', (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'Route is not found',
  });
});

export default app;
