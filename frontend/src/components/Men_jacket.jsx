import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import men_jacket1 from '../assets/men_jacket1.jpg';
import men_jacket2 from '../assets/men_jacket2.webp';
import men_jacket3 from '../assets/men_jacket3.webp';
import men_jacket4 from '../assets/men_jacket4.webp';
import men_jacket5 from '../assets/men_jacket5.jpg';
import men_jacket6 from '../assets/men_jacket6.jpg';
import men_jacket7 from '../assets/men_jacket7.webp';
import men_jacket8 from '../assets/men_jacket8.webp';
import men_jacket9 from '../assets/men_jacket9.webp';
import men_jacket10 from '../assets/men_jacket10.webp';
import men_jacket11 from '../assets/men_jacket11.webp';
import men_jacket12 from '../assets/men_jacket12.webp';
import men_jacket13 from '../assets/men_jacket13.webp';
import men_jacket14 from '../assets/men_jacket14.webp';
import men_jacket15 from '../assets/men_jacket15.jpg';
import men_jacket16 from '../assets/men_jacket16.webp';
import men_jacket17 from '../assets/men_jacket17.webp';
import men_jacket18 from '../assets/men_jacket18.webp';
import men_jacket19 from '../assets/men_jacket19.webp';

const products = [
  { id: 1, name: "Classic Leather Jacket", originalPrice: 120.00, salePrice: 60.00, discount: 50, image: men_jacket1, colors: ['black', 'brown'] },
  { id: 2, name: "Bomber Jacket", originalPrice: 110.00, salePrice: 55.00, discount: 50, image: men_jacket2, colors: ['navy', 'black'] },
  { id: 3, name: "Denim Jacket", originalPrice: 90.00, salePrice: 45.00, discount: 50, image: men_jacket3, colors: ['blue'] },
  { id: 4, name: "Hooded Jacket", originalPrice: 85.00, salePrice: 42.50, discount: 50, image: men_jacket4, colors: ['grey', 'black'] },
  { id: 5, name: "Windbreaker Jacket", originalPrice: 70.00, salePrice: 35.00, discount: 50, image: men_jacket5, colors: ['red', 'black'] },
  { id: 6, name: "Quilted Jacket", originalPrice: 95.00, salePrice: 47.50, discount: 50, image: men_jacket6, colors: ['olive', 'black'] },
  { id: 7, name: "Trench Coat", originalPrice: 130.00, salePrice: 65.00, discount: 50, image: men_jacket7, colors: ['beige', 'black'] },
  { id: 8, name: "Varsity Jacket", originalPrice: 80.00, salePrice: 40.00, discount: 50, image: men_jacket8, colors: ['black', 'white'] },
  { id: 9, name: "Puffer Jacket", originalPrice: 150.00, salePrice: 75.00, discount: 50, image: men_jacket9, colors: ['blue', 'black'] },
  { id: 10, name: "Peacoat Jacket", originalPrice: 140.00, salePrice: 70.00, discount: 50, image: men_jacket10, colors: ['navy', 'black'] },
  { id: 11, name: "Softshell Jacket", originalPrice: 100.00, salePrice: 50.00, discount: 50, image: men_jacket11, colors: ['grey'] },
  { id: 12, name: "Safari Jacket", originalPrice: 105.00, salePrice: 52.50, discount: 50, image: men_jacket12, colors: ['khaki'] },
  { id: 13, name: "Fleece Jacket", originalPrice: 75.00, salePrice: 37.50, discount: 50, image: men_jacket13, colors: ['black', 'grey'] },
  { id: 14, name: "Motorcycle Jacket", originalPrice: 160.00, salePrice: 80.00, discount: 50, image: men_jacket14, colors: ['black'] },
  { id: 15, name: "Coach Jacket", originalPrice: 85.00, salePrice: 42.50, discount: 50, image: men_jacket15, colors: ['navy', 'red'] },
  { id: 16, name: "Anorak Jacket", originalPrice: 90.00, salePrice: 45.00, discount: 50, image: men_jacket16, colors: ['green'] },
  { id: 17, name: "Track Jacket", originalPrice: 80.00, salePrice: 40.00, discount: 50, image: men_jacket17, colors: ['black', 'white'] },
  { id: 18, name: "Varsity Bomber Jacket", originalPrice: 95.00, salePrice: 47.50, discount: 50, image: men_jacket18, colors: ['red', 'black'] },
  { id: 19, name: "Parka Jacket", originalPrice: 140.00, salePrice: 70.00, discount: 50, image: men_jacket19, colors: ['olive', 'navy'] },
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



const Men_jacket = () => {
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
              <span className="percentage">50% OFF</span>
              <span className="sale-subtitle">ON MID-YEAR SALE</span>
            </div>
          </div>
        </div>
        <div className="women-tshirt-title">Jacket</div>

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

export default Men_jacket;