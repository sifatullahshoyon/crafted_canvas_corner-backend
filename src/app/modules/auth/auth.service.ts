import sendMail from '../../../utils/sendMail';
import config from '../../config';
import { IUser } from '../user/user.interface';
import { UserModel } from '../user/user.model';
import { ILoginUser, IResetPassword } from './auth.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// register
const register = async (payload: IUser): Promise<IUser> => {
  const result = await UserModel.create(payload);
  return result;
};

// login
const login = async (payload: ILoginUser) => {
  // checking if the user is exist
  const user = await UserModel.findOne({ email: payload?.email }).select(
    '+password',
  );

  if (!user) {
    throw new Error('User not found!');
  }

  // checking if the user is inactive
  const userStatus = user?.userStatus;

  if (userStatus === 'inactive') {
    throw new Error('User is not active!!');
  }

  //checking if the password is correct
  const isPasswordMatch = await bcrypt.compare(
    payload?.password,
    user?.password,
  );

  if (!isPasswordMatch) {
    throw new Error('Password do not match!!');
  }

  //create token and sent to the  client
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };

  const token = jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: '7d',
  });

  const verifiedUser = {
    name: user?.name,
    email: user?.email,
    role: user?.role,
  };

  return { token, verifiedUser };
};

// forgot password
const forgotPassword = async (payload: { email: string }) => {
  // checking if the user is exist
  const user = await UserModel.findOne({ email: payload.email });

  if (!user) {
    throw new Error('User Not Found');
  }

  // checking if the user is inactive
  const userStatus = user?.userStatus;

  if (userStatus === 'inactive') {
    throw new Error('User is Blocked');
  }

  //create token
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };

  const token = jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: '1h',
  });

  const resetLink = `http://localhost:5173/reset-password?id=${user?._id}&token=${token}`;

  // sending mail utility function
  await sendMail(user?.email, 'Reset Your Password!!', resetLink);
};

// reset password
const resetPassword = async (payload: IResetPassword) => {
  // checking if the user is exist
  const user = await UserModel.findById(payload?.id);

  if (!user) {
    throw new Error('User Not Found');
  }

  // checking if the user is inactive
  const userStatus = user?.userStatus;

  if (userStatus === 'inactive') {
    throw new Error('User is Blocked');
  }

  // token verify
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  jwt.verify(payload.token, config.jwt_secret as string, (err, decoded) => {
    if (err) {
      throw new Error('Invalid token or expired token');
    }
  });

  // hash the password
  payload.password = await bcrypt.hash(
    payload?.password,
    Number(config.bcrypt_salt_rounds),
  );

  // user update password
  user.password = payload.password;

  const result = await UserModel.findByIdAndUpdate(user?.id, user, {
    new: true,
  });

  return result;
};

export const authService = {
  register,
  login,
  forgotPassword,
  resetPassword,
};
