// handle routes

import { Router } from 'express';

import { productController } from './product.controller';
import { productValidation } from './product.validation';
import validateRequest from '../../../middlewares/validateRequest';

const productRouter = Router();

// create product routes:-

// productRouter.post(
//   '/create-product',
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const parsedBody =
//         await productValidation.productValidationSchema.parseAsync(req.body);
//       req.body = parsedBody;
//       next();
//     } catch (error) {
//       next(error);
//     }
//   },
//   productController.createProduct,
// );

productRouter.post(
  '/create-product',
  validateRequest(productValidation.productValidationSchema),
  productController.createProduct,
);

// get single product routes
productRouter.get('/:productId', productController.getSingleProduct);

// update product routes
productRouter.put('/:productId', productController.updateProduct);

// delete product routes
productRouter.delete('/:productId', productController.deleteProduct);

// get all products routes
productRouter.get('/', productController.getAllProducts);

export default productRouter;
