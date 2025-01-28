import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modules/product/product.route';
import orderRouter from './app/modules/order/order.route';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// ========================== Application Routes Start ===================

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

export default app;
