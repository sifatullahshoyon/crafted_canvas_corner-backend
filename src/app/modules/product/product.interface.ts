export interface IProduct {
  name: string;
  brand: string;
  price: number;
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology'; // union type literal
  description: string;
  quantity: number;
  inStock: boolean;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
}
