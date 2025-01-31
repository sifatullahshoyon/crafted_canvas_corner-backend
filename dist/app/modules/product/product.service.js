"use strict";
// Logic Handling
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
exports.productService = void 0;
const product_model_1 = require("./product.model");
// create product
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(payload);
    return result;
});
// get all products
const getAllProductsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
// get single product
const getSingleProductFromDb = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findById(productId);
    return result;
});
// product update
const updateProductIntoDB = (productId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndUpdate(productId, data, {
        new: true,
    });
    return result;
});
// delete product
const deleteProductFromDb = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndDelete(productId, { new: true });
    return result;
});
exports.productService = {
    createProductIntoDB,
    getAllProductsFromDb,
    getSingleProductFromDb,
    updateProductIntoDB,
    deleteProductFromDb,
};
