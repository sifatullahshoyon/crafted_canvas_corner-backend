"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = __importDefault(require("./order.model"));
// create order
const createOrderIntoDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    // Retrieve the product from the database
    const product = yield product_model_1.ProductModel.findById(orderData.product);
    if (!product) {
        throw new Error('Product Not Found');
    }
    // check if the product available in stock
    if (product.quantity < orderData.quantity) {
        throw new Error('Insufficient stock');
    }
    // Updating product inventory
    product.quantity -= orderData.quantity;
    if (product.quantity === 0) {
        product.inStock = false;
    }
    // save updated product
    yield product.save();
    // Calculate totalPrice
    const totalPrice = product.price * orderData.quantity;
    // Create a new order with totalPrice included
    const newOrder = new order_model_1.default(Object.assign(Object.assign({}, orderData), { totalPrice }));
    // Save the new order
    yield newOrder.save();
    return newOrder;
});
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const orders = yield order_model_1.default.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'product',
                foreignField: '_id',
                as: 'productDetails',
            },
        },
        { $unwind: '$productDetails' },
        {
            $group: {
                _id: null,
                totalRevenue: {
                    $sum: { $multiply: ['$quantity', '$productDetails.price'] },
                },
            },
        },
    ]);
    //   console.log('Aggregation result:', orders);
    return ((_a = orders[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
});
exports.orderService = {
    createOrderIntoDB,
    calculateRevenue,
};
