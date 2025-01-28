import { Request, Response } from 'express';
import { orderService } from './order.service';

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderService.createOrderIntoDB(orderData);
    res.json({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const orderController = {
  createOrder,
};
