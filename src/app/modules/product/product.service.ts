// Logic Handling

import QueryBuilder from '../../../builder/queryBuilder';
import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

// create product
const createProductIntoDB = async (payload: IProduct): Promise<IProduct> => {
  const result = await ProductModel.create(payload);
  return result;
};

// get all products:-

// const getAllProductsFromDb = async (query: Record<string, unknown>) => {
//   console.log('main', query);

//   const queryObj = { ...query };

//   // queryObj : { searchTerm: 'pilot', name: 'pen' }  থেকে searchTerm কে বাদ দেওয়া হচ্ছে।
//   const excludingImportant = [
//     'searchTerm',
//     'page',
//     'limit',
//     'sortOrder',
//     'sortBy',
//     'fields',
//   ];

//   // * যেসব ফিল্ড আমাদের ফিল্টারিং এর জন্য দরকার নেই সেই সব ফিল্ডকে বাদ দেওয়া হচ্ছে।

//   excludingImportant.forEach(key => delete queryObj[key]);

//   console.log('queryObj :', queryObj);

//   // * search
//   const searchTerm = query?.searchTerm || '';

//   // name , brand , category

//   const searchableFields = ['name', 'brand', 'category'];

//   // * এই ভাবে ও করা যায় query এর কাজ কিন্তুু code optimized হয় না।

//   // const result = await ProductModel.find({
//   //   $or: [
//   //     { name: { $regex: searchTerm, $options: 'i' } },
//   //     { brand: { $regex: searchTerm, $options: 'i' } },
//   //     { category: { $regex: searchTerm, $options: 'i' } },
//   //   ],
//   // });

//   // * code optimize + reusable

//   // const result = await ProductModel.find({
//   //   $or : searchableFields.map((field)=> ({
//   //     [field] : {$regex : searchTerm, $options : "i"}
//   //   }))
//   // })

//   const searchQuery = ProductModel.find({
//     $or: searchableFields.map(field => ({
//       [field]: { $regex: searchTerm, $options: 'i' },
//     })),
//   });

//   // * filtering:-

//   // const result = await searchQuery.find(queryObj);
//   const filterQuery = searchQuery.find(queryObj);

//   // * pagination
//   /**
//    * Pagination এর জন্য ০২ টা জিনিস সব সময় মনে রাখতে হবে।
//    * 1. ‍skip
//    * 2. limit
//    *
//    */
//   const page = Number(query?.page) || 1;
//   const limit = Number(query?.limit) || 10;
//   // skip = (page -1) * limit
//   const skipped = (page - 1) * limit;

//   // const result = await filterQuery.skip(skipped).limit(limit);
//   const paginatedQuery = filterQuery.skip(skipped).limit(limit);

//   // * Sorting
//   let sortStr;

//   if (query?.sortBy && query?.sortOrder) {
//     const sortBy = query?.sortBy;
//     const sortOrder = query?.sortOrder;
//     // "-price" অথবা "price"
//     sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
//   }

//   console.log('sort:', sortStr);

//   // const result = await paginatedQuery.sort(sortStr);

//   // ? jodi ekta field ke bad dite cai tokhon ai query hobe
//   const sortQuery = paginatedQuery.sort(sortStr);

//   // * field selecting
//   let fields = '-__v';

//   // jei jei field guloke dekhte cai
//   if (query?.fields) {
//     fields = (query.fields as string)?.split(',').join(' ');
//   }

//   const result = await sortQuery.select(fields);

//   return result;
// };

// get all products:-
const getAllProductsFromDb = async (query: Record<string, unknown>) => {
  const searchableFields = ['name', 'brand', 'category'];

  const products = new QueryBuilder(ProductModel.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .select();

  const result = await products.modelQuery;

  return result;
};

// get single product
const getSingleProductFromDb = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

// product update
const updateProductIntoDB = async (
  productId: string,
  data: Partial<IProduct>,
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, data, {
    new: true,
  });
  return result;
};

// delete product
const deleteProductFromDb = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId, { new: true });
  return result;
};

export const productService = {
  createProductIntoDB,
  getAllProductsFromDb,
  getSingleProductFromDb,
  updateProductIntoDB,
  deleteProductFromDb,
};
