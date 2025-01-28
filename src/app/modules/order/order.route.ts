import { Router } from 'express';
import { orderController } from './order.controller';

const orderRouter = Router();

// Post Route
orderRouter.post('/create-order', orderController.createOrder);

// Calculate Revenue route
orderRouter.get('/revenue', orderController.calculateRevenue);

export default orderRouter;
