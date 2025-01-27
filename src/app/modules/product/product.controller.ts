// Request & Response Handle

import { Request, Response } from 'express';
import { productService } from './product.service';

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await productService.createProductIntoDB(payload);
    res.json({
      status: true,
      message: 'Product created successfully',
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

// Find All Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductsFromDb();
    res.json({
      status: true,
      message: 'Product retrieved successfully',
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
  getAllProducts,
};
