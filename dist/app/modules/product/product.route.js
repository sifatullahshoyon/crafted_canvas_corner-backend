"use strict";
// handle routes
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const productRouter = (0, express_1.Router)();
// create product routes
productRouter.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedBody = yield product_validation_1.productValidation.productValidationSchema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    }
    catch (error) {
        next(error);
    }
}), product_controller_1.productController.createProduct);
// get single product routes
productRouter.get('/:productId', product_controller_1.productController.getSingleProduct);
// update product routes
productRouter.put('/:productId', product_controller_1.productController.updateProduct);
// delete product routes
productRouter.delete('/:productId', product_controller_1.productController.deleteProduct);
// get all products routes
productRouter.get('/', product_controller_1.productController.getAllProducts);
exports.default = productRouter;
