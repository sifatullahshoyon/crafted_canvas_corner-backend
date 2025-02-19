import { z } from 'zod';

const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: 'Email must be provided and must be a string',
    })
    .email(),
  password: z.string({ required_error: 'Password is required' }),
});

const forgotPasswordValidationSchema = z.object({
  email: z
    .string({
      required_error: 'Email must be provided and must be a string',
    })
    .email(),
});

const resetPasswordValidationSchema = z.object({
  id: z.string({ required_error: 'Id must be provided' }),
  token: z.string({ required_error: 'Token must be provided' }),
  password: z.string({ required_error: 'Password must be provided' }),
});

export const authValidation = {
  loginValidationSchema,
  forgotPasswordValidationSchema,
  resetPasswordValidationSchema,
};
