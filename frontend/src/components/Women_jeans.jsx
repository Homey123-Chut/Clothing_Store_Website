import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import women_jean1 from '../assets/women_jean1.jpg';
import women_jean2 from '../assets/women_jean2.jpg';
import women_jean3 from '../assets/women_jean3.jpg';
import women_jean4 from '../assets/women_jean4.jpg';
import women_jean5 from '../assets/women_jean5.jpg';
import women_jean6 from '../assets/women_jean6.jpg';
import women_jean7 from '../assets/women_jean7.jpg';
import women_jean8 from '../assets/women_jean8.jpg';
import women_jean9 from '../assets/women_jean9.jpg';
import women_jean10 from '../assets/women_jean10.jpg';
import women_jean11 from '../assets/women_jean11.jpg';
import women_jean12 from '../assets/women_jean12.jpg';
import women_jean13 from '../assets/women_jean13.jpg';
import women_jean14 from '../assets/women_jean14.jpg';
import women_jean15 from '../assets/women_jean15.jpg';
import women_jean16 from '../assets/women_jean16.jpg';

const products = [
  { id: 1, name: "High-Waisted Skinny Jeans", originalPrice: 59.99, salePrice: 17.99, discount: 70, image: women_jean1, colors: ['blue'] },
  { id: 2, name: "Ripped Boyfriend Jeans", originalPrice: 64.99, salePrice: 19.49, discount: 70, image: women_jean2, colors: ['light blue'] },
  { id: 3, name: "Straight Leg Denim", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: women_jean3, colors: ['dark blue'] },
  { id: 4, name: "Black High-Rise Jeans", originalPrice: 74.99, salePrice: 22.49, discount: 70, image: women_jean4, colors: ['black'] },
  { id: 5, name: "Slim Fit Ankle Jeans", originalPrice: 54.99, salePrice: 16.49, discount: 70, image: women_jean5, colors: ['blue'] },
  { id: 6, name: "Flared Stretch Jeans", originalPrice: 67.99, salePrice: 20.39, discount: 70, image: women_jean6, colors: ['indigo'] },
  { id: 7, name: "Distressed Denim Jeans", originalPrice: 72.99, salePrice: 21.89, discount: 70, image: women_jean7, colors: ['blue', 'grey'] },
  { id: 8, name: "Wide-Leg Denim", originalPrice: 79.99, salePrice: 23.99, discount: 70, image: women_jean8, colors: ['navy'] },
  { id: 9, name: "Vintage Wash Jeans", originalPrice: 66.99, salePrice: 20.09, discount: 70, image: women_jean9, colors: ['faded blue'] },
  { id: 10, name: "Raw Hem Jeans", originalPrice: 61.99, salePrice: 18.59, discount: 70, image: women_jean10, colors: ['light blue'] },
  { id: 11, name: "Cropped Skinny Jeans", originalPrice: 58.99, salePrice: 17.69, discount: 70, image: women_jean11, colors: ['blue'] },
  { id: 12, name: "Paperbag Waist Jeans", originalPrice: 69.99, salePrice: 20.99, discount: 70, image: women_jean12, colors: ['black', 'blue'] },
  { id: 13, name: "Bootcut Jeans", originalPrice: 74.99, salePrice: 22.49, discount: 70, image: women_jean13, colors: ['navy'] },
  { id: 14, name: "Mom Jeans", originalPrice: 62.99, salePrice: 18.89, discount: 70, image: women_jean14, colors: ['denim blue'] },
  { id: 15, name: "Low-Rise Jeans", originalPrice: 59.99, salePrice: 17.99, discount: 70, image: women_jean15, colors: ['grey'] },
  { id: 16, name: "Tapered Leg Jeans", originalPrice: 64.99, salePrice: 19.49, discount: 70, image: women_jean16, colors: ['blue', 'black'] }
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


const Women_jeans = () => {
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
        <div className="women-tshirt-title">Jeans</div>

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

export default Women_jeans;