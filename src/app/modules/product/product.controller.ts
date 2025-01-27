// Request & Response Handle

import { Request, Response } from 'express';
import { productService } from './product.service';

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    // const result = await ProductModel.create(payload);
    const result = await productService.createProductIntoDB(payload);
    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const productController = {
  createProduct,
};
