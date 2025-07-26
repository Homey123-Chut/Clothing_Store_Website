import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from './Footer';

import accessories_belt1 from '../assets/belt1.webp';
import accessories_belt2 from '../assets/belt2.webp';
import accessories_belt3 from '../assets/belt3.jpg';
import accessories_belt4 from '../assets/belt4.jpg';
import accessories_belt5 from '../assets/belt5.jpg';
import accessories_belt6 from '../assets/belt6.jpg';
import accessories_belt7 from '../assets/belt7.jpg';
import accessories_belt8 from '../assets/belt8.jpg';
import accessories_belt9 from '../assets/belt9.jpg';



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

const products = [
  { id: 1, name: "Classic Leather Belt", originalPrice: 29.99, salePrice: 14.99, discount: 50, image: accessories_belt1, colors: ['black', 'brown'] },
  { id: 2, name: "Braided Casual Belt", originalPrice: 24.99, salePrice: 12.49, discount: 50, image: accessories_belt2, colors: ['tan', 'beige'] },
  { id: 3, name: "Slim Dress Belt", originalPrice: 34.99, salePrice: 17.49, discount: 50, image: accessories_belt3, colors: ['black'] },
  { id: 4, name: "Double Buckle Belt", originalPrice: 39.99, salePrice: 19.99, discount: 50, image: accessories_belt4, colors: ['white', 'brown'] },
  { id: 5, name: "Woven Stretch Belt", originalPrice: 27.99, salePrice: 13.99, discount: 50, image: accessories_belt5, colors: ['blue', 'navy'] },
  { id: 6, name: "Studded Punk Belt", originalPrice: 31.99, salePrice: 15.99, discount: 50, image: accessories_belt6, colors: ['black', 'silver'] },
  { id: 7, name: "Gold Buckle Belt", originalPrice: 36.99, salePrice: 18.49, discount: 50, image: accessories_belt7, colors: ['black', 'gold'] },
  { id: 8, name: "Reversible Belt", originalPrice: 32.99, salePrice: 16.49, discount: 50, image: accessories_belt8, colors: ['black', 'brown'] },
  { id: 9, name: "Vintage Western Belt", originalPrice: 38.99, salePrice: 19.49, discount: 50, image: accessories_belt9, colors: ['brown'] }
];




const Accessories_belt = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(new Set());
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleProductClick = (product) => {
    // Navigate to payment page with product information
    navigate('/payment', { state: { product } });
  };

  return (
    <div>
      <div className="homepage-container">
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
        <div className="women-tshirt-container">
        <div className="sale-banner">
          <div className="banner-content">
            <div className="sale-text">
              <span className="up-to">UP TO</span>
              <span className="percentage">50% OFF</span>
              <span className="sale-subtitle">ON MID-YEAR SALE</span>
            </div>
          </div>
        </div>
        <div className="women-tshirt-title">Belt</div>

        {/* Product Grid */}
        <div className="products-grids">
          {products.map((product) => (
            <div key={product.id} className="product-cards">
              <div className="product-image-containers">
                <div className="discount-badge">{product.discount}%</div>
                <button
                  className={`favorite-btn ${favorites.has(product.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart size={16} fill={favorites.has(product.id) ? '#ef4444' : 'none'} />
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-images"
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="price-container">
                  <span className="sale-price">US ${product.salePrice}</span>
                  <span className="original-price">US ${product.originalPrice}</span>
                </div>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <div key={index} className={`color-dot ${color}`}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
      <div className="Footer"><Footer /></div>
 
    </div>
  );
};

export default Accessories_belt;