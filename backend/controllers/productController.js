const { Product, Category, Review } = require('../models');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    // Build filter object
    const where = { isActive: true };

    if (req.query.category) {
      const category = await Category.findOne({ where: { slug: req.query.category } });
      if (category) {
        where.categoryId = category.id;
      }
    }

    if (req.query.subcategory) {
      const subcategory = await Category.findOne({ where: { slug: req.query.subcategory } });
      if (subcategory) {
        where.subcategoryId = subcategory.id;
      }
    }

    if (req.query.search) {
      where[Op.or] = [
        { name: { [Op.iLike]: `%${req.query.search}%` } },
        { description: { [Op.iLike]: `%${req.query.search}%` } },
        { brand: { [Op.iLike]: `%${req.query.search}%` } }
      ];
    }

    if (req.query.minPrice || req.query.maxPrice) {
      where.salePrice = {};
      if (req.query.minPrice) where.salePrice[Op.gte] = parseFloat(req.query.minPrice);
      if (req.query.maxPrice) where.salePrice[Op.lte] = parseFloat(req.query.maxPrice);
    }

    // Sort options
    let order = [];
    switch (req.query.sort) {
      case 'price_low':
        order = [['salePrice', 'ASC']];
        break;
      case 'price_high':
        order = [['salePrice', 'DESC']];
        break;
      case 'newest':
        order = [['createdAt', 'DESC']];
        break;
      case 'popular':
        order = [['ratingAverage', 'DESC']];
        break;
      default:
        order = [['createdAt', 'DESC']];
    }

    const { count, rows: products } = await Product.findAndCountAll({
      where,
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'slug']
        },
        {
          model: Category,
          as: 'subcategory',
          attributes: ['id', 'name', 'slug'],
          required: false
        }
      ],
      order,
      offset,
      limit,
      distinct: true
    });

    res.json({
      products,
      pagination: {
        page,
        limit,
        total: count,
        pages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single product
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const where = {
      isActive: true,
      [Op.or]: [
        { id: isNaN(id) ? null : parseInt(id) },
        { slug: id }
      ]
    };

    const product = await Product.findOne({
      where,
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'slug']
        },
        {
          model: Category,
          as: 'subcategory',
          attributes: ['id', 'name', 'slug'],
          required: false
        },
        {
          model: Review,
          include: [
            {
              model: require('../models/User'),
              attributes: ['id', 'name']
            }
          ],
          required: false
        }
      ]
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ 
      message: 'Product found successfully',
      product: product 
    });
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create product (Admin only)
const createProduct = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const productData = req.body;

    // Check if category exists
    const category = await Category.findByPk(productData.categoryId);
    if (!category) {
      return res.status(400).json({ message: 'Category not found' });
    }

    // Check if subcategory exists (if provided)
    if (productData.subcategoryId) {
      const subcategory = await Category.findByPk(productData.subcategoryId);
      if (!subcategory) {
        return res.status(400).json({ message: 'Subcategory not found' });
      }
    }

    const product = await Product.create(productData);

    // Fetch the created product with associations
    const createdProduct = await Product.findByPk(product.id, {
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'slug']
        },
        {
          model: Category,
          as: 'subcategory',
          attributes: ['id', 'name', 'slug'],
          required: false
        }
      ]
    });

    res.status(201).json({
      message: 'Product created successfully',
      product: createdProduct
    });
  } catch (error) {
    console.error('Create product error:', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Product with this SKU already exists' });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// Update product (Admin only)
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // If category is being updated, verify it exists
    if (updates.categoryId) {
      const category = await Category.findByPk(updates.categoryId);
      if (!category) {
        return res.status(400).json({ message: 'Category not found' });
      }
    }

    // If subcategory is being updated, verify it exists
    if (updates.subcategoryId) {
      const subcategory = await Category.findByPk(updates.subcategoryId);
      if (!subcategory) {
        return res.status(400).json({ message: 'Subcategory not found' });
      }
    }

    await product.update(updates);

    // Fetch updated product with associations
    const updatedProduct = await Product.findByPk(product.id, {
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'slug']
        },
        {
          model: Category,
          as: 'subcategory',
          attributes: ['id', 'name', 'slug'],
          required: false
        }
      ]
    });

    res.json({
      message: 'Product updated successfully',
      product: updatedProduct
    });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete product (Admin only)
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Soft delete
    await product.update({ isActive: false });

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add product review
const addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if user already reviewed this product
    const existingReview = await Review.findOne({
      where: {
        productId: id,
        userId: req.user.id
      }
    });

    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this product' });
    }

    // Create review
    const review = await Review.create({
      productId: id,
      userId: req.user.id,
      rating,
      comment
    });

    // Update product rating average
    const reviews = await Review.findAll({
      where: { productId: id }
    });

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    await product.update({
      ratingAverage: averageRating,
      ratingCount: reviews.length
    });

    // Fetch the created review with user info
    const createdReview = await Review.findByPk(review.id, {
      include: [
        {
          model: require('../models/User'),
          attributes: ['id', 'name']
        }
      ]
    });

    res.status(201).json({
      message: 'Review added successfully',
      review: createdReview
    });
  } catch (error) {
    console.error('Add review error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get featured products
const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        isActive: true,
        isFeatured: true
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'slug']
        }
      ],
      limit: 10,
      order: [['createdAt', 'DESC']]
    });

    res.json(products);
  } catch (error) {
    console.error('Get featured products error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  addReview,
  getFeaturedProducts
};
