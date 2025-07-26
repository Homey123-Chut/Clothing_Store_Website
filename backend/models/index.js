const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Review = require('./Review');
const UserFavorite = require('./UserFavorite');
const Cart = require('./Cart');
const { Order, OrderItem } = require('./Order');

// Define associations

// Category associations (already defined in Category.js)
// Product associations
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Product.belongsTo(Category, { foreignKey: 'subcategoryId', as: 'subcategory' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

// Review associations
User.hasMany(Review, { foreignKey: 'userId' });
Product.hasMany(Review, { foreignKey: 'productId' });
Review.belongsTo(User, { foreignKey: 'userId' });
Review.belongsTo(Product, { foreignKey: 'productId' });

// User Favorites associations
User.belongsToMany(Product, { through: UserFavorite, foreignKey: 'userId', as: 'favoriteProducts' });
Product.belongsToMany(User, { through: UserFavorite, foreignKey: 'productId', as: 'favoritedBy' });

// Cart associations
User.hasMany(Cart, { foreignKey: 'userId' });
Product.hasMany(Cart, { foreignKey: 'productId' });
Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsTo(Product, { foreignKey: 'productId' });

// Order associations
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

// Order Items associations
Order.hasMany(OrderItem, { foreignKey: 'orderId', as: 'items' });
Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

module.exports = {
  User,
  Category,
  Product,
  Review,
  UserFavorite,
  Cart,
  Order,
  OrderItem
};
