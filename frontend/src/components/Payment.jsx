import React, { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import '../styles/Payment.css';

const Payment = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      // Default sizes if not provided
      setSelectedSize('M');
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const deliveryFee = 1.25;
  const total = product.originalPrice * quantity;
  const savings = (product.originalPrice - product.salePrice) * quantity;
  const amountToPay = (product.salePrice * quantity + deliveryFee).toFixed(2);

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleCheckout = () => {
    const orderData = {
      product: product,
      quantity: quantity,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
      total: amountToPay
    };
    console.log('Proceeding to checkout with:', orderData);
    alert(`Proceeding to checkout for ${product.name}\nQuantity: ${quantity}\nTotal: $${amountToPay}`);
    onClose();
  };

  const availableSizes = product.sizes || ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="payment-overlay">
      <div className="payment-container">
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="payment-content">
          <div className="product-preview">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="product-code">Code: {product.sku || `SKU${product.id.toString().padStart(3, '0')}`}</p>
          </div>

          <div className="product-details">
            <div className="selection-row">
              <div className="color-selection">
                <strong>Color:</strong>
                <div className="color-options">
                  {product.colors && product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color === 'beige' ? '#F5F5DC' : color }}
                      title={color}
                    >
                      {color === 'floral' ? '🌸' : ''}
                    </button>
                  ))}
                </div>
              </div>

              <div className="size-selection">
                <strong>Size:</strong>
                <select 
                  value={selectedSize} 
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="size-select"
                >
                  {availableSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="price-info">
              <p className="price-row">
                <span className="current-price">US ${product.salePrice.toFixed(2)}</span>
                <span className="original-price">US ${product.originalPrice.toFixed(2)}</span>
                <span className="discount">({product.discount}% off)</span>
              </p>
            </div>

            <div className="quantity-control">
              <strong>Quantity:</strong>
              <div className="quantity-buttons">
                <button onClick={decreaseQuantity} disabled={quantity <= 1}>
                  <Minus size={16} />
                </button>
                <span className="quantity-display">{quantity}</span>
                <button onClick={increaseQuantity}>
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="summary">
              <div className="summary-row">
                <span>Total:</span>
                <span>US ${total.toFixed(2)}</span>
              </div>
              <div className="summary-row save">
                <span>Save:</span>
                <span>-US ${savings.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee:</span>
                <span>US ${deliveryFee.toFixed(2)}</span>
              </div>
              <hr className="summary-divider" />
              <div className="summary-row total">
                <span><strong>Amount to pay:</strong></span>
                <span><strong>US ${amountToPay}</strong></span>
              </div>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
