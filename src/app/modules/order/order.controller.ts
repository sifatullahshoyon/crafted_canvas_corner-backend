/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { orderService } from './order.service';

// create order
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderData = req.body;
    const result = await orderService.createOrderIntoDB(orderData);
    res.json({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Calculate Revenue
const calculateRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const totalRevenue = await orderService.calculateRevenue();

    res.json({
      status: true,
      message: 'Revenue calculated successfully',
      data: { totalRevenue },
    });
  } catch (error: any) {
    next(error);
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
