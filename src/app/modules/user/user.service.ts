import { IUser } from './user.interface';
import { UserModel } from './user.model';

// create user
const createUserIntoDb = async (
  payload: IUser,
  role: 'user' | 'admin',
): Promise<IUser> => {
  payload.role = role;

  const result = await UserModel.create(payload);

  return result;
};

// Get All User
const getAllUserFromDb = async () => {
  const result = await UserModel.find();

  return result;
};

// Get All User
const getSingleUserFromDb = async (userId: string) => {
  const result = await UserModel.findById(userId);

  return result;
};

// Get All User
const userUpdatedFromDb = async (userId: string, body: IUser) => {
  const result = await UserModel.findByIdAndUpdate(userId, body);

  return result;
};

// Get All User
const deleteUserFromDb = async (userId: string) => {
  const result = await UserModel.findByIdAndDelete(userId);

  return result;
};

export const userService = {
  createUserIntoDb,
  getAllUserFromDb,
  getSingleUserFromDb,
  userUpdatedFromDb,
  deleteUserFromDb,
};
