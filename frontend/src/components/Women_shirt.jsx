import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import women_shirt1 from '../assets/women_shirt1.jpg';
import women_shirt2 from '../assets/women_shirt2.jpg';
import women_shirt3 from '../assets/women_shirt3.jpg';
import women_shirt4 from '../assets/women_shirt4.jpg';
import women_shirt5 from '../assets/women_shirt5.jpg';
import women_shirt6 from '../assets/women_shirt6.jpg';
import women_shirt7 from '../assets/women_shirt7.jpg';
import women_shirt8 from '../assets/women_shirt8.jpg';
import women_shirt9 from '../assets/women_shirt9.jpg';
import women_shirt10 from '../assets/women_shirt10.jpg';
import women_shirt11 from '../assets/women_shirt11.jpg';
import women_shirt12 from '../assets/women_shirt12.jpg';
import women_shirt13 from '../assets/women_shirt13.jpg';
import women_shirt14 from '../assets/women_shirt14.jpg';
import women_shirt15 from '../assets/women_shirt15.jpg';
import women_shirt16 from '../assets/women_shirt16.jpg';
import women_shirt17 from '../assets/women_shirt17.jpg';
import women_shirt18 from '../assets/women_shirt18.jpg';
import women_shirt19 from '../assets/women_shirt19.jpg';
import women_shirt20 from '../assets/women_shirt20.jpg';
import women_shirt21 from '../assets/women_shirt21.jpg';
import women_shirt22 from '../assets/women_shirt22.jpg';
import women_shirt23 from '../assets/women_shirt23.jpg';
import women_shirt24 from '../assets/women_shirt24.jpg';
import women_shirt25 from '../assets/women_shirt25.jpg';
import women_shirt26 from '../assets/women_shirt26.jpg';
import women_shirt27 from '../assets/women_shirt27.jpg';
import women_shirt28 from '../assets/women_shirt28.jpg';
import women_shirt29 from '../assets/women_shirt29.jpg';
import women_shirt30 from '../assets/women_shirt30.jpg';
import women_shirt31 from '../assets/women_shirt31.jpg';
import women_shirt32 from '../assets/women_shirt32.jpg';
import women_shirt33 from '../assets/women_shirt33.jpg';
import women_shirt34 from '../assets/women_shirt34.jpg';
import women_shirt35 from '../assets/women_shirt35.jpg';
import women_shirt36 from '../assets/women_shirt36.jpg';
import women_shirt37 from '../assets/women_shirt37.jpg';
import women_shirt38 from '../assets/women_shirt38.jpg';
import women_shirt39 from '../assets/women_shirt39.jpg';
import women_shirt40 from '../assets/women_shirt40.jpg';
import women_shirt41 from '../assets/women_shirt41.jpg';
import women_shirt42 from '../assets/women_shirt42.jpg';
import women_shirt43 from '../assets/women_shirt43.jpg';

