// Logic Handling

import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

// create product
const createProductIntoDB = async (payload: IProduct): Promise<IProduct> => {
  const result = await ProductModel.create(payload);
  return result;
};

export const productService = {
  createProductIntoDB,
};
