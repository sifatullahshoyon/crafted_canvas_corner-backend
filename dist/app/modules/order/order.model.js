"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Create a Schema corresponding to the document interface.
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Please Provide Your Email Address'],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message: '{VALUE} is not a valid email address',
        },
        immutable: true,
    },
    product: {
        type: mongoose_1.Types.ObjectId, // Referring to the product model
        required: [true, 'Product ID is required'],
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
        min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required'],
        min: [0, 'Total price must be a positive number'],
    },
}, {
    timestamps: true,
});
//  Order model
const OrderModel = (0, mongoose_1.model)('Order', orderSchema);
exports.default = OrderModel;
