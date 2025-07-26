import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag, Search, Star } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/TestPayment.css';
import Footer from '../components/Footer';
import Payment from './Payment';

// Test products with complete data for payment testing
const testProducts = [
  { 
    id: 1, 
    name: "Rushed Fit T-shirt", 
    originalPrice: 27.18, 
    salePrice: 13.59, 
    discount: 50, 
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    colors: ['black', 'white', 'navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    sku: 'RFT001',
    brand: 'StyleStore',
    material: 'Cotton',
    description: 'Comfortable rushed fit t-shirt perfect for casual wear'
  },
  { 
    id: 2, 
    name: "Classic Denim Jacket", 
    originalPrice: 89.99, 
    salePrice: 44.99, 
    discount: 50, 
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop&crop=center",
    colors: ['blue', 'black', 'grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    sku: 'CDJ002',
    brand: 'StyleStore',
    material: 'Denim',
    description: 'Classic denim jacket with modern fit and style'
  },
  { 
    id: 3, 
    name: "Summer Floral Dress", 
    originalPrice: 79.99, 
    salePrice: 39.99, 
    discount: 50, 
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center",
    colors: ['floral', 'pink', 'yellow'],
    sizes: ['XS', 'S', 'M', 'L'],
    sku: 'SFD003',
    brand: 'StyleStore',
    material: 'Cotton Blend',
    description: 'Beautiful summer dress with floral pattern'
  },
  { 
    id: 4, 
    name: "Leather Handbag", 
    originalPrice: 129.99, 
    salePrice: 64.99, 
    discount: 50, 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    colors: ['brown', 'black', 'tan'],
    sizes: ['One Size'],
    sku: 'LHB004',
    brand: 'StyleStore',
    material: 'Genuine Leather',
    description: 'Premium leather handbag with spacious interior'
  },
  { 
    id: 5, 
    name: "Running Shoes", 
    originalPrice: 119.99, 
    salePrice: 59.99, 
    discount: 50, 
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    colors: ['white', 'black', 'grey'],
    sizes: ['6', '7', '8', '9', '10', '11'],
    sku: 'RS005',
    brand: 'StyleStore',
    material: 'Synthetic',
    description: 'Comfortable running shoes with excellent cushioning'
  },
  { 
    id: 6, 
    name: "Wool Sweater", 
    originalPrice: 69.99, 
    salePrice: 34.99, 
    discount: 50, 
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center",
    colors: ['beige', 'grey', 'navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    sku: 'WS006',
    brand: 'StyleStore',
    material: 'Wool Blend',
    description: 'Cozy wool sweater perfect for cold weather'
  }
];

const TestPayment = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsPaymentOpen(true);
  };

  const closePayment = () => {
    setIsPaymentOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="test-payment-container">
      {/* Enhanced Header */}
      <header className="enhanced-header">
        <div className="header-content">
          <Link to="/" className="brand-logo">
            <Star className="brand-star" size={32} />
            <h1>StyleStore</h1>
          </Link>
          
          <div className="header-actions">
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search for products..."
                className="search-input"
              />
            </div>
            
            <div className="header-icons">
              <button className="icon-button">
                <Bell size={22} />
              </button>
              <button className="icon-button">
                <Heart size={22} />
              </button>
              <button className="icon-button">
                <ShoppingBag size={22} />
                <span className="cart-badge">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Title Section */}
      <section className="page-title-section">
        <h1 className="page-title">Payment System Demo</h1>
        <p className="page-subtitle">
          Click on any product image below to test our beautiful payment modal system. 
          Experience seamless shopping with instant product selection and checkout.
        </p>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-grid">
          {testProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-overlay">
                  <span className="click-hint">Click to Purchase</span>
                </div>
              </div>
              
              <div className="product-info">
                <div className="product-brand">{product.brand}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-pricing">
                  <span className="price-current">US ${product.salePrice.toFixed(2)}</span>
                  <span className="price-original">US ${product.originalPrice.toFixed(2)}</span>
                  <span className="price-discount">{product.discount}% OFF</span>
                </div>
                
                <div className="product-details">
                  <div className="product-colors">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="color-dot"
                        style={{ 
                          backgroundColor: color === 'floral' ? '#ff69b4' : 
                                         color === 'beige' ? '#F5F5DC' : color 
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                  <span className="product-sku">{product.sku}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instructions Section */}
      <section className="instructions-section">
        <div className="instructions-container">
          <h2 className="instructions-title">How to Test Payment System</h2>
          <div className="instructions-list">
            <div className="instruction-item">
              <div className="instruction-number">1</div>
              <p className="instruction-text">
                Click on any product image above to open the payment modal
              </p>
            </div>
            <div className="instruction-item">
              <div className="instruction-number">2</div>
              <p className="instruction-text">
                Select your preferred color and size options
              </p>
            </div>
            <div className="instruction-item">
              <div className="instruction-number">3</div>
              <p className="instruction-text">
                Adjust quantity and review the calculated pricing
              </p>
            </div>
            <div className="instruction-item">
              <div className="instruction-number">4</div>
              <p className="instruction-text">
                Click "Proceed to Checkout" to complete the demo
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Payment Modal */}
      <Payment 
        product={selectedProduct}
        isOpen={isPaymentOpen}
        onClose={closePayment}
      />
    </div>
  );
};

export default TestPayment;
