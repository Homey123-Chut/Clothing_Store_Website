import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import girl_shirt1 from '../assets/girl_shirt1.jpg';
import girl_shirt2 from '../assets/girl_shirt2.jpg';
import girl_shirt3 from '../assets/girl_shirt3.jpg';
import girl_shirt4 from '../assets/girl_shirt4.jpg';
import girl_shirt5 from '../assets/girl_shirt5.jpg';
import girl_shirt6 from '../assets/girl_shirt6.jpg';
import girl_shirt7 from '../assets/girl_shirt7.jpg';
import girl_shirt8 from '../assets/girl_shirt8.jpg';
import girl_shirt9 from '../assets/girl_shirt9.jpg';
import girl_shirt10 from '../assets/girl_shirt10.jpg';
import girl_shirt11 from '../assets/girl_shirt11.jpg';
import girl_shirt12 from '../assets/girl_shirt12.jpg';
import girl_shirt13 from '../assets/girl_shirt13.jpg';
import girl_shirt14 from '../assets/girl_shirt14.jpg';
import girl_shirt15 from '../assets/girl_shirt15.jpg';
import girl_shirt16 from '../assets/girl_shirt16.jpg';
import girl_shirt17 from '../assets/girl_shirt17.jpg';
import girl_shirt18 from '../assets/girl_shirt18.jpg';
import girl_shirt19 from '../assets/girl_shirt19.jpg';
import girl_shirt20 from '../assets/girl_shirt20.jpg';
import girl_shirt21 from '../assets/girl_shirt21.jpg';
import girl_shirt22 from '../assets/girl_shirt22.jpg';
import girl_shirt23 from '../assets/girl_shirt23.jpg';
import girl_shirt24 from '../assets/girl_shirt24.jpg';
import girl_shirt25 from '../assets/girl_shirt25.jpg';
import girl_shirt26 from '../assets/girl_shirt26.jpg';
import girl_shirt27 from '../assets/girl_shirt27.jpg';
import girl_shirt28 from '../assets/girl_shirt28.jpg';
import girl_shirt29 from '../assets/girl_shirt29.jpg';
import girl_shirt30 from '../assets/girl_shirt30.jpg';
import girl_shirt31 from '../assets/girl_shirt31.jpg';
import girl_shirt32 from '../assets/girl_shirt32.jpg';
import girl_shirt33 from '../assets/girl_shirt33.jpg';
import girl_shirt34 from '../assets/girl_shirt34.jpg';
import girl_jean1 from '../assets/girl_jean1.jpg';
import girl_jean2 from '../assets/girl_jean2.jpg';
import girl_jean3 from '../assets/girl_jean3.jpg';
import girl_jean4 from '../assets/girl_jean4.jpg';
import girl_jean5 from '../assets/girl_jean5.jpg';
import girl_jean6 from '../assets/girl_jean6.jpg';
import girl_jean7 from '../assets/girl_jean7.jpg';
import girl_jean8 from '../assets/girl_jean8.jpg';
import girl_jean9 from '../assets/girl_jean9.jpg';
import girl_jean10 from '../assets/girl_jean10.jpg';
import girl_jean11 from '../assets/girl_jean11.jpg';
import girl_jean12 from '../assets/girl_jean12.jpg';

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
  { id: 1, name: "Floral Print Shirt", originalPrice: 35.99, salePrice: 25.19, discount: 30, image: girl_shirt1, colors: ['pink', 'white'] },
  { id: 2, name: "Ruffled Sleeve Shirt", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: girl_shirt2, colors: ['white', 'blue'] },
  { id: 3, name: "Striped Casual Shirt", originalPrice: 32.99, salePrice: 23.09, discount: 30, image: girl_shirt3, colors: ['navy', 'white'] },
  { id: 4, name: "Polka Dot Shirt", originalPrice: 29.99, salePrice: 20.99, discount: 30, image: girl_shirt4, colors: ['red', 'white'] },
  { id: 5, name: "Lace Detail Shirt", originalPrice: 42.99, salePrice: 30.09, discount: 30, image: girl_shirt5, colors: ['pink'] },
  { id: 6, name: "Button Down Shirt", originalPrice: 37.99, salePrice: 26.59, discount: 30, image: girl_shirt6, colors: ['white'] },
  { id: 7, name: "Casual Denim Shirt", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: girl_shirt7, colors: ['denim blue'] },
  { id: 8, name: "Graphic Print Shirt", originalPrice: 28.99, salePrice: 20.29, discount: 30, image: girl_shirt8, colors: ['white', 'black'] },
  { id: 9, name: "Ribbed Knit Shirt", originalPrice: 34.99, salePrice: 24.49, discount: 30, image: girl_shirt9, colors: ['pink'] },
  { id: 10, name: "Bow Tie Shirt", originalPrice: 36.99, salePrice: 25.89, discount: 30, image: girl_shirt10, colors: ['white'] },
  { id: 11, name: "Long Sleeve Shirt", originalPrice: 38.99, salePrice: 26.99, discount: 30, image: girl_shirt11, colors: ['purple'] },
  { id: 12, name: "Cotton Blend Shirt", originalPrice: 33.99, salePrice: 23.79, discount: 30, image: girl_shirt12, colors: ['blue'] },
  { id: 13, name: "Pleated Sleeve Shirt", originalPrice: 40.99, salePrice: 28.69, discount: 30, image: girl_shirt13, colors: ['pink'] },
  { id: 14, name: "Embroidered Shirt", originalPrice: 42.99, salePrice: 30.09, discount: 30, image: girl_shirt14, colors: ['white'] },
  { id: 15, name: "Casual Crop Shirt", originalPrice: 31.99, salePrice: 22.39, discount: 30, image: girl_shirt15, colors: ['green'] },
  { id: 16, name: "Button Cuff Shirt", originalPrice: 36.99, salePrice: 25.89, discount: 30, image: girl_shirt16, colors: ['white'] },
  { id: 17, name: "Soft Cotton Shirt", originalPrice: 29.99, salePrice: 20.99, discount: 30, image: girl_shirt17, colors: ['yellow'] },
  { id: 18, name: "Vintage Print Shirt", originalPrice: 35.99, salePrice: 25.19, discount: 30, image: girl_shirt18, colors: ['red'] },
  { id: 19, name: "Cropped Long Sleeve Shirt", originalPrice: 38.99, salePrice: 26.99, discount: 30, image: girl_shirt19, colors: ['blue'] },
  { id: 20, name: "Frill Collar Shirt", originalPrice: 40.99, salePrice: 28.69, discount: 30, image: girl_shirt20, colors: ['white'] },
  { id: 21, name: "Slim Fit Shirt", originalPrice: 33.99, salePrice: 23.79, discount: 30, image: girl_shirt21, colors: ['pink'] },
  { id: 22, name: "Graphic Tee Shirt", originalPrice: 27.99, salePrice: 19.59, discount: 30, image: girl_shirt22, colors: ['white', 'black'] },
  { id: 23, name: "Off Shoulder Shirt", originalPrice: 38.99, salePrice: 26.99, discount: 30, image: girl_shirt23, colors: ['red'] },
  { id: 24, name: "Lightweight Shirt", originalPrice: 29.99, salePrice: 20.99, discount: 30, image: girl_shirt24, colors: ['blue'] },
  { id: 25, name: "Ruffled Hem Shirt", originalPrice: 32.99, salePrice: 23.09, discount: 30, image: girl_shirt25, colors: ['white'] },
  { id: 26, name: "Flared Sleeve Shirt", originalPrice: 35.99, salePrice: 25.19, discount: 30, image: girl_shirt26, colors: ['purple'] },
  { id: 27, name: "Layered Shirt", originalPrice: 37.99, salePrice: 26.59, discount: 30, image: girl_shirt27, colors: ['pink'] },
  { id: 28, name: "Cotton Shirt", originalPrice: 31.99, salePrice: 22.39, discount: 30, image: girl_shirt28, colors: ['white'] },
  { id: 29, name: "Lace Sleeve Shirt", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: girl_shirt29, colors: ['blue'] },
  { id: 30, name: "Tie Neck Shirt", originalPrice: 34.99, salePrice: 24.49, discount: 30, image: girl_shirt30, colors: ['red'] },
  { id: 31, name: "Puff Sleeve Shirt", originalPrice: 40.99, salePrice: 28.69, discount: 30, image: girl_shirt31, colors: ['white'] },
  { id: 32, name: "Vintage Style Shirt", originalPrice: 38.99, salePrice: 26.99, discount: 30, image: girl_shirt32, colors: ['green'] },
  { id: 33, name: "Casual Tee Shirt", originalPrice: 29.99, salePrice: 20.99, discount: 30, image: girl_shirt33, colors: ['blue'] },
  { id: 34, name: "Sleeveless Shirt", originalPrice: 27.99, salePrice: 19.59, discount: 30, image: girl_shirt34, colors: ['white'] },
  { id: 35, name: "Classic Skinny Jeans", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: girl_jean1, colors: ['blue'] },
  { id: 36, name: "Ripped Jeans", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: girl_jean2, colors: ['light blue'] },
  { id: 37, name: "High Waist Jeans", originalPrice: 52.99, salePrice: 37.09, discount: 30, image: girl_jean3, colors: ['dark blue'] },
  { id: 38, name: "Straight Leg Jeans", originalPrice: 47.99, salePrice: 33.59, discount: 30, image: girl_jean4, colors: ['blue'] },
  { id: 39, name: "Distressed Jeans", originalPrice: 59.99, salePrice: 41.99, discount: 30, image: girl_jean5, colors: ['blue'] },
  { id: 40, name: "Relaxed Fit Jeans", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: girl_jean6, colors: ['black'] },
  { id: 41, name: "Cropped Jeans", originalPrice: 42.99, salePrice: 30.09, discount: 30, image: girl_jean7, colors: ['blue'] },
  { id: 42, name: "Classic Fit Jeans", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: girl_jean8, colors: ['dark blue'] },
  { id: 43, name: "Embroidered Jeans", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: girl_jean9, colors: ['blue'] },
  { id: 44, name: "Stretch Jeans", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: girl_jean10, colors: ['black'] },
  { id: 45, name: "Skinny Denim Jeans", originalPrice: 46.99, salePrice: 32.89, discount: 30, image: girl_jean11, colors: ['blue'] },
  { id: 46, name: "Flared Jeans", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: girl_jean12, colors: ['light blue'] },
];

const Girls_clothing = () => {
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

  return (
    <div>
      <div className="homepage-container">
        <div className="header">
          <div className="logo-container">
            <div className="logo-bg">
              <span className="logo-text">
                <span className="logo-star">★</span>
                StyleStore
              </span>
            </div>
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
        <div className="women-tshirt-title">Girl Clothing</div>

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
                <img src={product.image} alt={product.name} className="product-images" />
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

export default Girls_clothing;