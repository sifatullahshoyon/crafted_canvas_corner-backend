import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // try {
    //   func();
    // } catch (error) {
    //   next(error);
    // }
    Promise.resolve(func(req, res, next)).catch(error => next(error));
  };
};

export default catchAsync;

// catchAsync(async (req, res) => {
//   const payload = req.body;
//   const result = await productService.createProductIntoDB(payload);

//   sendResponse(res, {
//     message: 'Product created successfully',
//     statusCode: StatusCodes.CREATED,
//     data: result,
//   });
// });
