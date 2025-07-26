const express = require('express');
const { body } = require('express-validator');
const {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');
const { auth, adminAuth } = require('../config/auth');

const router = express.Router();

// Public routes
router.get('/', getAllCategories);
router.get('/:id', getCategory);

// Admin routes
router.post('/', auth, adminAuth, [
  body('name').trim().isLength({ min: 2 }).withMessage('Category name is required'),
  body('description').optional().isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),
  body('parentId').optional().isInt({ min: 1 }).withMessage('Valid parent category ID is required')
], createCategory);

router.put('/:id', auth, adminAuth, updateCategory);
router.delete('/:id', auth, adminAuth, deleteCategory);

module.exports = router;
