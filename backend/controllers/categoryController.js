const { Category } = require('../models');
const { validationResult } = require('express-validator');

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      where: { isActive: true },
      include: [
        {
          model: Category,
          as: 'subcategories',
          where: { isActive: true },
          required: false
        }
      ],
      order: [['name', 'ASC']]
    });

    // Build category tree - get only parent categories with their subcategories
    const categoryTree = categories.filter(cat => !cat.parentId).map(category => ({
      ...category.toJSON(),
      subcategories: category.subcategories || []
    }));

    res.json(categoryTree);
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single category
const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { Op } = require('sequelize');

    const where = {
      isActive: true,
      [Op.or]: [
        { id: isNaN(id) ? null : parseInt(id) },
        { slug: id }
      ]
    };

    const category = await Category.findOne({
      where,
      include: [
        {
          model: Category,
          as: 'parent',
          required: false
        },
        {
          model: Category,
          as: 'subcategories',
          where: { isActive: true },
          required: false
        }
      ]
    });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    console.error('Get category error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create category (Admin only)
const createCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, image, parentId } = req.body;

    // Check if parent category exists (if provided)
    if (parentId) {
      const parentCategory = await Category.findByPk(parentId);
      if (!parentCategory) {
        return res.status(400).json({ message: 'Parent category not found' });
      }
    }

    const category = await Category.create({
      name,
      description,
      image,
      parentId
    });

    // Fetch the created category with parent info
    const createdCategory = await Category.findByPk(category.id, {
      include: [
        {
          model: Category,
          as: 'parent',
          required: false
        }
      ]
    });

    res.status(201).json({
      message: 'Category created successfully',
      category: createdCategory
    });
  } catch (error) {
    console.error('Create category error:', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Category with this name already exists' });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// Update category (Admin only)
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // If parent is being updated, verify it exists
    if (updates.parentId) {
      const parentCategory = await Category.findByPk(updates.parentId);
      if (!parentCategory) {
        return res.status(400).json({ message: 'Parent category not found' });
      }
    }

    await category.update(updates);

    // Fetch updated category with parent info
    const updatedCategory = await Category.findByPk(category.id, {
      include: [
        {
          model: Category,
          as: 'parent',
          required: false
        }
      ]
    });

    res.json({
      message: 'Category updated successfully',
      category: updatedCategory
    });
  } catch (error) {
    console.error('Update category error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete category (Admin only)
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id, {
      include: [
        {
          model: Category,
          as: 'subcategories',
          where: { isActive: true },
          required: false
        }
      ]
    });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Check if category has active subcategories
    if (category.subcategories && category.subcategories.length > 0) {
      return res.status(400).json({
        message: 'Cannot delete category with subcategories. Delete subcategories first.'
      });
    }

    // Soft delete
    await category.update({ isActive: false });

    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Delete category error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
