import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from './Footer';

import accessories_bag1 from '../assets/bag1.webp';
import accessories_bag2 from '../assets/bag2.webp';
import accessories_bag3 from '../assets/bag3.webp';
import accessories_bag4 from '../assets/bag4.webp';
import accessories_bag5 from '../assets/bag5.webp';
import accessories_bag6 from '../assets/bag6.webp';
import accessories_bag7 from '../assets/bag7.jpg';
import accessories_bag8 from '../assets/bag8.jpg';
import accessories_bag9 from '../assets/bag9.jpg';
import accessories_bag10 from '../assets/bag10.jpg';
import accessories_bag11 from '../assets/bag11.jpg';
import accessories_bag12 from '../assets/bag12.jpg';
import accessories_bag13 from '../assets/bag13.jpg';
import accessories_bag14 from '../assets/bag14.jpg';
import accessories_bag15 from '../assets/bag15.jpg';
import accessories_bag16 from '../assets/bag16.jpg';
import accessories_bag17 from '../assets/bag17.jpg';
import accessories_bag18 from '../assets/bag18.jpg';
import accessories_bag19 from '../assets/bag19.jpg';
import accessories_bag20 from '../assets/bag20.jpg';
import accessories_bag21 from '../assets/bag21.jpg';
import accessories_bag22 from '../assets/bag22.jpg';
import accessories_bag23 from '../assets/bag23.jpg';
import accessories_bag24 from '../assets/bag24.jpg';
import accessories_bag25 from '../assets/bag25.jpg';
import accessories_bag26 from '../assets/bag26.jpg';
import accessories_bag27 from '../assets/bag27.jpg';
import accessories_bag28 from '../assets/bag28.jpg';
import accessories_bag29 from '../assets/bag29.jpg';


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
  { id: 1, name: "Classic Leather Tote", originalPrice: 89.99, salePrice: 62.99, discount: 30, image: accessories_bag1, colors: ['black', 'brown'] },
  { id: 2, name: "Canvas Shoulder Bag", originalPrice: 59.99, salePrice: 41.99, discount: 30, image: accessories_bag2, colors: ['beige', 'green'] },
  { id: 3, name: "Mini Crossbody Bag", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: accessories_bag3, colors: ['pink', 'white'] },
  { id: 4, name: "Chain Strap Clutch", originalPrice: 69.99, salePrice: 48.99, discount: 30, image: accessories_bag4, colors: ['black', 'gold'] },
  { id: 5, name: "Vintage Satchel Bag", originalPrice: 74.99, salePrice: 52.49, discount: 30, image: accessories_bag5, colors: ['brown'] },
  { id: 6, name: "Quilted Shoulder Bag", originalPrice: 64.99, salePrice: 45.49, discount: 30, image: accessories_bag6, colors: ['white', 'black'] },
  { id: 7, name: "Round Woven Bag", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: accessories_bag7, colors: ['tan'] },
  { id: 8, name: "Nylon Backpack", originalPrice: 69.99, salePrice: 48.99, discount: 30, image: accessories_bag8, colors: ['black', 'grey'] },
  { id: 9, name: "Faux Fur Handbag", originalPrice: 59.99, salePrice: 41.99, discount: 30, image: accessories_bag9, colors: ['white', 'pink'] },
  { id: 10, name: "Geometric Print Tote", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: accessories_bag10, colors: ['multi'] },
  { id: 11, name: "Wristlet Pouch", originalPrice: 34.99, salePrice: 24.49, discount: 30, image: accessories_bag11, colors: ['red', 'black'] },
  { id: 12, name: "Studded Sling Bag", originalPrice: 57.99, salePrice: 40.59, discount: 30, image: accessories_bag12, colors: ['black', 'silver'] },
  { id: 13, name: "Transparent Handbag", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: accessories_bag13, colors: ['clear', 'white'] },
  { id: 14, name: "Bamboo Handle Tote", originalPrice: 65.99, salePrice: 46.19, discount: 30, image: accessories_bag14, colors: ['beige'] },
  { id: 15, name: "Mini Backpack Purse", originalPrice: 69.99, salePrice: 48.99, discount: 30, image: accessories_bag15, colors: ['blue', 'black'] },
  { id: 16, name: "Elegant Clutch", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: accessories_bag16, colors: ['silver', 'gold'] },
  { id: 17, name: "Woven Straw Bag", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: accessories_bag17, colors: ['tan', 'white'] },
  { id: 18, name: "Casual Hobo Bag", originalPrice: 64.99, salePrice: 45.49, discount: 30, image: accessories_bag18, colors: ['grey', 'black'] },
  { id: 19, name: "Croc Embossed Bag", originalPrice: 79.99, salePrice: 55.99, discount: 30, image: accessories_bag19, colors: ['green', 'brown'] },
  { id: 20, name: "Printed Canvas Tote", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: accessories_bag20, colors: ['white', 'navy'] },
  { id: 21, name: "Belt Bag", originalPrice: 34.99, salePrice: 24.49, discount: 30, image: accessories_bag21, colors: ['black', 'red'] },
  { id: 22, name: "Messenger Bag", originalPrice: 59.99, salePrice: 41.99, discount: 30, image: accessories_bag22, colors: ['brown', 'blue'] },
  { id: 23, name: "Bow Accent Purse", originalPrice: 47.99, salePrice: 33.59, discount: 30, image: accessories_bag23, colors: ['pink', 'white'] },
  { id: 24, name: "Soft Tote Bag", originalPrice: 62.99, salePrice: 44.09, discount: 30, image: accessories_bag24, colors: ['blue', 'black'] },
  { id: 25, name: "Crescent Shoulder Bag", originalPrice: 58.99, salePrice: 41.29, discount: 30, image: accessories_bag25, colors: ['white', 'brown'] },
  { id: 26, name: "Leather Bucket Bag", originalPrice: 74.99, salePrice: 52.49, discount: 30, image: accessories_bag26, colors: ['black'] },
  { id: 27, name: "Sequin Evening Bag", originalPrice: 69.99, salePrice: 48.99, discount: 30, image: accessories_bag27, colors: ['silver', 'gold'] },
  { id: 28, name: "Boho Fringed Bag", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: accessories_bag28, colors: ['brown', 'tan'] },
  { id: 29, name: "Patchwork Shoulder Bag", originalPrice: 55.99, salePrice: 39.19, discount: 30, image: accessories_bag29, colors: ['multi'] }
];


const Accessories_bag = () => {
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
        <div className="women-tshirt-title">Bag</div>

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
      <div className="Footer">  
        <Footer />
      </div>
    </div>
    
  );
};

export default Accessories_bag;