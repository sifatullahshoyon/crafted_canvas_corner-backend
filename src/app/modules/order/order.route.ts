import { Router } from 'express';
import { orderController } from './order.controller';
import { orderValidation } from './order.validation';
import validateRequest from '../../../middlewares/validateRequest';

const orderRouter = Router();

// Create Order Routes:-

// orderRouter.post(
//   '/create-order',
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const parsedBody = await orderValidation.orderValidationSchema.parseAsync(
//         req.body,
//       );
//       req.body = parsedBody;
//       next();
//     } catch (error) {
//       next(error);
//     }
//   },
//   orderController.createOrder,
// );

orderRouter.post(
  '/create-order',
  validateRequest(orderValidation.orderValidationSchema),
  orderController.createOrder,
);

// Calculate Revenue route
orderRouter.get('/revenue', orderController.calculateRevenue);

export default orderRouter;
