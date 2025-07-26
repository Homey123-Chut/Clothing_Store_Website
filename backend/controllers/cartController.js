const { Cart, Product, User } = require('../models');
const { validationResult } = require('express-validator');

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { productId, quantity = 1, color, size } = req.body;
    const userId = req.user.id; // From auth middleware

    // Check if product exists
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if item already exists in cart
    const existingCartItem = await Cart.findOne({
      where: { userId, productId, color, size }
    });

    if (existingCartItem) {
      // Update quantity
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
      
      const updatedItem = await Cart.findByPk(existingCartItem.id, {
        include: [
          {
            model: Product,
            attributes: ['id', 'name', 'salePrice', 'originalPrice', 'images']
          }
        ]
      });
      
      return res.json({
        message: 'Cart item updated successfully',
        cartItem: updatedItem
      });
    }

    // Create new cart item
    const cartItem = await Cart.create({
      userId,
      productId,
      quantity,
      color,
      size
    });

    const newCartItem = await Cart.findByPk(cartItem.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'salePrice', 'originalPrice', 'images']
        }
      ]
    });

    res.status(201).json({
      message: 'Item added to cart successfully',
      cartItem: newCartItem
    });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user's cart
const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cartItems = await Cart.findAll({
      where: { userId },
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'salePrice', 'originalPrice', 'images', 'discount']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    // Calculate totals
    let subtotal = 0;
    let totalSavings = 0;

    cartItems.forEach(item => {
      const itemTotal = item.Product.salePrice * item.quantity;
      const itemSavings = (item.Product.originalPrice - item.Product.salePrice) * item.quantity;
      subtotal += itemTotal;
      totalSavings += itemSavings;
    });

    const deliveryFee = 1.25;
    const total = subtotal + deliveryFee;

    res.json({
      cartItems,
      summary: {
        subtotal: subtotal.toFixed(2),
        savings: totalSavings.toFixed(2),
        deliveryFee: deliveryFee.toFixed(2),
        total: total.toFixed(2),
        itemCount: cartItems.length
      }
    });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update cart item quantity
const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const userId = req.user.id;

    if (quantity < 1) {
      return res.status(400).json({ message: 'Quantity must be at least 1' });
    }

    const cartItem = await Cart.findOne({
      where: { id, userId }
    });

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    const updatedItem = await Cart.findByPk(id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'salePrice', 'originalPrice', 'images']
        }
      ]
    });

    res.json({
      message: 'Cart item updated successfully',
      cartItem: updatedItem
    });
  } catch (error) {
    console.error('Update cart item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const cartItem = await Cart.findOne({
      where: { id, userId }
    });

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    await cartItem.destroy();

    res.json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Clear cart
const clearCart = async (req, res) => {
  try {
    const userId = req.user.id;

    await Cart.destroy({
      where: { userId }
    });

    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart
};
