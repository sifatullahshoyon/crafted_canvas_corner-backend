// handle routes

import { Router } from 'express';
import { productController } from './product.controller';

const productRouter = Router();

// create product routes
productRouter.post('/create-product', productController.createProduct);

// get all products routes
productRouter.get('/', productController.getAllProducts);

// get single product routes
productRouter.get('/:productId', productController.getSingleProduct);

// update product routes
productRouter.put('/:productId', productController.updateProduct);

// delete product routes
productRouter.delete('/:productId', productController.deleteProduct);

export default productRouter;
