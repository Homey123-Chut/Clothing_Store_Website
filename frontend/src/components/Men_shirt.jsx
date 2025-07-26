import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import Men_shirt1 from '../assets/men_shirt1.webp';
import Men_shirt2 from '../assets/men_shirt2.webp';
import Men_shirt3 from '../assets/men_shirt3.webp';
import Men_shirt4 from '../assets/men_shirt4.webp';
import Men_shirt5 from '../assets/men_shirt5.webp';
import Men_shirt6 from '../assets/men_shirt6.webp';
import Men_shirt7 from '../assets/men_shirt7.webp';
import Men_shirt8 from '../assets/men_shirt8.webp';
import Men_shirt9 from '../assets/men_shirt9.webp';
import Men_shirt10 from '../assets/men_shirt10.webp';
import Men_shirt11 from '../assets/men_shirt11.webp';
import Men_shirt12 from '../assets/men_shirt12.jpg';
import Men_shirt13 from '../assets/men_shirt13.jpg';
import Men_shirt14 from '../assets/men_shirt14.webp';
import Men_shirt15 from '../assets/men_shirt15.jpg';
import Men_shirt16 from '../assets/men_shirt16.jpg';
import Men_shirt17 from '../assets/men_shirt17.webp';
import Men_shirt18 from '../assets/men_shirt18.webp';
import Men_shirt19 from '../assets/men_shirt19.webp';
import Men_shirt20 from '../assets/men_shirt20.webp';
import Men_shirt21 from '../assets/men_shirt21.webp';
import Men_shirt22 from '../assets/men_shirt22.webp';

const products = [
  { id: 1, name: "Casual Cotton Shirt", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: Men_shirt1, colors: ['white', 'blue'] },
  { id: 2, name: "Formal Slim Shirt", originalPrice: 59.99, salePrice: 41.99, discount: 30, image: Men_shirt2, colors: ['black'] },
  { id: 3, name: "Checked Button-Up", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: Men_shirt3, colors: ['red', 'black'] },
  { id: 4, name: "Linen Short Sleeve", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: Men_shirt4, colors: ['beige'] },
  { id: 5, name: "Oxford Long Sleeve", originalPrice: 64.99, salePrice: 45.49, discount: 30, image: Men_shirt5, colors: ['blue'] },
  { id: 6, name: "Classic Plaid Shirt", originalPrice: 52.99, salePrice: 37.09, discount: 30, image: Men_shirt6, colors: ['green'] },
  { id: 7, name: "Denim Shirt", originalPrice: 58.99, salePrice: 41.29, discount: 30, image: Men_shirt7, colors: ['blue'] },
  { id: 8, name: "Mandarin Collar Shirt", originalPrice: 47.99, salePrice: 33.59, discount: 30, image: Men_shirt8, colors: ['white'] },
  { id: 9, name: "Printed Short Sleeve", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: Men_shirt9, colors: ['multi'] },
  { id: 10, name: "Vertical Stripe Shirt", originalPrice: 43.99, salePrice: 30.79, discount: 30, image: Men_shirt10, colors: ['black', 'white'] },
  { id: 11, name: "Flannel Shirt", originalPrice: 55.99, salePrice: 39.19, discount: 30, image: Men_shirt11, colors: ['red', 'grey'] },
  { id: 12, name: "Retro Print Shirt", originalPrice: 48.99, salePrice: 34.29, discount: 30, image: Men_shirt12, colors: ['yellow'] },
  { id: 13, name: "Business Formal Shirt", originalPrice: 69.99, salePrice: 48.99, discount: 30, image: Men_shirt13, colors: ['white'] },
  { id: 14, name: "Corduroy Shirt", originalPrice: 51.99, salePrice: 36.39, discount: 30, image: Men_shirt14, colors: ['brown'] },
  { id: 15, name: "Stretch Fit Shirt", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: Men_shirt15, colors: ['blue', 'black'] },
  { id: 16, name: "Silk Dress Shirt", originalPrice: 79.99, salePrice: 55.99, discount: 30, image: Men_shirt16, colors: ['navy'] },
  { id: 17, name: "Wrinkle-Free Shirt", originalPrice: 58.99, salePrice: 41.29, discount: 30, image: Men_shirt17, colors: ['white', 'grey'] },
  { id: 18, name: "Double Pocket Shirt", originalPrice: 46.99, salePrice: 32.89, discount: 30, image: Men_shirt18, colors: ['khaki'] },
  { id: 19, name: "Hawaiian Shirt", originalPrice: 42.99, salePrice: 30.09, discount: 30, image: Men_shirt19, colors: ['floral'] },
  { id: 20, name: "Utility Shirt", originalPrice: 59.99, salePrice: 41.99, discount: 30, image: Men_shirt20, colors: ['olive'] },
  { id: 21, name: "Oversized Shirt", originalPrice: 62.99, salePrice: 44.09, discount: 30, image: Men_shirt21, colors: ['grey'] },
  { id: 22, name: "Half Sleeve Button-Up", originalPrice: 45.99, salePrice: 32.19, discount: 30, image: Men_shirt22, colors: ['blue', 'white'] }
];



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


const Men_shirt = () => {
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
              <span className="percentage">30% OFF</span>
              <span className="sale-subtitle">ON MID-YEAR SALE</span>
            </div>
          </div>
        </div>
        <div className="women-tshirt-title">Shirt</div>

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

export default Men_shirt;