import mongoose from 'mongoose';

export interface IOrder {
  email: string;
  product: mongoose.Schema.Types.ObjectId; // Reference to Stationery Product
  quantity: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
