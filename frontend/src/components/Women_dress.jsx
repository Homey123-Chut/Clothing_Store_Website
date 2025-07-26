import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer'; 

import dress from '../assets/women_dress.jpg';
import women_dress1 from '../assets/women_dress1.webp';
import women_dress2 from '../assets/women_dress2.webp';
import women_dress3 from '../assets/women_dress3.webp';
import women_dress4 from '../assets/women_dress4.webp';
import women_dress5 from '../assets/women_dress5.webp';
import women_dress6 from '../assets/women_dress6.webp';
import women_dress7 from '../assets/women_dress7.webp';
import women_dress8 from '../assets/women_dress8.webp';
import women_dress9 from '../assets/women_dress9.webp';
import women_dress10 from '../assets/women_dress10.webp';
import women_dress11 from '../assets/women_dress11.webp';
import women_dress12 from '../assets/women_dress12.webp';
import women_dress13 from '../assets/women_dress13.webp';
import women_dress14 from '../assets/women_dress14.webp';
import women_dress15 from '../assets/women_dress15.webp';
import women_dress16 from '../assets/women_dress16.webp';
import women_dress17 from '../assets/women_dress17.webp';
import women_dress18 from '../assets/women_dress18.webp';
import women_dress19 from '../assets/women_dress19.webp';
import women_dress20 from '../assets/women_dress20.webp';
import women_dress21 from '../assets/women_dress21.webp';
import women_dress22 from '../assets/women_dress22.webp';

const products = [
  { id: 1, name: "Floral Ruffle Dress", originalPrice: 59.99, salePrice: 17.99, discount: 70, image: women_dress1, colors: ['pink', 'white'] },
  { id: 2, name: "Lace Midi Dress", originalPrice: 64.99, salePrice: 19.49, discount: 70, image: women_dress2, colors: ['red'] },
  { id: 3, name: "Off-Shoulder Dress", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: women_dress3, colors: ['blue'] },
  { id: 4, name: "Polka Dot Dress", originalPrice: 74.99, salePrice: 22.49, discount: 70, image: women_dress4, colors: ['black', 'white'] },
  { id: 5, name: "Bohemian Maxi Dress", originalPrice: 62.99, salePrice: 18.89, discount: 70, image: women_dress5, colors: ['multi'] },
  { id: 6, name: "Casual Cotton Dress", originalPrice: 68.99, salePrice: 20.69, discount: 70, image: women_dress6, colors: ['beige'] },
  { id: 7, name: "Vintage Wrap Dress", originalPrice: 66.99, salePrice: 20.09, discount: 70, image: women_dress7, colors: ['green'] },
  { id: 8, name: "Pleated Shirt Dress", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: women_dress8, colors: ['white'] },
  { id: 9, name: "Smocked Midi Dress", originalPrice: 74.99, salePrice: 22.49, discount: 70, image: women_dress9, colors: ['blue', 'white'] },
  { id: 10, name: "Frill Hem Dress", originalPrice: 79.99, salePrice: 23.99, discount: 70, image: women_dress10, colors: ['pink'] },
  { id: 11, name: "Tiered Maxi Dress", originalPrice: 58.99, salePrice: 17.69, discount: 70, image: women_dress11, colors: ['yellow'] },
  { id: 12, name: "Satin Slip Dress", originalPrice: 65.99, salePrice: 19.79, discount: 70, image: women_dress12, colors: ['purple'] },
  { id: 13, name: "Belted Shirt Dress", originalPrice: 67.99, salePrice: 20.39, discount: 70, image: women_dress13, colors: ['olive'] },
  { id: 14, name: "Tulle Skater Dress", originalPrice: 63.99, salePrice: 19.19, discount: 70, image: women_dress14, colors: ['white', 'pink'] },
  { id: 15, name: "Chiffon Midi Dress", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: women_dress15, colors: ['blue'] },
  { id: 16, name: "Wrap Tie Dress", originalPrice: 72.99, salePrice: 21.89, discount: 70, image: women_dress16, colors: ['black'] },
  { id: 17, name: "Long Sleeve Smock Dress", originalPrice: 78.99, salePrice: 23.69, discount: 70, image: women_dress17, colors: ['brown'] },
  { id: 18, name: "Empire Waist Dress", originalPrice: 59.99, salePrice: 17.99, discount: 70, image: women_dress18, colors: ['white'] },
  { id: 19, name: "Boho Maxi Dress", originalPrice: 68.99, salePrice: 20.69, discount: 70, image: women_dress19, colors: ['multi'] },
  { id: 20, name: "Cold Shoulder Dress", originalPrice: 84.99, salePrice: 25.49, discount: 70, image: women_dress20, colors: ['red'] },
  { id: 21, name: "Balloon Sleeve Dress", originalPrice: 61.99, salePrice: 18.59, discount: 70, image: women_dress21, colors: ['green'] },
  { id: 22, name: "Asymmetric Ruffle Dress", originalPrice: 77.99, salePrice: 23.39, discount: 70, image: women_dress22, colors: ['peach'] },
  { id: 23, name: "Regular Fitted Crop Dress", originalPrice: 39.99, salePrice: 11.99, discount: 70, image: dress, colors: ['white', 'red'] },
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


const Women_dress = () => {
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
        <div className="women-tshirt-title">Dress</div>

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

export default Women_dress;