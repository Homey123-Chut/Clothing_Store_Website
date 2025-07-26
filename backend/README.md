# Clothing Store Backend API

A Node.js/Express.js backend API for a clothing e-commerce website with MongoDB database.

## Features

- **Authentication & Authorization**: JWT-based auth with user registration/login
- **Product Management**: CRUD operations for products with categories, reviews, and ratings
- **Category Management**: Hierarchical category system with subcategories
- **Order Management**: Complete order processing with status tracking
- **User Management**: User profiles, favorites, and shopping cart functionality
- **Security**: Helmet, CORS, input validation, and password hashing
- **File Uploads**: Support for product images (ready for implementation)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express-validator
- **Security**: Helmet, bcryptjs, CORS
- **File Upload**: Multer (configured)
- **Logging**: Morgan

## Installation

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy `.env` file and update the values:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/clothing_store
   JWT_SECRET=your_jwt_secret_key_here
   CORS_ORIGIN=http://localhost:5173
   ```

4. **Start MongoDB**:
   Make sure MongoDB is running on your system

5. **Start the server**:
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get all products (with pagination, filtering, search)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)
- `POST /api/products/:id/reviews` - Add product review

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (Admin only)
- `PUT /api/categories/:id` - Update category (Admin only)
- `DELETE /api/categories/:id` - Delete category (Admin only)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/cancel` - Cancel order
- `GET /api/orders` - Get all orders (Admin only)
- `PUT /api/orders/:id/status` - Update order status (Admin only)

### User Management
- `POST /api/users/favorites/:productId` - Add to favorites
- `DELETE /api/users/favorites/:productId` - Remove from favorites
- `GET /api/users/favorites` - Get user favorites
- `POST /api/users/cart` - Add to cart
- `PUT /api/users/cart/:itemId` - Update cart item
- `DELETE /api/users/cart/:itemId` - Remove from cart
- `GET /api/users/cart` - Get user cart
- `DELETE /api/users/cart` - Clear cart

## Database Models

### User
- Basic info (name, email, password)
- Role-based access (user/admin)
- Address information
- Favorites and cart items

### Product
- Product details (name, description, prices)
- Category association
- Images, colors, sizes
- Stock management
- Reviews and ratings

### Category
- Hierarchical structure
- Parent-child relationships
- SEO-friendly slugs

### Order
- Complete order information
- Items with quantities and prices
- Shipping and billing addresses
- Payment and order status tracking

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Helmet security headers
- Protected admin routes

## Development

### File Structure
```
backend/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── models/         # Database models
├── routes/         # API routes
├── uploads/        # File uploads (created at runtime)
├── .env           # Environment variables
├── .gitignore     # Git ignore rules
├── package.json   # Dependencies
└── server.js      # Main server file
```

### Adding New Features
1. Create model in `models/` directory
2. Create controller in `controllers/` directory
3. Define routes in `routes/` directory
4. Import routes in `server.js`

### Environment Variables
- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `CORS_ORIGIN`: Frontend URL for CORS

## Production Deployment

1. Set `NODE_ENV=production`
2. Use a secure `JWT_SECRET`
3. Configure MongoDB Atlas or production database
4. Set up reverse proxy (nginx)
5. Use PM2 for process management
6. Configure SSL/TLS certificates

## Testing

The API can be tested using tools like:
- Postman
- Thunder Client (VS Code extension)
- curl commands
- Frontend integration

## Health Check

- `GET /api/health` - API health status

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
