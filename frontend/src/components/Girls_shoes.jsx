import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import women_shoes1 from '../assets/women_shoes1.jpg';
import women_shoes2 from '../assets/women_shoes2.jpg';
import women_shoes3 from '../assets/women_shoes3.jpg';
import women_shoes4 from '../assets/women_shoes4.jpg';
import women_shoes5 from '../assets/women_shoes5.jpg';
import women_shoes6 from '../assets/women_shoes6.jpg';
import women_shoes7 from '../assets/women_shoes7.jpg';
import women_shoes8 from '../assets/women_shoes8.jpg';
import women_shoes9 from '../assets/women_shoes9.jpg';
import women_shoes10 from '../assets/women_shoes10.jpg';
import women_shoes11 from '../assets/women_shoes11.jpg';
import women_shoes12 from '../assets/women_shoes12.jpg';
import women_shoes13 from '../assets/women_shoes13.jpg';
import women_shoes14 from '../assets/women_shoes14.jpg';
import women_shoes15 from '../assets/women_shoes15.jpg';
import women_shoes16 from '../assets/women_shoes16.jpg';
import women_shoes17 from '../assets/women_shoes17.jpg';
import women_shoes18 from '../assets/women_shoes18.jpg';
import women_shoes19 from '../assets/women_shoes19.jpg';
import women_shoes20 from '../assets/women_shoes20.jpg';

const products = [
  { id: 1, name: "Chunky Sneakers", originalPrice: 59.99, salePrice: 17.99, discount: 70, image: women_shoes1, colors: ['white', 'pink'] },
  { id: 2, name: "Slip-On Flats", originalPrice: 49.99, salePrice: 14.99, discount: 70, image: women_shoes2, colors: ['black'] },
  { id: 3, name: "Ankle Boots", originalPrice: 89.99, salePrice: 26.99, discount: 70, image: women_shoes3, colors: ['brown'] },
  { id: 4, name: "Heeled Sandals", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: women_shoes4, colors: ['nude'] },
  { id: 5, name: "Ballet Flats", originalPrice: 39.99, salePrice: 11.99, discount: 70, image: women_shoes5, colors: ['beige'] },
  { id: 6, name: "High Heel Pumps", originalPrice: 79.99, salePrice: 23.99, discount: 70, image: women_shoes6, colors: ['red'] },
  { id: 7, name: "Loafers", originalPrice: 64.99, salePrice: 19.49, discount: 70, image: women_shoes7, colors: ['black'] },
  { id: 8, name: "Mules", originalPrice: 54.99, salePrice: 16.49, discount: 70, image: women_shoes8, colors: ['white'] },
  { id: 9, name: "Sporty Trainers", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: women_shoes9, colors: ['grey'] },
  { id: 10, name: "Wedge Espadrilles", originalPrice: 74.99, salePrice: 22.49, discount: 70, image: women_shoes10, colors: ['tan'] },
  { id: 11, name: "Chelsea Boots", originalPrice: 84.99, salePrice: 25.49, discount: 70, image: women_shoes11, colors: ['brown'] },
  { id: 12, name: "Slide Sandals", originalPrice: 34.99, salePrice: 10.49, discount: 70, image: women_shoes12, colors: ['black'] },
  { id: 13, name: "Knitted Sneakers", originalPrice: 58.99, salePrice: 17.69, discount: 70, image: women_shoes13, colors: ['blue'] },
  { id: 14, name: "Party Heels", originalPrice: 89.99, salePrice: 26.99, discount: 70, image: women_shoes14, colors: ['silver'] },
  { id: 15, name: "Combat Boots", originalPrice: 99.99, salePrice: 29.99, discount: 70, image: women_shoes15, colors: ['black'] },
  { id: 16, name: "Summer Sandals", originalPrice: 44.99, salePrice: 13.49, discount: 70, image: women_shoes16, colors: ['white', 'beige'] },
  { id: 17, name: "Pointed Heels", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: women_shoes17, colors: ['black', 'red'] },
  { id: 18, name: "Platform Clogs", originalPrice: 79.99, salePrice: 23.99, discount: 70, image: women_shoes18, colors: ['brown'] },
  { id: 19, name: "Fur Slippers", originalPrice: 29.99, salePrice: 8.99, discount: 70, image: women_shoes19, colors: ['pink', 'grey'] },
  { id: 20, name: "Block Heel Sandals", originalPrice: 64.99, salePrice: 19.49, discount: 70, image: women_shoes20, colors: ['white'] },
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


const Girls_shoes = () => {
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
        <div className="women-tshirt-title">Women T-shirt</div>

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

export default Girls_shoes;