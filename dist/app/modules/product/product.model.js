"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
// Create a Schema corresponding to the document interface.
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Product Name is Required'],
        trim: true,
        minLength: 3,
        lowercase: true,
    },
    brand: {
        type: String,
        required: [true, 'Brand Name is Required'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Product Price is Required'],
        min: [1, 'Price must be a positive number'],
    },
    category: {
        type: String,
        required: [true, 'Category is Required'],
        enum: {
            values: [
                'Writing',
                'Office Supplies',
                'Art Supplies',
                'Educational',
                'Technology',
            ],
            message: 'Category must be one of {VALUE}',
        },
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    quantity: {
        type: Number,
        required: [true, 'Product Quantity is Required'],
        min: [1, 'Quantity must be a positive number.'],
    },
    inStock: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });
// Create a Model
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
