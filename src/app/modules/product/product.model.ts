import { model, Schema } from 'mongoose';
import { IProduct } from './product.interface';

// Create a Schema corresponding to the document interface.
const productSchema: Schema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product Name is Required'],
      trim: true,
      minLength: 3,
      lowercase: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand Name is Required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product Price is Required'],
      min: [1, 'Price must be a positive number'],
    },
    category: {
      type: String,
      required: [true, 'Category is Required'],
      enum: {
        values: [
          'Writing',
          'Office Supplies',
          'Art Supplies',
          'Educational',
          'Technology',
        ],
        message: 'Category must be one of {VALUE}',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Product Quantity is Required'],
      min: [1, 'Quantity must be a positive number.'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    photo: {
      type: String,
      required: [true, 'Product Photo is required'],
    },
  },
  { timestamps: true },
);

// Create a Model
export const ProductModel = model<IProduct>('Product', productSchema);
