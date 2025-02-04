import { IUser } from '../user/user.interface';
import { UserModel } from '../user/user.model';

// register
const register = async (payload: IUser): Promise<IUser> => {
  const result = await UserModel.create(payload);
  return result;
};

export const authService = {
  register,
};
