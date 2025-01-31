import { NextFunction, Request, Response, Router } from 'express';
import { orderController } from './order.controller';
import { orderValidation } from './order.validation';

const orderRouter = Router();

// Post Route
orderRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedBody = await orderValidation.orderValidationSchema.parseAsync(
        req.body,
      );
      req.body = parsedBody;
      next();
    } catch (error) {
      next(error);
    }
  },
  orderController.createOrder,
);

// Calculate Revenue route
orderRouter.get('/revenue', orderController.calculateRevenue);

export default orderRouter;
