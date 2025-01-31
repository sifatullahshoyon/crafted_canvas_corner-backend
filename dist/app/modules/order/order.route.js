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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const order_validation_1 = require("./order.validation");
const orderRouter = (0, express_1.Router)();
// Post Route
orderRouter.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedBody = yield order_validation_1.orderValidation.orderValidationSchema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    }
    catch (error) {
        next(error);
    }
}), order_controller_1.orderController.createOrder);
// Calculate Revenue route
orderRouter.get('/revenue', order_controller_1.orderController.calculateRevenue);
exports.default = orderRouter;
