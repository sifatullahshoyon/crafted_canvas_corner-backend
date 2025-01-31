"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./app/modules/product/product.route"));
const order_route_1 = __importDefault(require("./app/modules/order/order.route"));
const globalErrorHandler_1 = require("./middlewares/globalErrorHandler");
const app = (0, express_1.default)();
// Parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// ========================== Application Routes Start ===================
// Products
app.use('/api/products', product_route_1.default);
// Order
app.use('/api/orders', order_route_1.default);
// ========================== Application Routes End ===================
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Crafted Canvas Corner Server is Live⚡',
    });
});
// Global Error Handler
app.use(globalErrorHandler_1.globalErrorHandler);
// not found route
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route is not found',
    });
});
exports.default = app;
