/* eslint-disable @typescript-eslint/no-explicit-any */
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
  } catch (error: any) {
    res.json({
      status: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};

// Calculate Revenue
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderService.calculateRevenue();

    res.json({
      status: true,
      message: 'Revenue calculated successfully',
      data: { totalRevenue },
    });
  } catch (error: any) {
    res.json({
      status: false,
      message: error.message || 'Error calculating revenue',
      error,
    });
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
