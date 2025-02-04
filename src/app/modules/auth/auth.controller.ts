import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { authService } from './auth.service';

// register
const register = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await authService.register(payload);

  sendResponse(res, {
    message: 'User is registered successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

// login
const login = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await authService.login(payload);

  sendResponse(res, {
    message: 'User is logged in successfully',
    statusCode: StatusCodes.ACCEPTED,
    token: result?.token,
    data: result?.verifiedUser,
  });
});

export const authController = {
  register,
  login,
};
