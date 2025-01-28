import { ProductModel } from '../product/product.model';
import { IOrder } from './order.interface';
import OrderModel from './order.model';

// create order
const createOrderIntoDB = async (orderData: IOrder): Promise<IOrder> => {
  // Retrieve the product from the database
  const product = await ProductModel.findById(orderData.product);
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
  await product.save();

  // Calculate totalPrice
  const totalPrice = product.price * orderData.quantity;

  // Create a new order with totalPrice included
  const newOrder = new OrderModel({
    ...orderData,
    totalPrice,
  });

  // Save the new order
  await newOrder.save();

  return newOrder;
};

const calculateRevenue = async () => {
  const orders = await OrderModel.aggregate([
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
  return orders[0]?.totalRevenue || 0;
};

export const orderService = {
  createOrderIntoDB,
  calculateRevenue,
};
