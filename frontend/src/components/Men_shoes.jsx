import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import men_shoes1 from '../assets/men_shoes1.jpg';
import men_shoes2 from '../assets/men_shoes2.jpg';
import men_shoes3 from '../assets/men_shoes3.jpg';
import men_shoes4 from '../assets/men_shoes4.jpg';
import men_shoes5 from '../assets/men_shoes5.jpg';
import men_shoes6 from '../assets/men_shoes6.jpg';
import men_shoes7 from '../assets/men_shoes7.jpg';
import men_shoes8 from '../assets/men_shoes8.jpg';
import men_shoes9 from '../assets/men_shoes9.jpg';
import men_shoes10 from '../assets/men_shoes10.jpg';
import men_shoes11 from '../assets/women_shoes1.jpg';
import men_shoes12 from '../assets/women_shoes5.jpg';
import men_shoes13 from '../assets/women_shoes12.jpg';
import men_shoes14 from '../assets/women_shoes13.jpg';
import men_shoes15 from '../assets/women_shoes2.jpg';
import men_shoes16 from '../assets/women_shoes3.jpg';
import men_shoes17 from '../assets/women_shoes4.jpg';

export const products = [
  { id: 1, name: "Sport Sneakers", originalPrice: 59.99, salePrice: 17.99, discount: 70, image: men_shoes1, colors: ['white', 'blue'] },
  { id: 2, name: "Casual Loafers", originalPrice: 64.99, salePrice: 19.49, discount: 70, image: men_shoes2, colors: ['brown'] },
  { id: 3, name: "Formal Dress Shoes", originalPrice: 89.99, salePrice: 26.99, discount: 70, image: men_shoes3, colors: ['black'] },
  { id: 4, name: "Lace-Up Trainers", originalPrice: 49.99, salePrice: 14.99, discount: 70, image: men_shoes4, colors: ['grey'] },
  { id: 5, name: "Canvas Slip-Ons", originalPrice: 39.99, salePrice: 11.99, discount: 70, image: men_shoes5, colors: ['navy'] },
  { id: 6, name: "High-Top Sneakers", originalPrice: 74.99, salePrice: 22.49, discount: 70, image: men_shoes6, colors: ['white', 'black'] },
  { id: 7, name: "Walking Shoes", originalPrice: 54.99, salePrice: 16.49, discount: 70, image: men_shoes7, colors: ['blue'] },
  { id: 8, name: "Running Trainers", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: men_shoes8, colors: ['red', 'white'] },
  { id: 9, name: "Vintage Sneakers", originalPrice: 58.99, salePrice: 17.69, discount: 70, image: men_shoes9, colors: ['beige'] },
  { id: 10, name: "Slip-Resistant Shoes", originalPrice: 44.99, salePrice: 13.49, discount: 70, image: men_shoes10, colors: ['black'] },
  { id: 11, name: "Knitted Slip-Ons", originalPrice: 49.99, salePrice: 14.99, discount: 70, image: men_shoes11, colors: ['white', 'pink'] },
  { id: 12, name: "Faux Leather Sandals", originalPrice: 39.99, salePrice: 11.99, discount: 70, image: men_shoes12, colors: ['nude'] },
  { id: 13, name: "Low Heel Pumps", originalPrice: 58.99, salePrice: 17.69, discount: 70, image: men_shoes13, colors: ['black', 'white'] },
  { id: 14, name: "Pointed Toe Flats", originalPrice: 44.99, salePrice: 13.49, discount: 70, image: men_shoes14, colors: ['beige'] },
  { id: 15, name: "Wedge Heels", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: men_shoes15, colors: ['brown'] },
  { id: 16, name: "Ballet Flats", originalPrice: 54.99, salePrice: 16.49, discount: 70, image: men_shoes16, colors: ['red'] },
  { id: 17, name: "Platform Sandals", originalPrice: 74.99, salePrice: 22.49, discount: 70, image: men_shoes17, colors: ['white'] },
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



const Men_shoes = () => {
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

export default Men_shoes;