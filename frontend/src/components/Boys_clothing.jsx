import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import boy_shirt1 from '../assets/boy_shirt1.jpg';
import boy_shirt2 from '../assets/boy_shirt2.jpg';
import boy_shirt3 from '../assets/boy_shirt3.jpg';
import boy_shirt4 from '../assets/boy_shirt4.jpg';
import boy_shirt5 from '../assets/boy_shirt5.jpg';
import boy_shirt6 from '../assets/boy_shirt6.jpg';
import boy_shirt7 from '../assets/boy_shirt7.jpg';
import boy_shirt8 from '../assets/boy_shirt8.jpg';
import boy_shirt9 from '../assets/boy_shirt9.jpg';
import boy_shirt10 from '../assets/boy_shirt10.jpg';
import boy_shirt11 from '../assets/boy_shirt11.jpg';
import boy_shirt12 from '../assets/boy_shirt12.jpg';
import boy_shirt13 from '../assets/boy_shirt13.jpg';
import boy_shirt14 from '../assets/boy_shirt14.jpg';
import boy_shirt15 from '../assets/boy_shirt15.jpg';
import boy_shirt16 from '../assets/boy_shirt16.jpg';
import boy_shirt17 from '../assets/boy_shirt17.jpg';
import boy_shirt18 from '../assets/boy_shirt18.jpg';
import boy_shirt19 from '../assets/boy_shirt19.jpg';
import boy_shirt20 from '../assets/boy_shirt20.jpg';
import boy_shirt21 from '../assets/boy_shirt21.jpg';
import boy_shirt22 from '../assets/boy_shirt22.jpg';
import boy_shirt23 from '../assets/boy_shirt23.jpg';
import boy_shirt24 from '../assets/boy_shirt24.jpg';
import boy_shirt25 from '../assets/boy_shirt25.jpg';
import boy_shirt26 from '../assets/boy_shirt26.jpg';
import boy_shirt27 from '../assets/boy_shirt27.jpg';
import boy_shirt28 from '../assets/boy_shirt28.jpg';
import boy_shirt29 from '../assets/boy_shirt29.jpg';
import boy_shirt30 from '../assets/boy_shirt30.jpg';
import boy_jean1 from '../assets/boy_jean1.jpg';
import boy_jean2 from '../assets/boy_jean2.jpg';
import boy_jean3 from '../assets/boy_jean3.jpg';
import boy_jean4 from '../assets/boy_jean4.jpg';
import boy_jean5 from '../assets/boy_jean5.jpg';
import boy_jean6 from '../assets/boy_jean6.jpg';
import boy_jean7 from '../assets/boy_jean7.jpg';
import boy_jean8 from '../assets/boy_jean8.jpg';
import boy_jean9 from '../assets/boy_jean9.jpg';
import boy_jean10 from '../assets/boy_jean10.jpg';
import boy_jean11 from '../assets/boy_jean11.jpg';
import boy_jean12 from '../assets/boy_jean12.jpg';
import boy_jean13 from '../assets/boy_jean13.jpg';
import boy_jean14 from '../assets/boy_jean14.jpg';
import boy_jean15 from '../assets/boy_jean15.jpg';
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
  { id: 1, name: "Classic Boy Shirt", originalPrice: 29.99, salePrice: 20.99, discount: 30, image: boy_shirt1, colors: ['blue', 'white'] },
  { id: 2, name: "Casual Cotton Shirt", originalPrice: 34.99, salePrice: 24.49, discount: 30, image: boy_shirt2, colors: ['red', 'grey'] },
  { id: 3, name: "Striped Polo Shirt", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: boy_shirt3, colors: ['navy', 'white'] },
  { id: 4, name: "Button-up Shirt", originalPrice: 35.99, salePrice: 25.19, discount: 30, image: boy_shirt4, colors: ['green', 'blue'] },
  { id: 5, name: "Graphic Tee Shirt", originalPrice: 25.99, salePrice: 18.19, discount: 30, image: boy_shirt5, colors: ['white', 'black'] },
  { id: 6, name: "Plaid Shirt", originalPrice: 32.99, salePrice: 23.09, discount: 30, image: boy_shirt6, colors: ['red', 'blue'] },
  { id: 7, name: "Hooded Shirt", originalPrice: 28.99, salePrice: 20.29, discount: 30, image: boy_shirt7, colors: ['grey'] },
  { id: 8, name: "Denim Shirt", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: boy_shirt8, colors: ['blue'] },
  { id: 9, name: "Long Sleeve Shirt", originalPrice: 34.99, salePrice: 24.49, discount: 30, image: boy_shirt9, colors: ['white', 'black'] },
  { id: 10, name: "Sporty Tee Shirt", originalPrice: 29.99, salePrice: 20.99, discount: 30, image: boy_shirt10, colors: ['blue', 'red'] },
  { id: 11, name: "Slim Fit Shirt", originalPrice: 33.99, salePrice: 23.79, discount: 30, image: boy_shirt11, colors: ['black'] },
  { id: 12, name: "Basic Cotton Tee", originalPrice: 24.99, salePrice: 17.49, discount: 30, image: boy_shirt12, colors: ['white'] },
  { id: 13, name: "Vintage Style Shirt", originalPrice: 37.99, salePrice: 26.59, discount: 30, image: boy_shirt13, colors: ['brown'] },
  { id: 14, name: "Pocket Tee Shirt", originalPrice: 26.99, salePrice: 18.89, discount: 30, image: boy_shirt14, colors: ['blue', 'green'] },
  { id: 15, name: "Striped Casual Shirt", originalPrice: 31.99, salePrice: 22.39, discount: 30, image: boy_shirt15, colors: ['navy'] },
  { id: 16, name: "Cool Graphic Tee", originalPrice: 28.99, salePrice: 20.29, discount: 30, image: boy_shirt16, colors: ['white', 'grey'] },
  { id: 17, name: "Checked Shirt", originalPrice: 35.99, salePrice: 25.19, discount: 30, image: boy_shirt17, colors: ['red', 'black'] },
  { id: 18, name: "Button-Down Shirt", originalPrice: 38.99, salePrice: 27.29, discount: 30, image: boy_shirt18, colors: ['white'] },
  { id: 19, name: "Graphic Long Sleeve", originalPrice: 30.99, salePrice: 21.69, discount: 30, image: boy_shirt19, colors: ['black', 'grey'] },
  { id: 20, name: "Basic Sport Shirt", originalPrice: 27.99, salePrice: 19.59, discount: 30, image: boy_shirt20, colors: ['blue'] },
  { id: 21, name: "Denim Look Shirt", originalPrice: 36.99, salePrice: 25.89, discount: 30, image: boy_shirt21, colors: ['denim blue'] },
  { id: 22, name: "Soft Cotton Shirt", originalPrice: 33.99, salePrice: 23.79, discount: 30, image: boy_shirt22, colors: ['green', 'white'] },
  { id: 23, name: "Modern Tee Shirt", originalPrice: 29.99, salePrice: 20.99, discount: 30, image: boy_shirt23, colors: ['black'] },
  { id: 24, name: "Striped Long Sleeve", originalPrice: 31.99, salePrice: 22.39, discount: 30, image: boy_shirt24, colors: ['navy', 'white'] },
  { id: 25, name: "Casual T-Shirt", originalPrice: 28.99, salePrice: 20.29, discount: 30, image: boy_shirt25, colors: ['red'] },
  { id: 26, name: "Fitted Tee Shirt", originalPrice: 26.99, salePrice: 18.89, discount: 30, image: boy_shirt26, colors: ['grey'] },
  { id: 27, name: "Pocket Polo Shirt", originalPrice: 35.99, salePrice: 25.19, discount: 30, image: boy_shirt27, colors: ['blue'] },
  { id: 28, name: "Graphic Tee Shirt", originalPrice: 27.99, salePrice: 19.59, discount: 30, image: boy_shirt28, colors: ['white'] },
  { id: 29, name: "Classic Long Sleeve", originalPrice: 36.99, salePrice: 25.89, discount: 30, image: boy_shirt29, colors: ['black'] },
  { id: 30, name: "Lightweight Shirt", originalPrice: 30.99, salePrice: 21.69, discount: 30, image: boy_shirt30, colors: ['blue'] },
  { id: 31, name: "Classic Denim Jeans", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: boy_jean1, colors: ['blue'] },
  { id: 32, name: "Slim Fit Jeans", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: boy_jean2, colors: ['dark blue'] },
  { id: 33, name: "Ripped Jeans", originalPrice: 59.99, salePrice: 41.99, discount: 30, image: boy_jean3, colors: ['light blue'] },
  { id: 34, name: "Straight Cut Jeans", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: boy_jean4, colors: ['blue'] },
  { id: 35, name: "Relaxed Fit Jeans", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: boy_jean5, colors: ['black'] },
  { id: 36, name: "Dark Wash Jeans", originalPrice: 52.99, salePrice: 37.09, discount: 30, image: boy_jean6, colors: ['dark blue'] },
  { id: 37, name: "Light Wash Jeans", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: boy_jean7, colors: ['light blue'] },
  { id: 38, name: "Cargo Jeans", originalPrice: 45.99, salePrice: 32.19, discount: 30, image: boy_jean8, colors: ['green'] },
  { id: 39, name: "Stretch Jeans", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: boy_jean9, colors: ['blue'] },
  { id: 40, name: "Classic Fit Jeans", originalPrice: 46.99, salePrice: 32.89, discount: 30, image: boy_jean10, colors: ['blue'] },
  { id: 41, name: "Jeans with Patches", originalPrice: 59.99, salePrice: 41.99, discount: 30, image: boy_jean11, colors: ['blue', 'grey'] },
  { id: 42, name: "High Waist Jeans", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: boy_jean12, colors: ['dark blue'] },
  { id: 43, name: "Boyfriend Jeans", originalPrice: 52.99, salePrice: 37.09, discount: 30, image: boy_jean13, colors: ['blue'] },
  { id: 44, name: "Stretch Skinny Jeans", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: boy_jean14, colors: ['black'] },
  { id: 45, name: "Classic Blue Jeans", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: boy_jean15, colors: ['blue'] }
];

const Boys_clothing = () => {
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
              <span className="percentage">30% OFF</span>
              <span className="sale-subtitle">ON MID-YEAR SALE</span>
            </div>
          </div>
        </div>
        <div className="women-tshirt-title">Boys Clothing</div>

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

export default Boys_clothing;