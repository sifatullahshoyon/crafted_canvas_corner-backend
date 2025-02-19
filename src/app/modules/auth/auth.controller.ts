import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { authService } from './auth.service';
import { Request, Response } from 'express';

// register
const register = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await authService.register(payload);
  // console.log(result);

  sendResponse(res, {
    message: 'User is registered successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

// login
const login = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await authService.login(payload);
  // console.log('login result', result);

  sendResponse(res, {
    message: 'User is logged in successfully',
    statusCode: StatusCodes.ACCEPTED,
    token: result?.token,
    data: result?.verifiedUser,
  });
});

// forgot password
const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  await authService.forgotPassword(payload);

  sendResponse(res, {
    message: 'Reset Password Link Send To Your Email Address',
    statusCode: StatusCodes.ACCEPTED,
    data: null,
  });
});

// reset password
const resetPassword = catchAsync(async (req: Request, res: Response) => {
  // token = req.headers.authorization // best practice
  const payload = req.body;

  const result = await authService.resetPassword(payload);

  sendResponse(res, {
    message: 'Password Reset Successfully!!',
    statusCode: StatusCodes.ACCEPTED,
    data: result,
  });
});

export const authController = {
  register,
  login,
  forgotPassword,
  resetPassword,
};
