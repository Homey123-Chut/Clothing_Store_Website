const express = require('express');
const { body } = require('express-validator');
const { auth } = require('../config/auth');
const {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../controllers/cartController');

const router = express.Router();

// @route   POST /api/cart
// @desc    Add item to cart
// @access  Private
router.post('/', 
  auth,
  [
    body('productId').isInt().withMessage('Product ID must be a valid integer'),
    body('quantity').optional().isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
    body('color').optional().isString().withMessage('Color must be a string'),
    body('size').optional().isString().withMessage('Size must be a string')
  ],
  addToCart
);

// @route   GET /api/cart
// @desc    Get user's cart
// @access  Private
router.get('/', auth, getCart);

// @route   PUT /api/cart/:id
// @desc    Update cart item quantity
// @access  Private
router.put('/:id',
  auth,
  [
    body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
  ],
  updateCartItem
);

// @route   DELETE /api/cart/:id
// @desc    Remove item from cart
// @access  Private
router.delete('/:id', auth, removeFromCart);

// @route   DELETE /api/cart
// @desc    Clear entire cart
// @access  Private
router.delete('/', auth, clearCart);

module.exports = router;
