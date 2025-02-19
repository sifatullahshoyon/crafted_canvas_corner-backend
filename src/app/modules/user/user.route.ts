import { Router } from 'express';
import { userController } from './user.controller';
import { USER_ROLE } from './user.constants';
import auth from '../../../middlewares/auth';
import validateRequest from '../../../middlewares/validateRequest';
import { userValidation } from './user.validation';

const userRouter = Router();

// userRouter.post(
//   '/create-admin',
//   validateRequest(userValidation.userValidationSchema),
//   userController.createUser,
// );

// create admin
userRouter.post(
  '/create-admin',
  validateRequest(userValidation.userValidationSchema),
  userController.createAdmin, // admin তৈরি করার জন্য নতুন controller ফাংশন
);

// create user
userRouter.post(
  '/create-user',
  validateRequest(userValidation.userValidationSchema),
  userController.createUser, // সাধারণ user তৈরি করার জন্য controller
);

userRouter.get('/:userId', userController.getSingleUser);

userRouter.put('/:userId', userController.getUpdateUser);

userRouter.delete('/:userId', userController.deleteUser);

// authorization example
userRouter.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  userController.getAllUser,
);

export default userRouter;
