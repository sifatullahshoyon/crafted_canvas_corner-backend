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

export default productRouter;
