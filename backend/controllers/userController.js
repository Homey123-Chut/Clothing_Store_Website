const { User, Product, UserFavorite, Cart } = require('../models');

// Add to favorites
const addToFavorites = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if already in favorites
    const existingFavorite = await UserFavorite.findOne({
      where: {
        userId: req.user.id,
        productId: productId
      }
    });

    if (existingFavorite) {
      return res.status(400).json({ message: 'Product already in favorites' });
    }

    await UserFavorite.create({
      userId: req.user.id,
      productId: productId
    });

    res.json({ message: 'Product added to favorites' });
  } catch (error) {
    console.error('Add to favorites error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Remove from favorites
const removeFromFavorites = async (req, res) => {
  try {
    const { productId } = req.params;

    const deleted = await UserFavorite.destroy({
      where: {
        userId: req.user.id,
        productId: productId
      }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Product not found in favorites' });
    }

    res.json({ message: 'Product removed from favorites' });
  } catch (error) {
    console.error('Remove from favorites error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user favorites
const getFavorites = async (req, res) => {
  try {
    const favorites = await UserFavorite.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Product,
          include: [
            {
              model: require('../models/Category'),
              as: 'category',
              attributes: ['id', 'name', 'slug']
            }
          ]
        }
      ]
    });

    res.json(favorites.map(fav => fav.Product));
  } catch (error) {
    console.error('Get favorites error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add to cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1, color, size } = req.body;

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (quantity > product.stock) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    // Check if item already exists in cart
    const existingCartItem = await Cart.findOne({
      where: {
        userId: req.user.id,
        productId: productId,
        color: color || null,
        size: size || null
      }
    });

    if (existingCartItem) {
      // Update quantity
      const newQuantity = existingCartItem.quantity + quantity;
      if (newQuantity > product.stock) {
        return res.status(400).json({ message: 'Insufficient stock' });
      }
      await existingCartItem.update({ quantity: newQuantity });
    } else {
      // Create new cart item
      await Cart.create({
        userId: req.user.id,
        productId: productId,
        quantity,
        color,
        size
      });
    }

    res.json({
      message: 'Product added to cart'
    });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update cart item
const updateCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;

    const cartItem = await Cart.findOne({
      where: {
        id: itemId,
        userId: req.user.id
      }
    });

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    const product = await Product.findByPk(cartItem.productId);
    if (quantity > product.stock) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    await cartItem.update({ quantity });

    res.json({
      message: 'Cart updated successfully'
    });
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Remove from cart
const removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.params;

    const deleted = await Cart.destroy({
      where: {
        id: itemId,
        userId: req.user.id
      }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user cart
const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Product,
          include: [
            {
              model: require('../models/Category'),
              as: 'category',
              attributes: ['id', 'name', 'slug']
            }
          ]
        }
      ]
    });

    res.json(cartItems);
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Clear cart
const clearCart = async (req, res) => {
  try {
    await Cart.destroy({
      where: { userId: req.user.id }
    });
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
  addToCart,
  updateCartItem,
  removeFromCart,
  getCart,
  clearCart
};
