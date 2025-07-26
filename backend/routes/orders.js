const express = require('express');
const { body } = require('express-validator');
const {
  createOrder,
  getUserOrders,
  getOrder,
  cancelOrder,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');
const { auth, adminAuth } = require('../config/auth');

const router = express.Router();

// User routes
router.post('/', auth, [
  body('items').isArray({ min: 1 }).withMessage('Order must contain at least one item'),
  body('items.*.product').isMongoId().withMessage('Valid product ID is required'),
  body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  body('shippingAddress.name').trim().isLength({ min: 2 }).withMessage('Name is required'),
  body('shippingAddress.street').trim().isLength({ min: 5 }).withMessage('Street address is required'),
  body('shippingAddress.city').trim().isLength({ min: 2 }).withMessage('City is required'),
  body('shippingAddress.zipCode').trim().isLength({ min: 3 }).withMessage('ZIP code is required'),
  body('paymentMethod').isIn(['credit_card', 'debit_card', 'paypal', 'cash_on_delivery']).withMessage('Valid payment method is required')
], createOrder);

router.get('/my-orders', auth, getUserOrders);
router.get('/:id', auth, getOrder);
router.put('/:id/cancel', auth, cancelOrder);

// Admin routes
router.get('/', auth, adminAuth, getAllOrders);
router.put('/:id/status', auth, adminAuth, updateOrderStatus);

module.exports = router;
