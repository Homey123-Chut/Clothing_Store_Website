import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import women_trouser1 from '../assets/women_trouser1.jpg';
import women_trouser2 from '../assets/women_trouser2.jpg';
import women_trouser3 from '../assets/women_trouser3.jpg';
import women_trouser4 from '../assets/women_trouser4.jpg';
import women_trouser5 from '../assets/women_trouser5.jpg';
import women_trouser6 from '../assets/women_trouser6.jpg';
import women_trouser7 from '../assets/women_trouser7.jpg';
import women_trouser8 from '../assets/women_trouser8.jpg';
import women_trouser9 from '../assets/women_trouser9.jpg';
import women_trouser10 from '../assets/women_trouser10.jpg';
import women_trouser11 from '../assets/women_trouser11.jpg';
import women_trouser12 from '../assets/women_trouser12.jpg';
import women_trouser13 from '../assets/women_trouser13.jpg';
import women_trouser14 from '../assets/women_trouser14.jpg';
import women_trouser15 from '../assets/women_trouser15.jpg';
import women_trouser16 from '../assets/women_trouser16.jpg';
import women_trouser17 from '../assets/women_trouser17.jpg';

const products = [
  { id: 1, name: "Slim Fit High Waist Trouser", originalPrice: 49.99, salePrice: 14.997, discount: 70, image: women_trouser1, colors: ['black', 'grey'] },
  { id: 2, name: "Wide Leg Trouser", originalPrice: 54.99, salePrice: 16.497, discount: 70, image: women_trouser2, colors: ['beige', 'white'] },
  { id: 3, name: "Cropped Trouser", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_trouser3, colors: ['navy', 'black'] },
  { id: 4, name: "Pleated Trouser", originalPrice: 59.99, salePrice: 17.997, discount: 70, image: women_trouser4, colors: ['brown', 'tan'] },
  { id: 5, name: "Tapered Trouser", originalPrice: 49.99, salePrice: 14.997, discount: 70, image: women_trouser5, colors: ['grey', 'black'] },
  { id: 6, name: "Cargo Trouser", originalPrice: 54.99, salePrice: 16.497, discount: 70, image: women_trouser6, colors: ['green', 'khaki'] },
  { id: 7, name: "Paperbag Waist Trouser", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_trouser7, colors: ['cream', 'white'] },
  { id: 8, name: "Flared Trouser", originalPrice: 59.99, salePrice: 17.997, discount: 70, image: women_trouser8, colors: ['black', 'blue'] },
  { id: 9, name: "Checkered Trouser", originalPrice: 49.99, salePrice: 14.997, discount: 70, image: women_trouser9, colors: ['grey', 'white'] },
  { id: 10, name: "High Waist Belted Trouser", originalPrice: 54.99, salePrice: 16.497, discount: 70, image: women_trouser10, colors: ['brown', 'tan'] },
  { id: 11, name: "Relaxed Fit Trouser", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_trouser11, colors: ['black', 'navy'] },
  { id: 12, name: "Ankle Length Trouser", originalPrice: 59.99, salePrice: 17.997, discount: 70, image: women_trouser12, colors: ['beige', 'white'] },
  { id: 13, name: "Tailored Trouser", originalPrice: 49.99, salePrice: 14.997, discount: 70, image: women_trouser13, colors: ['grey', 'black'] },
  { id: 14, name: "Stretch Fit Trouser", originalPrice: 54.99, salePrice: 16.497, discount: 70, image: women_trouser14, colors: ['blue', 'black'] },
  { id: 15, name: "Classic Straight Trouser", originalPrice: 44.99, salePrice: 13.497, discount: 70, image: women_trouser15, colors: ['brown', 'navy'] },
  { id: 16, name: "Pleated Front Trouser", originalPrice: 59.99, salePrice: 17.997, discount: 70, image: women_trouser16, colors: ['black', 'grey'] },
  { id: 17, name: "Cuffed Trouser", originalPrice: 49.99, salePrice: 14.997, discount: 70, image: women_trouser17, colors: ['white', 'blue'] }
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



const Women_trouser = () => {
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
        <div className="women-tshirt-title">Trousers</div>

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

export default Women_trouser;