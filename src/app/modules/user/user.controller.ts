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

// Get Single user
const getSingleUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;

  const result = await userService.getSingleUserFromDb(userId);

  sendResponse(res, {
    message: 'Single User retrieved successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

// Get update user
const getUpdateUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  const body = req.body;
  const result = await userService.userUpdatedFromDb(userId, body);

  sendResponse(res, {
    message: 'User update  successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

// delete user
const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;

  await userService.deleteUserFromDb(userId);

  sendResponse(res, {
    message: 'User update  successfully',
    statusCode: StatusCodes.OK,
    data: {},
  });
});

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  getUpdateUser,
  deleteUser,
};
