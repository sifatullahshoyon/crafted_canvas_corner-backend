import { z } from 'zod';

const userValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name must be provided and must be a string',
    })
    .min(3)
    .max(50),

  email: z
    .string({
      required_error: 'Email must be provided and must be a string',
    })
    .email('Invalid email address'),

  password: z
    .string({
      required_error: 'Password is required for your safety',
    })
    .max(20, { message: 'Password can not be more than 20 characters' }),

  age: z
    .number({
      required_error: 'Age must be provided and must be a number',
    })
    .int()
    .positive(),

  photo: z
    .string({
      required_error: 'Photo must be provided and must be a string',
    })
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
