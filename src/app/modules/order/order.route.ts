import { Router } from 'express';
import { orderController } from './order.controller';

const orderRouter = Router();

// Post Route
orderRouter.post('/create-order', orderController.createOrder);

export default orderRouter;
