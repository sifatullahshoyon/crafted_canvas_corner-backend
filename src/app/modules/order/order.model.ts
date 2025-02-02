import { model, Schema, Types } from 'mongoose';
import { IOrder } from './order.interface';

// Create a Schema corresponding to the document interface.
const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Please Provide Your Email Address'],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: '{VALUE} is not a valid email address',
      },
      immutable: true,
    },
    product: {
      type: Types.ObjectId, // Referring to the product model
      required: [true, 'Product ID is required'],
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be a positive number'],
    },
  },
  {
    timestamps: true,
  },
);

//  Order model
const OrderModel = model<IOrder>('Order', orderSchema);

export default OrderModel;
