"use strict";
// Request & Response Handle
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
exports.productController = void 0;
const product_service_1 = require("./product.service");
// create product
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield product_service_1.productService.createProductIntoDB(payload);
        res.json({
            status: true,
            message: 'Product created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
        // res.json({
        //   status: false,
        //   message: 'something went wrong',
        //   error,
        // });
    }
});
// Get All Products
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productService.getAllProductsFromDb();
        res.json({
            status: true,
            message: 'All Products retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get Single Products
const getSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.productService.getSingleProductFromDb(productId);
        res.json({
            status: true,
            message: 'Single Product retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// update product
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const data = req.body;
        const result = yield product_service_1.productService.updateProductIntoDB(productId, data);
        res.json({
            status: true,
            message: 'Product updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// delete product
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        yield product_service_1.productService.deleteProductFromDb(productId);
        res.json({
            status: true,
            message: 'Product deleted successfully',
            result: {},
        });
    }
    catch (error) {
        next(error);
    }
});
exports.productController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
