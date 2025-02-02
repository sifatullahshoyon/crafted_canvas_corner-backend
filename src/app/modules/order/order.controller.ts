import { orderService } from './order.service';
import sendResponse from '../../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';

// create order
const createOrder = catchAsync(async (req, res) => {
  const orderData = req.body;

  const result = await orderService.createOrderIntoDB(orderData);

  sendResponse(res, {
    message: 'Order created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

// Calculate Revenue
const calculateRevenue = catchAsync(async (req, res) => {
  const totalRevenue = await orderService.calculateRevenue();

  sendResponse(res, {
    message: 'Revenue calculated successfully',
    statusCode: StatusCodes.OK,
    data: { totalRevenue },
  });
});

export const orderController = {
  createOrder,
  calculateRevenue,
};
