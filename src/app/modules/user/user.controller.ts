import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { userService } from './user.service';

// create user
const createUser = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await userService.createUserIntoDb(payload);

  sendResponse(res, {
    message: 'User Created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

// Get All user
const getAllUser = catchAsync(async (req, res) => {
  const result = await userService.getAllUserFromDb();

  sendResponse(res, {
    message: 'All User retrieved successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
};
