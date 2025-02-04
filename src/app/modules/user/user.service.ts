import { IUser } from './user.interface';
import { UserModel } from './user.model';

// create user
const createUserIntoDb = async (payload: IUser): Promise<IUser> => {
  const result = await UserModel.create(payload);

  return result;
};

// Get All User
const getAllUserFromDb = async () => {
  const result = await UserModel.find();

  return result;
};

export const userService = {
  createUserIntoDb,
  getAllUserFromDb,
};
