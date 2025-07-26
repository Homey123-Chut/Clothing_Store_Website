import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Bell, ShoppingBag, Plus, Minus } from 'lucide-react';
import '../styles/ProductDetail.css';
import Footer from './Footer';
import apiService from '../services/api';

const categories = [
  {
    name: "Women",
    items: [
      { name: "T-shirt", link: "/t-shirt" },
      { name: "Shirt", link: "/shirt" },
      { name: "Jacket", link: "/jacket" },
      { name: "Skirt", link: "/skirt" },
      { name: "Shorts", link: "/shorts" },
      { name: "Jeans", link: "/jeans" },
      { name: "Trouser", link: "/trouser" },
      { name: "Dress", link: "/dress" },
      { name: "Shoes", link: "/shoes"},
    ],
  },
  {
    name: "Men",
    items: [
      { name: "T-shirt", link: "/men/t-shirt" },
      { name: "Jeans", link: "/men/jeans" },
      { name: "Jacket", link: "/men/jacket" },
      { name: "Trouser", link: "/men/trouser" },
      { name: "Shirt", link: "/men/shirt" },
      { name: "Shoes", link: "/men/shoes"},
    ],
  },
  {
    name: "Girls",
    items: [
      { name: "Clothing", link: "/girls/clothing" },
      { name: "Shoes", link: "/girls/shoes"},
    ],
  },
  {
    name: "Boys",
    items: [
      { name: "Clothing", link: "/boys/clothing" },
      { name: "Shoes", link: "/boys/shoes"},
    ],
  },
  {
    name: "Accessories",
    items: [
      { name: "Glasses", link: "/accessories/glasses" },
      { name: "Watches", link: "/accessories/watches"},
      { name: "Gloves", link: "/accessories/gloves" },
      { name: "Belt", link: "/accessories/belt" },
      { name: "Hat", link: "/accessories/hat" },
      { name: "Bag", link: "/accessories/bag" },
      { name: "Wallet", link: "/accessories/wallet" },
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(2);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      const data = await apiService.getProduct(id);
      setProduct(data.product);
      setSelectedSize(data.product.sizes && data.product.sizes[0] || '');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [id, fetchProduct]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    try {
      await apiService.addToCart(product.id, quantity, null, selectedSize);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      if (error.message.includes('401') || error.message.includes('token')) {
        alert('Please login to add items to cart');
        navigate('/login');
      } else {
        alert('Error adding product to cart. Please try again.');
      }
    }
  };

  const calculateTotal = () => {
    if (!product) return 0;
    return (product.salePrice * quantity).toFixed(2);
  };

  const calculateSavings = () => {
    if (!product) return 0;
    return ((product.originalPrice - product.salePrice) * quantity).toFixed(2);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading">Loading product details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error">Error: {error}</div>
        <button onClick={() => navigate(-1)} className="go-back-btn">
          Go Back
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <div className="error">Product not found</div>
        <button onClick={() => navigate(-1)} className="go-back-btn">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
          <Link to="/" className="logo-bg">
            <span className="logo-text">
              <span className="logo-star">★</span>
              StyleStore
            </span>
          </Link>
        </div>
        <div className="header-right">
          <div className="header-row">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
            <div className="icons-area">
              <Bell size={20} className="text-black" />
              <Heart size={20} className="text-black" />
              <div className="shopping-bag-rel">
                <ShoppingBag size={22} className="text-black" />
                <span className="shopping-bag-badge">0</span>
              </div>
              <Link to="/login" className="login-link">LOGIN</Link>
              <Link to="/register" className="register-link">REGISTER</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="category-nav">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`category-group${openDropdown === cat.name ? " open" : ""}`}
            onMouseEnter={() => cat.items && setOpenDropdown(cat.name)}
            onMouseLeave={() => cat.items && setOpenDropdown(null)}
          >
            <button
              className={`category-btn${cat.name === "Women" ? " women" : ""}`}
              style={{ fontWeight: 700 }}
              onClick={() => setOpenDropdown(cat.name === openDropdown ? null : cat.name)}
              type="button"
            >
              {cat.name}
            </button>
            {cat.items && (
              <div className="dropdown">
                <ul>
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Product Detail Container */}
      <div className="product-detail-container">
        <div className="product-detail-content">
          {/* Product Images */}
          <div className="product-images-section">
            <div className="image-thumbnails">
              {product.images && product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <div className="main-image-container">
              <button
                className={`favorite-btn-detail ${isFavorite ? 'active' : ''}`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart size={24} fill={isFavorite ? '#ef4444' : 'none'} />
              </button>
              <img
                src={product.images && product.images[selectedImage] || product.image}
                alt={product.name}
                className="main-product-image"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="product-info-section">
            <div className="product-details">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-code">Code: {product.sku}</p>
              
              <div className="size-quantity-container">
                <div className="size-selection">
                  <label className="size-label">Size</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="size-select"
                  >
                    {product.sizes && product.sizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div className="quantity-selection">
                  <label className="quantity-label">Quantity</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="quantity-btn"
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity-display">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="quantity-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="price-section">
                <div className="price-row">
                  <span className="original-price-large">US ${product.originalPrice}</span>
                  <span className="discount-percentage">({product.discount}% off)</span>
                </div>
                <div className="sale-price-large">US ${product.salePrice}</div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <div className="summary-row">
                <span className="summary-label">Total</span>
                <span className="summary-value">US ${calculateTotal()}</span>
              </div>
              
              <div className="summary-row">
                <span className="summary-label">Save</span>
                <span className="summary-value save-amount">-US ${calculateSavings()}</span>
              </div>
              
              <div className="summary-row">
                <span className="summary-label">Delivery fee</span>
                <span className="summary-value">US $1.25</span>
              </div>
              
              <hr className="summary-divider" />
              
              <div className="summary-row total-row">
                <span className="summary-label">Amount to pay</span>
                <span className="summary-value">US ${(parseFloat(calculateTotal()) + 1.25).toFixed(2)}</span>
              </div>

              <button 
                onClick={handleAddToCart}
                className="checkout-btn"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