const products = [
  { id: 1, name: "Regular Fitted Crop T-Shirt", originalPrice: 39.99, salePrice: 11.997, discount: 70, image: women_shirt1, colors: ['white', 'red'] },
  { id: 2, name: "Regular Crop Textured T-Shirt", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_shirt2, colors: ['pink'] },
  { id: 3, name: "Regular V-Neck T-Shirt", originalPrice: 49.99, salePrice: 14.997, discount: 70, image: women_shirt3, colors: ['beige'] },
  { id: 4, name: "Regular Polo T-Shirt", originalPrice: 54.99, salePrice: 16.497, discount: 70, image: women_shirt4, colors: ['navy'] },
  { id: 5, name: "Basic Fitted Crop T-Shirt", originalPrice: 39.99, salePrice: 11.997, discount: 70, image: women_shirt5, colors: ['white', 'red'] },
  { id: 6, name: "Casual Crop Textured T-Shirt", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_shirt6, colors: ['pink'] },
  { id: 7, name: "Classic V-Neck T-Shirt", originalPrice: 49.99, salePrice: 14.997, discount: 70, image: women_shirt7, colors: ['beige'] },
  { id: 8, name: "Premium Polo T-Shirt", originalPrice: 54.99, salePrice: 16.497, discount: 70, image: women_shirt8, colors: ['navy'] },
  { id: 9, name: "Trendy Graphic Tee", originalPrice: 42.99, salePrice: 12.897, discount: 70, image: women_shirt9, colors: ['white', 'black'] },
  { id: 10, name: "Loose Fit T-Shirt", originalPrice: 36.99, salePrice: 11.097, discount: 70, image: women_shirt10, colors: ['blue'] },
  { id: 11, name: "Sporty Crop Tee", originalPrice: 41.99, salePrice: 12.597, discount: 70, image: women_shirt11, colors: ['grey'] },
  { id: 12, name: "Minimalist Tee", originalPrice: 38.99, salePrice: 11.697, discount: 70, image: women_shirt12, colors: ['white'] },
  { id: 13, name: "Oversized T-Shirt", originalPrice: 45.99, salePrice: 13.797, discount: 70, image: women_shirt13, colors: ['green'] },
  { id: 14, name: "Slim Fit Tee", originalPrice: 37.99, salePrice: 11.397, discount: 70, image: women_shirt14, colors: ['red'] },
  { id: 15, name: "Ribbed Crop T-Shirt", originalPrice: 39.99, salePrice: 11.997, discount: 70, image: women_shirt15, colors: ['yellow'] },
  { id: 16, name: "Boxy T-Shirt", originalPrice: 43.99, salePrice: 13.197, discount: 70, image: women_shirt16, colors: ['orange'] },
  { id: 17, name: "Tie-Dye Tee", originalPrice: 46.99, salePrice: 14.097, discount: 70, image: women_shirt17, colors: ['multi'] },
  { id: 18, name: "Long Sleeve T-Shirt", originalPrice: 49.99, salePrice: 14.997, discount: 70, image: women_shirt18, colors: ['purple'] },
  { id: 19, name: "Short Sleeve Tee", originalPrice: 35.99, salePrice: 10.797, discount: 70, image: women_shirt19, colors: ['white', 'blue'] },
  { id: 20, name: "Printed Crop T-Shirt", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_shirt20, colors: ['pink', 'white'] },
  { id: 21, name: "Basic Tee", originalPrice: 32.99, salePrice: 9.897, discount: 70, image: women_shirt21, colors: ['white'] },
  { id: 22, name: "Embroidered T-Shirt", originalPrice: 47.99, salePrice: 14.397, discount: 70, image: women_shirt22, colors: ['black'] },
  { id: 23, name: "Pocket Tee", originalPrice: 39.99, salePrice: 11.997, discount: 70, image: women_shirt23, colors: ['grey'] },
  { id: 24, name: "Henley T-Shirt", originalPrice: 42.99, salePrice: 12.897, discount: 70, image: women_shirt24, colors: ['blue'] },
  { id: 25, name: "Graphic Crop Tee", originalPrice: 41.99, salePrice: 12.597, discount: 70, image: women_shirt25, colors: ['white', 'black'] },
  { id: 26, name: "Seamless T-Shirt", originalPrice: 38.99, salePrice: 11.697, discount: 70, image: women_shirt26, colors: ['beige'] },
  { id: 27, name: "Scoop Neck Tee", originalPrice: 36.99, salePrice: 11.097, discount: 70, image: women_shirt27, colors: ['white'] },
  { id: 28, name: "Cropped Long Sleeve Tee", originalPrice: 48.99, salePrice: 14.697, discount: 70, image: women_shirt28, colors: ['black'] },
  { id: 29, name: "Relaxed Fit T-Shirt", originalPrice: 37.99, salePrice: 11.397, discount: 70, image: women_shirt29, colors: ['green'] },
  { id: 30, name: "Mock Neck Tee", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_shirt30, colors: ['white'] },
  { id: 31, name: "Ruffle Sleeve T-Shirt", originalPrice: 46.99, salePrice: 14.097, discount: 70, image: women_shirt31, colors: ['pink'] },
  { id: 32, name: "Classic Crewneck Tee", originalPrice: 35.99, salePrice: 10.797, discount: 70, image: women_shirt32, colors: ['blue'] },
  { id: 33, name: "Floral Print Tee", originalPrice: 42.99, salePrice: 12.897, discount: 70, image: women_shirt33, colors: ['pink'] },
  { id: 34, name: "Striped Crop Top", originalPrice: 38.99, salePrice: 11.697, discount: 70, image: women_shirt34, colors: ['white', 'black'] },
  { id: 35, name: "V-Neck Graphic Tee", originalPrice: 40.99, salePrice: 12.297, discount: 70, image: women_shirt35, colors: ['grey'] },
  { id: 36, name: "Basic Long Sleeve Tee", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_shirt36, colors: ['white'] },
  { id: 37, name: "Oversized Hoodie Tee", originalPrice: 49.99, salePrice: 14.997, discount: 70, image: women_shirt37, colors: ['black'] },
  { id: 38, name: "Crochet Detail Tee", originalPrice: 39.99, salePrice: 11.997, discount: 70, image: women_shirt38, colors: ['beige'] },
  { id: 39, name: "Scoop Neck Crop Tee", originalPrice: 37.99, salePrice: 11.397, discount: 70, image: women_shirt39, colors: ['white'] },
  { id: 40, name: "Graphic Long Sleeve Tee", originalPrice: 45.99, salePrice: 13.797, discount: 70, image: women_shirt40, colors: ['blue'] },
  { id: 41, name: "Tie Front Tee", originalPrice: 42.99, salePrice: 12.897, discount: 70, image: women_shirt41, colors: ['pink'] },
  { id: 42, name: "Rolled Sleeve Tee", originalPrice: 39.99, salePrice: 11.997, discount: 70, image: women_shirt42, colors: ['grey'] },
  { id: 43, name: "Puff Sleeve Crop Tee", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_shirt43, colors: ['white'] }
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



const Women_shirt = () => {
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
              <span className="percentage">70% OFF</span>
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

export default Women_shirt;