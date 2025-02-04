import { Router } from 'express';
import { userController } from './user.controller';
import { USER_ROLE } from './user.constants';
import auth from '../../../middlewares/auth';

const userRouter = Router();

userRouter.post('/create-user', userController.createUser);

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
