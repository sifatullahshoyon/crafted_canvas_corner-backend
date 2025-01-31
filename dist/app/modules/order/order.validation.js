"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'Please provide your email address',
        invalid_type_error: 'Email must be a string',
    })
        .email('Invalid email address'),
    product: zod_1.z
        .string({
        required_error: 'Product ID is required',
        invalid_type_error: 'Product ID must be a string',
    })
        .regex(/^[0-9a-fA-F]{24}$/, 'Product ID must be a valid MongoDB ObjectId'),
    quantity: zod_1.z
        .number({
        required_error: 'Product quantity is required',
        invalid_type_error: 'Product Quantity must be a number',
    })
        .int('Product Quantity must be an integer')
        .min(1, 'Product Quantity must be at least 1'),
    totalPrice: zod_1.z
        .number({
        required_error: 'Total price is required',
        invalid_type_error: 'Total price must be a number',
    })
        .min(0, 'Total price must be a positive number'),
});
exports.orderValidation = {
    orderValidationSchema,
};
