// Request & Response Handle

import { NextFunction, Request, Response } from 'express';
import { productService } from './product.service';
import sendResponse from '../../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

// create product
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const payload = req.body;
    const result = await productService.createProductIntoDB(payload);

    sendResponse(res, {
      message: 'Product created successfully',
      statusCode: StatusCodes.CREATED,
      data: result,
    });
  } catch (error) {
    next(error);
    // res.json({
    //   status: false,
    //   message: 'something went wrong',
    //   error,
    // });
  }
};

// Get All Products
const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await productService.getAllProductsFromDb();

    sendResponse(res, {
      message: 'All Products retrieved successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get Single Products
const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getSingleProductFromDb(productId);

    sendResponse(res, {
      message: 'Single Product retrieved successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update product
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const result = await productService.updateProductIntoDB(productId, data);

    sendResponse(res, {
      message: 'Product updated successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// delete product
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProductFromDb(productId);

    sendResponse(res, {
      message: 'Product deleted successfully',
      statusCode: StatusCodes.OK,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
