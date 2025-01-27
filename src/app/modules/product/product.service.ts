// Logic Handling

import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

// create product
const createProductIntoDB = async (payload: IProduct): Promise<IProduct> => {
  const result = await ProductModel.create(payload);
  return result;
};

// get all products
const getAllProductsFromDb = async () => {
  const result = await ProductModel.find();
  return result;
};

// get single product
const getSingleProductFromDb = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

// product update
const updateProductIntoDB = async (productId: string, data: IProduct) => {
  const result = await ProductModel.findByIdAndUpdate(productId, data, {
    new: true,
  });
  return result;
};

export const productService = {
  createProductIntoDB,
  getAllProductsFromDb,
  getSingleProductFromDb,
  updateProductIntoDB,
};
