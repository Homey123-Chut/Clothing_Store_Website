import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import women_jacket1 from '../assets/women_jacket1.jpg';
import women_jacket2 from '../assets/women_jacket2.webp';
import women_jacket3 from '../assets/women_jacket3.webp';
import women_jacket4 from '../assets/women_jacket4.webp';
import women_jacket5 from '../assets/women_jacket5.webp';
import women_jacket6 from '../assets/women_jacket6.webp';
import women_jacket7 from '../assets/women_jacket7.webp';
import women_jacket8 from '../assets/women_jacket8.webp';
import women_jacket9 from '../assets/women_jacket9.webp';
import women_jacket10 from '../assets/women_jacket10.webp';
import women_jacket11 from '../assets/women_jacket11.webp';
import women_jacket12 from '../assets/women_jacket12.webp';
import women_jacket13 from '../assets/women_jacket13.webp';
import women_jacket14 from '../assets/women_jacket14.webp';
import women_jacket15 from '../assets/women_jacket15.webp';
import women_jacket16 from '../assets/women_jacket16.webp';
import women_jacket17 from '../assets/women_jacket17.webp';
import women_jacket18 from '../assets/women_jacket18.webp';
import women_jacket19 from '../assets/women_jacket19.webp';
import women_jacket20 from '../assets/women_jacket20.webp';

const products = [
  { id: 1, name: "Quilted Hooded Jacket", originalPrice: 89.99, salePrice: 26.99, discount: 70, image: women_jacket1, colors: ['black', 'grey'] },
  { id: 2, name: "Classic Trench Coat", originalPrice: 119.99, salePrice: 35.99, discount: 70, image: women_jacket2, colors: ['beige'] },
  { id: 3, name: "Faux Leather Biker Jacket", originalPrice: 99.99, salePrice: 29.99, discount: 70, image: women_jacket3, colors: ['black'] },
  { id: 4, name: "Oversized Denim Jacket", originalPrice: 74.99, salePrice: 22.49, discount: 70, image: women_jacket4, colors: ['blue'] },
  { id: 5, name: "Puffer Jacket", originalPrice: 109.99, salePrice: 32.99, discount: 70, image: women_jacket5, colors: ['white', 'pink'] },
  { id: 6, name: "Wool Blend Coat", originalPrice: 129.99, salePrice: 38.99, discount: 70, image: women_jacket6, colors: ['brown'] },
  { id: 7, name: "Raincoat with Hood", originalPrice: 84.99, salePrice: 25.49, discount: 70, image: women_jacket7, colors: ['yellow'] },
  { id: 8, name: "Slim Fit Blazer", originalPrice: 89.99, salePrice: 26.99, discount: 70, image: women_jacket8, colors: ['navy'] },
  { id: 9, name: "Longline Duster Coat", originalPrice: 104.99, salePrice: 31.49, discount: 70, image: women_jacket9, colors: ['camel'] },
  { id: 10, name: "Short Padded Jacket", originalPrice: 92.99, salePrice: 27.89, discount: 70, image: women_jacket10, colors: ['olive'] },
  { id: 11, name: "Sherpa Lined Jacket", originalPrice: 94.99, salePrice: 28.49, discount: 70, image: women_jacket11, colors: ['grey', 'white'] },
  { id: 12, name: "Cropped Bomber Jacket", originalPrice: 87.99, salePrice: 26.39, discount: 70, image: women_jacket12, colors: ['black'] },
  { id: 13, name: "Utility Jacket", originalPrice: 76.99, salePrice: 23.09, discount: 70, image: women_jacket13, colors: ['green'] },
  { id: 14, name: "Double-Breasted Blazer", originalPrice: 98.99, salePrice: 29.69, discount: 70, image: women_jacket14, colors: ['white', 'blue'] },
  { id: 15, name: "Checked Coat", originalPrice: 114.99, salePrice: 34.49, discount: 70, image: women_jacket15, colors: ['checkered'] },
  { id: 16, name: "Quilted Long Coat", originalPrice: 124.99, salePrice: 37.49, discount: 70, image: women_jacket16, colors: ['black'] },
  { id: 17, name: "Teddy Bear Jacket", originalPrice: 84.99, salePrice: 25.49, discount: 70, image: women_jacket17, colors: ['cream'] },
  { id: 18, name: "Waterproof Windbreaker", originalPrice: 79.99, salePrice: 23.99, discount: 70, image: women_jacket18, colors: ['blue', 'grey'] },
  { id: 19, name: "Hooded Parka", originalPrice: 99.99, salePrice: 29.99, discount: 70, image: women_jacket19, colors: ['green', 'brown'] },
  { id: 20, name: "Belted Wrap Coat", originalPrice: 109.99, salePrice: 32.99, discount: 70, image: women_jacket20, colors: ['red', 'grey'] }
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



const Women_jacket = () => {
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

export default Women_jacket;