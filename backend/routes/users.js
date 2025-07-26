const express = require('express');
const { body } = require('express-validator');
const {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
  addToCart,
  updateCartItem,
  removeFromCart,
  getCart,
  clearCart
} = require('../controllers/userController');
const { auth } = require('../config/auth');

const router = express.Router();

// Favorites routes
router.post('/favorites/:productId', auth, addToFavorites);
router.delete('/favorites/:productId', auth, removeFromFavorites);
router.get('/favorites', auth, getFavorites);

// Cart routes
router.post('/cart', auth, [
  body('productId').isInt({ min: 1 }).withMessage('Valid product ID is required'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  body('color').optional().trim(),
  body('size').optional().trim()
], addToCart);

router.put('/cart/:itemId', auth, [
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
], updateCartItem);

router.delete('/cart/:itemId', auth, removeFromCart);
router.get('/cart', auth, getCart);
router.delete('/cart', auth, clearCart);

module.exports = router;
