"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, 
// eslint-disable-next-line no-unused-vars
_next) => {
    res.json({
        status: false,
        message: 'something went wrong',
        err,
        stack: err.stack,
    });
};
exports.globalErrorHandler = globalErrorHandler;
