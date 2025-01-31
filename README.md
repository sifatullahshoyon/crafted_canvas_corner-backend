# CRAFTED CANVAS CORNER L2

An Express application built with TypeScript for managing a stationery shop. The application integrates MongoDB with Mongoose for schema definition and data operations, ensuring robust validation using Zod for both requests and responses.

---

## Features

- CRUD operations for stationery products and orders.
- Inventory management with automatic updates on product quantity and stock status.
- Validation implemented using **Zod** for clean and structured input handling.
- Revenue calculation with MongoDB aggregation pipeline.
- Error handling with detailed and user-friendly error messages.

---

## Live Link

You can access the live version of this project here:  
[Stationery Shop Live](https://stationery-shop-l2.vercel.app/)

---

## Models

### Stationery Product Model

- **name** (string): Product name (e.g., Pen, Notebook, Eraser).
- **brand** (string): Brand of the product (e.g., Pilot, Moleskine, Faber-Castell).
- **price** (number): Price of the product.
- **category** (enum): Type of product (`Writing`, `Office Supplies`, `Art Supplies`, `Educational`, `Technology`).
- **description** (string): Brief product description.
- **quantity** (number): Quantity available in stock.
- **inStock** (boolean): Indicates whether the product is in stock.

### Order Model

- **email** (string): Customer email.
- **product** (ObjectId): Reference to the stationery product ordered.
- **quantity** (number): Quantity of the product ordered.
- **totalPrice** (number): Total price of the order (calculated as `price * quantity`).

---

## Endpoints

...

---

## Validation with Zod

Zod has been implemented to ensure robust input validation for both products and orders. The validation handles:

- **Stationery Products**: Validates required fields like `name`, `brand`, `price`, `category`, `description`, `quantity`, and `inStock`.
- **Orders**: Validates fields like `email`, `product`, `quantity`, and `totalPrice`.

---

## Error Handling

Detailed error responses are returned in case of:

- Validation errors (e.g., invalid email, price below 0).
- Not Found errors for products or orders.
- Insufficient stock errors during order placement.

---

## Technology Stack

- **Express.js** for server-side application.
- **TypeScript** for type safety.
- **MongoDB** for database.
- **Mongoose** for schema definitions and database operations.
- **Zod** for validation.
- **Node.js** runtime.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone <https://github.com/sifatullahshoyon/crafted_canvas_corner-l2>
   cd stationery-shop
   ```
