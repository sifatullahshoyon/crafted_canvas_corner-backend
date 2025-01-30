import { z } from 'zod';

const productValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Product Name is required',
      invalid_type_error: 'Product Name must be a string',
    })
    .min(3, { message: 'Name must be at least 3 characters long' })
    .trim(),

  brand: z.string({ required_error: 'Brand Name is required' }).trim(),

  price: z
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    })
    .int({ message: 'Price must be an integer' })
    .positive({ message: 'Price must be a positive number' }),

  category: z.enum(
    ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
    {
      required_error: 'Category is required',
      invalid_type_error: 'Category must be one of the specified values',
    },
  ),

  description: z.string({ required_error: 'Description is required' }).trim(),

  quantity: z
    .number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Quantity must be a number',
    })
    .int({ message: 'Quantity must be an integer' })
    .positive({ message: 'Quantity must be at least 1' }),

  inStock: z.boolean().optional(),
});

export const productValidation = {
  productValidationSchema,
};
