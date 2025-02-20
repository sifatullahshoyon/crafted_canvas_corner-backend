// handle routes

import { NextFunction, Request, Response, Router } from 'express';
import { productController } from './product.controller';
import { upload } from '../../../helpers/fileUploadHelper';
import { productValidation } from './product.validation';
import validateRequest from '../../../middlewares/validateRequest';

const productRouter = Router();

// create product routes:-
productRouter.post(
  '/create-product',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(productValidation.productValidationSchema),
  productController.createProduct,
);

// productRouter.post(
//   '/create-product',
//   upload.single('file'),
//   // validateRequest(productValidation.productValidationSchema),

//   productController.createProduct,
// );

// get single product routes
productRouter.get('/:productId', productController.getSingleProduct);

// update product routes
productRouter.put('/:productId', productController.updateProduct);

// delete product routes
productRouter.delete('/:productId', productController.deleteProduct);

// get all products routes
productRouter.get('/', productController.getAllProducts);

export default productRouter;
