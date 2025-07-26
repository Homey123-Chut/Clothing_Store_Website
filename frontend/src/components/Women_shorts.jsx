import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import women_shorts1 from '../assets/women_shorts1.jpg';
import women_shorts2 from '../assets/women_shorts2.jpg';
import women_shorts3 from '../assets/women_shorts3.jpg';
import women_shorts4 from '../assets/women_shorts4.jpg';
import women_shorts5 from '../assets/women_shorts5.jpg';
import women_shorts6 from '../assets/women_shorts6.jpg';
import women_shorts7 from '../assets/women_shorts7.jpg';
import women_shorts8 from '../assets/women_shorts8.jpg';
import women_shorts9 from '../assets/women_shorts9.jpg';
import women_shorts10 from '../assets/women_shorts.jpg';
import women_shorts11 from '../assets/women_shorts10.jpg';
import women_shorts12 from '../assets/women_shorts12.jpg';
import women_shorts13 from '../assets/women_shorts13.jpg';
import women_shorts14 from '../assets/women_shorts14.jpg';
import women_shorts15 from '../assets/women_shorts15.jpg';
import women_shorts16 from '../assets/women_shorts16.jpg';
import women_shorts17 from '../assets/women_shorts17.jpg';
import women_shorts18 from '../assets/women_shorts18.jpg';
import women_shorts19 from '../assets/women_shorts19.jpg';

const products = [
  { id: 1, name: "Casual Denim Shorts", originalPrice: 29.99, salePrice: 8.997, discount: 70, image: women_shorts1, colors: ['blue', 'black'] },
  { id: 2, name: "High-Waisted Shorts", originalPrice: 34.99, salePrice: 10.497, discount: 70, image: women_shorts2, colors: ['white', 'beige'] },
  { id: 3, name: "Cotton Summer Shorts", originalPrice: 24.99, salePrice: 7.497, discount: 70, image: women_shorts3, colors: ['pink', 'white'] },
  { id: 4, name: "Loose Fit Shorts", originalPrice: 27.99, salePrice: 8.397, discount: 70, image: women_shorts4, colors: ['green'] },
  { id: 5, name: "Sporty Running Shorts", originalPrice: 32.99, salePrice: 9.897, discount: 70, image: women_shorts5, colors: ['grey', 'black'] },
  { id: 6, name: "Denim Cutoff Shorts", originalPrice: 29.49, salePrice: 8.847, discount: 70, image: women_shorts6, colors: ['blue'] },
  { id: 7, name: "Chino Shorts", originalPrice: 31.99, salePrice: 9.597, discount: 70, image: women_shorts7, colors: ['khaki', 'navy'] },
  { id: 8, name: "Bermuda Shorts", originalPrice: 33.99, salePrice: 10.197, discount: 70, image: women_shorts8, colors: ['olive'] },
  { id: 9, name: "Linen Blend Shorts", originalPrice: 28.99, salePrice: 8.697, discount: 70, image: women_shorts9, colors: ['white', 'beige'] },
  { id: 10, name: "Striped Shorts", originalPrice: 26.99, salePrice: 8.097, discount: 70, image: women_shorts10, colors: ['navy', 'white'] },
  { id: 11, name: "Elastic Waist Shorts", originalPrice: 25.99, salePrice: 7.797, discount: 70, image: women_shorts11, colors: ['black'] },
  { id: 12, name: "Tie Waist Shorts", originalPrice: 30.99, salePrice: 9.297, discount: 70, image: women_shorts12, colors: ['pink', 'blue'] },
  { id: 13, name: "Paperbag Waist Shorts", originalPrice: 34.99, salePrice: 10.497, discount: 70, image: women_shorts13, colors: ['tan'] },
  { id: 14, name: "Cargo Shorts", originalPrice: 27.49, salePrice: 8.247, discount: 70, image: women_shorts14, colors: ['green', 'brown'] },
  { id: 15, name: "Pleated Shorts", originalPrice: 29.99, salePrice: 8.997, discount: 70, image: women_shorts15, colors: ['cream'] },
  { id: 16, name: "Roll-Up Hem Shorts", originalPrice: 28.49, salePrice: 8.547, discount: 70, image: women_shorts16, colors: ['denim'] },
  { id: 17, name: "Frayed Edge Shorts", originalPrice: 31.49, salePrice: 9.447, discount: 70, image: women_shorts17, colors: ['blue'] },
  { id: 18, name: "Button Front Shorts", originalPrice: 33.99, salePrice: 10.197, discount: 70, image: women_shorts18, colors: ['white'] },
  { id: 19, name: "Classic Tailored Shorts", originalPrice: 35.99, salePrice: 10.797, discount: 70, image: women_shorts19, colors: ['black', 'grey'] }
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



const Women_shorts = () => {
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
              <span className="percentage">70% OFF</span>
              <span className="sale-subtitle">ON MID-YEAR SALE</span>
            </div>
          </div>
        </div>
        <div className="women-tshirt-title">Shorts</div>

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

export default Women_shorts;